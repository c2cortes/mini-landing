import React from "react";
import Slider from "react-slick";
import { isMobile } from "react-device-detect";

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 4,
        arrows: isMobile ? false : true,
        slidesToScroll: 1
    };
    return (
        <div className="carousel-wrapper">
            <h2>Productos Destacados</h2>
            <Slider {...settings}>
                <div className="grid-item">
                    <img className="image-carrusel" src="images/products/32016892-Rosado-14-1513_1.jpeg" alt="32016892-Rosado-14-1513_1"/>
                    <p className="text-carusel">Sandalia Casual Mujer</p>
                    <p className="old-price">Antes: $350.990</p>
                    <div className="actual-price">
                        <p className="best-price">Ahora: $250.000</p>
                    </div>
                    <button className="see-more">Ver Más</button>
                </div>
                <div className="grid-item">
                    <img className="image-carrusel" src="images/products/32124182-Gris-Jaspe_1.jpeg" alt="32124182-Gris-Jaspe_1"/>
                    <p className="text-carusel">Tenis Casuales Hombre</p>
                    <p className="old-price">Antes: $580.900</p>
                    <div className="actual-price">
                        <p className="best-price">Ahora: $399.900</p>
                    </div>
                    <button className="see-more">Ver Más</button>
                </div>
                <div className="grid-item">
                    <img className="image-carrusel" src="images/products/32124192-Rosado-14-1907_1.jpeg" alt="32124192-Rosado-14-1907_1"/>
                    <p className="text-carusel">Sandalia Casual Hombre</p>
                    <p className="old-price">Antes: $230.000</p>
                    <div className="actual-price">
                        <p className="best-price">Ahora: $150.000</p>
                    </div>
                    <button className="see-more">Ver Más</button>
                </div>
                <div className="grid-item">
                    <img className="image-carrusel" src="images/products/41333881-Azul-19-4024_1.jpeg" alt="41333881-Azul-19-4024_1"/>
                    <p className="text-carusel">Tenis Causules Mujer</p>
                    <p className="old-price">Antes: $450.990</p>
                    <div className="actual-price">
                        <p className="best-price">Ahora: $350.000</p>
                    </div>
                    <button className="see-more">Ver Más</button>
                </div>
                <div className="grid-item">
                    <img className="image-carrusel" src="images/products/51339002-Rosado-12-1304_1.jpeg" alt="51339002-Rosado-12-1304_1"/>
                    <p className="text-carusel">Tenis Causules Mujer</p>
                    <p className="old-price">Antes: $450.990</p>
                    <div className="actual-price">
                        <p className="best-price">Ahora: $350.000</p>
                    </div>
                    <button className="see-more">Ver Más</button>
                </div>
                <div className="grid-item">
                    <img className="image-carrusel" src="images/products/51339041-Verde-17-5528_1.jpeg" alt="51339041-Verde-17-5528_1"/>
                    <p className="text-carusel">Tenis Causules Mujer</p>
                    <p className="old-price">Antes: $450.990</p>
                    <div className="actual-price">
                        <p className="best-price">Ahora: $350.000</p>
                    </div>
                    <button className="see-more">Ver Más</button>
                </div>
            </Slider>

        </div>
    );
}