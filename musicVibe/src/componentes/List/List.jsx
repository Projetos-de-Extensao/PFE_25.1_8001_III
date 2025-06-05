import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom"; // Importação necessária
import "./list.css";
import eventosData from "../../eventos.json";

// Importe as imagens manualmente
import img1 from "../../assets/photos/Rectangle 1363.png";
import img2 from "../../assets/photos/Rectangle 1363-1.png";
import img3 from "../../assets/photos/Rectangle 1363-2.png";
import img4 from "../../assets/photos/Rectangle 1361-3.png";

// Mapeamento de imagens por id do evento
const eventImages = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    // Adicione mais imagens conforme necessário
};

// Função para formatar a data no formato "dd/MM/yyyy"
function formatDate(ev) {
    const [year, month, day] = ev.data.split("-");
    return `${day}/${month}/${year}`;
}

const getAllEvents = () => {
    // Associa cada evento à sua imagem pelo id
    return eventosData.eventos.map(ev => ({
        ...ev,
        img: eventImages[ev.id] || img1, // fallback para img1 se não houver imagem específica
        title: ev.nome,
        date: formatDate(ev),
        weekDay: ev.dia_semana,
        time: `${ev.hora_inicio} - ${ev.hora_fim}`,
        // outros campos conforme necessário
    }));
};

const filterEvents = (events, filters) => {
    return events.filter(ev => {
        if (filters.date && ev.date !== filters.date) return false;
        if (filters.name && !ev.title.toLowerCase().includes(filters.name.toLowerCase())) return false;
        // Adapte para outros filtros se necessário
=======
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
>>>>>>> main
        return true;
    });
};

const List = ({ filters }) => {
<<<<<<< HEAD
    const [results, setResults] = useState(getAllEvents());
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Inicialização da função navigate

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const allEvents = getAllEvents();
            setResults(filterEvents(allEvents, filters || {}));
=======
    const [results, setResults] = useState(allEvents);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Simula fetch GET /search
        setTimeout(() => {
            setResults(filterEvents(filters || {}));
>>>>>>> main
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
<<<<<<< HEAD
                        <div className="event" key={event.id || idx}>
                            <img 
                                src={event.img} 
                                alt={event.title}
                                width={120}
                                height={120}
                            />
                            <div className="event-details">
                                <p>{event.weekDay}, {event.date}</p>
                                <p>{event.time}</p>
                                <p>{event.title}</p>
                                <p>{event.cidade} - {event.estado}</p>
                            </div>
                            <div className="event-actions">
                                <button className="btn btn-outline" onClick={() => navigate('/event')}>Ver Detalhes</button>
                                <button className="btn" onClick={() => navigate('/event')}>Reservar Agora</button>
                            </div>
                        </div>
                    ))}
=======
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
                                <button className="btn btn-outline">Ver Detalhes</button>
                                <button className="btn">Reservar Agora</button>
                            </div>
                        </div>
                    ))}
                    
>>>>>>> main
                </div>
            </div>
        </section>
    );
};

export default List;
