// Define an array of pages with their names and URLs
const pages = [
    {name: 'Animals', url: 'animals.html'},
    {name: 'Vechicles', url: 'vechicles.html'},
    {name: 'Weather', url: 'weather.html'}
];

// Get the container element from the DOM
const container = document.getElementById("container");

// Create a new div element to hold the buttons
const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

// Loop through each page in the pages array
pages.forEach((page) => {
    // Create a new button element for each page
    const chapterBtn = document.createElement("button");
    chapterBtn.classList.add("chapterBtn");

    // Set the inner text of the button to the page name
    chapterBtn.innerText = page.name;

    // Add an event listener to the button to navigate to the page URL when clicked
    chapterBtn.addEventListener('click', () =>{
        window.location.href = page.url;
    });

    // Append the button to the btnContainer
    btnContainer.appendChild(chapterBtn);
});

// Append the btnContainer to the container element in the DOM
container.appendChild(btnContainer);