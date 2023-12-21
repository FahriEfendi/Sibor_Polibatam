import express from "express";
import {
    getBorrowroomEL,
    createBorrowroomEL,
    createBorrowroomDosenEL,
    createBorrowroomTUEL,
    updateBorrowroomEL,
    deleteBorrowroomEL,
    getBorrowroomByIdEL,
    checkRoomAvailabilityEL
   
} from "../controllers/BorrowroomEL.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/BorrowroomEL',verifyUser,getBorrowroomEL);
router.post('/BorrowroomEL',verifyUser,createBorrowroomEL);
router.post('/BorrowroomDosenEL',verifyUser,createBorrowroomDosenEL);
router.post('/BorrowroomTuEL',verifyUser,createBorrowroomTUEL);
router.patch('/BorrowroomEL/:id',verifyUser,updateBorrowroomEL);
router.delete('/BorrowroomEL/:id',verifyUser,deleteBorrowroomEL);
router.get('/BorrowroomByIdEL/:id',verifyUser,getBorrowroomByIdEL);
router.post('/checkRoomAvailabilityEL',checkRoomAvailabilityEL);



export default router;