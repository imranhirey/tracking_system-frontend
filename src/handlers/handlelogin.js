import { is_email, is_good_password } from "../micro_services/checkers";

const handle_login = (data) => {
  let email = data.get("email");
  let password = data.get("password");
  // check if the email is valid
  if (!is_email(email)) {
    return {
      error: true,
      message: "Invalid email",
    };
  }
  // check if the password is valid
  let password_check = is_good_password(password);
  if (password_check.error) {
    return {
      error: true,
      message: password_check.message,
    };
  }
  // if everything is ok
  return {
    error: false,
    message: "Login success",
  };
};

module.exports = {
  handle_login
}