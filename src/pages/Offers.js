import React from "react";

const offers = [
  { id: 1, title: "Buy 1 Get 1 Free", details: "Applicable on movie tickets", validUntil: "April 30, 2025" },
  { id: 2, title: "20% Off on Sports Events", details: "Use code SPORTS20", validUntil: "May 10, 2025" },
  { id: 3, title: "Early Bird Discount", details: "Flat $10 off on concerts", validUntil: "April 15, 2025" },
];

function Offers() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Exclusive Offers 🎉</h2>
      <div className="row">
        {offers.map((offer) => (
          <div key={offer.id} className="col-md-4">
            <div className="card mb-3 bg-warning text-dark">
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">{offer.details}</p>
                <p className="card-text">🗓 Valid Until: {offer.validUntil}</p>
                <button className="btn btn-dark">Claim Offer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
