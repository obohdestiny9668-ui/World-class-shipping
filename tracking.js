// Get tracking number from URL
const params = new URLSearchParams(window.location.search);
const trackingNumber = params.get("tn");

// The only valid tracking number
const VALID_TRACKING = "EC-2026-839201";

// Shipment data for the valid number
const shipmentData = {
  status: "on hold-awaiting payment",
  origin: "syria",
  destination: "85 knox road Clacton-on-Sea Essex CO15 3TT, UK",
  update: "Warehoused / In Warehouse"
};

if (trackingNumber === VALID_TRACKING) {
  document.getElementById("tn").textContent = trackingNumber;
  document.getElementById("status").textContent = shipmentData.status;
  document.getElementById("origin").textContent = shipmentData.origin;
  document.getElementById("destination").textContent = shipmentData.destination;
  document.getElementById("update").textContent = shipmentData.update;
} else {
  document.querySelector(".card").innerHTML = `
    <h3 style="color:red">Tracking number not found</h3>
    <p>Please check your tracking number and try again.</p>
  `;
}