export const validate = ({ name, email, password }) => {
  const errors = {};
  if (!name) errors.name = "This field is required";

  if (!email) errors.email = "This field is required";

  if (!password) errors.password = "This field is required";
  else if (password.length < 8)
    errors.password = "Password should be longer than 8 characters";

  return errors;
};
