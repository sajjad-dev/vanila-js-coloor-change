const colors = ["green", "red", "purple","yellow"];
 const btn = document.getElementById("btn");
 const color = document.querySelector(".color");

const button = document.querySelector('.btn')
console.log(button)
 button.addEventListener("click", function () {
     console.log('cli')
     // get random number between 0 - 3
     const randomNumber = Math.floor(Math.random() * colors.length);
     console.log(randomNumber);

     document.body.style.backgroundColor = colors[randomNumber];
     color.textContent = colors[randomNumber];
 });    

function getRandomNumber() {
    return Math.floor(Math.random() * color.lenght);
}

   
