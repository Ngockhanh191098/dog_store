const verifySignUp = require('../middlewares/verifySignup');
const controller = require('../controllers/auth.controller');

module.exports = (app) => {

    // set response header
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post('/api/auth/signup', verifySignUp, controller.signup);
    app.post('/api/auth/signin', controller.signin);
}