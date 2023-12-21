import React, { useEffect } from "react";
import FormAddBorrowMB from "../components/FormAddBorrowTUMB";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddBorrowMB = () => {
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
  
      <FormAddBorrowMB />
  
  );
};

export default AddBorrowMB;
