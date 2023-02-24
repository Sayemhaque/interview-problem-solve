;
const inputField = document.getElementById("input-field");


function loadData (name) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  .then((response) => response.json())
  .then((json) => {
    const stringData = JSON.stringify(json);
    const data = JSON.parse(stringData);
    displayData(data.meals);
  });
}

function displayData(json) {
  const container = document.querySelector(".container");
   container.innerHTML = ''
    
   json.forEach(data => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src=${data.strMealThumb} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${data.strCategory}</h2>
        <p>${data.strMeal}</p>
        <div class="card-actions justify-end">
        <label for="my-modal-6" onclick="mealModalDetails(${data.idMeal})" class="btn">Details</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
          <figure><img src=${data.strMealThumb} alt="Shoes" /></figure>
            <h3 class="font-bold text-3xl">${data.strMeal}</h3>
            <p class="py-4">${data.strInstructions}</p>
            <div class="modal-action">
              <label for="my-modal-6" class="btn">Close</label>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div
      `;
    container.appendChild(div);
  })
}




function searchMeal () {
  loadData(inputField.value)
}

function mealModalDetails (idMeal) {
  console.log(idMeal)
}
loadData("")