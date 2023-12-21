import express from "express";
import {
    getBorrowroomAudit,
    createBorrowroomAudit,
    updateBorrowroomAudit,
    deleteBorrowroomAudit,
    getBorrowroomByIdAudit,
    checkRoomAvailabilityAudit
    
   
} from "../controllers/BorrowroomAudit.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/BorrowroomAudit',verifyUser,getBorrowroomAudit);
router.post('/BorrowroomAudit',verifyUser,createBorrowroomAudit);
router.patch('/BorrowroomAudit/:id',verifyUser,updateBorrowroomAudit);
router.delete('/BorrowroomAudit/:id',verifyUser,deleteBorrowroomAudit);
router.get('/BorrowroomByIdAudit/:id',verifyUser,getBorrowroomByIdAudit);
router.post('/checkRoomAvailabilityAudit',checkRoomAvailabilityAudit);



export default router;