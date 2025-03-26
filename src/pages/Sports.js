import React from "react";
import { useNavigate } from "react-router-dom";
const sportsEvents = [
  { id: 1, name: "Football Championship", date: "April 12, 2025", location: "Stadium A", price: "$60" },
  { id: 2, name: "Basketball League", date: "April 18, 2025", location: "Arena B", price: "$40" },
  { id: 3, name: "Tennis Open", date: "April 25, 2025", location: "Court C", price: "$35" },
];

function Sports() {
    const navigate = useNavigate();

    const handleBookNow = (event) => {
      navigate(`/seat-selection/${event.id}`, { state: event }); // ✅ Send event details
    };
  
  return (
    <div className="container mt-4">
      <h2 className="text-center">Upcoming Sports Events 🏆</h2>
      <div className="row">
        {sportsEvents.map((event) => (
          <div key={event.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">📅 {event.date}</p>
                <p className="card-text">📍 {event.location}</p>
                <p className="card-text">💰 {event.price}</p>
                <button className="btn btn-primary" onClick={() => handleBookNow(event)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;
