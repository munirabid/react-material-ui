import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch() {
  return (
    <Paper
      component="form"
      sx={{ p: "0px 1px", display: "flex", alignItems: "center", width: 200 }}
    >
      <IconButton type="submit" sx={{ p: "0px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
