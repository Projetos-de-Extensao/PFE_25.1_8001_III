import React from "react";

function Banner() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Encontre sua vibe musical!!</h1>
                    <button className="btn">Reserve Agora</button>
                </div>
                <img src="/src/Rectangle 5.png" alt="homem com microfone" className="hero-image" />
            </div>
        </section>
    );
}

export default Banner;