import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

interface IPayLoad {
    sub: string;
}


export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new AppError("Token is missing!", 401);
    }

    const [, token] = authHeader.split(' ');

    const { sub: user_id } = verify(token, "qualquer coisa secreta") as IPayLoad;

    const userRepository = new UsersRepository()

    const user = userRepository.findById(user_id);

    if(!user)
        throw new AppError("Invalid token!", 401);
        
    req.user = {
        id: user_id
    } 

    next();
}