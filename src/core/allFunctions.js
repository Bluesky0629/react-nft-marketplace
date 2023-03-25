import { ReactComponent as SolanaImg } from "../assets/img/crypto/solana-sol-icon.svg";
import { ReactComponent as EtherirumImg } from "../assets/img/crypto/ethereum4.svg";
import { ReactComponent as PolygonImg } from "../assets/img/crypto/polygon.svg";


const crytoArr = [
    {
        crypto: "Solana",
        img: <SolanaImg style={{ width: "16px", height: "16px", backgroundColor: "#2b2640", borderRadius: "3rem", padding: "0.1rem" }} />
    },
    {
        crypto: "Ethereum",
        img: <EtherirumImg style={{ width: "16px", height: "16px", backgroundColor: "#2b2640", borderRadius: "3rem", padding: "0.1rem" }} />
    },
    {
        crypto: "Polygon",
        img: <PolygonImg style={{ width: "16px", height: "16px", backgroundColor: "#2b2640", borderRadius: "3rem", padding: "0.1rem" }} />
    },
    {
        crypto: "Show all"
    }
];

export default crytoArr;

export const LanchBtnArr = ["Next 7 days", "Comeing soon", "Live"];

export const calcTime = (creatDate) => {
    let creatData = new Date(creatDate);
    let currentDate = new Date();
    let intervalDay = (currentDate - creatData) / (1000 * 60 * 60);
    return intervalDay;
}

export const calcTime2 = (creatDate, symbol) => {
    let creatData = new Date(creatDate);
    let currentDate = new Date();
    let intervalDay = 0;
    if (symbol == 1) {
        intervalDay = (creatData - currentDate);
    } else {
        intervalDay = (creatData - currentDate) / (1000 * 60 * 60);
    }
    return Math.ceil(intervalDay);
}

export const formart_ramaintime = (creatTime) => {
    let firtsTime = new Date();
    let secondTime = new Date(creatTime);
    let remainTime = new Date((secondTime - firtsTime)/1);
    return String(remainTime.getDate() + "d" + " " + remainTime.getHours()+"h" +" "+ remainTime.getMinutes()+"m"); 
}