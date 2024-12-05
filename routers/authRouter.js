/**
 * User routes
 * host + '/api/auth'
 */
const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidator } = require("../middleware/fieldsValidator");
const { tokenValidator } = require("../middleware/tokenValidator");

const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/AuthController");

const router = Router();

router.post(
  "/create",
  [
    check("name", "El nombres es obligatorio").notEmpty(),
    check("email", "El correo es obligatorio").notEmpty(),
    check("email", "El correo no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    check(
      "password",
      "La contraseña debe tener al menos 6 caracteres"
    ).isLength({ min: 6 }),
    fieldsValidator,
  ],
  createUser
);

router.post(
  "/login",
  [
    check("email", "El correo es obligatorio").notEmpty(),
    check("email", "El correo no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    fieldsValidator,
  ],
  loginUser
);

router.get("/re-token", tokenValidator, revalidateToken);

module.exports = router;
