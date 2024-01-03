const { Router } = require("express");
const router = Router();

const {
  renderSignUpForm,
  signUp,
  renderSignInForm,
  signIn,
  logOut,
  enlistUsers,
  addUser,
  deletUser,
  updateView,
  updateUser,
  redirect,

} = require("../controllers/users.controller");

const { isAuthenticated, isAdmin } = require("../helpers/auth");

router.get("/users/signup",isAuthenticated, renderSignUpForm);
router.post("/users/signup",isAuthenticated, signUp);
router.get("/users/signin",  renderSignInForm);
router.post("/users/signin", signIn);
router.get("/users/logout", logOut);

/*********************/
router.get("/administration", enlistUsers);
router.get("/redirect", redirect);
router.post("/administration/add", addUser);
router.delete("/administration/delete/:id", deletUser);
router.get("/administration/update/:id", updateView);
router.put("/administration/update/:id", updateUser);
module.exports = router;
