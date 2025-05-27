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

function printFormData(e) {
  const contactForm = document.getElementById("contact-form");
  const formData = {};
  alert("Thank you. The form information has been received");
  console.log(formData.toString());
}

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", printFormData);


/*
Refactor Blog Page
This assignment is the required Milestone Assignment for Part 2 of the course.
    Refactor the blog page to generate the blog posts dynamically from JavaScript.
        There are a few methods to do this, but some advice...
            Start small. Work on getting just a headline on the page, then start adding more pieces of the blog posts, the attributes, etc. 
            Before working on multiple posts, generate one. Once you have one, see if you can figure out how you can write code that can do what you did over and over again.
            If you can, leverage loops to generate the multiple posts.
            You can save the blog post information (headline, link to image, and blog text) in an object and reference it. Even better would be to create an array of the blog objects and loop through them to get at the information you need.
            Reference the form building exercise in the slides as a guide for how this might work.
    On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
    Console log the values inside the form, you can build a string or build an object.
Bonus 1: Validate that all the form fields have been filled out and that the email address is a valid address.
Bonus 2: Generate all the dog tiles dynamically from an array.
To submit your assignment
    In GitHub, make a pull request to https://github.com/UWFront-End-Cert/adopt-a-dog-winter2020
    Click the blue Submit Assignment button on this page.
    Submit 3 links for this assignment in the text box:
        A link to your GitHub repository
        A link to your GitHub pages
        A link to the pull request to https://github.com/UWFront-End-Cert/adopt-a-dog-winter2020
    Click the Submit Assignment button again to turn in your assignment.
Blog posts are generated via JavaScript.
An alert displays when the form has been submitted successfully.
The results of the form submission are console logged.
*/
