import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Icon1 } from '../assets/img/icon/icon1.svg';
import { ReactComponent as Icon2 } from '../assets/img/icon/icon2.svg';
import { ReactComponent as Icon3 } from '../assets/img/icon/icon3.svg';
import { ReactComponent as Icon4 } from '../assets/img/icon/icon4.svg';
import { ReactComponent as Icon5 } from '../assets/img/icon/icon5.svg';
import { ReactComponent as Icon6 } from '../assets/img/icon/icon6.svg';
import { ReactComponent as Icon7 } from '../assets/img/icon/icon7.svg';
import { ReactComponent as Icon8 } from '../assets/img/icon/icon8.svg';
import { ReactComponent as Icon9 } from '../assets/img/icon/icon9.svg';

import { ReactComponent as Blog } from '../assets/img/icon/blog.svg';
import { ReactComponent as Discord } from '../assets/img/icon/discord.svg';
import { ReactComponent as TickTok } from '../assets/img/icon/ticktok.svg';
import { ReactComponent as Youtube } from '../assets/img/icon/youtube.svg';
import { ReactComponent as Twitter } from '../assets/img/icon/twitter.svg';
import { ReactComponent as Instagram } from '../assets/img/icon/instagram.svg';




export default ({ toggleMenu }) => {

  useEffect(() => {
    const accordionTitles = document.querySelectorAll(".accordionTitle");

    accordionTitles.forEach((accordionTitle) => {
      accordionTitle.addEventListener("click", () => {
        if (accordionTitle.classList.contains("is-open")) {
          accordionTitle.classList.remove("is-open");
        } else {
          const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
          accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
            accordionTitleWithIsOpen.classList.remove("is-open");
          });
          accordionTitle.classList.add("is-open");
        }
      });
    });
  }, [])
  return (
    <div className="sidemenu">
      <div className="sidemenu-content">
        <div className="sidemenu-wallet">
          <NavLink to="/" onClick={toggleMenu} >
            <button className="wallet-btn">
              Connect Wallet
            </button>
          </NavLink>
        </div>
        <div>
          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon1 />
              <span style={{ width: "5px" }}></span>
              <div>Marketplace</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/popular-collection" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Popular collection
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Drop calender
                </div>
              </NavLink>
              <NavLink to="/auctions" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Auctions
                </div>
              </NavLink>
            </div>
          </div>
          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon2 />
              <span style={{ width: "5px" }}></span>
              <div>Insights</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/sample" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Staus
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  My watchlist
                </div>
              </NavLink>
            </div>
          </div>
          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon3 />
              <span style={{ width: "5px" }}></span>
              <div>Magic Eden List</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/sample" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Whatchlist
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  About
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Creat a whitelist
                </div>
              </NavLink>
            </div>
          </div>
          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon4 />
              <span style={{ width: "5px" }}></span>
              <div>Lanchpad</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/sample" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Lanches
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  About
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Apply for lanchpad
                </div>
              </NavLink>
            </div>
          </div>

          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon5 />
              <span style={{ width: "5px" }}></span>
              <div>Eden games</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/sample" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Homes
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  All Games
                </div>
              </NavLink>
            </div>
          </div>

          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon6 />
              <span style={{ width: "5px" }}></span>
              <div>Creators</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/sample" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Apply for listing
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Apply for whitelist
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Apply for launchpad
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Apply for auctions
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Submit announcement
                </div>
              </NavLink>
            </div>
          </div>

          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon7 />
              <span style={{ width: "5px" }}></span>
              <div>Support</div>
            </div>
          </div>

          <div className="accordionItem">
            <div className="accordionTitle">
              <Icon8 />
              <span style={{ width: "5px" }}></span>
              <div>Resouce</div>
            </div>
            <div className="accordionContent">
              <NavLink to="/sample" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  About Magic Eden
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  MagicDao
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Trust & Safety
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Platform status
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  Careers
                </div>
              </NavLink>
              <NavLink to="/dropcalender" className="accordion-link" onClick={toggleMenu} >
                <div className="content-item">
                  API
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-panel">
        <div className="contact-row">
          <div className="contact-item">
            <Blog />
            <span className="span">Blog</span>
          </div>
          <div className="contact-item">
            <Discord />
            <span className="span">Discord</span>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-item">
            <TickTok />
            <span className="span">TickTok</span>
          </div>
          <div className="contact-item">
            <Youtube />
            <span className="span">Youtube</span>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-item">
            <Twitter />
            <span className="span">Twitter</span>
          </div>
          <div className="contact-item">
            <Instagram />
            <span className="span">Instagram</span>
          </div>
        </div>
      </div>
    </div >
  )
};
