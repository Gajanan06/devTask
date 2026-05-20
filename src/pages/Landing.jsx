import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/MobileLayout";
import Button from "../components/Button";

import "../styles/pages.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="landing-container">

        <div className="landing-content">

          <div className="landing-text">

            <h1>Welcome to PopX</h1>

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

          </div>

          <div className="landing-buttons">

            <Button
              text="Create Account"
              backgroundColor="#6C25FF"
              textColor="#FFFFFF"
              onClick={() => navigate("/signup")}
            />

            <Button
              text="Already Registered? Login"
              backgroundColor="#CEBAFB"
              textColor="#1D2226"
              onClick={() => navigate("/login")}
            />

          </div>

        </div>
      </div>
    </MobileLayout>
  );
};

export default Landing;