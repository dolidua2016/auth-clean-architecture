class LoginUser {
  constructor(userRepository, bcryptService, jwtService) {
    this.userRepository = userRepository
    this.bcryptService = bcryptService
    this.jwtService = jwtService
  }

  async execute({ email, password }) {
    
    if(!email )throw new Error("Email is required")
    if(!password)throw new Error("Password is required")

    const user = await this.userRepository.findByEmail(email)
    if (!user) throw new Error("Invalid credentials")

    const valid = await this.bcryptService.compare(password, user.password)
    if (!valid) throw new Error("Invalid credentials")

    return this.jwtService.generate({ id: user.id, email: user.email })
  }
}

module.exports = LoginUser
