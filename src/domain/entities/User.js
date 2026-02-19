class User {
  constructor({ email, password }) {
    if (!email) throw new Error("Email required")
    if (!password || password.length < 6)
      throw new Error("Password must be at least 6 characters")

    this.email = email
    this.password = password
  }
}

module.exports = User
