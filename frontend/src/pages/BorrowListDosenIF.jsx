import React, { useEffect } from "react";
import Layout from "./Layout";
import BorrowList from "../components/BorrowListDosenIF";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const BorrowListIF = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
   
      <BorrowList />
  
  );
};

export default BorrowListIF;
