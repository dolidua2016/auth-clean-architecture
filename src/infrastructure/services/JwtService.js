const jwt = require("jsonwebtoken")

class JwtService {
  generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h"
    })
  }

  verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}

module.exports = JwtService
