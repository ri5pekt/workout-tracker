export interface User {
  id: string;
  email: string;
  name: string;
  heightCm?: number;
  dateOfBirth?: string;
  role?: string;
  createdAt?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface ApiError {
  error: string;
  message: string | any[];
}
