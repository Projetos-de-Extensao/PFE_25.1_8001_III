import React, { useEffect, useState } from "react";
import "./list.css";

const allEvents = [
    {
        img: "/assets/photos/Rectangle 1363.png",
        date: "2024-06-10",
        category: "alimentos",
        cep: "12345678",
        name: "Feira Gastronômica",
        title: "Feira Gastronômica - Domingo",
        time: "Dom - 10:00 AM",
    },
    {
        img: "/assets/photos/Rectangle 1363-1.png",
        date: "2024-06-12",
        category: "servicos",
        cep: "87654321",
        name: "Workshop Serviços",
        title: "Workshop de Serviços",
        time: "Qua - 14:00",
    },
    {
        img: "/assets/photos/Rectangle 1363-2.png",
        date: "2024-06-15",
        category: "educacao",
        cep: "11223344",
        name: "Palestra Educação",
        title: "Palestra sobre Educação",
        time: "Sab - 09:00",
    },
    {
        img: "/assets/photos/Rectangle 1361-3.png",
        date: "2024-06-20",
        category: "eventos",
        cep: "99887766",
        name: "Show de Rock",
        title: "Show de Rock Nacional",
        time: "Sex - 21:00",
    },
];

const filterEvents = (filters) => {
    return allEvents.filter(ev => {
        if (filters.date && ev.date !== filters.date) return false;
        if (filters.category && ev.category !== filters.category) return false;
        if (filters.cep && ev.cep !== filters.cep) return false;
        if (filters.name && !ev.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
        return true;
    });
};

const List = ({ filters }) => {
    const [results, setResults] = useState(allEvents);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Simula fetch GET /search
        setTimeout(() => {
            setResults(filterEvents(filters || {}));
            setLoading(false);
        }, 500);
    }, [filters]);

    return (
        <section className="top-picks">
            <div className="container">
                <div className="event-list">
                    {loading && <div>Carregando...</div>}
                    {!loading && results.length === 0 && <div>Nenhum resultado encontrado.</div>}
                    {!loading && results.map((event, idx) => (
                        <div className="event" key={idx}>
                            <img 
                                src={event.img} 
                                alt={event.title}
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
};

export default List;
