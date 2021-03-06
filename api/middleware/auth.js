const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const Auth = req.headers.authorization
    if (Auth && Auth.split(' ')[0] === 'Bearer') {
        const token = Auth.split(' ')[1];
        if (token) {
            await jwt.verify(token, 'secretKey', (err, Data) => {
                if (err) {
                    res.status(401).json({
                        status: false,
                        statusCode: 401,
                        message: 'Please login again....'
                    })
                }
                req.user = {
                    id:Data.userId,
                    exp: Data.exp
                }
                next()

            })
        }
    } else {
        res.json({
            status: false,
            statusCode: 401,
            message: 'Plase provide token...'
        })
    }
}

module.exports = {
    auth
}