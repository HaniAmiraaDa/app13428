// src/Pages/Home.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import InfoCard from "../Components/InfoCard"; // Adjusted import path

function Home() {
  return (
    <div>
      <center><h1>Selamat Datang Di Website Hani</h1></center>
      <div className="container-fluid mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/selamatdatang.jpg`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Terimakasih Sudah Datang di HaniWeb</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/selamatdatang.jpg`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>Terimakasih Sudah Datang di HaniWeb</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <InfoCard 
          title="Tetang Saya?" 
          text=""
          buttonLabel="Klik disini!"
          additionalText="Hani Amira Damayanti (A11.2021.13428)"
        />
        <InfoCard 
          title="Sosial Media" 
          text=""
          buttonLabel="klik disini!"
          additionalText={`instagram: @haniamiraa`}
        />
      </div>
    </div>
  );
}

export default Home;
