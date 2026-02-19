require("dotenv").config()
const express = require("express")
const sequelize = require("./infrastructure/database/sequelize")

const authController = require("./presentation/controllers/authController")
const authMiddleware = require("./presentation/middlewares/authMiddleware")

const app = express()
app.use(express.json())

app.post("/register", authController.register)
app.post("/login", authController.login)

app.get("/profile", authMiddleware, (req, res) => {
  res.json({ user: req.user })
})

sequelize.sync().then(() => {
  console.log("Database connected")
  app.listen(ProcessingInstruction.env.PORT, () => console.log("Server running on port 3000"))
})
