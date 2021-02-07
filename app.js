function searchItem() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then(res => res.json())
        .then(data => {
            const mealInfo = data.meals;
            getMeal(mealInfo);
        })
}
// Get meal
const getMeal = (mealInfo) => {
    const row = document.getElementById("row");
    mealInfo.forEach(meal => {
        const inputMel = document.getElementById("meal__input").value;
        const inputText = inputMel.toUpperCase();
        const mealName = meal.strMeal.toUpperCase();
        if (mealName.includes(inputText)) {
            const col = document.createElement("div");
            col.className = "col-md-3 rounded";
            const item = `
                    <div style="cursor:pointer;" onclick="displayMeadDetails('${meal.strMeal}')" class="card text-center m-3 shadow-lg rounded">
                        <img class="img-top" src="${meal.strMealThumb}" alt="">
                        <div class="card-body">
                             <h4>${meal.strMeal}</h4>
                        </div>
                    </div>
                `;

            col.innerHTML = item;
            row.appendChild(col);
        }
    });
}

// Display Meal
const displayMeadDetails = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            return showIngredients(data.meals[0])
        })

}
// Show Ingredients
const showIngredients = (mealData) => {
    const IngredientsData = ` <div class="col-md-5 mx-auto">
                    <div class="card">
                        <img src="${mealData.strMealThumb}" class="img-fluid" alt="">                       
                        <div class="card-body">
                         <h3 class="mt-3">${mealData.strMeal}</h3>
                         <h4 class="my-3">Ingredients</h4>
                            <ul class="list-group">
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient1}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient2}</span></li>   
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient3}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient4}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient5}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient6}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient7}</span></li> 
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient8}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient9}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient10}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient11}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient12}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient13}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient14}</span></li>
                                     <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient15}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient16}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient17}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient18}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient19}</span></li>
                                    <li class="list-group-item trackItem" aria-current="true">
                                    <i class="fas fa-check-square"></i><span class="ms-3">${mealData.strIngredient20}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>`
    const row = document.getElementById("rowIngredients");
    row.innerHTML = IngredientsData;
    const li = document.querySelectorAll(".trackItem");
    li.forEach(item => {
        if (item.innerText == "") {
            item.style.display = "none";
        }
    })
}