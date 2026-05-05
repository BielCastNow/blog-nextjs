/* =========================
   GUARDIÃS DAS ÁGUAS
   home.js
========================= */

document.addEventListener("DOMContentLoaded", () => {
  initCategoryFilter();
});

/* =========================
   FILTRO DE CATEGORIAS
========================= */
function initCategoryFilter() {
  const chips = document.querySelectorAll(".chip");
  const cards = document.querySelectorAll(".post-card");

  if (!chips.length || !cards.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      /* botão ativo */
      chips.forEach((btn) => btn.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.dataset.filter;

      cards.forEach((card) => {
        const category = card.dataset.category;

        const shouldShow = filter === "all" || category === filter;

        if (shouldShow) {
          showCard(card);
        } else {
          hideCard(card);
        }
      });
    });
  });
}

/* =========================
   ESCONDER CARD
========================= */
function hideCard(card) {
  if (card.classList.contains("hidden")) return;

  card.classList.remove("show");
  card.classList.add("hide");

  setTimeout(() => {
    card.classList.add("hidden");
  }, 320);
}

/* =========================
   MOSTRAR CARD
========================= */
function showCard(card) {
  if (!card.classList.contains("hidden")) return;

  card.classList.remove("hidden");

  /* força reflow para animação reiniciar */
  void card.offsetWidth;

  card.classList.remove("hide");
  card.classList.add("show");
}
