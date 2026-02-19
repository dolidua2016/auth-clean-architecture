const bcrypt = require("bcrypt")

class BcryptService {
  async hash(password) {
    return bcrypt.hash(password, 10)
  }

  async compare(password, hashed) {
    return bcrypt.compare(password, hashed)
  }
}

module.exports = BcryptService
