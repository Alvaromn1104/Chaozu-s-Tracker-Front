import axios from "axios";

const apiDragonBall = axios.create({
    baseURL: "https://dragonball-api.com/api",
    headers: {
        "Content-Type": "application/json",
    }
})

export { apiDragonBall };