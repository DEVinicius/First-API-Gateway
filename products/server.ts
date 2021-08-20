import express from 'express';

const app = express();

app.get("/products", (request, response) => {
    return response.json({
        name: "FONE",
        price: "123"
    })
})

app.listen(3003, () => {
    console.log("running on Port 3003")
})