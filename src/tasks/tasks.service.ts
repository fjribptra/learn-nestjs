import { TasksRepository } from "./tasks.repository";

export class TasksService {
    taskrepo: TasksRepository

    constructor() {
        this.taskrepo = new TasksRepository
    }

    findAll() {
        return this.taskrepo.findall()
    }

    findOne(id: string) {
        return this.taskrepo.findOne(id)
    }

    create(title: string, description: string) {
        return this.taskrepo.create(title, description)
    }
}

