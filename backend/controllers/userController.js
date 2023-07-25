// @desc    Auth User/set user token
// route    POST /api/v1/users/auth
// @access  Public
const authUser = (req, res) => {
  res.status(200).json({ message: "Auth user" });
};

export { authUser };
