import React from 'react';
import { Fragment } from 'react';
import BetaIcon from "../assets/img/icon/beta.svg";

let trendData = require('../assets/data/trend_data.json');

const TrendItem = () => (
  <Fragment>
    <div className="container">
      <div style={{ display: "flex", flexDirection: "row", marginTop: "50px", alignItems: "center" }}>
        <div className="title">
          Trending announcements 📢
        </div>
        <div style={{ fontSize: "14px", border: "red 1px solid", borderRadius: "0.5rem", padding: "0.1rem 0.2rem" }} >beta</div>
      </div>
      <div className="trend-container">
        {
          trendData.map(trend => (
            <div key={trend.id} className="row trend-item">
              <div className="col-md-3">
                <div className="trenditemname">
                  <img src={trend.img} style={{ width: "30px", borderRadius: "3rem" }}></img>
                  <h6>{trend.name}</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="trend-time">{trend.time}</div>
                <h6>{trend.description}</h6>
              </div>
              <div className="col-md-3 trend-detail">
                <div style={{fontSize:"14px", color:"rgba(228,37,117,1)"}}>View details</div>
                <img src={BetaIcon} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </Fragment>
)

export default TrendItem;