import React, { Component } from "react";

import About from "../about";
import Client from "../client";
import Footer from "../footer";
import Header from "../header";
import Product from "../product";
import Register from "../register/index";
import Slider from "../slider";

export default function Index() {
  return (
    <div>
      <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div>
      <Header />
      <Slider />
      <Product />
      <About />
      <Client />

      <div id="plant" className="contact_us layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage">
                <h2>
                  <strong className="black"> Contact</strong> Us
                </h2>
                <span style={{ textAlign: "center" }}>
                  available, but the majority have suffered alteration in some
                  form, by injected randomised words which don't look even
                  slightly believable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Register></Register>
      <Footer />
    </div>
  );
}
