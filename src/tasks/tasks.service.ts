import { Injectable } from "@nestjs/common";
import { TasksRepository } from "./tasks.repository";
@Injectable()

export class TasksService {

    constructor(public taskRepo: TasksRepository) {}

    findAll() {
        return this.taskRepo.findall()
    }

    findOne(id: string) {
        return this.taskRepo.findOne(id)
    }

    create(title: string, description: string) {
        return this.taskRepo.create(title, description)
    }
}

