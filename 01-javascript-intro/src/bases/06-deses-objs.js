const person = {
    name: "Tony",
    age: 45,
    alias: "Ironman"
}

// const {name, age, alias, power="No power"} = person
// console.log(name)
// console.log(age)
// console.log(alias)
// console.log(power)

create_hero = ({name, age, alias, power="No power"}) => {
    return {
        id: 362951847,
        name,
        age,
        alias,
        power,
    }
}
console.log(create_hero(person))
