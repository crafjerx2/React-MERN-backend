const Event = require("../models/Event");

const getEvents = async (req, res) => {
  const events = await Event.find().populate("user", "name");

  res.json({
    ok: true,
    events,
  });
};

const saveEvent = async (req, res) => {
  try {
    const event = new Event(req.body);

    event.user = req.uid;

    const eventSaved = await event.save();

    res.json({
      ok: true,
      event: eventSaved,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      ok: false,
      msg: "Favor contar al administrador",
    });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "El ID es no existe",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes permisos para actualizar este evento",
      });
    }

    const newEvent = { ...req.body, user: uid };
    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    return res.json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Favor buscar el administrador",
    });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "El ID es no existe",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes permisos para actualizar este evento",
      });
    }

    await Event.findByIdAndDelete(event);

    return res.json({
      ok: true,
      msg: "El evento ha sido eliminado con exitos",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Favor buscar el administrador",
    });
  }
};

module.exports = {
  getEvents,
  saveEvent,
  updateEvent,
  deleteEvent,
};
