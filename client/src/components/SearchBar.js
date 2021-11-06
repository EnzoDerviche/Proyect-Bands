import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../actions/index";
import { SearchBand, InputSearch, InputSubmit } from "../css/HomeStyles";

export default function SearchBar() {
  const [band, setBand] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByName(band))
  },[band, dispatch])

  return (
    <SearchBand
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(filterByName(band));
        setBand("");
      }}
    >
      <InputSearch
        type="text"
        placeholder="Band..."
        value={band}
        onChange={(e) => setBand(e.target.value)}
      />
      <InputSubmit type="submit" value="Search" />
    </SearchBand>
  );
}