// export const validateEmail = (email: unknown) => {
//   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (typeof email !== "string" || !emailRegex.test(email)) {
//     return "Invalid email";
//   }
// };

export const validateEmail = (email: unknown) => {
  return email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const valiatePassword = (password: unknown) => {
  // TODO
};
export const valiatePhone = (phone: unknown) => {
  // TODO
};
