document.addEventListener("DOMContentLoaded", () => {
  const columns = document.querySelectorAll(".column");

  columns.forEach(column => {
      column.addEventListener("dragover", (event) => {
          event.preventDefault();
      });

      column.addEventListener("drop", (event) => {
          const cardId = event.dataTransfer.getData("text/plain");
          const card = document.getElementById(cardId);
          column.querySelector(".cards").appendChild(card);
      });
  });

  document.querySelectorAll(".add-card").forEach(button => {
      button.addEventListener("click", () => {
          const title = prompt("Введите название карточки");
          const text = prompt("Введите текст карточки");
          
          if (title && text) {
              const card = document.createElement("div");
              card.classList.add("card");
              card.draggable = true;
              card.id = `card-${Date.now()}`;

              const cardTitle = document.createElement("h3");
              cardTitle.textContent = title;

              const cardText = document.createElement("p");
              cardText.textContent = text;

              card.appendChild(cardTitle);
              card.appendChild(cardText);

              card.addEventListener("dragstart", (event) => {
                  event.dataTransfer.setData("text/plain", card.id);
              });

              button.previousElementSibling.appendChild(card);
          }
      });
  });
});
