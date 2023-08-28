const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [];

let userCount = 0;

app.use(bodyParser.json());

// 1. Create a new user.
// 2. Get user details by ID.
// 3. List all users.
// 4. List all orders for an User

app.post('/create-user', async (req, res) => {
    const {
        name,
        email,
    } = req.body;

    users.push({
        id: ++userCount,
        name,
        email,
    })
    res.send('user created successfully');
});

app.get('/user-details/:id', (req, res) => {
    const userId = +req.params.id;

    const user = users.find(o => o.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(401).send('User not found');
    }

});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/order-details', async (req, res) => {
    const response = await axios.get('http://localhost:3007/order-details/' + '1');
    const orders = response.data;

    res.json(orders);
});

app.listen(port, () => console.log(`user app listening on port ${port}!`));
