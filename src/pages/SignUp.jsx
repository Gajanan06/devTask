import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/pages.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "Yes",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleCreateAccount = () => {
    navigate("/profile");
  };

  return (
    <MobileLayout>

      <div className="signup-container">

        <div>

          <div className="signup-header">

            <h1>
              Create your
              <br />
              PopX account
            </h1>

          </div>

          <div className="signup-form">

            <InputField
              label="Full Name*"
              type="text"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
            />

            <InputField
              label="Phone number*"
              type="text"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />

            <InputField
              label="Email address*"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />

            <InputField
              label="Password*"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />

            <InputField
              label="Company name"
              type="text"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
              name="companyName"
            />

            <div className="agency-section">

              <p className="agency-title">
                Are you an Agency?*
              </p>

              <div className="radio-group">

                <label className="radio-label">

                  <input
                    type="radio"
                    name="agency"
                    value="Yes"
                    checked={formData.agency === "Yes"}
                    onChange={handleChange}
                  />

                  Yes

                </label>

                <label className="radio-label">

                  <input
                    type="radio"
                    name="agency"
                    value="No"
                    checked={formData.agency === "No"}
                    onChange={handleChange}
                  />

                  No

                </label>

              </div>

            </div>

          </div>

        </div>

        <Button
          text="Create Account"
          backgroundColor="#6C25FF"
          textColor="#FFFFFF"
          onClick={handleCreateAccount}
          style={{ marginTop: "150px" }}
        />

      </div>

    </MobileLayout>
  );
};

export default Signup;