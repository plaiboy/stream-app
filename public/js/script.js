let addIngridients = document.getElementById('addIngridientsBtn');
let ingridientsList = document.queriSelector('.ingridientList');
let ingredientdiv = document.querySelectorAll('.ingridients')[0];
addIngridientsBtn.addEventListener('click', function(){
    let neIngridients = ingridientsDiv.cloneNode(true);
    let input = newIngridients.getelementByTagName('input'[0]);
    input.value = '';
    ingridientsList.appendChild(newIngridients);
});