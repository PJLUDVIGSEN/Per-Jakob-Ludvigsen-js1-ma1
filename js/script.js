const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const myHeading = document.querySelector("h3");
myHeading.innerHTML = "Updated heading";

// Question 3

myHeading.style.fontSize = "2em";

// Question 4

myHeading.classList = ".subHeading";

// Question 5

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function myFunction(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

myFunction(cats);

// Question 8
let catHtml = "";
let catName = "";
let catAge = "";
function createCats(cats) {
  for (i = 0; i < cats.length; i++) {
    let ageMissing = "Age unknown";
    if (typeof cats[i].age === "undefined") {
      cats[i].age = ageMissing;
    }
    catName = catName + "<div>" + "<h5>" + cats[i].name + "</h5>" + "</div>";
    catAge = catAge + "<div>" + "<p>" + cats[i].age + "</p>" + "</div>";
  }
  let catHtml = catName + catAge;
  return catHtml;
}
const catList = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catList;
