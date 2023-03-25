import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../assets/styles/main.scss'
import { Fragment } from "react";

const gallery1 = [
    {
        name: "Name1",
        description: "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        url: "https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://bafkreiheoqxrl5fcrihcjzejcy5a34m64j4cfeuf465mrrepmllofrcjpy.ipfs.nftstorage.link/",
    },
    {
        name: "Name2",
        description: "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        url: "https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://bafkreidjkgeh4rybzsky5ty3i2f2mhw4a54bapdqbggv7sv3snixlt5ag4.ipfs.nftstorage.link/",
    },
    {
        name: "Name3",
        description: "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        url: "https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://bafybeihfz6rtl2cdizn3zsllsfos3nvu4f72nl43lbj3xh6lp7rgjea5r4.ipfs.nftstorage.link/",
    },
    {
        name: "Name4",
        description: "Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.",
        url: "https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://v5.airtableusercontent.com/v1/15/15/1678730400000/aj1yufMW0Zv8kjdaBEvauQ/cSrxtDssvgi0NV_jWbfT_fj0U6J5GW9mdolOE6fiVK797UpB_EN2h8-ve9hUtXjRv7HmQidWDqclpNa0u7BkzA/ZbHFxKfTvzq41CMh5kJTJ_lq9r5ZZiepM1hI7tCCmUQ",
    },
]


const handleDragStart = (e) => e.preventDefault();

const mql = window.matchMedia(`(min-width: 1200px)`);


const Gallery = () => {

    const [isWidth, setIsWidth] = useState(true);
    mql.addListener(() => {
        setIsWidth(mql.matches);
    });
    useEffect(() => {
        isWidth ? setIsWidth(true) : setIsWidth(false)
    }, [])
    const arrgallery = gallery1.map((g, index) => (
        isWidth ?
            <div key={index} className="row">
                <div className="col-xl-5">
                    <div className="name-des">
                        <h1 style={{ fontWeight: "bold" }}>{g.name}</h1>
                        <p>{g.description}</p>
                        <button className="wallet-btn" style={{ marginTop: "20px" }}>
                            Register now
                        </button>
                    </div>
                </div>
                <div className="col-xl-7">
                    <img src={g.url}
                        onDragStart={handleDragStart}
                        role="presentation"
                        className="d-block w-100"
                        style={{ borderRadius: "1rem" }}
                    />
                </div>
            </div>
            :
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={g.url}
                            onDragStart={handleDragStart}
                            role="presentation"
                            className="d-block w-100"
                            style={{ borderRadius: "1rem" }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="name-des">
                        <h1>{g.name}</h1>
                        <div>{g.description}</div>
                        <button className="wallet-btn" style={{ marginTop: "20px" }}>
                            Register now
                        </button>
                    </div>
                </div>
            </div>
    ))

    return (
        <Fragment>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10">
                    <div className="carousel-container">
                        <AliceCarousel
                            mouseTracking
                            items={arrgallery}
                            animationType="slide"
                            autoPlay={true}
                            infinite={true}
                            autoPlayInterval={2000}
                            dotsDisabled={true}
                            indicator={false}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Gallery;




