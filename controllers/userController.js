const { Player } = require('../models');

module.exports = {
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