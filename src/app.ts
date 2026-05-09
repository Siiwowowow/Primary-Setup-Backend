// Enable URL-encoded form data parsing
import express, { Application, Request, Response } from 'express';
import { prisma } from './app/lib/prisma';
const app: Application = express();
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', async (req: Request, res: Response) => {
  const User=await prisma.user.create({
    data:{
      name:"James",
      email:"demo@gmail.com"
    }
  });
  res.status(200).json({
    success:true,
    data:User,
    message:"User created successfully"
  });
});
export default app;