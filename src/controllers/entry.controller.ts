import { Request, Response } from 'express';
import path from 'path';

export const getEntry = (req: Request, res: Response) => {
  try{
    res.sendFile(path.join(__dirname, '../index.html'))
  }
  catch(error){
    console.error("Root endpoint error:", error);
    process.exit(1);
  }
};
