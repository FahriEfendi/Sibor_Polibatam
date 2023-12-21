import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Users from "./pages/Users";
import BorrowListIF from "./pages/BorrowListIF";
import BorrowListDosenIF from "./pages/BorrowListDosenIF";
import BorrowListMB from "./pages/BorrowListMB";
import BorrowListEL from "./pages/BorrowListEL";
import BorrowListAudit from "./pages/BorrowListAudit";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddBorrowIF from "./pages/AddBorrowIF";
import AddBorrowDosenIF from "./pages/AddBorrowDosenIF";
import AddBorrowTUIF from "./pages/AddBorrowTUIF";
import AddBorrowMB from "./pages/AddBorrowMB";
import AddBorrowDosenMB from "./pages/AddBorrowDosenMB";
import AddBorrowTUMB from "./pages/AddBorrowTUMB";
import AddBorrowEL from "./pages/AddBorrowEL";
import AddBorrowDosenEL from "./pages/AddBorrowDosenEL";
import AddBorrowTUEL from "./pages/AddBorrowTUEL";
import AddBorrowAudit from "./pages/AddBorrowAudit";
import EditBorrowIF from "./pages/EditBorrowIF";
import EditBorrowMB from "./pages/EditBorrowMB";
import EditBorrowEL from "./pages/EditBorrowEL";
import EditBorrowAudit from "./pages/EditBorrowAudit";
import ViewBorrowEL from "./pages/ViewBorrowEL";
import ViewBorrowMB from "./pages/ViewBorrowMB";
import ViewBorrowIF from "./pages/ViewBorrowIF";

import ViewBorrowAudit from "./pages/ViewBorrowAudit";

function App() {
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/daftarpinjamanif" element={<BorrowListIF />} />
          <Route path="/daftarpinjamandosenif" element={<BorrowListDosenIF />} />
          <Route path="/daftarpinjamanmb" element={<BorrowListMB />} />
          <Route path="/daftarpinjamanel" element={<BorrowListEL />} />
          <Route path="/daftarpinjamanaudit" element={<BorrowListAudit />} />
          <Route path="/daftarpinjamanif/add" element={<AddBorrowIF />} />
          <Route path="/daftarpinjamanif/dosen/add" element={<AddBorrowDosenIF />} />
          <Route path="/daftarpinjamanif/tu/add" element={<AddBorrowTUIF />} />
          <Route path="/daftarpinjamanmb/add" element={<AddBorrowMB />} />
          <Route path="/daftarpinjamanmb/dosen/add" element={<AddBorrowDosenMB />} />
          <Route path="/daftarpinjamanmb/tu/add" element={<AddBorrowTUMB />} />
          <Route path="/daftarpinjamanel/add" element={<AddBorrowEL />} />
          <Route path="/daftarpinjamanel/dosen/add" element={<AddBorrowDosenEL />} />
          <Route path="/daftarpinjamanel/tu/add" element={<AddBorrowTUEL />} />
          <Route path="/daftarpinjamanaudit/add" element={<AddBorrowAudit />} />
          <Route path="/daftarpinjamanif/edit/:id" element={<EditBorrowIF />} />
          <Route path="/daftarpinjamanmb/edit/:id" element={<EditBorrowMB />} />
          <Route path="/daftarpinjamanel/edit/:id" element={<EditBorrowEL />} />
          <Route path="/daftarpinjamanaudit/edit/:id" element={<EditBorrowAudit />} />
          <Route path="/daftarpinjamanel/view/:id" element={<ViewBorrowEL />} />
          <Route path="/daftarpinjamanmb/view/:id" element={<ViewBorrowMB />} />
          <Route path="/daftarpinjamanif/view/:id" element={<ViewBorrowIF />} />
          <Route path="/daftarpinjamanaudit/view/:id" element={<ViewBorrowAudit />} />
        </Routes>
      
    </div>
  );
}

export default App;
