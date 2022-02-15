import superHeros from "../data/heroes"

export const getHeroById = (id) => {
    return superHeros.find(element => element.id === id)
}

export const getHerosByOwner = (owner) => {
    return superHeros.filter(element => element.owner === owner)
}

// import {getHeroById, getHerosByOwner} from "./bases/08-import-export"

// console.log(getHeroById(1))
// console.log(getHerosByOwner("DC"))
