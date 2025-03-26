import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SeatSelection() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state;
  const isEvent = !!event;
  const entityName = isEvent ? event.name : `Movie ${id}`;
  const ticketPrice = isEvent ? 100 : 180;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("⚠️ Please select at least one seat!");
      return;
    }

    const totalAmount = selectedSeats.length * ticketPrice;

    const confirmBooking = window.confirm(
      `Confirm booking for ${entityName}?\n🎟️ Seats: ${selectedSeats.join(", ")}\n💰 Total: ₹${totalAmount}`
    );
    if (!confirmBooking) return;

    const bookingDetails = {
      entityName,
      seats: selectedSeats,
      totalPrice: totalAmount,
      date: event?.date || new Date().toLocaleDateString(),
      location: event?.location || "Theater",
    };

    // ✅ FIX: Ensure existingBookings is always an array
    const existingBookings = JSON.parse(localStorage.getItem("myTickets"));
    const updatedBookings = Array.isArray(existingBookings) ? [...existingBookings, bookingDetails] : [bookingDetails];

    localStorage.setItem("myTickets", JSON.stringify(updatedBookings));

    navigate("/mytickets");
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-3">Select Seats for {entityName} 🎟️</h2>

      <div
        className="d-flex flex-wrap justify-content-center bg-light p-3 rounded border"
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        {seats.map((seat) => (
          <button
            key={seat}
            className={`btn m-1 ${selectedSeats.includes(seat) ? "btn-success fw-bold" : "btn-outline-secondary"}`}
            style={{ width: "45px", height: "45px" }}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <p className="mt-3">🎟️ Selected Seats: {selectedSeats.join(", ") || "None"}</p>
      <h5>💰 Total Price: ₹{selectedSeats.length * ticketPrice}</h5>

      <button className="btn btn-primary mt-3" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default SeatSelection;
