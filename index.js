"use strict"
const generator = (animal) =>{
    const container = document.createElement("div");
    container.classList.add("main__card");
    const image = document.createElement("img");
    image.src = animal.img;
    image.classList.add("m__card-image");
    const name = document.createElement("h3")
    name.classList.add("m__card-name")
    name.textContent = animal.name;
    const description = document.createElement("span")
    description.textContent = animal.description;
    description.classList.add("m__card-description")
    const buttons = document.createElement("button")
    buttons.classList.add("m__card-submit")
      
    container.append(image);
    container.append(name);
    container.append(description);
    container.append(buttons);

    return container;
}

const form = document.querySelector('#animal-form');
form.addEventListener("submit",(event) => {
    event.preventDefault();

    const target = event.target;
    const animal = {
        name: target.name.value,
        img: target.image.value,
        description: target.description.value,
        donation: 0,
    }

    createAnimal(animal)
    .then((result) => {
        const card = generator(result);
        const body = document.querySelector('body');
        body.append(card);
    }).catch((err) => {
        console.log("error");
    });
})