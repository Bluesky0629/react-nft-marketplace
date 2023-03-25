import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Smenu } from '../assets/img/other/smenu.svg';
import Searchbar from "./searchbar";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { ReactComponent as Logo } from '../assets/img/icon/company-logo.svg'

import Img from "../assets/img/other/companyfirelogo.png";
import Img1 from "../assets/img/other/company_logo.png";
import Img2 from "../assets/img/other/logo2.png";
import Img3 from "../assets/img/other/logo3.png";
import Img4 from "../assets/img/other/logo4.png";


const mql = window.matchMedia(`(min-width: 1024px)`);

export default ({ toggleMenu, toggleSearch }) => {
  const [miniSearch, setMiniSearch] = useState(mql.matches);
  const [searchOpen, setSearchOpen] = useState(false);
  mql.addListener(() => {
    setMiniSearch(mql.matches);
  });
  return (
    <>
      <nav id="header" className="headernavbar">
        <div className="menuicon-logo" style={{ display: searchOpen ? "none" : "flex" }}>
          <i className="smenu"
            onClick={toggleMenu}
          ><Smenu /></i>
          <NavLink className="logo-brand" to="/home" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: "white" }}>
              <img src={Img4} style={{ width: "45px" }}></img>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{ fontSize: "24px", fontFamily: "cursive" }}>NFT MAKRET</div>
                <div style={{ fontSize: "10px", fontFamily: "cursive", color: "#ffffffad", alignItems:"strech" }}>Cross-chain NFT plateform</div>
              </div>
            </div>
          </NavLink>
        </div>
        <Searchbar
          isOpen={miniSearch ? true : searchOpen}
          toggleSearch={() => setSearchOpen(false)}
        />
        <div className="searchicon-wallet">
          <div className="serachIcon">
            {
              searchOpen ?
                <ClearIcon style={{ fontSize: "40px" }} onClick={() => { setSearchOpen(!searchOpen) }} />
                :
                <SearchIcon style={{ fontSize: "40px" }} onClick={() => { setSearchOpen(!searchOpen) }} />
            }
          </div>
          <div className="header-wallet">
            <NavLink to="/wallet">
              <button className="wallet-btn">
                Connect Wallet
              </button>
            </NavLink>
          </div>
        </div>
      </nav >
    </>
  );
}
