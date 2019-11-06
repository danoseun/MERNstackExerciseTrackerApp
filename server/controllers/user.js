import { User } from '../models/user';
import { hashSync } from 'bcrypt';

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
        const { username, password } = req.body;
    
        if(!username || !password) {
            return res.status(400).json({
                error: 'Input username and password'
            });
        }
        const newUser = new User({
            username,
            password
        });
        const newPass = hashSync(password, 10);
        
        try {
            newUser.password = newPass;
            const result = await newUser.save();
            return res.status(201).json({
                message: 'user sucessfully onboarded',
                result
            });

        } catch(error) {
            return res.status(400).json({
                error: error.message
            });
        }
    }
}