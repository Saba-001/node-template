import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "src/utils";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    res.status(401).json({ message: "Access denied, no token provided" });

  try {
    if (token) {
      const decoded = verifyAccessToken(token);
    }
    // req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
