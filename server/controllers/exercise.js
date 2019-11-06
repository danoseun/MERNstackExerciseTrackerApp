import { Exercise } from '../models/exercise';

export const exerciseObject = {
    async getAllExercises(req, res) {
        try {
            const exercises = await Exercise.find();
            return res.status(200).json({
                exercises
            });
        } catch(error) {
            return res.status(400).json({
                error: error.message
            });
        }
    },

    async addExercise(req, res) {
        let exerciseArray;
        exerciseArray = Object.keys(req.body);
        const expectedArray = ['date', 'description', 'duration', 'username'];
        exerciseArray = exerciseArray.sort();
        if(!(JSON.stringify(exerciseArray) === JSON.stringify(expectedArray))) {
            return res.status(400).json({
                error: `You should supply only ${expectedArray}`
            })
        }
        else{
            const { username, date, description, duration } = req.body;
            const time = Number(duration);
            const dat = Date.parse(date);
            let newExercise = new Exercise({
                username,
                description,
                duration,
                date
            });
            try{
                newExercise.duration = time;
                newExercise.date = dat;
                const result = await newExercise.save();
                return res.status(201).json({
                    message: 'exercise successfully created',
                    result
                });
            } catch(error) {
                return res.status(400).json({
                    error: error.message
                });
            }
            
        }
    },

    async getExercise(req, res) {
        try {
            let result = await Exercise.findById(req.params.id);
            console.log('result', result);
            if(!result) {
                return res.status(404).json({
                    error: 'Not found'
                });
            }
            return res.status(200).json({
                result
            });
        } catch(error) {
            return res.status(400).json({
                error: error.message
            })
        }
    },

    async deleteExercise(req, res) {
        try {
            let result = await Exercise.findByIdAndDelete(req.params.id)
            if (result) {
            return res.status(200).json({
                message: 'exercise deleted'
            });
         } return res.status(404).json({error: 'not found'});
        } catch(err) {
            return res.status(400).json({
                error: error.message
            });
        }
    },

    async updateExercise(req, res) {
        try {
            let result = await Exercise.findById(req.params.id);
            result.username = req.body.username;
            result.description = req.body.description;
            result.duration = Number(req.body.duration);
            result.date = Date.parse(req.body.date);

            await result.save();
            return res.status(200).json({
                message: 'Exercise updated',
                result
            });
        } catch(error){
            return res.status(400).json({
                error: error.message
            });
        }
    }
};