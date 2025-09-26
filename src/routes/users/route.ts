import { Router } from "express";
import {
  changePassword,
  edit,
  getAllUsers,
  login,
  logout,
  register,
  softDelete,
} from "../../controller/user.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", getAllUsers);

router.put("/edit/:id", edit);
router.put("/change-password", changePassword);
router.delete("/delete/:id", softDelete);

export default router;
