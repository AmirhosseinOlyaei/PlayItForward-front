// src/components/LoginPage/SharedForm.jsx
import React from "react";
import {
  TextField,
  Grid,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

const SharedForm = ({
  fields,
  handleSubmit,
  submitButtonText,
  bottomLinkText,
  bottomLinkHref,
  showCheckbox,
  forgotPasswordLink,
}) => {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Grid container spacing={1}>
        {fields.map((field, index) => (
          <Grid item xs={12} sm={field.half ? 6 : 12} key={index}>
            <TextField
              margin="normal"
              required={field.required}
              fullWidth
              id={field.id}
              label={field.label}
              name={field.name}
              autoComplete={field.autoComplete}
              autoFocus={field.autoFocus}
              type={field.type || "text"}
            />
          </Grid>
        ))}
        {showCheckbox && (
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        )}
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {submitButtonText}
      </Button>
      <Grid container justifyContent="space-between">
        {forgotPasswordLink && (
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <Link href={forgotPasswordLink} variant="body2">
              Forgot password?
            </Link>
          </Grid>
        )}
        {bottomLinkText && (
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Link href={bottomLinkHref} variant="body2">
              {bottomLinkText}
            </Link>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SharedForm;
