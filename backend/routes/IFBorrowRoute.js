import express from "express";
import {
    getBorrowroomIF,
    createBorrowroomIF,
    createBorrowroomDosenIF,
    createBorrowroomTUIF,
    updateBorrowroomIF,
    deleteBorrowroomIF,
    getBorrowroomByIdIF,
    checkRoomAvailabilityIF
   
} from "../controllers/BorrowroomIF.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/BorrowroomIF',verifyUser,getBorrowroomIF);
router.post('/BorrowroomIF',verifyUser,createBorrowroomIF);
router.post('/BorrowroomDosenIF',verifyUser,createBorrowroomDosenIF);
router.post('/BorrowroomTuIF',verifyUser,createBorrowroomTUIF);
router.patch('/BorrowroomIF/:id',verifyUser,updateBorrowroomIF);
router.delete('/BorrowroomIF/:id',verifyUser,deleteBorrowroomIF);
router.get('/BorrowroomByIdIF/:id',verifyUser,getBorrowroomByIdIF);
router.post('/checkRoomAvailabilityIF',checkRoomAvailabilityIF);



export default router;