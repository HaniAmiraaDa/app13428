import React, {useState } from "react";

function AboutCard(props) {
  const [buttonText, setButtonText] = useState("Click me!");

  const handleClick = () => {
    setButtonText("You clicked!");
  };

  return (
    <div className="col-md-6 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="profile"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.nim}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutText(props) {
  return (
    <div className="col-md-6 py-5">
      <h3 className="card-title">{props.paragraf}</h3>
      <p className="card-text">{props.paragraf1}</p>
    </div>
  );
}

function About() {
  return (
    <div className="container-fluid">
      <div className="container">
        <b><center><h1>PROFIL</h1></center></b>
      </div>
      
      <div className="container py-5">
        <div className="row">
          <AboutText
            paragraf="Hello, Semua!"
            paragraf1="Saya mahasiswa Aktif semester 6 Program Studi S1 Teknik Informatika Universitas Dian Nuswantoro Angkatan 2021. Saya 
                      memiliki minat dan antusiasme tinggi dalam bidang pengembangan perangkat lunak dan teknologi informasi. Memiliki 
                      kemampuan dalam pemrograman dan pengembangan web menggunakan berbagai bahasa pemograman (php, java, html, css, 
                      phyton, C++, javascript), Saya memiliki ketertarikan pada Front-End Developer dan UI/UX. Saya juga memiliki kemampuan dalam 
                      menganalisis dan merancang sistem informasi yang efektif dan efisien. Selain itu saya adalah seseorang yang disiplin, memiliki 
                      komunikasi yang baik, memiliki kemampuan kerja tim yang kuat, dan siap berkontribusi dalam proyek-proyek yang menantang."
          />
          <AboutCard
            image={`${process.env.PUBLIC_URL}/images/hani.jpeg`}
            name="Hani Amira Damayanti"
            nim="A11.2021.13428"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
