import asyncHandler from "express-async-handler";

// @desc    Auth User/set user token
// route    POST /api/v1/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("something went wrong!");
  res.status(200).json({ message: "Auth user" });
});

export { authUser };
