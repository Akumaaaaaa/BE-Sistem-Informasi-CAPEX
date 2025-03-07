const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: Token not provided' });
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Access Denied: Invalid Token' });
    }
};

module.exports = authMiddleware;
