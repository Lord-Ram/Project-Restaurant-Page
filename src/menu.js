function createMenuItem(name, description, price) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const title = document.createElement("h3");
  title.textContent = name;

  const details = document.createElement("p");
  details.textContent = `${description} — ${price}`;

  item.append(title, details);
  return item;
}

function loadMenu() {
  const content = document.getElementById("content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const heading = document.createElement("h2");
  heading.textContent = "Menu";

  menu.appendChild(heading);

  menu.appendChild(
    createMenuItem(
      "Bear Claw Pancakes",
      "Fluffy pancakes with maple syrup and berries",
      "€8.50"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Forest Omelette",
      "Three-egg omelette with mushrooms, cheese, and herbs",
      "€9.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Honey Toast",
      "Sourdough toast with honey, butter, and cinnamon",
      "€6.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Morning Coffee",
      "Freshly brewed coffee or espresso",
      "€3.00"
    )
  );

  content.appendChild(menu);
}

export default loadMenu;
