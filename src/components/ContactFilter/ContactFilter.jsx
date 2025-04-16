import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setNameFilter } from "../../redux/filtersSlice"; 
import style from './ContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter); 

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value)); 
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Filter by name"
      />
    </div>
  );
};

export default ContactFilter;
