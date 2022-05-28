"use strict"
const generator = (name, img, description, button) =>{
    const container = document.createElement("div");
    container.classList.add("main__card");
    const images = document.createElement("img");
    img.classist.add("m__card-image");
    const names = document.createElement("h3")
    name.classList.add("m__card-name")
    const descriptions = document.createElement("span")
    description.classList.add("m__card-description")
    const buttons = document.createElement("button")
    button.classList.add("m__card-submit")
      
    container.append(img);
    container.append(name);
    container.append(description);
    container.append(button);

        
}
