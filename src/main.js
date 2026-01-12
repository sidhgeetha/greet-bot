
const inputEl = document.getElementById("inputName");

const submitEl = document.getElementById("submit");

const resultEl = document.getElementById("greeting");

submitEl.addEventListener('click' , (event) =>{
  event.preventDefault();
  const inputName = inputEl.value.replace(/[0-9]/g, "");
  
  if (inputName === "") {
    alert("Please enter your name!");
    return;
  }

  
  console.log(`hello ${inputName} welcome to Cyberdude!`);

  resultEl.innerText = `hello ${inputName}, Welcome to CyberDude!`;
  resultEl.classList.add("text-white", "font-bold");
  
})























