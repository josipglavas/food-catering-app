const API_KEY = process.env.API_KEY;

export const verifyAPIKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === API_KEY) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
