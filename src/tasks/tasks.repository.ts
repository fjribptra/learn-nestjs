import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
@Injectable()

export class TasksRepository {
    async findall() : Promise<any> {
        const data = await readFile('tasks.json', 'utf-8');
        return JSON.parse(data);
    }
    async findOne(id: string) {
        const data = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(data);

        return tasks.find((task: any) => task.id === id);
    }
    async create(title: string, description: string) {
        const data = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(data);
        const idToString = (value: number) => value.toString();
        const newTask = { id: idToString(tasks.length + 1), title, description };
        tasks.push(newTask);

        await writeFile('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');
    }
}