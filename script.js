/*
TODO: Add data-* attributes to these elements.
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*

Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
You will need to pass in the params in the click handler of the dog’s:
- name
- breed
- adoption-fee
Create click handlers on each dog’s button that will add to the total.
*/

function alertDogInfo(event) {
  const dogImage = event.target;
  const dogInfo = {
    name: dogImage.dataset.name,
    breed: dogImage.dataset.breed,
    adoptionfee: dogImage.dataset.adoptionfee,
  };
  alert(JSON.stringify(dogInfo));
}

for (const img of document.body.querySelectorAll("#adoption-listings img")) {
  img.addEventListener("click", alertDogInfo);
}

function incrementAmount(event) {
  const adoptButton = event.target;
  const delta = adoptButton.dataset.adoptionfee.replace('$', '');
  /* alert(delta.replace("$", "")); */
  const currentAmount = document.getElementById("amount");
  /* alert(44); */
  const currentAmountValue = currentAmount.textContent.replace('$', '');
  /* alert(44); */
  const newAmount = (Number(currentAmountValue) + Number(delta)).toFixed(2);
  /* alert(newAmount); */
  /* alert(44); */
  currentAmount.textContent = `$${newAmount}`;
  /* alert(currentAmount.textContent); */
  /* alert(currentAmount.textContent.replace("$","")); */
  /* const newAmount = Number(currentAmount.textContent.replace("$", "")) + Number(delta.replace("$", "")); */
  /* currentAmount.textContent = String(newAmount); */
}

for (const button of document.body.querySelectorAll("#adoption-listings button")) {
  button.addEventListener("click", incrementAmount);
}
