const express = require("express");

const Contact = require("../models/Contact");
const ContactInquiry = require("../models/ContactInquiry");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();


/*
================================================
GET CONTACT DETAILS
PUBLIC
================================================
*/

router.get("/details", async (req, res) => {
  try {
    let contact =
      await Contact.findOne();

    // First time default contact document create
    if (!contact) {
      contact = await Contact.create({});
    }

    res.json({
      success: true,
      data: contact,
    });

  } catch (error) {

    console.error(
      "Get Contact Details Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch contact details",
    });
  }
});


/*
================================================
UPDATE CONTACT DETAILS
ADMIN
================================================
*/

router.put(
  "/details",
  protectAdmin,
  async (req, res) => {
    try {

      const {
        address,
        phone,
        email,
        alternateEmail,
        workingDays,
        workingHours,
        admissionPhone,
        academicPhone,
        generalPhone,
        quickEmail,
      } = req.body;


      let contact =
        await Contact.findOne();


      if (!contact) {

        contact =
          new Contact();

      }


      contact.address =
        address ?? contact.address;

      contact.phone =
        phone ?? contact.phone;

      contact.email =
        email ?? contact.email;

      contact.alternateEmail =
        alternateEmail ??
        contact.alternateEmail;

      contact.workingDays =
        workingDays ??
        contact.workingDays;

      contact.workingHours =
        workingHours ??
        contact.workingHours;

      contact.admissionPhone =
        admissionPhone ??
        contact.admissionPhone;

      contact.academicPhone =
        academicPhone ??
        contact.academicPhone;

      contact.generalPhone =
        generalPhone ??
        contact.generalPhone;

      contact.quickEmail =
        quickEmail ??
        contact.quickEmail;


      await contact.save();


      res.json({
        success: true,
        message:
          "Contact details updated successfully",
        data: contact,
      });

    } catch (error) {

      console.error(
        "Update Contact Details Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update contact details",
      });
    }
  }
);


/*
================================================
SUBMIT CONTACT INQUIRY
PUBLIC
================================================
*/

router.post(
  "/inquiry",
  async (req, res) => {
    try {

      const {
        name,
        email,
        phone,
        queryType,
        message,
      } = req.body;


      if (
        !name ||
        !email ||
        !queryType ||
        !message
      ) {

        return res.status(400).json({
          success: false,
          message:
            "Name, email, query type and message are required",
        });

      }


      const inquiry =
        await ContactInquiry.create({
          name: name.trim(),

          email:
            email.toLowerCase().trim(),

          phone:
            phone
              ? phone.trim()
              : "",

          queryType,

          message:
            message.trim(),

          status: "unread",
        });


      res.status(201).json({
        success: true,
        message:
          "Your enquiry has been submitted successfully",
        data: {
          id: inquiry._id,
        },
      });

    } catch (error) {

      console.error(
        "Contact Inquiry Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to submit enquiry",
      });
    }
  }
);


/*
================================================
GET ALL INQUIRIES
ADMIN
================================================
*/

router.get(
  "/inquiries",
  protectAdmin,
  async (req, res) => {
    try {

      const inquiries =
        await ContactInquiry.find()
          .sort({
            createdAt: -1,
          });


      res.json({
        success: true,
        count: inquiries.length,
        data: inquiries,
      });

    } catch (error) {

      console.error(
        "Get Inquiries Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch inquiries",
      });
    }
  }
);


/*
================================================
GET SINGLE INQUIRY
ADMIN
================================================
*/

router.get(
  "/inquiries/:id",
  protectAdmin,
  async (req, res) => {
    try {

      const inquiry =
        await ContactInquiry.findById(
          req.params.id
        );


      if (!inquiry) {

        return res.status(404).json({
          success: false,
          message:
            "Inquiry not found",
        });

      }


      res.json({
        success: true,
        data: inquiry,
      });

    } catch (error) {

      console.error(
        "Get Inquiry Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch inquiry",
      });
    }
  }
);


/*
================================================
MARK INQUIRY AS READ
ADMIN
================================================
*/

router.put(
  "/inquiries/:id/read",
  protectAdmin,
  async (req, res) => {
    try {

      const inquiry =
        await ContactInquiry.findByIdAndUpdate(
          req.params.id,
          {
            status: "read",
          },
          {
            new: true,
          }
        );


      if (!inquiry) {

        return res.status(404).json({
          success: false,
          message:
            "Inquiry not found",
        });

      }


      res.json({
        success: true,
        message:
          "Inquiry marked as read",
        data: inquiry,
      });

    } catch (error) {

      console.error(
        "Mark Read Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update inquiry",
      });
    }
  }
);


/*
================================================
DELETE INQUIRY
ADMIN
================================================
*/

router.delete(
  "/inquiries/:id",
  protectAdmin,
  async (req, res) => {
    try {

      const inquiry =
        await ContactInquiry.findByIdAndDelete(
          req.params.id
        );


      if (!inquiry) {

        return res.status(404).json({
          success: false,
          message:
            "Inquiry not found",
        });

      }


      res.json({
        success: true,
        message:
          "Inquiry deleted successfully",
      });

    } catch (error) {

      console.error(
        "Delete Inquiry Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete inquiry",
      });
    }
  }
);


module.exports = router;