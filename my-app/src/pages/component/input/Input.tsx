"use client";

import React, { useState, useEffect } from "react";

interface InputProps {
  searchProduct: (searchTerm: string) => void;
}

export default function Input(props: InputProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchProduct } = props;

  useEffect(() => {
    const debounce = setTimeout(() => {
      searchProduct(searchTerm);
    }, 300); 

    return () => clearTimeout(debounce);
  }, [searchTerm, searchProduct]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <input
        className="form-control"
        onChange={handleSearch}
        type="text"
        placeholder="Search"
        value={searchTerm}
        style={{ maxWidth: "500px" }} 
      />
    </div>
  );
}