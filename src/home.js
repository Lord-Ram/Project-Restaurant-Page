function loadHome() {
  const content = document.getElementById("content");

  const home = document.createElement("div");
  home.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Beary's Breakfast Bar";

  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80";
  image.alt = "A delicious breakfast plate";

  const text = document.createElement("p");
  text.textContent =
    "Welcome to Beary's Breakfast Bar! We serve fresh, hearty breakfasts made with locally sourced ingredients. Come enjoy great food, warm coffee, and a friendly atmosphere.";

  const hours = document.createElement("p");
  hours.innerHTML =
    "<strong>Hours:</strong><br />Monday–Friday: 7am–3pm<br />Saturday–Sunday: 8am–4pm";

  const location = document.createElement("p");
  location.innerHTML =
    "<strong>Location:</strong><br />123 Forest Lane, Riga, Latvia";

  home.append(headline, image, text, hours, location);
  content.appendChild(home);
}

export default loadHome;
