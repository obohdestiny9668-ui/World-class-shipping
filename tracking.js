// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get tracking number from URL
  const params = new URLSearchParams(window.location.search);
  const trackingNumber = params.get("tn");

  // The only valid tracking number
  const VALID_TRACKING = "EC2026839201";

  // Shipment data for the valid number
  const shipmentData = {
    status: "Package arrived at London Heathrow Airport (LHR)",
    origin: "Syria",
    destination: "85 Knox Road, Clacton-on-Sea, Essex CO15 3TT, UK",
    lastUpdate: "Arrived and prepared to go through customs"
  };

  const card = document.querySelector(".card");

  if (!card) return; // Stop if card element doesn't exist

  if (trackingNumber === VALID_TRACKING) {
    // Make sure all elements exist before updating
    const tnEl = document.getElementById("tn");
    const statusEl = document.getElementById("status");
    const originEl = document.getElementById("origin");
    const destinationEl = document.getElementById("destination");
    const updateEl = document.getElementById("update");

    if (tnEl && statusEl && originEl && destinationEl && updateEl) {
      tnEl.textContent = trackingNumber;
      statusEl.textContent = shipmentData.status;
      originEl.textContent = shipmentData.origin;
      destinationEl.textContent = shipmentData.destination;
      updateEl.textContent = shipmentData.lastUpdate;
    }
  } else {
    card.innerHTML = `
      <h3 style="color:red">Tracking number not found</h3>
      <p>Please check your tracking number and try again.</p>
    `;
  }
});