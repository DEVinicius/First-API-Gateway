import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    return response.json({
        name: "Vinicius",
        email: "teste@teste.com",
        password: "1234"
    })
})

app.listen(3002, () => {
    console.log("running on Port 3002")
})