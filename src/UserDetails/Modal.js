import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData, updateComplete } from "./userDetailsSlice";

const Modal = ({ isOpen, onClose, selectedData }) => {
    // if (!isOpen) return null;

    const [singleData, setSingleData] = useState({});
    const [allData, setAllData] = useState([]);
    const userData = useSelector(state => state.user.data);
    console.log('from modal---------------->',userData);
    const dispatch = useDispatch();

    useEffect(() => {
        setAllData(userData);
        let [editableData] = userData.filter((item) => item.id === selectedData);
        setSingleData(editableData);
    }, [])
    const handleUpdate = (e) => {
        const newValue = e.target.value;
        console.log("newValue newValue=======================>", newValue);
        if (selectedData) {
            setSingleData({ ...singleData, [e.target.name]: e.target.value });
        }
    }

    const handleSavedData = (e) => {
        e.preventDefault();
        const id = singleData?.id;
        const userIndexToUpdate = allData.findIndex((item) => item.id === id);
        console.log("userIndexToUpdate=======================>", userIndexToUpdate);
        const updatedUsers = [
            ...allData.slice(0, userIndexToUpdate),
            singleData,
            ...allData.slice(userIndexToUpdate + 1),
          ];
        console.log("updatedUser singleData after slice =======================>", updatedUsers);
        dispatch(updateData(updatedUsers));
        dispatch(updateComplete(true));
    }
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 500,
                    width: 500,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    textAlign: "left"
                }}
            >
                <form onSubmit={(e) => handleSavedData(e)}>
                    <label>Name: </label><input value={singleData.name || ''} name="name" onChange={(e) => handleUpdate(e)} /><br />
                    <label>User Name: </label><input value={singleData.username} name="username" onChange={(e) => handleUpdate(e)} /><br />
                    <label>Email: </label><input value={singleData.email} name="email" onChange={(e) => handleUpdate(e)} /><br />
                    <button type="submit"> Submit </button>
                </form>
            </div>
            {/* <button onClick={setIsOpen(false)}>Cancel</button> */}
        </div>
    );
};

export default Modal;