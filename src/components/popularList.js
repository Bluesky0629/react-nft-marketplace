import React, { Fragment } from "react";
import PopularItem from "./populatItem";
import { useState } from "react";
import crytoArr from "../core/allFunctions";

let popular_datas = require('../assets/data/popular_data.json');

const PopularList = () => {
    const [selectedCryptoID, setSelectdCryptoId] = useState(0);
    const [crypto, setCryto] = useState("solana");
    const [creteTime, setCreteTime] = useState(1000);

    const compare = (creatDate) => {
        let creatData = new Date(creatDate);
        let currentDate = new Date();
        let intervalDay = (currentDate - creatData) / (1000 * 60 * 60);
        return Math.ceil(intervalDay);
    }

    const handleChangeTime = (e) => {
        setCreteTime(e.target.value);
    }
    return (
        <Fragment>
            <div className="popular_collection">
                <div className="popular_header">
                    <div style={{ fontSize: "35px", fontWeight: "bold" }}>Popular Collection</div>
                    <select className="selectpicker  show-tick dropup" id="pop_select" onChange={() => handleChangeTime}>
                        <option value="1000">All</option>
                        <option value="1">Last 1 hours</option>
                        <option value="6">Last 6 hours</option>
                        <option value="24">Last 24 hours</option>
                        <option value="168">Last 7 days</option>
                        <option value="720">Last 30 days</option>
                    </select>
                 
                    <div className="cryto_content">
                        {
                            crytoArr.map((item, index) => (
                                <div key={index}>
                                    <button
                                        className="cryto_btn"
                                        onClick={() => {
                                            setSelectdCryptoId(index);
                                            setCryto(item.crypto);
                                        }}
                                        style={{ backgroundColor: selectedCryptoID == index ? 'rgb(228, 37, 117)' : 'transparent' }}
                                    >
                                        {item.img ? item.img : ""}
                                        <span>&nbsp;</span>
                                        {item.crypto ? item.crypto : item}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="btnSeeAll">
                        <button style={{ backgroundColor: "transparent", border: "0px", color: "white" }}>
                            See all
                        </button>
                    </div>
                </div>
                <div className="pop_body">
                    <PopularItem crytoName={crypto} createTime = {creteTime}/>
                </div>
            </div>
        </Fragment>
    )

}
export default PopularList;