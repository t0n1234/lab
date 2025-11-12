//Cache the DOM
var buton=document.getElementById("buton")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var imag=document.querySelector("img")
var lista=document.getElementById("lista") 
var body=document.querySelector("body")

//Add event on click
buton.addEventListener("click",altaViata)

//Define functions
function altaViata(){
	nume.innerHTML = "tony"
	nume.style.backgroundColor = "red"
	
	prenume.innerHTML = "one"
	prenume.style.backgroundColor = "pink"
	
	imag.src = "images/img2.png"
	imag.style.opacity = "44%"
	imag.style.width = "100px"
	imag.style.height = "120px"
	
	lista.innerHTML = "<ol type=\"a\"><li>Exact<li>Aceleasi<li>Asteptari</ol>"
	
	body.style.backgroundImage = "url('images/img2.png')"
	body.style.backgroundSize = "cover"
	body.style.backgroundRepeat = "no-repeat"
	body.style.backgroundPosition = "center"
	body.style.backgroundAttachment = "fixed"
	body.style.color = "#39FF14"
	body.style.fontFamily = "Montserrat"
	
}