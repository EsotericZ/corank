const { 
    User,
    Player 
} = require('../models');

module.exports = {
    login: async (req, res) => {
        try {
            const userData = await User.findOne({
                where: {
                    username: req.body.username
                }
            });
            const userFound = userData.get({ plain: true });
            if (userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.user = userFound;
                    res.json({ success: true });
                });
            }
        } catch (e) {
            res.json(e);
        }
    },

    adminLogin: async (req, res) => {
        res.render('adminLogin');
    },

    adminPage: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/');
        }
        if (req.session.user.role == 'user') {
            return res.redirect('/');
        }
        res.render('adminPage');
    },

    renderHome: async (req, res) => {
        try {
            const playerData = await Player.findAll();
            res.render('homepage', {
                allPlayers: playerData.map(player => player.get({ plain: true })),
            });
        } catch (e) {
            res.json(e);
        }
    },
}