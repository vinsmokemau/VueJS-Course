import {getHeroById} from "./bases/08-import-export"
// console.log("Hello")

// new Promise((resolve, reject) => {
//     console.log("cuerpo de la promesa")
//     resolve("Promesa resuelta")
// })
// .then(msg=>console.log(msg))
// .catch(err=>console.log(err))

// console.log("Fin")

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if (hero) {
                resolve(hero)
            } else {
                reject("Heroe no existe")
            }
        }, 1000);
    });
}

getHeroByIdAsync(2)
    .then(h => console.log(`El héroe es: ${h.name}`))
    .catch(console.log)