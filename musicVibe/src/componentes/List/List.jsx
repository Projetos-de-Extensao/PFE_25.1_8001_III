import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./list.css";
import eventosData from "../../eventos.json";

// Função para obter o dia da semana a partir da data
function getWeekDay(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'short' };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}



// Mapeia os eventos do JSON para o formato usado na lista
const allEvents = eventosData.eventos.map(ev => ({
    img: ev.imagen,
    date: ev.data,
    name: ev.nome,
    title: ev.nome,
    time: ` ${ev.hora_inicio} às ${ev.hora_fim}`,
    cidade: ev.cidade,
    estado: ev.estado,
    weekDay: getWeekDay(ev.data),
    bairro: ev.bairro,
    categoria: ev.categoria,
    descricao: ev.descricao,
}));

const filterEvents = (filters) => {
    return allEvents.filter(ev => {
        // Handle date range filtering
        if (filters.dateRange) {
            const selectedDate = new Date(filters.dateRange);
            const eventDate = new Date(ev.date);
            
            // If the selected date is after the event date plus 7 days or before the event date, filter out
            const oneWeekAfterEvent = new Date(eventDate);
            oneWeekAfterEvent.setDate(eventDate.getDate() + 7);
            
            if (selectedDate < eventDate || selectedDate > oneWeekAfterEvent) {
                return false;
            }
        }
        
        // Handle legacy date filters for backward compatibility
        if (filters.dateStart && ev.date < filters.dateStart) return false;
        if (filters.dateEnd && ev.date > filters.dateEnd) return false;
        
        if (filters.category && ev.categoria !== filters.category) return false;
        if (filters.name && !ev.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
        if (filters.bairro && filters.bairro !== "" && ev.bairro && !ev.bairro.toLowerCase().includes(filters.bairro.toLowerCase())) return false;
        return true;
    });
};

const List = ({ filters }) => {
    const [results, setResults] = useState(allEvents);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setResults(filterEvents(filters || {}));
            setLoading(false);
        }, 500);
    }, [filters]);

    const handleReserveClick = (event) => {
        // You can pass event data via state to the Event page
        navigate('/event', { state: { eventData: event } });
    };

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
                                width={120}
                                height={120}
                                onError={e => {
                                    e.target.onerror = null;
                                    e.target.src = "/assets/default-event.png";
                                }}
                            />
                            <div className="event-details">
                                <p>{event.weekDay}, {event.date}</p>
                                <p>{event.time}</p>
                                <p>{event.title}</p>
                                <p>{event.cidade} - {event.estado}</p>
                            </div>
                            <div className="event-actions">
                                <button 
                                    className="btn btn-outline" 
                                    onClick={() => handleReserveClick(event)}
                                >
                                    Ver Detalhes
                                </button>
                                <button 
                                    className="btn" 
                                    onClick={() => handleReserveClick(event)}
                                >
                                    Reservar Agora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default List;