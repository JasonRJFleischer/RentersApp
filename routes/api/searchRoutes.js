import data from '../data/data1.json';

module.exports = function (app) {
    app.get("/search", function (req, res) {
        data.find({
            plaintiff: [
                ['plaintiff']
            ]
        })
    })
}