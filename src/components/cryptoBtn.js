import React from "react";
import { memo } from "react";
import { Fragment } from "react";
import { useState } from "react";

function CryptoBtn({ btnArr }) {
    const [selectdCryptoId, setSelectedCrytoId] = useState(0);
    return (
        <Fragment>
            <div className="cryto_btn-group">
                {
                    btnArr.map((item, index) => (
                        <div key={index}>
                            <button
                                className="cryto_btn"
                                onClick={() => {
                                    setSelectedCrytoId(index);
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
        </Fragment>
    )
}
export default memo(CryptoBtn); 