import React from "react";
import "./list.css"; // Importe seu CSS se necessário

const events = [
    {
        img: "/assets/photos/Rectangle 1363.png",
        date: "13 de Ago",
        time: "Dom - 10:00 AM",
        title: "Elements Music and Arts Festival - Domingo",
    },
    {
        img: "/assets/photos/Rectangle 1363-1.png",
        date: "13 de Ago",
        time: "Dom - 10:00 AM",
        title: "Elements Music and Arts Festival - Domingo",
    },
    {
        img: "/assets/photos/Rectangle 1363-2.png",
        date: "13 de Ago",
        time: "Dom - 10:00 AM",
        title: "Elements Music and Arts Festival - Domingo",
    },
    {
        img: "/assets/photos/Rectangle 1361-3.png",
        date: "13 de Ago",
        time: "Dom - 10:00 AM",
        title: "Elements Music and Arts Festival - Domingo",
    },
];

const List = () => (
    <section className="top-picks">
        <div className="container">
            <div className="event-list">
                {events.map((event, idx) => (
                    <div className="event" key={idx}>
                        <img 
                            src={event.img} 
                            alt={`Banner colorido de festival de música e artes chamado Elements Music and Arts Festival - Domingo, data 13 de Ago, horário Dom - 10:00 AM. Ambiente digital de lista de eventos, tom animado e festivo.`} 
                        />
                        <div className="event-details">
                            <p>{event.date}</p>
                            <p>{event.time}</p>
                            <p>{event.title}</p>
                        </div>
                        <div className="event-actions">
                            <div className="btn-picks">
                                <button className="btn btn-outline">Ver Detalhes</button>
                                <button className="btn">Reservar Agora</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="white-background">
                    <button className="btn btn-outline show-more-btn white-background-bottom">
                        Mostrar Mais
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default List;
