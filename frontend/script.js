const API_URL = "https://mi-primer-backend-1-38z0.onrender.com";

fetch(API_URL + "/")
  .then(res => res.text())
  .then(data => {
    document.getElementById("mensaje").textContent = data;
  })
  .catch(err => {
    document.getElementById("mensaje").textContent = "Error: " + err.message;
  });