// Server domain
export const DOMAIN = "127.0.0.1:8000";
/**
 * These are all possible actions that could happen in our application.
 * A Redux action would dispatch these and the reducer will update the global state
 * accordingly.
 */
// Auth types
export const USER_LOADED = "USER_LOADED";
export const USER_LOADING = "USER_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const PASSWORD_EMAIL_SENT = "PASSWORD_EMAIL_SENT";
export const PASSWORD_RESET_COMPLETE = "PASSWORD_RESET_COMPLETE";
export const RESET_PASSWORD_LOADING = "RESET_PASSWORD_LOADING";

// Auth interfaces
export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: { id: number; username: string; email: string } | null;
  password_email_sent: boolean;
  new_password_set: boolean;
  isResetLoading: boolean;
}

// Auth action types
export interface IAuthAction {
  type:
    | typeof USER_LOADING
    | typeof USER_LOADED
    | typeof LOGIN_SUCCESS
    | typeof LOGOUT_SUCCESS
    | typeof AUTH_ERROR
    | typeof LOGIN_FAIL
    | typeof REGISTER_SUCCESS
    | typeof PASSWORD_EMAIL_SENT
    | typeof PASSWORD_RESET_COMPLETE
    | typeof RESET_PASSWORD_LOADING
    | typeof REGISTER_FAIL;
  payload?: any;
}

// Redux global state interface
export interface IRootState {
  auth: IAuthState;
}

// Header JSON interface
export interface ConfigTypes {
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
}

// Register credentials interface
export interface CredentialTypes {
  username: string;
  password: string;
  email: string;
}