import express from 'express';
import httpProxy from 'express-http-proxy';

import { hosts } from './config/hosts'

const {
    PRODUCTS_API_URL,
    USERS_API_URL
} = hosts

//define hosts
const usersServiceProxy = httpProxy(USERS_API_URL)
const productsServiceProxy =httpProxy(PRODUCTS_API_URL)

const app = express()

app.get("/", (request, response) => {
    return response.send("API GATEWAY!!")
})

app.get("/users", (request, response, next) => usersServiceProxy(request, response, next));
app.get("/products", (request, response, next) => productsServiceProxy(request, response, next));

app.listen(3333, () => {
    console.log("API GATEWAY RUNNING ON PORT 3333")
})