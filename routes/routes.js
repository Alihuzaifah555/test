const express = require('express');
const router = express.Router();
const controller = require('./../controller/controller');
router.post('/addRecord',controller.addRecord);
router.get("/getRecord",controller.getRecord);
router.put("/updateRecord/:id",controller.updateRecord);
router.delete("/deleteRecord/:id",controller.deleteRecord)

router.post("/insertTeacher",controller.addTeacher);
router.get("/mergeRecord",controller.mergRecord);
module.exports =router;