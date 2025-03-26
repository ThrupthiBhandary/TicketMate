import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  { id: 1, name: "Music Concert", date: "April 10, 2025", location: "New York", price: "$50" },
  { id: 2, name: "Comedy Show", date: "April 15, 2025", location: "Los Angeles", price: "$30" },
  { id: 3, name: "Art Exhibition", date: "April 20, 2025", location: "Chicago", price: "Free" },
];

function Events() {
  const navigate = useNavigate();

  const handleBookNow = (event) => {
    navigate(`/seat-selection/${event.id}`, { state: event }); // ✅ Send event details
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Upcoming Events 🎭</h2>
      <div className="row">
        {events.map((event) => (
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

export default Events;
