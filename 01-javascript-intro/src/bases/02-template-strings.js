const name = "Mau"
const last_name = "Munguia"

// Primer Forma de concatenar
// const full_name = name + " " + last_name

// Segunda Forma de concatenar [Como f-strgins en python]
// `: back-tick, se llaman template-strings
const full_name = `${name} ${last_name}`

function getGreeting (name) {
    return 'Hola ' +  name
}

console.log(`Este es un saludo: ${getGreeting(full_name)}`)
