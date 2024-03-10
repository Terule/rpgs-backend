export type jwtPayload = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  imageUrl: string | null;
} | {};

export type jwtSecret = string

export type jwtOptions = {
  expiresIn: string;
}