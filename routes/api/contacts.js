const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId } = require("../../middlewares");

// const schemas = require("../../schemas/contact");
const { schemas } = require("..//../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.deleteContact));

module.exports = router;
