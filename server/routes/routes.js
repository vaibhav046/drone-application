const controlCenter = require('../model/controlCenter');

module.exports = (app) => {
    app.post('/readyForPickup', async (req, res) => {
        let message = req.body;
        if (message === 'pickup') {
            let cc = await controlCenter.findOneAndUpdate({ message: 'done' });
            cc = await controlCenter._drone.findOneAndUpdate({ message: 'pickup' });
        }
        res.status(200).send(cc);
    });
}