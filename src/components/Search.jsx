import React, { useContext } from "react";
import Select from "react-select";
import { Context } from "./ContextProvider";
import styled from "styled-components";

const Search = () => {
  let { handleOnChange, locationsApi} = useContext(Context);

  return (
    <Box>
      <Select
        classNamePrefix="select"
        placeholder="Search a city..."
        isSearchable="true"
        name="cities"
        options={locationsApi}
        onChange={selectedOption =>
          handleOnChange(selectedOption.label, selectedOption.code, selectedOption.value)
        }
        />
     </Box>
  );
};
export default Search;

const Box = styled.div`
  display : grid;
  margin: 2.5rem 1.5rem;
  width: 80%;
  color: slategrey;

`