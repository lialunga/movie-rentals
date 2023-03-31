import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { AppError } from "../../errors/AppError";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const user_id = req.user.id;

    const usersRepsitory = new UsersRepository();

    const user = await usersRepsitory.findById(user_id);

    if(!user.isAdmin)
        throw new AppError("User is not admin!", 401);

    next();
}