const cheeseTab = document.getElementById("cheese-and-sauce-tab");
const cheeseTabPane = document.getElementById("cheese-and-sauce-tab-pane");
const sizeTab = document.getElementById("size-and-crust-tab");
const sizeTabPane = document.getElementById("size-and-crust-tab-pane");
const toppingsTab = document.getElementById("toppings-tab");
const toppingsTabPane = document.getElementById("toppings-tab-pane");


document.getElementById("size-and-crust-next-step-btn").onclick = function() {

// switch to the "Cheese and Sauce" tab
cheeseTab.classList.add("active");
cheeseTab.classList.add("show");
cheeseTab.setAttribute("aria-selected", "true");
cheeseTabPane.classList.add("active");
cheeseTabPane.classList.add("show");
cheeseTabPane.setAttribute("aria-selected", "true");

// remove the active class from the "Size and Crust" tab
sizeTab.classList.remove("active");
sizeTab.classList.remove("show");
sizeTab.setAttribute("aria-selected", "false");
sizeTabPane.classList.remove("active");
sizeTabPane.classList.remove("show");
sizeTabPane.setAttribute("aria-selected", "false");
};

document.getElementById("cheese-and-sauce-next-step-btn").onclick = function() {

// switch to the "Toppings" tab
toppingsTab.classList.add("active");
toppingsTab.classList.add("show");
toppingsTab.setAttribute("aria-selected", "true");
toppingsTabPane.classList.add("active");
toppingsTabPane.classList.add("show");
toppingsTabPane.setAttribute("aria-selected", "true");

// remove the active class from the "Cheese and Sauce" tab
cheeseTab.classList.remove("active");
cheeseTab.classList.remove("show");
cheeseTab.setAttribute("aria-selected", "false");
cheeseTabPane.classList.remove("active");
cheeseTabPane.classList.remove("show");
cheeseTabPane.setAttribute("aria-selected", "false");
};

document.getElementById("cheese-and-sauce-previous-step-btn").onclick = function() {

// switch to the "Size and Crust" tab
sizeTab.classList.add("active");
sizeTab.classList.add("show");
sizeTab.setAttribute("aria-selected", "true");
sizeTabPane.classList.add("active");
sizeTabPane.classList.add("show");
sizeTabPane.setAttribute("aria-selected", "true");

// remove the active class from the "Cheese and Sauce" tab
cheeseTab.classList.remove("active");
cheeseTab.classList.remove("show");
cheeseTab.setAttribute("aria-selected", "false");
cheeseTabPane.classList.remove("active");
cheeseTabPane.classList.remove("show");
cheeseTabPane.setAttribute("aria-selected", "false");
};

document.getElementById("toppings-previous-step-btn").onclick = function() {

// switch to the "Cheese and Sauce" tab
cheeseTab.classList.add("active");
cheeseTab.classList.add("show");
cheeseTab.setAttribute("aria-selected", "true");
cheeseTabPane.classList.add("active");
cheeseTabPane.classList.add("show");
cheeseTabPane.setAttribute("aria-selected", "true");

// remove the active class from the "Toppings" tab
toppingsTab.classList.remove("active");
toppingsTab.classList.remove("show");
toppingsTab.setAttribute("aria-selected", "false");
toppingsTabPane.classList.remove("active");
toppingsTabPane.classList.remove("show");
toppingsTabPane.setAttribute("aria-selected", "false");
};
