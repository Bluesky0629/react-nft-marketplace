import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import CryptoBtn from "../components/cryptoBtn";
import SetSearch from "../components/dropdown"
import crytoArr from "../core/allFunctions";

export default () => {
  const [creteTime, setCreteTime] = useState(1000);
  const handleChangeTime = (e) => {
    setCreteTime(e.target.value);
  }
  return (
    <Fragment>
      <div className="pop_colPage">
        <div className="pc-header">
          <h1>Popular Collections</h1>
        </div>
        <div className="pc-search">
          <SetSearch />
          <div className="pc-s-btnselect">
            <CryptoBtn btnArr={crytoArr} />
            <div>
              <select className="selectpicker  show-tick dropup" id="pop_select" onChange={() => handleChangeTime}>
                <option value="1000">All</option>
                <option value="1">Last 1 hours</option>
                <option value="6">Last 6 hours</option>
                <option value="24">Last 24 hours</option>
                <option value="168">Last 7 days</option>
                <option value="720">Last 30 days</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="pc-s-result" data-viewport-type="element">
              <table className="table" >
                <caption>List of users</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11111</td>
                    <td>First1111</td>
                    <td>Last1111111</td>
                    <td>Handle1111111</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>22222222222</td>
                    <td>33333333333333</td>
                    <td>4444444444444</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>22222222222</td>
                    <td>33333333333333</td>
                    <td>4444444444444</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>22222222222</td>
                    <td>33333333333333</td>
                    <td>4444444444444</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>22222222222</td>
                    <td>33333333333333</td>
                    <td>4444444444444</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>33333333333333</td>
                    <td>4444444444444</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                  <tr>
                    <td>#</td>
                    <td>First</td>
                    <td>Last</td>
                    <td>Handle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}


