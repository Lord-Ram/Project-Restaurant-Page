function loadContact() {
  const content = document.getElementById("content");

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.innerHTML = "<strong>Phone:</strong> +371 000 000 00";

  const email = document.createElement("p");
  email.innerHTML = "<strong>Email:</strong> hello@bearysbreakfast.lv";

  const address = document.createElement("p");
  address.innerHTML = "<strong>Address:</strong> 123 Forest Lane, Riga, Latvia";

  contact.append(heading, phone, email, address);
  content.appendChild(contact);
}

export default loadContact;
