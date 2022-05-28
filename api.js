function getApiJS() {
  return fetch('http://localhost:3000/animals')
  .then(response => response.json()) 

}

function createAnimal(objectAnimal) {
  return fetch('http://localhost:3000/animals',{
    method: "POST",
    headers: {
     "Content-Type":"Application/json"
    },
    body: JSON.stringify(objectAnimal)
  })
  

}

