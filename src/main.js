
const inputEl = document.getElementById("inputName");

const submitEl = document.getElementById("submit");

const resultEl = document.getElementById("greeting");

submitEl.addEventListener('click' , (event) =>{
  event.preventDefault();
  const inputName= inputEl.value;
  

  
  console.log(`hello ${inputName} welcome to Cyberdude!`);

  resultEl.innerText = `hello ${inputName}, Welcome to CyberDude!`;
  
})























const empNameEl = document.getElementById("empName");
const jobEl = document.getElementById("job");
const myFormEl = document.getElementById("myForm");
const empdataContainerEl = document.getElementById("empdataContainer");
const empDataEl = document.getElementById("empdata");

// Hide container
empdataContainerEl.style.display = "none";

//events
myFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const empName = empNameEl.value;
  const job = jobEl.value;

  // check value

  if (empName.length > 0 && job.length > 0) {
    empdataContainerEl.style.display = "block";

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("p-4", "text-left", "border", "rounded-lg");

    if (job.toLowerCase() === "developer") {
      cardDiv.classList.add("bg-green-500");
    } else {
      cardDiv.classList.add("bg-gray-200");
    }
    cardDiv.innerHTML = `

<p class="font-semibold text-lg mb-2" >${empName} </p>
<p class="font-semibold text-lg mb-2" >${job} </p>
<button class="delete-btn bg-red-500 py-1 px-1 rounded " >Delete </button>

`;

    const deleteBtn = cardDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      cardDiv.remove();
    });

    empDataEl.appendChild(cardDiv);
    // Clear inputs
    empNameEl.value = "";
    jobEl.value = "";
  }
});