// src/components/LoginPage/SignUp.jsx
import React, { useState } from "react";
import SharedForm from "./SharedForm";
import SharedLayout from "./SharedLayout";
import TermsAndConditions from "./TermsAndConditions";
import { Box, Link, Typography } from "@mui/material";

const SignUp = () => {
  const [openTerms, setOpenTerms] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleTermsClose = (agree) => {
    setAgreeToTerms(agree);
    setOpenTerms(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!agreeToTerms) {
      alert("You must agree to the terms and conditions before signing up.");
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
    // Add your sign-up logic here
  };

  return (
    <SharedLayout title="Sign up">
      <Box sx={{ width: "100%", maxWidth: "400px" }}>
        <SharedForm
          fields={[
            {
              id: "firstName",
              label: "First Name",
              name: "firstName",
              autoComplete: "given-name",
              autoFocus: true,
              required: true,
            },
            {
              id: "lastName",
              label: "Last Name",
              name: "lastName",
              autoComplete: "family-name",
              required: true,
            },
            {
              id: "email",
              label: "Email Address",
              name: "email",
              autoComplete: "email",
              required: true,
            },
            {
              id: "password",
              label: "Password",
              name: "password",
              autoComplete: "new-password",
              type: "password",
              required: true,
            },
          ]}
          handleSubmit={handleSubmit}
          submitButtonText="Sign Up"
          bottomLinkText="Already have an account? Sign In"
          bottomLinkHref="/login"
          showCheckbox={true}
        />
        <TermsAndConditions
          open={openTerms}
          handleClose={handleTermsClose}
          setOpen={setOpenTerms}
        />
      </Box>
    </SharedLayout>
  );
};

export default SignUp;
