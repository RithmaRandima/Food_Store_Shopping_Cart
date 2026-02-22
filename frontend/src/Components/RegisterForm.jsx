import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = ({ switchToSignin }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;

    if (!username || !email || !password) {
      toast.error("All Fields Are Required");
      return;
    }
    try {
      await axios.post("http://localhost:5001/api/v1/user/register", user);
      toast.success("Successfully Registred");
      switchToSignin();
    } catch (error) {
      toast.error("Error registering user");
      console.log("Faild to Register User", error);
    }
  };

  return (
    <div className="bg-yellow-600 w-[900px] h-[500px] flex">
      {/* Left Side */}
      <div className="flex-1 bg-blue-400 flex flex-col">
        <h1>Form Section</h1>
        <form onSubmit={handelSubmit}>
          {/* input username */}
          <div className="bg-white m-5">
            <label>username: </label>
            <input
              name={"username"}
              type="text"
              placeholder="Enter Username"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          {/* input email */}
          <div className="bg-white m-5">
            <label>Email: </label>
            <input
              name={"email"}
              type="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          {/* input password */}
          <div className="bg-white m-5">
            <label>username: </label>
            <input
              name={"password"}
              type="text"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          {/* button */}
          <div>
            <button type="submit">Register User</button>
          </div>
        </form>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-red-400 flex items-center justify-center">
        Image Section
      </div>
    </div>
  );
};

export default RegisterForm;
