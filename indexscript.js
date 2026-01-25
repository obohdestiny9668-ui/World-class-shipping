function goToTrackingPage() {
  const input = document.getElementById("trackingNumber").value.trim();
  const VALID_TRACKING = "EC2026839201";

  if (!input) {
    alert("Please enter a tracking number");
    return;
  }

  if (input !== VALID_TRACKING) {
    alert("Tracking number not found");
    return;
  }

  // Redirect to tracking details page with valid number
  window.location.href = `tracking.html?tn=${encodeURIComponent(input)}`;
}