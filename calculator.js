const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumberInput(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (input) => {
            const num = parseFloat(input);
            if (isNaN(num)) {
                console.log("❌ Invalid input. Please enter a number.");
                resolve(getNumberInput(promptText)); // Retry if invalid
            } else {
                resolve(num);
            }
        });
    });
}

async function main() {
    console.log("=== Simple Calculator ===");

    const num1 = await getNumberInput("Enter first number: ");
    const num2 = await getNumberInput("Enter second number: ");

    const sum = num1 + num2;
    const diff = num1 - num2;
    const prod = num1 * num2;
    const div = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    const avg = (num1 + num2) / 2;

    console.log(`\nResults:
    ➕ Sum: ${sum}
    ➖ Difference: ${diff}
    ✖️ Product: ${prod}
    ➗ Division: ${div}
    📊 Average: ${avg}`);

    rl.close();
}

main();
