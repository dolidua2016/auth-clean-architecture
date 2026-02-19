const User = require("../../domain/entities/User")

class RegisterUser {
  constructor(userRepository, bcryptService) {
    this.userRepository = userRepository
    this.bcryptService = bcryptService
  }

  async execute({ email, password }) {
    if(!email )throw new Error("Email is required")
    if(!password)throw new Error("Password is required")

    const existing = await this.userRepository.findByEmail(email)
    if (existing) throw new Error("User already exists")

    const hashedPassword = await this.bcryptService.hash(password)
    const user = new User({ email, password: hashedPassword })

    return await this.userRepository.save(user)
  }
}

module.exports = RegisterUser
