import MobileLayout from "../components/MobileLayout";

import "../styles/pages.css";

const Profile = () => {
  return (
    <MobileLayout>

      <div className="profile-page">

        <div className="profile-header">

          <h2>Account Settings</h2>

        </div>

        <div className="profile-content">

          <div className="profile-info">

            <div className="profile-image-container">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                className="profile-image"
              />

              <div className="camera-icon">
                📷
              </div>

            </div>

            <div className="profile-details">

              <h3>Marry Doe</h3>

              <p>Marry@Gmail.com</p>

            </div>

          </div>

          <div className="profile-description">

            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
              Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
              Dolore Magna Aliquyam Erat, Sed Diam
            </p>

          </div>

        </div>

      </div>

    </MobileLayout>
  );
};

export default Profile;