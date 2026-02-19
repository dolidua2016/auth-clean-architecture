const JwtService = require("../../infrastructure/services/JwtService")
const jwtService = new JwtService()

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" })

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwtService.verify(token)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" })
  }
}
