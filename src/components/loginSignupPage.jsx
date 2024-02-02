import React, { useState } from "react";
import "./loginSignupPage.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import backgroundImage from "./backgroundimage.png";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const SERVER_URL = "http://localhost:5000";

  const handleAdminAuth = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/verify-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminPassword: adminPassword }),
      });

      const data = await response.json();
      if (data.success) {
        setIsAdminAuth(true);
        setIsLogin(false);
      } else {
        alert("Admin password is incorrect");
      }
    } catch (error) {
      console.error("Error verifying admin password:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Account created successfully");
        // Reset the form or redirect the user as needed
      } else if (data.message === "Username not available") {
        alert(
          `Username "${username}" is not available. Suggestions: ${data.suggestions.join(
            ", "
          )}`
        );
        // Optionally, you can do something with the suggestions, like displaying them to the user
      } else {
        alert("Error creating account");
      }
    } catch (error) {
      console.error("Error registering account:", error);
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={backgroundImage}
              alt="Background"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">QueensLand Health AI</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              {isLogin && !isAdminAuth && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                    Login
                  </MDBBtn>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a
                      href="#!"
                      onClick={() => setIsLogin(false)}
                      style={{ color: "#393f81" }}
                    >
                      Create New Account
                    </a>
                  </p>
                </>
              )}

              {!isLogin && !isAdminAuth && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Admin Password"
                    id="adminPassword"
                    type="password"
                    size="lg"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleAdminAuth}
                  >
                    Verify Admin
                  </MDBBtn>
                </>
              )}

              {!isLogin && isAdminAuth && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleRegister}
                  >
                    Create Account
                  </MDBBtn>
                </>
              )}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default LoginSignupPage;