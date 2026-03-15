import React, { useState, type ChangeEvent } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { debounce } from "@/utils/debounce";
import { useSearchParams } from "react-router";

interface SearchFieldProps {
  placeholder?: string;
}

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 260px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.lightGray};
  width: 100%;
  font-size: 16px;
  margin-bottom: 16px;
  outline: none;
  box-shadow: none;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: none;
    border: 0;
  }
`;

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = "Search anime...",
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [value, setValue] = useState(initialQuery);

  const debouncedSetSearchParams = React.useMemo(
    () =>
      debounce((val: string) => {
        setSearchParams({ query: val });
      }, 500),
    [setSearchParams],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedSetSearchParams(e.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-label="Search anime"
        style={{ paddingLeft: "36px" }}
      />
      <FiSearch
        style={{
          position: "absolute",
          left: "10px",
          top: "38%",
          transform: "translateY(-50%)",
          color: "#888",
          pointerEvents: "none",
        }}
        size={18}
        aria-hidden="true"
      />
    </InputContainer>
  );
};

export default SearchField;
