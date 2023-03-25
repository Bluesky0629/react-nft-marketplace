import React from "react";
import { Route } from "react-router";
import { Routes as Routers } from "react-router-dom";
import Home from "./pages/home";
import PopularCollection from "./pages/popularCollection";
import Sample from "./pages/sample";
import { Web3ReactProvider } from "@web3-react/core";
// import { ethers } from "ethers";


// const POLLING_INTERVAL = 12000;
// const getLibary = (provider) => {
//   const library = new ethers.providers.Web3ReactProvider(provider);
//   library.pollingInterval = POLLING_INTERVAL;
//   return library;
// }

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  // <Web3ReactProvider getLibrary={getLibary}>
    <Routers>
      <Route path="/home" exact element={<Home />} />
      <Route path="/sample" exact element={<Sample />} />
      <Route path="/popular-collection" exact element={<PopularCollection />} />
      <Route path="*" exact element={<NotFound />} />
    </Routers>
  // </Web3ReactProvider>
);

export default Routes;
