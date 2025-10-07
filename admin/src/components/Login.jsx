import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      // console.log(email, password)
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      // console.log(response);
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const fillDemoCredentials = () => {
    setEmail("a@gmail.com");
    setPassword("Ab1234");
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

        {/* Demo Credentials Section */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">
            Demo Credentials
          </h3>
          <p className="text-xs text-blue-600 mb-2">
            Use these credentials to access the admin panel:
          </p>
          <p className="text-xs text-gray-600">
            <strong>Email:</strong> a@gmail.com
          </p>
          <p className="text-xs text-gray-600 mb-2">
            <strong>Password:</strong> Ab1234
          </p>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            Fill Demo Credentials
          </button>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              value={email}
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              value={password}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
