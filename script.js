// CAROUSEL
const slides = document.querySelectorAll(".slide")
let i = 0

setInterval(()=>{
slides.forEach(s=>s.classList.remove("active"))
i = (i+1) % slides.length
slides[i].classList.add("active")
},3000)


// PASSWORD STRENGTH (REAL)
const pass = document.getElementById("password")
const bar = document.querySelector(".bar")

pass.addEventListener("input",()=>{

let v = pass.value
let strength = 0

if(/[A-Z]/.test(v)) strength += 25
if(/[0-9]/.test(v)) strength += 25
if(/[^A-Za-z0-9]/.test(v)) strength += 25
if(v.length > 8) strength += 25

bar.style.width = strength + "%"

})


// SHOW PASSWORD
document.querySelector(".toggle-pass").onclick = ()=>{
pass.type = pass.type === "password" ? "text" : "password"
}


// DARK MODE
document.querySelector(".toggle").onclick = ()=>{
document.body.classList.toggle("light")
}
