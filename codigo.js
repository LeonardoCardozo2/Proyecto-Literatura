function mostrarDiv(){
  document.getElementById("mensaje").style.top = "0";
  document.getElementById("mensaje").style.zIndex = "50";
}

document.getElementById("incorrecto").addEventListener("click", function(){
  this.classList.add("rojo");
  setTimeout(() => {
    this.classList.remove("rojo");
  }, 3000);
});