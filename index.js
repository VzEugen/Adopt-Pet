"use strict"
const generator = (name, img, description, button) =>{
    const container = document.createElement("div");
    container.classList.add("main__card");
    const images = document.createElement("img");
    images.classList.add("m__card-image");
    const names = document.createElement("h3")
    names.classList.add("m__card-name")
    const descriptions = document.createElement("span")
    descriptions.classList.add("m__card-description")
    const buttons = document.createElement("button")
    buttons.classList.add("m__card-submit")
      
    container.append(images);
    container.append(names);
    container.append(descriptions);
    container.append(buttons);

        
}
