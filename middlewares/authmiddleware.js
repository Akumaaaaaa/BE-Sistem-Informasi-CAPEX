const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Extract the token from the request headers
    const token = req.header('auth-token');
    // Check if token is present
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: Token not provided' });
    }

    try {
        // Verify the token
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        // Attach the verified user ID to the request for further use
        req.user = verified;
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Token is invalid
        return res.status(403).json({ message: 'Access Denied: Invalid Token' });
    }
};

module.exports = authMiddleware;
