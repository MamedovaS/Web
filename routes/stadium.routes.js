const Router = require("express");
const router = new Router();
const stadiumController = require("../controller/stadium.controller")

router.post("/stadium", stadiumController.createStadium);
router.get("/stadium", stadiumController.getAllStadium);
router.get("/stadium/:id", stadiumController.getOneStadium);
router.put("/stadium", stadiumController.updateStadium);
router.delete("/stadium/:id", stadiumController.deleteStadium);
router.get("/stadiumsort", stadiumController.getSortedStadium);

module.exports = router;
