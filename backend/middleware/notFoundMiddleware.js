const notFoundMiddleware = (
  req,
  res,
  next
) => {
  res.status(404);
  throw new Error(
    `Route Not Found - ${req.originalUrl}`
  );
};

module.exports = notFoundMiddleware;