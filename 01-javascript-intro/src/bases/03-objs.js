// Los objetos son por referencia y no por valor
// Es un símil como las listas en Python

const person = {
    name: "Mau",
    last_name: "Munguia",
    age: 25,
    address: {
        city: "Mexico City",
        zip: 07750,
        lat: 14.3232,
        lng: 34.5689
    }
}

// Con el operador spread puede desglozar todo el contenido en un nuevo objeto
const person2 = { ...person}

console.log(person)
console.log(person2)

persona.age = 30

console.log(person)
console.log(person2)