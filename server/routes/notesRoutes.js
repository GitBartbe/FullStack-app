const express = require("express");
const router = express.Router();
const notesControler = require("../controllers/notesController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);
router
  .route("/")
  .get(notesControler.getAllNotes)
  .post(notesControler.createNewNote)
  .patch(notesControler.updateNote)
  .delete(notesControler.deleteNote);

module.exports = router;
