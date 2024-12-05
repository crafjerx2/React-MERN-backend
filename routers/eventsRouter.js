/**
 * User routes
 * host + '/api/events'
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { tokenValidator } = require("../middleware/tokenValidator");

const { fieldsValidator } = require("../middleware/fieldsValidator");

const {
  getEvents,
  saveEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/EventController");
const { isDate } = require("../helpers/isDate");

const router = Router();
router.use(tokenValidator);

router.get("/", getEvents);
router.post(
  "/",
  [
    check("title", "El tiulo es obligatorio").notEmpty(),
    check("start", "La hora inicial es obligatorio").custom(isDate),
    check("end", "La hora final es obligatorio").custom(isDate),
    fieldsValidator,
  ],
  saveEvent
);
router.put(
  "/:id",
  [
    check("title", "El tiulo es obligatorio").notEmpty(),
    check("start", "La hora inicial es obligatorio").notEmpty(),
    check("end", "La hora final es obligatorio").notEmpty(),
    fieldsValidator,
  ],
  updateEvent
);
router.delete("/:id", deleteEvent);

module.exports = router;
