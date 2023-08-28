const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3007;

const orders = [];

let orderCount = 0;

app.use(bodyParser.json());
app.post('/create-order', async (req, res) => {
    const {
        userId,
        quantity,
        name,
    } = req.body;

    orders.push({
        id: ++orderCount,
        userId,
        quantity: +quantity,
        name,
    })
    res.send('order placed successfully');
});

app.get('/order-details/:id', (req, res) => {
    const orderId = +req.params.id;

    const order = orders.find(o => o.id === orderId);

    if (order) {
        res.json(order);
    } else {
        res.status(401).send('Order not found');
    }

});

app.get('/user-orders/:userId', (req, res) => {
    const userId = req.params.userId;

    console.log(userId);
    console.log(orders);


    if (userId) {
        return res.json(orders.filter(o => +o.userId === +userId));
    }

    res.json(orders);
});

app.listen(port, () => console.log(`orders app listening on port ${port}!`));
