#! /usr/bin/env node
// src/taskManager.ts
import { Task } from './task.js';

export class TaskManager {
    private tasks: Task[] = [];

    addTask(description: string) {
        const task = new Task(this.tasks.length + 1, description);
        this.tasks.push(task);
    }

    listTasks() {
        console.log("\nTasks:");
        this.tasks.forEach(task => {
            console.log(`[${task.id}] ${task.description} - ${task.completed ? 'Completed' : 'Pending'}`);
        });
    }

    toggleTaskCompletion(id: number) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleCompletion();
        } else {
            console.log(`Task with id ${id} not found.`);
        }
    }
}

