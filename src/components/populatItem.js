import React from "react";
import { Fragment } from "react";
import { ReactComponent as Check } from "../assets/img/other/pinkcheck.svg";
import crytoArr from "../core/allFunctions";

let popular_datas = require('../assets/data/popular_data.json');


const PopularItem = ({ crytoName, createTime }) => {

    let filterData = [];

    const timeArr = [1, 6, 24, 168, 720];
    let firstTime = 0;
    let secondTime = 0;

    let val = Number(createTime);

    const checkTime1 = (t) => {
        return t < val;
    }


    const calcTime = (creatDate) => {
        let creatData = new Date(creatDate);
        let currentDate = new Date();
        let intervalDay = (currentDate - creatData) / (1000 * 60 * 60);
        return intervalDay;
    }

    if(val === 1){
        secondTime = 1;
    }
    if(val === 10000){
        secondTime = Infinity;
    }
    if (val != 1) {
        firstTime = timeArr.find(checkTime1);
        secondTime = val;
    }

    if (crytoName.toLowerCase() === "show all" && Number(createTime) === 1000) {
        filterData = popular_datas;
    } else if (crytoName.toLowerCase() === "show all") {
        filterData = popular_datas.filter((popular_data) => calcTime(popular_data.time) < secondTime)
    } else {
        filterData = popular_datas.filter(
            (popular_data) =>
                crytoName.toLowerCase() === popular_data.crypto.toLowerCase()
                &&
                calcTime(popular_data.time) < secondTime
        );
    }
    return (
        <Fragment>
            {
                filterData.map((popular, index) => (
                    index < 12 &&
                    <div key={index} className="pop_item">
                        <div className="num_name">
                            <div className="pop_number">{index + 1}</div>
                            <span>&nbsp;</span>
                            <img className="pop_avata" src={popular.avata}>
                            </img>
                            <div className="pop_name_floor">
                                <div className="pop_name">
                                    {popular.name}
                                    <Check />
                                </div>
                                <div className="pop_floor">Floor {popular.floor}</div>
                            </div>
                        </div>
                        <div className="pop_rate_volumn">
                            <div>{popular.rate}%</div>
                            <div style={{ display: "flex" }}>
                                {
                                    crytoArr.filter((c) => c.crypto.toLowerCase() === crytoName.toLowerCase()).map((cc) => (
                                        cc.img
                                    ))
                                }
                                <span>&nbsp;</span>
                                {popular.volume}
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default PopularItem;