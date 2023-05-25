const pages = [
    {name: 'Animals', url: 'animals.html'},
    {name: 'Vechicles', url: 'vechicles.html'},
    {name: 'Weather', url: 'weather.html'}
];

const container = document.getElementById("container");

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

pages.forEach((page) => {
    const chapterBtn = document.createElement("button");
    chapterBtn.classList.add("chapterBtn");

    chapterBtn.innerText = page.name;

    chapterBtn.addEventListener('click', () =>{
        window.location.href = page.url;
    });

    btnContainer.appendChild(chapterBtn);
});

container.appendChild(btnContainer);
