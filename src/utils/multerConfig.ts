import multer from "multer";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads");
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
 });
