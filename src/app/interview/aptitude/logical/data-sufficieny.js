import shuffleArray from "./suffleArray";

const dataSufficiencyQuestions = [
  {
    question: "What is the value of x?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: x+y=10, Statement II: y=4 → together x=6.",
    company: "Amazon"
  },
  {
    question: "Is number A divisible by 3?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: Sum of digits divisible by 3, Statement II: A=123x → combined confirm divisibility.",
    company: "Wipro"
  },
  {
    question: "What is the value of y?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement II alone is sufficient",
    explanation: "Statement II: 2y+3=11 → y=4, sufficient alone.",
    company: "Infosys"
  },
  {
    question: "Is x>y?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement I alone is sufficient",
    explanation: "Statement I: x=10, y=5 → x>y, sufficient.",
    company: "TCS"
  },
  {
    question: "What is the value of z?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: z+y=15, Statement II: y=5 → z=10.",
    company: "Microsoft"
  },
  {
    question: "Is A divisible by 5?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement I alone is sufficient",
    explanation: "Statement I: Last digit is 0 → divisible by 5.",
    company: "Capgemini"
  },
  {
    question: "What is the value of m?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: m+n=20, Statement II: n=8 → m=12.",
    company: "Cognizant"
  },
  {
    question: "Is x an even number?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement II alone is sufficient",
    explanation: "Statement II: x=14 → even.",
    company: "Amazon"
  },
  {
    question: "What is the sum of P and Q?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: P-Q=2, Statement II: P+Q=12 → sum known.",
    company: "Wipro"
  },
  {
    question: "Is number N prime?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Even both together are insufficient",
    explanation: "Statements give partial info, but N could still be composite or prime.",
    company: "Infosys"
  },
  {
    question: "What is the value of x?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement II alone is sufficient",
    explanation: "Statement II: 3x=12 → x=4, sufficient alone.",
    company: "TCS"
  },
  {
    question: "Is A>B?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: A-C=5, Statement II: B-C=2 → A-B=3 → A>B.",
    company: "Microsoft"
  },
  {
    question: "What is the value of Y?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement I alone is sufficient",
    explanation: "Statement I: Y+5=10 → Y=5, sufficient alone.",
    company: "Capgemini"
  },
  {
    question: "Is number X divisible by 4?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: Last two digits divisible by 4, Statement II: confirms total number → divisible.",
    company: "Cognizant"
  },
  {
    question: "What is the value of a+b?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: a-b=3, Statement II: a=5 → b=2 → a+b=7.",
    company: "Amazon"
  },
  {
    question: "Is number M even?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement I alone is sufficient",
    explanation: "Statement I: M divisible by 2 → even.",
    company: "Wipro"
  },
  {
    question: "What is the value of x+y?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: x-y=2, Statement II: y=3 → x+y=8.",
    company: "Infosys"
  },
  {
    question: "Is number P divisible by 6?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Both together are sufficient",
    explanation: "Statement I: divisible by 2, Statement II: divisible by 3 → divisible by 6.",
    company: "TCS"
  },
  {
    question: "What is the value of m?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Statement II alone is sufficient",
    explanation: "Statement II: m+3=10 → m=7, sufficient alone.",
    company: "Microsoft"
  },
  {
    question: "Is A the largest among B, C, D?",
    options: [
      "Statement I alone is sufficient",
      "Statement II alone is sufficient",
      "Both together are sufficient",
      "Even both together are insufficient"
    ],
    answer: "Even both together are insufficient",
    explanation: "Statements provide partial info but do not determine largest.",
    company: "Capgemini"
  }
];

// Shuffle options for each question
dataSufficiencyQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default dataSufficiencyQuestions;
