$(function(){
 $(".Boton-Comprar").click(function(){
    alert("Compra Exitosa");
});
 });

const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

nextBtn.addEventListener("click", function() {
  let name = document.querySelector("#name").value;
  let apellido = document.querySelector("#apellido").value;
  let email = document.querySelector("#email").value;
  let texTarea = document.querySelector("#textarea").value;
  
  summary.innerHTML = `Nombre: ${name}<br>Apellido: ${apellido}<br>Email: ${email}<br>Mensaje: ${texTarea}`;
  
  step1.style.display = "none";
  step2.style.display = "block";
});


