// Mimic auth

const isAuthenticated = (req, res, next) => {
  const isLogined = true;

  if (isLogined) {
    next();
  } else {
    res.json({
      message: "User not authenticated",
    });
  }
};

module.exports = isAuthenticated;
