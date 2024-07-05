#! /usr/bin/env node
import inquirer from 'inquirer';
import { TaskManager } from './taskManager.js';
const taskManager = new TaskManager();
async function promptUser() {
    while (true) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: [
                    'Add a task',
                    'List tasks',
                    'Toggle task completion',
                    'Exit'
                ]
            }
        ]);
        switch (answers.action) {
            case 'Add a task':
                const addTaskAnswer = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'description',
                        message: 'Enter task description:'
                    }
                ]);
                taskManager.addTask(addTaskAnswer.description);
                break;
            case 'List tasks':
                taskManager.listTasks();
                break;
            case 'Toggle task completion':
                const toggleTaskAnswer = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'taskId',
                        message: 'Enter task ID to toggle completion:'
                    }
                ]);
                taskManager.toggleTaskCompletion(parseInt(toggleTaskAnswer.taskId, 10));
                break;
            case 'Exit':
                process.exit();
        }
    }
}
promptUser();
