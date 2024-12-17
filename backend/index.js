
const PORT = 9001

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const app = express()

app.use(cors())
app.use(express.json())

app.post('/registration', (req, res) => {
    console.log(req.body)
    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.json({
        success: true,
        message: 'Вы успешно авторизовались!'
    })
})

app.get('/products', (req, res) => {


    const products = [
        { id: 1, title: 'Title 1', price: 260, rating: 4.5 },
        { id: 2, title: 'Title 2', price: 224, rating: 4.3 },
        { id: 3, title: 'Title 3', price: 123, rating: 4.2 },
        { id: 4, title: 'Title 4', price: 55, rating: 4.1 },
        { id: 5, title: 'Title 5', price: 63, rating: 4.7 },
        { id: 6, title: 'Title 6', price: 523, rating: 3.5 },
        { id: 7, title: 'Title 7', price: 11, rating: 3.1 },
        { id: 8, title: 'Title 8', price: 116, rating: 3.4 },
        { id: 9, title: 'Title 9', price: 66, rating: 3.3 }
    ]

    res.json({
        data: products
    })
})

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch (e){
        console.log(e)
    }   
}


start()