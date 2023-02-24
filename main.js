const inputField = document.getElementById("input-field");

function loadData(name) {
  try{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => {
      displayData(data.meals);
    });
  }
  catch(error) {
    console.log(error)
  }
}

function displayData(json) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  json.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src=${data.strMealThumb} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${data.strCategory}</h2>
        <p>${data.strMeal}</p>
        <label for="my-modal-6"
         onclick="loadMealModalDetails(${data.idMeal})" class="btn">Details</label>
        </div>
        </div>
  

      `;
    container.appendChild(div);
  });
}

function searchMeal() {
  loadData(inputField.value);
}
const img = document.getElementById("meal-img");
const title = document.getElementById("meal-title");
const description = document.getElementById("meal-description");

function loadMealModalDetails(idMeal) {
  img.src = "";
  title.innerText = "";
  description.innerText = "";
  try {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((response) => response.json())
    .then((data) => displayMealModalDetails(data.meals[0]));
  } catch (error) {
    console.log(error)
  }
}

function displayMealModalDetails(meal) {
  img.src = meal.strMealThumb;
  title.innerText = meal.strMeal;
  description.innerText= meal.strInstructions;
}

loadData("rice");
