const myPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve("Tenemos un valor de promesa")
        }, 1000);
    })
}

const timelapAsync = async() => {
    try {
        console.log("Inicio")

        const answer = await myPromise()
        console.log(answer)

        console.log("Fin")

        return "fin de medir tiempo async"
    } catch (error) {
        throw "Medir tiempo async"
    }
}

timelapAsync()
    .then(value => console.log(value))
    .catch(err => console.log('error:', err))