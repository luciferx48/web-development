const colors = ["green", "blue", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const index = condomnumber();
   document.body.style.backgroundColor=colors[index];
   color.textContent=colors[index];
})

function condomnumber(){
    return Math.floor(Math.random()*colors.length);
}