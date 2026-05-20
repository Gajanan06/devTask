import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/pages.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => { 
    navigate("/profile");
  };

  return (
    <MobileLayout>

      <div className="login-container">

        <div className="login-header">

          <h1>
            Signin to your
            <br />
            PopX account
          </h1>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

        </div>

        <div className="login-form">

          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            text="Login"
            backgroundColor="#CBCBCB"
            textColor="#FFFFFF"
            onClick={handleLogin}
          />

        </div>

      </div>

    </MobileLayout>
  );
};

export default Login;