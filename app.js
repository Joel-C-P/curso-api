const express =require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {

    // req es la request, la peticion
    // res es la respuesta
    console.log(req);
    res.status(200).send('Modric EL GOAT campeon del mundo')
});

app.post("/team/pokemons", () => {
    res.status(200).send(' Post del goat')
})

app.get("/team", () => {
    res.status(200).send(' Get del goat')
})

app.delete("/team/pokemons/:pokeid", () => {
    res.status(200).send(' delete del goat')
})

app.put("/team", () => {
    res.status(200).send(' Put del goat')
})

app.listen(port, () => {
    console.log("Server started at port 3000");
}) 