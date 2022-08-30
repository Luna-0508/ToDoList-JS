let input = prompt("What would you like to do?");

const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    for (let i = 0; i < todos.length; i++) {
      console.log("*****************");
      console.log(`${i}: ${todos[i]}`);
      console.log("*****************");
    }
  }
  input = prompt("What would you like to do?");
}

console.log("OK, QUIT THE APP!");
