const adminMiddleware = (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({
        message: "Admin access only"
      });
    }

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = adminMiddleware;