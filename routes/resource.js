var express = require("express");
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var melon_controller = require("../controllers/melon");

/// API ROUTE ///
// GET resources base.
router.get("/resource", api_controller.api);

/// melon ROUTES ///

// POST request for creating a melon.
router.post("/resource/melon", melon_controller.melon_create_post);

// DELETE request to delete melon.
router.delete("/resource/melon/:id", melon_controller.melon_delete);

// PUT request to update melon.
router.put("/resource/melon/:id", melon_controller.melon_update_put);

// GET request for one melon.
router.get("/resource/melon/:id", melon_controller.melon_detail);

// GET request for list of all melon items.
router.get("/resource/melon", melon_controller.melon_list);



module.exports = router;