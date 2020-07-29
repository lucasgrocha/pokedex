import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = evt.target.value.toLowerCase();
    setSearchTerm(formatted);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={searchTerm}
          placeholder="Pokemon's name or number"
          onChange={handleUserInput}
        />
        <InputGroup.Append>
          <Link
            className="btn btn-primary"
            to={`details/${searchTerm}`}
            onClick={() => sessionStorage.removeItem("last_page")}
          >
            Search
          </Link>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Search;
