const profile = async (req, res) => {
    res.send({ message: "Profile Page", user: req.user })
}

module.exports = {profile}