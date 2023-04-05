import { Genre } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { IGenresRepository } from "../IGenresRepository";


class GenresRepository implements IGenresRepository{
    async create(name: string): Promise<Genre> {
        const genre = await prismaClient.genre.create({
            data: {
                name
            }
        })

        return genre;
    }

    async findByName(name: string): Promise<Genre> {
        const genre = await prismaClient.genre.findFirst({
            where: {
                name
            }
        })

        return genre as Genre;
    }

    async list(): Promise<Genre[]> {
        const genres = await prismaClient.genre.findMany();

        return genres;
    }
    
    async findById(id: string): Promise<Genre> {
        const genre = await prismaClient.genre.findFirst({
            where: {
                id
            }
        })

        return genre as Genre;
    }
}

export { GenresRepository };