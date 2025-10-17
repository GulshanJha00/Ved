import shuffleArray from "./suffleArray";

const oddOneOutQuestions = [
  {
    question: "Find the odd one out: 2, 3, 5, 7, 9, 11",
    options: ["2", "3", "9", "5"],
    answer: "9",
    explanation: "All numbers are prime except 9.",
    company: "Amazon"
  },
  {
    question: "Find the odd one out: Apple, Banana, Mango, Carrot",
    options: ["Apple", "Banana", "Mango", "Carrot"],
    answer: "Carrot",
    explanation: "All are fruits except Carrot which is a vegetable.",
    company: "Wipro"
  },
  {
    question: "Find the missing number: 3, 9, 27, ?, 243",
    options: ["54", "81", "72", "90"],
    answer: "81",
    explanation: "Pattern: Multiply by 3 → 3*3=9, 9*3=27, 27*3=81",
    company: "Infosys"
  },
  {
    question: "Find the odd one out: 14, 21, 28, 35, 42, 50",
    options: ["14", "21", "50", "35"],
    answer: "50",
    explanation: "All numbers divisible by 7 except 50.",
    company: "TCS"
  },
  {
    question: "Find the odd one out: Red, Blue, Green, Circle",
    options: ["Red", "Blue", "Green", "Circle"],
    answer: "Circle",
    explanation: "All are colors except Circle which is a shape.",
    company: "Microsoft"
  },
  {
    question: "Find the missing number: 5, 10, 20, 40, ?",
    options: ["70", "80", "75", "85"],
    answer: "80",
    explanation: "Pattern: Multiply by 2 → 5*2=10, 10*2=20, 20*2=40, 40*2=80",
    company: "Capgemini"
  },
  {
    question: "Find the odd one out: Dog, Cat, Rabbit, Sparrow",
    options: ["Dog", "Cat", "Rabbit", "Sparrow"],
    answer: "Sparrow",
    explanation: "All are mammals except Sparrow which is a bird.",
    company: "Cognizant"
  },
  {
    question: "Find the missing number: 2, 4, 8, 16, ?",
    options: ["32", "30", "34", "28"],
    answer: "32",
    explanation: "Pattern: Multiply by 2 → 16*2=32",
    company: "Amazon"
  },
  {
    question: "Find the odd one out: Mercury, Venus, Mars, Moon",
    options: ["Mercury", "Venus", "Mars", "Moon"],
    answer: "Moon",
    explanation: "All are planets except Moon which is a satellite.",
    company: "Wipro"
  },
  {
    question: "Find the missing number: 1, 4, 9, 16, 25, ?",
    options: ["36", "30", "35", "32"],
    answer: "36",
    explanation: "Pattern: Perfect squares → 6^2=36",
    company: "Infosys"
  },
  {
    question: "Find the odd one out: Table, Chair, Bed, Plate",
    options: ["Table", "Chair", "Bed", "Plate"],
    answer: "Plate",
    explanation: "All are furniture except Plate which is a utensil.",
    company: "TCS"
  },
  {
    question: "Find the missing number: 2, 6, 12, 20, ?",
    options: ["30", "28", "32", "26"],
    answer: "30",
    explanation: "Pattern: n^2 + n → 1^2+1=2, 2^2+2=6, ..., 5^2+5=30",
    company: "Microsoft"
  },
  {
    question: "Find the odd one out: Circle, Triangle, Square, Blue",
    options: ["Circle", "Triangle", "Blue", "Square"],
    answer: "Blue",
    explanation: "All are shapes except Blue which is a color.",
    company: "Capgemini"
  },
  {
    question: "Find the missing number: 7, 14, 28, ?, 112",
    options: ["54", "56", "60", "58"],
    answer: "56",
    explanation: "Pattern: Multiply by 2 → 28*2=56",
    company: "Cognizant"
  },
  {
    question: "Find the odd one out: Rose, Jasmine, Tulip, Mango",
    options: ["Rose", "Jasmine", "Tulip", "Mango"],
    answer: "Mango",
    explanation: "All are flowers except Mango which is a fruit.",
    company: "Amazon"
  },
  {
    question: "Find the missing number: 3, 6, 12, 24, ?",
    options: ["48", "46", "50", "52"],
    answer: "48",
    explanation: "Pattern: Multiply by 2 → 24*2=48",
    company: "Wipro"
  },
  {
    question: "Find the odd one out: 101, 103, 107, 110",
    options: ["101", "103", "107", "110"],
    answer: "110",
    explanation: "All numbers are prime except 110.",
    company: "Infosys"
  },
  {
    question: "Find the missing number: 1, 8, 27, 64, ?",
    options: ["125", "120", "130", "128"],
    answer: "125",
    explanation: "Pattern: Perfect cubes → 5^3=125",
    company: "TCS"
  },
  {
    question: "Find the odd one out: Gold, Silver, Copper, Water",
    options: ["Gold", "Silver", "Copper", "Water"],
    answer: "Water",
    explanation: "All are metals except Water which is a liquid.",
    company: "Microsoft"
  },
  {
    question: "Find the missing number: 10, 20, 40, 80, ?",
    options: ["160", "150", "170", "155"],
    answer: "160",
    explanation: "Pattern: Multiply by 2 → 80*2=160",
    company: "Capgemini"
  }
];

// Shuffle options for each question
oddOneOutQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default oddOneOutQuestions;
