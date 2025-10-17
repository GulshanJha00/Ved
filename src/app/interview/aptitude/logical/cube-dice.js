import shuffleArray from "./suffleArray";

const cubesDiceQuestions = [
  {
    question: "A dice has numbers 1 to 6. If opposite faces sum to 7, which number is opposite 3?",
    options: ["4", "3", "2", "5"],
    answer: "4",
    explanation: "Opposite faces sum to 7 → 3+4=7 → 4 is opposite 3.",
    company: "Amazon"
  },
  {
    question: "If a cube is painted on all faces and cut into 27 smaller cubes, how many have exactly 2 painted faces?",
    options: ["12", "8", "6", "9"],
    answer: "12",
    explanation: "Edge cubes (excluding corners) have exactly 2 painted faces; 12 edges × 1 cube per edge =12.",
    company: "Wipro"
  },
  {
    question: "A cube has numbers 1 to 6 on faces. If opposite faces sum to 7, what is opposite 5?",
    options: ["2", "1", "3", "6"],
    answer: "2",
    explanation: "Opposite faces sum to 7 → 5+2=7 → 2 opposite 5.",
    company: "Infosys"
  },
  {
    question: "A dice is thrown twice. What is the probability of getting two 6s?",
    options: ["1/36", "1/6", "1/12", "1/18"],
    answer: "1/36",
    explanation: "Probability of 6 in one throw =1/6 → two throws: (1/6)*(1/6)=1/36.",
    company: "TCS"
  },
  {
    question: "How many corner cubes have 3 painted faces when a cube painted on all faces is cut into 27 smaller cubes?",
    options: ["8", "12", "6", "9"],
    answer: "8",
    explanation: "Corners of a cube have 3 faces exposed → 8 corners.",
    company: "Microsoft"
  },
  {
    question: "If a cube is rolled, what is the probability of getting an odd number?",
    options: ["1/2", "1/3", "2/3", "1/6"],
    answer: "1/2",
    explanation: "Odd numbers: 1,3,5 → 3 out of 6 → probability =1/2.",
    company: "Capgemini"
  },
  {
    question: "A cube is painted on 2 opposite faces only and cut into 8 smaller cubes. How many cubes have exactly one painted face?",
    options: ["4", "2", "6", "8"],
    answer: "4",
    explanation: "4 cubes on the painted faces have 1 painted face each.",
    company: "Cognizant"
  },
  {
    question: "Which number is opposite 1 on a standard dice?",
    options: ["6", "5", "3", "4"],
    answer: "6",
    explanation: "Opposite faces sum to 7 → 1+6=7 → opposite of 1 is 6.",
    company: "Amazon"
  },
  {
    question: "If 3 cubes are stacked, how many faces are visible?",
    options: ["14", "12", "10", "16"],
    answer: "14",
    explanation: "Each cube has 6 faces → top 1, sides 3 per cube in middle, bottom not visible → 14.",
    company: "Wipro"
  },
  {
    question: "If a dice shows 4 on top and 2 in front, what is the number on the right side?",
    options: ["1", "3", "5", "6"],
    answer: "5",
    explanation: "Standard dice opposite faces sum to 7 → 4 opposite 3, 2 opposite 5 → right side =5.",
    company: "Infosys"
  },
  {
    question: "A cube is painted on all faces and cut into 64 smaller cubes. How many cubes have no paint?",
    options: ["8", "27", "36", "24"],
    answer: "8",
    explanation: "Inner cubes not touching any face → (4-2)^3=2^3=8 cubes have no paint.",
    company: "TCS"
  },
  {
    question: "A dice is rolled once. What is the probability of getting a number greater than 4?",
    options: ["1/3", "1/2", "1/6", "2/3"],
    answer: "1/3",
    explanation: "Numbers >4 are 5 and 6 → 2/6=1/3.",
    company: "Microsoft"
  },
  {
    question: "If a cube is cut into 27 smaller cubes, how many cubes have exactly one face painted?",
    options: ["6", "8", "12", "1"],
    answer: "6",
    explanation: "Center cubes on each face → 6 faces ×1=6.",
    company: "Capgemini"
  },
  {
    question: "If opposite faces of a dice sum to 7, what is opposite 2?",
    options: ["5", "4", "3", "6"],
    answer: "5",
    explanation: "2+5=7 → opposite of 2 is 5.",
    company: "Cognizant"
  },
  {
    question: "A dice is thrown twice. Probability of getting a sum of 7?",
    options: ["1/6", "1/8", "1/12", "1/9"],
    answer: "1/6",
    explanation: "Sum 7 pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) →6/36=1/6.",
    company: "Amazon"
  },
  {
    question: "If a cube is painted on three adjacent faces only and cut into 8 smaller cubes, how many cubes have exactly 2 painted faces?",
    options: ["3", "2", "1", "4"],
    answer: "3",
    explanation: "Edges touching 2 painted faces: 3 edges → 3 cubes.",
    company: "Wipro"
  },
  {
    question: "A dice shows 3 on top. What is the number on the bottom face?",
    options: ["4", "5", "3", "6"],
    answer: "4",
    explanation: "Opposite faces sum to 7 → 3+4=7 → bottom =4.",
    company: "Infosys"
  },
  {
    question: "A cube is divided into 64 smaller cubes. How many corner cubes have 3 painted faces?",
    options: ["8", "6", "4", "12"],
    answer: "8",
    explanation: "Corners always have 3 faces painted → 8 corners.",
    company: "TCS"
  },
  {
    question: "Probability of getting a prime number when a dice is rolled once?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: "1/2",
    explanation: "Prime numbers on dice: 2,3,5 → 3/6=1/2.",
    company: "Microsoft"
  },
  {
    question: "A dice is rolled once. Probability of getting an even number?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: "1/2",
    explanation: "Even numbers: 2,4,6 → 3/6=1/2.",
    company: "Capgemini"
  }
];

// Shuffle options for each question
cubesDiceQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default cubesDiceQuestions;
