export interface UserLoginI {
  email: string;
  password: string;
}

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?=.{8,})/;

export interface UserSignInI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
