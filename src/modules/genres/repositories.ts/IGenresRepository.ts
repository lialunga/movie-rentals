import { Genre } from "@prisma/client"

interface IGenresRepository {
    create(name: string): Promise<Genre>;
    findByName(name: string): Promise<Genre>;
    list(): Promise<Genre[]>;
}

export { IGenresRepository };