import express from "express";
import {
    getBorrowroomMB,
    createBorrowroomMB,
    createBorrowroomDosenMB,
    createBorrowroomTuMB,
    updateBorrowroomMB,
    deleteBorrowroomMB,
    getBorrowroomByIdMB,
    checkRoomAvailabilityMB
   
} from "../controllers/BorrowroomMB.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/BorrowroomMB',verifyUser,getBorrowroomMB);
router.post('/BorrowroomMB',verifyUser,createBorrowroomMB);
router.post('/BorrowroomDosenMB',verifyUser,createBorrowroomDosenMB);
router.post('/BorrowroomTuMB',verifyUser,createBorrowroomTuMB);
router.patch('/BorrowroomMB/:id',verifyUser,updateBorrowroomMB);
router.delete('/BorrowroomMB/:id',verifyUser,deleteBorrowroomMB);
router.get('/BorrowroomByIdMB/:id',verifyUser,getBorrowroomByIdMB);
router.post('/checkRoomAvailabilityMB',checkRoomAvailabilityMB);



export default router;