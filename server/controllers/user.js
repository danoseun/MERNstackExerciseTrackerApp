import User from '../models/user';

export const userObject = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            return res.status(200).json({
                users
            });
        } catch(error) {
            return res.status(400).json({
                error: error.message
            });
        }
    },

    async addUser(req, res) {
        const { username } = req.body;
        try {
            const newUser = await new User({username});
            await newUser.save();
            return res.status(201).json({
                message: 'user sucessfully onboarded'
            });

        } catch(error) {
            return res.status(400).json({
                error: error.message
            });
        }
    }
}