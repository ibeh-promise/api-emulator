"use server";

export default async function getAllUsers() {
  // res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  try {
    const users = {
      firstname: "promise",
      lastname: "ibeh",
      age: 17,
      id: 1,
    };
    return users;
  } catch (error) {
    console.log(error);
  }
}
