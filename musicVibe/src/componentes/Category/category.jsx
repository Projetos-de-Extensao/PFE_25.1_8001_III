import React from "react";
import "./category.css"; // Importe o CSS se existir

const categories = [
    { img: "src/Rectangle 1361.png", alt: "Show", label: "Show" },
    { img: "src/Rectangle 1361-1.png", alt: "Rock", label: "Rock" },
    { img: "src/Rectangle 1361-2.png", alt: "Pop", label: "Pop" },
    { img: "src/Rectangle 1361-3.png", alt: "Eletrônica", label: "Eletrônica" },
];

const Category = () => (
    <section className="categories">
        <div className="container">
            <div className="categories-header">
                <h2>Navegue por Categoria</h2>
                <button className="btn btn-outline">Ver Mais</button>
            </div>
            <hr />
            <div className="category-list">
                <button className="arrow">
                    <img src="src/setaEsquerda.svg" alt="Seta Esquerda" />
                </button>
                {categories.map((cat, idx) => (
                    <div className="category" key={cat.alt}>
                        <img src={cat.img} alt={cat.alt} />
                        <p>{cat.label}</p>
                    </div>
                ))}
                <button className="arrow">
                    <img src="src/setaDireita.svg" alt="Seta Direita" />
                </button>
            </div>
        </div>
    </section>
);

export default Category;