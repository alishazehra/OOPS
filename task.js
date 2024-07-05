#! /usr/bin/env node
// src/task.ts
export class Task {
    id;
    description;
    completed;
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
    toggleCompletion() {
        this.completed = !this.completed;
    }
}
