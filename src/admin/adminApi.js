const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5025";

export const adminLogin = async (
  email,
  password
) => {
  const response = await fetch(
    `${API_URL}/api/admin/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  return response.json();
};


export const getAdmin = async () => {
  const token =
    localStorage.getItem("crcoe_admin_token");

  const response = await fetch(
    `${API_URL}/api/admin/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
};


export const adminLogout = async () => {
  const token =
    localStorage.getItem("crcoe_admin_token");

  try {
    await fetch(
      `${API_URL}/api/admin/logout`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }

  localStorage.removeItem(
    "crcoe_admin_token"
  );

  localStorage.removeItem(
    "crcoe_admin"
  );
};
