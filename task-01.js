const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createMathTest = (minNum = 0, maxNum = 10) => {
  const operandOne = randomNumber(minNum, maxNum);
  const operandTwo = randomNumber(minNum, maxNum);
  const oprators = ["+", "-", "*", "/"];
  const randomOperator = oprators[3];

  let result = 0;

  switch (randomOperator) {
    case "+":
      result = operandOne + operandTwo;
      break;
    case "-":
      result = operandOne - operandTwo;
      break;
    case "*":
      result = operandOne * operandTwo;
      break;
    case "/":
      if (operandTwo === 0) {
        result = 0;
        break;
      }
      result = operandOne / operandTwo;
      if (result - Math.abs(result) === 0) {
        break;
      }
      result = parseFloat(result.toFixed(2));
      break;
  }

  return {
    expression: `${operandOne} ${randomOperator} ${operandTwo}`,
    result: result,
  };
};

const { expression, result } = createMathTest(-100, 100);

const userAnswer = parseFloat(prompt(expression)?.trim());

userAnswer === result
  ? alert("Верно!")
  : alert(`Не верно =( Ответ: ${expression} = ${result}`);
