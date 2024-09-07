import React, { useState, useEffect } from "react";
import cover from "src/assets/cover.png";
import me from "src/assets/me.jpeg";
import './SecretNet.css'

const SecretNet = () => {
  return(
    <div style={{ minHeight: "80vh", width: "100%", background: "white" }}>
      <div style={{ display: "block", paddingTop: `20%`, backgroundImage: `url(${cover})`, backgroundSize: "cover" }}>
      </div>
      <div style={{ float: "left", display: "inline-block", padding: "12px", marginTop: `-80px`, marginLeft: "20px", background: "white", boxShadow: "#ddc9c98a 6px 6px 9px 2px" }}>
        <img src={me} />
      </div>
      <div className="name" style={{ float: "left", fontSize: "23px", textAlign: "center", padding: "22px 20px" }}>
        Dileep S Nandanam
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  )
}

export default SecretNet;