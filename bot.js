module.exports = function(req, res, next) {
    var username = req.body.user_name;

    var botPayload = {
        text : username
    };

    // avoid infinite loop
    if (username !== 'slackbot') {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
};