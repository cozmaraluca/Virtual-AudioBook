const vechicles = [['⛅', 'clouds'], ['🌞', 'sun'], ['☔', 'rain'], ['⚡', 'lightning'], ['💨', 'wind'], ['🌈', 'rainbow'], ['⛄', 'snow']];
const page =  {name: 'Back', url: 'index.html'};


const container = document.getElementById("container");

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

vechicles.forEach((vechicle) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = vechicle[0];

    btn.addEventListener('click', () =>{

        const sound = document.getElementById(vechicle[1]);
        sound.play();
    });

    btnContainer.appendChild(btn);
});

container.appendChild(btnContainer);

//Back Button
const btnBack = document.createElement("button");
btnBack.classList.add("backBtn");

btnBack.innerText = "Back";

btnBack.addEventListener('click', () =>{
    window.location.href = page.url;

});

container.appendChild(btnBack);
