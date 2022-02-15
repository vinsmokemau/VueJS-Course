const characters = ["Goku", "Vegeta", "Trunks"]

const [goku, vegeta, trunks, goten="No value"] = characters

console.log(goku, vegeta, trunks, goten)

const return_array = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = return_array(['XYZ', 987])
console.log(letters, numbers)
