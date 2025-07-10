import React, { useEffect } from 'react';

import './App.css';


function Content() {

  return (
    <>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide" id="page-1">
            <h1 style={{ color: 'white', marginTop: '5%', marginLeft: '5%' }}>Iron-man Page</h1>
            <div className="main">
              <div className="main-img">
                <img src="https://wallpapers.com/images/high/ironman-hd-eapbr8hdyd2i3ys7.webp" alt="not" className="images" />
                <div className="layer layerbottom">
                  <div className="text">Iron-man 1</div>
                </div>
              </div>
              <div className="main-img">
                <img src="https://wallpapers.com/images/high/iron-man-power-blast-b0e3f5e6uv90t5oq.webp" alt="not" className="images" />
                <div className="layer layerbottom">
                  <div className="text">Iron-man 2</div>
                </div>
              </div>
              <div className="main-img">
                <img src="https://wallpapers.com/images/high/iron-man-3-75xi9qunrbuc2jsq.webp" alt="not" className="images" width="100%" />
                <div className="layer layerbottom">
                  <div className="text">Iron-man 3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide" id="page-2">
            <h1 style={{ color: 'white', marginTop: '5%', marginLeft: '5%' }}>Spider Page</h1>
            <div className="main">
              <div className="main-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflzARkohnS0IbiyZ8EkQUkrHhgxkOLXCRKw&s" alt="not" className="images" />
                <div className="layer layerbottom">
                  <div className="text">Amazing Spider-man</div>
                </div>
              </div>
              <div className="main-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G1aJWFuxhkYwULnCT7kCVggbrBhZJWR-7Q&s" alt="not" className="images" />
                <div className="layer layerbottom">
                  <div className="text">No Way Home</div>
                </div>
              </div>
              <div className="main-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VzNqyk0p-B8lXeyZOXOrdb39vMDf91k-vw&s" alt="not" className="images" width="100%" />
                <div className="layer layerbottom">
                  <div className="text">PS-4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide" id="page-3">
            <h1 style={{ color: 'white', marginTop: '5%', marginLeft: '5%' }}>Thanos Bhaiya Page</h1>
            <div className="main">
              <div className="main-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflzARkohnS0IbiyZ8EkQUkrHhgxkOLXCRKw&s" alt="not" className="images" />
                <div className="layer layerbottom">
                  <div className="text">Amazing Spider-man</div>
                </div>
              </div>
              <div className="main-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1G1aJWFuxhkYwULnCT7kCVggbrBhZJWR-7Q&s" alt="not" className="images" />
                <div className="layer layerbottom">
                  <div className="text">No Way Home</div>
                </div>
              </div>
              <div className="main-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VzNqyk0p-B8lXeyZOXOrdb39vMDf91k-vw&s" alt="not" className="images" width="100%" />
                <div className="layer layerbottom">
                  <div className="text">PS-4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default Content;
