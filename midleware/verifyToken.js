const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
	const authHeader = req.headers.token;
	if (authHeader) {
		jwt.verify(authHeader, process.env.CODE, (err, user) => {
			if (err) return res.status(403).json("Token is not valid!");
			next();
		});
	} else {
		return res.status(401).json("You are not authenticated");
	}
}

module.exports = {verifyToken};
