const SequelizeUserRepository = require("../../infrastructure/database/SequelizeUserRepository")
const JwtService = require("../../infrastructure/services/JwtService")
const BcryptService = require("../../infrastructure/services/BcryptService")
const RegisterUser = require("../../application/usecases/RegisterUser")
const LoginUser = require("../../application/usecases/LoginUser")

const userRepo = new SequelizeUserRepository()
const jwtService = new JwtService()
const bcryptService = new BcryptService()

const registerUser = new RegisterUser(userRepo, bcryptService)
const loginUser = new LoginUser(userRepo, bcryptService, jwtService)

exports.register = async (req, res) => {
  try {
    const result = await registerUser.execute(req.body)
    res.json(result)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.login = async (req, res) => {
  try {
    const token = await loginUser.execute(req.body)
    res.json({ token })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
