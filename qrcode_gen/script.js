function generateQRCode() {
  const input = document.getElementById("text-input").value.trim();
  const qrImage = document.getElementById("qr-image");
  const downloadBtn = document.getElementById("download-btn");

  if (!input) {
    alert("Please enter some text or URL!");
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

  qrImage.src = qrUrl;
  qrImage.style.display = "block";
  downloadBtn.disabled = false;
}

function downloadQRCode() {
  const qrImage = document.getElementById("qr-image");
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
