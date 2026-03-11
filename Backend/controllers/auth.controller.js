

exports.getCurrentUser = (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            authenticated: false,
            message: "User not authenticated"
        });
    }

    return res.json({
        authenticated: true,
        user: {
            githubId: req.user.githubId,
            username: req.user.username
        }
    });
};

exports.loginSuccess = (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            message: "Login failed"
        });
    }

    return res.json({
        message: "Login successful",
        user: req.user
    });
};

exports.logout = (req, res) => {
    req.logout(function(err) {
        if (err) {
            return res.status(500).json({ error: "Logout failed" });
        }

        req.session.destroy();

        res.json({
            message: "Logged out successfully"
        });
    });
};