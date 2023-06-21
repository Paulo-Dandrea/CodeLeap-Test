"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
/* Instruments */
import { useSelector, useDispatch, authSlice } from "@/lib/redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.auth.isLoogedIn);
//   console.log("isLoggedIn: ", isLoggedIn);

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    // Handle login logic and API call here

    // If login is successful, navigate to the home page
    // router.push("/casa");
    console.log("----------");
    dispatch(authSlice.actions.login());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
