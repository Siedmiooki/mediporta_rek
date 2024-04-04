import React from "react";
import {Container, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import './selectBox.css'

type SelectBoxProps = {
  sortType: string,
  sortOrder: string,
  setSortType: (v: string) => void,
  setSortOrder: (v: string) => void,
  setPageSize: (v: string) => void
}

export const SelectBox = ({sortType, sortOrder, setSortType, setSortOrder, setPageSize}: SelectBoxProps) => {

  const handlePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
        setPageSize(event.target.value)
    }, 500)
  }

  const handleSortTypeChange = (event: SelectChangeEvent) => {
      setSortType(event.target.value)
  }

  const handleSortOrderChange= (event: SelectChangeEvent) => {
    setSortOrder(event.target.value)
  }



  return (
    <Container className="MainContainer">
      <TextField onChange={handlePageSize} sx={{ m: 1, width: 130}} id="items-no" label="Items No." variant="outlined" size="small" placeholder={"from 1 to 100"} />
      <FormControl sx={{ m: 1, minWidth: 120}} size="small">
        <InputLabel id="select-small-label">sort</InputLabel>
        <Select
          labelId="select-small-label"
          id="select-small"
          value={sortType}
          label="sort"
          onChange={handleSortTypeChange}
        >
          <MenuItem value={"popular"}>popular</MenuItem>
          <MenuItem value={"activity"}>activity</MenuItem>
          <MenuItem value={"name"}>name</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120}} size="small">
        <InputLabel id="select-small-label">order</InputLabel>
        <Select
          labelId="select-small-label"
          id="select-small"
          value={sortOrder}
          label="order"
          onChange={handleSortOrderChange}
        >
          <MenuItem value={"desc"}>desc</MenuItem>
          <MenuItem value={"asc"}>asc</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}