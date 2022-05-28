"use strict"
const generator = (name, img, description, button) =>{
    const container = document.createElement("div");
    container.classList.add("main__card");
    const img = document.createElement("img");
    img.classList.add("m__card-image");
    const name = document.createElement("h3")
    name.classList.add("m__card-name")
    const description = document.createElement("span")
    description.classList.add("m__card-description")
    const button = document.createElement("button")
    button.classList.add("m__card-submit")
      
    container.append(img);
    container.append(name);
    container.append(description);
    container.append(button);

        
}
