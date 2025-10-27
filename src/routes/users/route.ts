import { Router } from "express";
import {
  changePassword,
  edit,
  getAllUsers,
  getById,
  login,
  logout,
  register,
  softDelete,
} from "../../controller/user.controller";
import { protect } from "../../middleware/AuthMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", getAllUsers);
router.get("/:id", getById);

router.put("/edit/:id", edit);
router.put("/change-password", protect, changePassword);
router.delete("/delete/:id", softDelete);

export default router;
