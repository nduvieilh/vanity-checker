import express from 'express';
import PlatesRouter from './plates/plates-router.controller';
const router = express.Router();

router.use('/plates', PlatesRouter); 

export default router;