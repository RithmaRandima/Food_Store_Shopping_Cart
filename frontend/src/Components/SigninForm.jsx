import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/user/login",
        { email, password },
      );

      console.log(response.data);

      // check if user exists in response
      if (response.data.user) {
        navigate("/home");
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="bg-yellow-600 w-[900px] h-[500px] flex">
      {/* Left Side */}
      <div className="flex-1 bg-blue-400 flex flex-col">
        <form onSubmit={handelSubmit}>
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
            <button type="submit">signIN User</button>
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

export default SigninForm;
