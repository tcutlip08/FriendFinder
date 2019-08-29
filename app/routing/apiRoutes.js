var friends = require("../data/friends");

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends/', function (req, res) {
        var allDiffs = [];
        var scores = req.body.scores;
        console.log(scores);

        for (let i = 0; i < friends.length; i++) {
            var diff = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));
            }
            allDiffs.push(diff);
        }

        var lowestDiff = 0;
        for (let i = 0; i < allDiffs.length; i++){
            if (allDiffs[i] < allDiffs[lowestDiff]){
                lowestDiff = i;
            }
        }
        var newBestFriend = friends[lowestDiff];

        res.json(newBestFriend);
        friends.push(req.body);
    });
}