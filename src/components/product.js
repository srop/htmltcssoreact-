import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US`;

    axios
      .get(url, {
        headers: {
          "x-rapidapi-key": "32c472e5ffmshf20b931d56ba1d3p11c935jsn7f26d3d3d897"
        }
      })
      .then(res => {
        setData(res.data.suggestionGroups[0].suggestions);
        console.log(res.data.suggestionGroups[0].suggestions);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  return (
    <div>
      {" "}
      <div id="plant" className="section  product">
        <div className="container">
          <div className="row">
            <div class="col-md-12 ">
              <div className="titlepage">
                <h2>
                  <strong className="black"> Our</strong> Products
                </h2>
                <span>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected randomised words which don't look even
                  slightly believable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clothes_main section ">
        <div class="container">
          <div class="row">
            {data.map(obj => {
              return (
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div class="sport_product">
                    <figure>
                      <img src="images/basketball.png" alt="img" />
                    </figure>
                    <h3>
                      $
                      <strong class="price_text">
                        {" "}
                        {obj.numberOfResults}{" "}
                      </strong>
                    </h3>
                    <h4>{obj.searchTerm}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
