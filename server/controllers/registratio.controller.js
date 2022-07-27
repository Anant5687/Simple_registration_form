const Registration = require('../model/registrationUser')

const forRegisterUser = async (req, res) => {

    const { fname, lname, gender, dob } = req.body

    try {
        const newUser = new Registration({
            fname, lname, gender, dob
        })

        await newUser.save()

        res.status(201).json(newUser)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const gettingUserInfo = async (req, res) => {
    try {

        const allUsers = await Registration.find()
        res.status(200).json(allUsers)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    forRegisterUser,
    gettingUserInfo
}