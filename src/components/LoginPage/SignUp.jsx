// src/components/LoginPage/SignUp.jsx
import React from "react";
import SharedForm from "./SharedForm";
import SharedLayout from "./SharedLayout";
import { Box } from "@mui/material";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
      </Box>
    </SharedLayout>
  );
};

export default SignUp;
