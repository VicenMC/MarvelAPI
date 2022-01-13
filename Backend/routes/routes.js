const express = require("express");
const router = express.Router();

const {
  askCharacters,
  askComics,
  askEvents,
  askSeries,
  askCreators,
  askStories,
} = require("../controllers/controllers.js");
const controller = require("../controllers/controllers.js");

router.route("/characters").get(async (req, res) => {
  try {
    let prueba = await askCharacters();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = [];
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "Characters not found" + e });
  }
});

router.route("/comics").get(async (req, res) => {
  try {
    let prueba = await askComics();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = [];
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "Comics not found" + e });
  }
});
router.route("/creators").get(async (req, res) => {
  try {
    let prueba = await askCreators();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = [];
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "Creators not found" + e });
  }
});
router.route("/events").get(async (req, res) => {
  try {
    let prueba = await askEvents();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = [];
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "Events not found" + e });
  }
});
router.route("/series").get(async (req, res) => {
  try {
    let prueba = await askSeries();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = [];
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "Series not found" + e });
  }
});
router.route("/stories").get(async (req, res) => {
  try {
    let prueba = await askStories();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = [];
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "Stories not found" + e });
  }
});

module.exports = router;
