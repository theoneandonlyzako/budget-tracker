// const $addToppingBtn = document.querySelector('#add-topping');
// const $customToppingsList = document.querySelector('#custom-toppings-list');
const $budgetForm = document.querySelector('#budget-form');

// const handleAddTopping = event => {
//   event.preventDefault();

//   const toppingValue = document.querySelector('#new-topping').value;

//   if (!toppingValue) {
//     return false;
//   }

//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.name = 'topping';
//   checkbox.value = toppingValue;
//   checkbox.id = toppingValue
//     .toLowerCase()
//     .split(' ')
//     .join('-');

//   const label = document.createElement('label');
//   label.textContent = toppingValue;
//   label.htmlFor = toppingValue
//     .toLowerCase()
//     .split(' ')
//     .join('-');

//   const divWrapper = document.createElement('div');

//   divWrapper.appendChild(checkbox);
//   divWrapper.appendChild(label);
//   $customToppingsList.appendChild(divWrapper);

//   toppingValue.value = '';
// };

const handleBudgetSubmit = event => {
  event.preventDefault();

  const BudgetName = $BudgetForm.querySelector('#Budget-name').value;
  const createdBy = $BudgetForm.querySelector('#created-by').value;
  const size = $BudgetForm.querySelector('#Budget-size').value;
  const toppings = [...$BudgetForm.querySelectorAll('[name=topping]:checked')].map(topping => {
    return topping.value;
  });

  if (!BudgetName || !createdBy || !toppings.length) {
    return;
  }

  const formData = { pizzaName, createdBy, size, toppings };

  fetch('/api/pizzas', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      alert('Pizza created successfully!');
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
    });
};

$pizzaForm.addEventListener('submit', handlePizzaSubmit);
$addToppingBtn.addEventListener('click', handleAddTopping);
