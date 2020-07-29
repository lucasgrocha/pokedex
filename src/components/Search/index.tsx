import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = evt.target.value.toLowerCase();
    setSearchTerm(formatted);
  };

  const search = () => {
    if (searchTerm.length > 0) {
      navigate(`/details/${searchTerm}`, { replace: false });
      sessionStorage.removeItem("last_page");
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={searchTerm}
          placeholder="Pokemon's name or number"
          onChange={handleUserInput}
          onKeyPress={(evt: any) => evt.key === "Enter" && search()}
        />
        <InputGroup.Append>
          <Button onClick={search}>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Search;
