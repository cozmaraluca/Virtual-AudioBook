// Define an array of vechicles with their icons and sound IDs
const vechicles = [['🚗', 'car'], ['🚌', 'bus'], ['🛸', 'spaceship'], ['🚛', 'truck'], ['🛫', 'airplane'], ['🚁', 'helicopter'], ['🚆', 'train'], ['🚢', 'ship']];

// Define a page object for the back button
const page =  {name: 'Back', url: 'index.html'};

// Get the container element from the DOM
const container = document.getElementById("container");

// Create a new div element to hold the buttons
const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

// Loop through each vechicle in the vechicles array
vechicles.forEach((vechicle) => {
    // Create a new button element for each vechicle
    const btn = document.createElement("button");
    btn.classList.add("btn");

    // Set the inner text of the button to the vechicle icon
    btn.innerText = vechicle[0];

     // Add an event listener to the button to play the sound associated with the vechicle when clicked
    btn.addEventListener('click', () =>{

        const sound = document.getElementById(vechicle[1]);
        sound.play();
    });

    // Append the button to the btnContainer
    btnContainer.appendChild(btn);
});

// Append the btnContainer to the container element in the DOM
container.appendChild(btnContainer);

// Create a back button element
const btnBack = document.createElement("button");
btnBack.classList.add("backBtn");

// Set the inner text of the back button to "Back"
btnBack.innerText = "Back";

// Add an event listener to the back button to navigate to the page URL when clicked
btnBack.addEventListener('click', () =>{
    window.location.href = page.url;

});

// Append the back button to the container element in the DOM
container.appendChild(btnBack);
