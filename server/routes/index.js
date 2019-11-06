import express from 'express';
import { userObject } from '../controllers/user'
import { exerciseObject } from '../controllers/exercise';

const { getAllUsers, addUser } = userObject;
const { getAllExercises, addExercise, getExercise, deleteExercise, updateExercise } = exerciseObject;

export const router = express.Router();

router.get('/users', getAllUsers);
router.post('/add', addUser);
router.get('/exercises', getAllExercises);
router.post('/exercises', addExercise);
router.get('/exercises/:id', getExercise);
router.delete('/exercises/:id', deleteExercise);
router.put('/exercises/:id', updateExercise);