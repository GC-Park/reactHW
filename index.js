const express = require('express')
const path = require('path')
const con = require('./models/mysql')

const app = new express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {})

app.post('/Signup', (req, res) => {
    const { id, pw, pwcheck, email, name, phone, address, country } = req.body
    if (
        !id ||
        !pw ||
        !pwcheck ||
        !email ||
        !name ||
        !phone ||
        !address ||
        !country
    ) {
        return {
            data: {},
        }
    }
    con.query(
        `INSERT INTO register (id, pw, email, name, phone, address, country) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, pw, email, name, phone, address, country]
    )
    return {
        data: {
            success,
        },
    }
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('App listening on port 8000')
})
