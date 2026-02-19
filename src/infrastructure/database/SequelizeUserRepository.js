const UserRepository = require("../../domain/repositories/UserRepository")
const UserModel = require("./models/userModel")

class SequelizeUserRepository extends UserRepository {
  async findByEmail(email) {
    return await UserModel.findOne({ where: { email } })
  }

  async save(user) {
    return await UserModel.create(user)
  }
}

module.exports = SequelizeUserRepository
