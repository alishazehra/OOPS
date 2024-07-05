#! /usr/bin/env node
// src/task.ts
export class Task {
    constructor(public id: number, public description: string, public completed: boolean = false) {}

    toggleCompletion() {
        this.completed = !this.completed;
    }
}

