const jwt = require("jsonwebtoken");
const User = require("../models/userModal");

const requireAuth = async (req, res, next) => {
  // Verifica a autenticação
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authoriation token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id: id }).select("_id");

    next();
  } catch (err) {
    res.status(401).json({ error: "O token não está autorizado" });
  }
};

module.exports = requireAuth;
