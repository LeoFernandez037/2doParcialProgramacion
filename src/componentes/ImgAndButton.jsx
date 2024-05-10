import React from "react";
import "./ImgAndButton.css";

const ImgAndButton = () => {
  return (
    <div>
      <div className="contenedorImagen">
        <img
          src="https://i.ibb.co/S6LtvqL/8bed0ee79117e6d26de911a4ac519346.jpg"
          alt="imagen no encontrada"
        />
      </div>
      <button>
        <img
          className="imgbutton"
          src="https://th.bing.com/th/id/OIP.pWqpWwU1a7923Xm1-2iisAHaGh?rs=1&pid=ImgDetMain"
          alt="imagen noencontrada"
        />
      </button>
    </div>
  );
};

export default ImgAndButton;
