import React, { useState } from "react";
import { Fragment } from "react";
import SolanaImag from "../assets/img/crypto/solana.png"
import AliceCarousel from 'react-alice-carousel';
import PrevImg from '../assets/img/other/prev.png';
import NextImg from '../assets/img/other/next.png';
import { LanchBtnArr } from "../core/allFunctions";
import { calcTime2, formart_ramaintime } from "../core/allFunctions";

let lanchpadData = require('../assets/data/lanchpad_data.json');

const responsive = {
    0: {
        items: 1,
    },
    1024: {
        items: 3,
        itemsFit: 'contain',
    }
}

const handleDragStart = (e) => e.preventDefault();

const Lanchpad_carousel = () => {
    const [selectdCryptoId, setSelectedCrytoId] = useState(0);
    const [selectName, setSelectName] = useState("Next 7 days");

    let secondTime = 0;
    let filterData = [];

    if (selectName.toLowerCase() === "next 7 days") {
        secondTime = 168;
        filterData = lanchpadData.filter((lanch) => calcTime2(lanch.time) >0 && calcTime2(lanch.time) < secondTime || lanch.time.toLowerCase() === "live");
    } else if (selectName.toLowerCase() === "comeing soon") {
        secondTime = Infinity;
        filterData = lanchpadData.filter((lanch) => calcTime2(lanch.time) < secondTime);
    } else if (selectName.toLowerCase() === "live") {
        filterData = lanchpadData.filter((lanch) => lanch.time.toLowerCase() === selectName.toLowerCase());
    }

    const items = filterData.map((lanch, index) =>
        <div key={index} className="card" id="lanchpad_drops">
            <img src={SolanaImag} className="crto_icon"></img>
            <div className="card-content">
                <img src={lanch.avata}
                    onDragStart={handleDragStart}
                    role="presentation"
                    className="d-block w-100 card_img"
                    style={{ borderRadius: "0.3rem" }}></img>
                <div>{lanch.name}</div>
                <div className="card_name">{lanch.name}</div>
                <span>
                    {
                        lanch.time.toLowerCase() != "live" ?  formart_ramaintime(lanch.time) : lanch.time
                    }
                </span>
            </div>
        </div>
    )
    return (
        <Fragment>
            <div className="lanchpad">
                <div className="lanchpad_header">
                    <div style={{ fontSize: "35px", fontWeight: "bold" }}>Lanchpad drops</div>
                    <div className="lanchpad_content">
                        {
                            LanchBtnArr.map((item, index) => (
                                <div key={index}>
                                    <button
                                        className="cryto_btn"
                                        onClick={() => {
                                            setSelectedCrytoId(index);
                                            setSelectName(item);
                                        }}
                                        style={{ backgroundColor: selectdCryptoId == index ? 'rgb(228, 37, 117)' : 'transparent' }}
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
                <div className="lanchpad_body" id="Lanchpad">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        controlsStrategy="alternate"
                        autoPlay={true}
                        autoWidth
                        disableDotsControls
                        autoPlayInterval={2000}
                        renderPrevButton={() => {
                            return (
                                <img src={PrevImg}
                                    style={{
                                        width: "29px", height: "29px",
                                        position: "absolute",
                                        top: "0px", left: "0px",
                                        backgroundColor: "white",
                                        borderRadius: "3rem"
                                    }} />
                            )
                        }}
                        renderNextButton={() => {
                            return (
                                <img src={NextImg}
                                    style={{
                                        width: "29px", height: "29px",
                                        position: "absolute",
                                        top: "0px", left: "0px",
                                        backgroundColor: "white",
                                        borderRadius: "3rem"
                                    }} />
                            )
                        }}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Lanchpad_carousel;