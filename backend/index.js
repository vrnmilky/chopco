const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const { secret } = require('./config')
const User = require('./models/User')
const Product = require('./models/Product')


const app = express()

app.use(cors())
app.use(express.json())

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, { expiresIn: '24h' })
}

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const { login, password, email } = req.body
    const user = new User({ login, password, email })
    const existingUser = await User.findOne({ login });
    if (existingUser) {
        return res.status(400).json({ message: 'Логин уже используется!' });
    }
    await user.save()
    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const { login, password } = req.body
    const user = await User.findOne({ login })
    if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден!' })
    }
    if (user.password !== password) {
        return res.status(400).json({ message: 'Неверный логин или пароль!' })
    }
    const token = generateAccessToken(user._id)
    res.json({
        success: true,
        message: 'Вы успешно авторизовались!',
        token: token
    })
})

app.get('/products', async (req, res) => {

    const products = await Product.find()

    res.json({
        data: products
    })
})


app.post('/add', async (req, res) => {
    console.log(req.body)
    const { title, image, price, rating } = (req.body)

    const newProduct = new Product({
        title,
        image,
        price,
        rating
    });

    await newProduct.save();
    res.status(201).json({ message: 'Товар успешно добавлен!', product: newProduct });
})


const start = async () => {
    try {
        await mongoose.connect(URLDB, { authSource: 'admin' })
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch (e) {
        console.log(e)
    }
}


start()