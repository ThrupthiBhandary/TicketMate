import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = JSON.parse(localStorage.getItem("myTickets")) || [];
    setTickets(savedTickets);
  }, []);

  // Function to delete a specific ticket
  const handleDelete = (index) => {
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
    localStorage.setItem("myTickets", JSON.stringify(updatedTickets));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">🎫 My Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-center">No tickets booked yet!</p>
      ) : (
        tickets.map((ticket, index) => (
          <div key={index} className="card p-3 shadow-sm mb-3">
            <h5>🎬 {ticket.entityName}</h5>
            <p>📅 Date: {ticket.date}</p>
            <p>📍 Location: {ticket.location}</p>
            <p>🎟️ Seats: {ticket.seats.join(", ")}</p>
            <h4 className="text-success">💰 Total Price: ₹{ticket.totalPrice}</h4>
            <button className="btn btn-danger mt-2" onClick={() => handleDelete(index)}>
              ❌ Cancel Ticket
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyTickets;
