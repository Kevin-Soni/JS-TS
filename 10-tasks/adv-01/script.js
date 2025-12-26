const tasks = [
    {task: "build UI" , hours: 5},
    {task: "API integration" , hours: 3},
    {task: "testing" , hours: 2},

];

const totalhours = tasks.reduce((sum, task)=> sum + task.hours, 0);

const averagehours = totalhours / tasks.length;

console.log(averagehours);
