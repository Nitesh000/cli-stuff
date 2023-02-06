import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to do? ",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add another stuff? ",
            default: false,
        },
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input.");
    }
}
if (todos.length > 0) {
    console.log("Your TODO list: ");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
else {
    console.log("You have no TODOs.");
}
