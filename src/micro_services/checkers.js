const is_ispam = (text) => {
  // check if text larger than usual
  if (text.length > 100) {
    return true;
  }
  // check if text contains any link
  const re = /https?:\/\//;
  if (re.test(text)) {
    return true;
  }

  // check if it semms base64 encoded
  const re2 = /data:image\/(png|jpg|jpeg|gif);base64,/;
  if (re2.test(text)) {
    return true;
  }
  return false;
};

const is_email = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email)  && !is_ispam(email);
};

const is_good_password = (password) => {
  // password must containt 1 letter and 1 number and the length must be at least 6
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  // if not match tell the reason
  if (!re.test(password)) {
    if (password.length < 8) {
      return {
        error: true,
        message: "Password must be at least 8 characters",
      };
    }
    if (!/[A-Za-z]/.test(password)) {
      return {
        error: true,
        message: "Password must contain at least 1 letter",
      };
    }
    if (!/\d/.test(password)) {
      return {
        error: true,
        message: "Password must contain at least 1 number",
      };
    }
  }
  return {
    error: false,
    message: "great password",
  };
};

module.exports = {
  is_email,
  is_good_password,
};
