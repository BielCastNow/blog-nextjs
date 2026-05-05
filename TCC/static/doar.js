const select = document.querySelector("select");
const pixArea = document.getElementById("pixArea");

select.addEventListener("change", () => {
  if (select.value === "PIX") {
    pixArea.style.display = "block";
  } else {
    pixArea.style.display = "none";
  }
});

// COPIAR CHAVE PIX
function copyPix() {
  const input = document.getElementById("pixKey");
  input.select();
  navigator.clipboard.writeText(input.value);
  alert("Chave PIX copiada!");
}
