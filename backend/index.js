import express from "express";
import dotenv from "dotenv";
import cors from  "cors";
import db from "./config/Database.js";
import router from "./routes/IFBorrowRoute.js";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import AuthRoute from "./routes/AuthRoute.js";
import User from "./routes/UserRoute.js";
import IFBorrowRoute from "./routes/IFBorrowRoute.js";
import MBBorrowRoute from "./routes/MBBorrowRoute.js";
import ELBorrowRoute from "./routes/ELBorrowRoute.js";
import AuditBorrowRoute from "./routes/AuditBorrowRoute.js";




dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

try {
    await db.authenticate();
    console.log('Database terhubung..');
    
} catch (error) {
    console.error(error);
    
}
app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(router);
app.use(AuthRoute);
app.use(User);
app.use(IFBorrowRoute);
app.use(MBBorrowRoute);
app.use(ELBorrowRoute);
app.use(AuditBorrowRoute);




app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});

