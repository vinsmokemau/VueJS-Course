// Forma antigua o "tradicional"
// function greetings(name) {
//     return `Hola ${name}!`
// }

// Función anonima
// const greetings = function(name) {
//     return `Hola ${name}!`
// }

// Función de flecha o lambdas
// const greetings = (name="Mau") => {
//     return `Hola ${name}!`
// }

// const name = "Mau"
// console.log(greetings(name))


const heros = [
    {
        id: 1,
        name: "Batman"
    },
    {
        id: 2,
        name: "Superman"
    }
]

const exists_id = (element) => element.id === 1
console.log(heros.some(exists_id))
