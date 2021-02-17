export const login = async (credentials) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(credentials),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const register = async (user) => {
  try {
    const response = await fetch(`http://localhost:4000/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return response;
  } catch (error) {
    return error;
  }
};
