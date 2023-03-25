import React, { Fragment } from "react";

import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ReplayIcon from '@mui/icons-material/Replay';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useEffect } from "react";
import { useState } from "react";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  color: 'white',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: 'white',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      '&:focus': {
        width: '310px',
      },
    },
  },
}));

export default ({ isOpen, toggleSearch }) => (
  <Fragment>
    <div
      className="search-container"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <ReplayIcon className="close-search" onClick={toggleSearch} style={{fontSize:"25px"}}></ReplayIcon>
      <input type="text" placeholder="Search..." />
      <a href="/searchresults" onClick={toggleSearch} className="exec-search" >
        <SearchIcon style={{fontSize:"25px"}}></SearchIcon>
      </a>
    </div>
    <div className={`search-body-blocker ${isOpen ? "open" : ""}`}>&nbsp;</div>
  </Fragment>
);



