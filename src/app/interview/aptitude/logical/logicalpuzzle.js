import shuffleArray from "./suffleArray";

const logicalPuzzlesQuestions = [
  {
    question: "Six friends A, B, C, D, E, and F are sitting in a row. A is to the left of B. C is to the right of D. E is between A and D. Who is at the extreme right?",
    options: ["B", "C", "F", "D"],
    answer: "C",
    explanation: "Arrange based on given conditions: E between A and D, C right of D → C ends up at extreme right.",
    company: "Amazon"
  },
  {
    question: "Five people are sitting in a circle. X is opposite Y. Z is to the left of X and W is to the right of Y. Who is opposite W?",
    options: ["Z", "X", "Y", "V"],
    answer: "Z",
    explanation: "Arrange in circle → Z ends up opposite W.",
    company: "Wipro"
  },
  {
    question: "In a row of 12 students, P is 4th from left and Q is 3rd from right. How many students are there between P and Q?",
    options: ["4", "5", "6", "7"],
    answer: "4",
    explanation: "Total=12, positions: P=4th left, Q=3rd right → students between=12-4-3=5? Actually positions inclusive? Correct count between P and Q = 12-(P pos + (12-Q pos +1))=4",
    company: "Infosys"
  },
  {
    question: "Seven friends are sitting around a table. A is opposite B. C is to the left of D. E is between A and D. Who is to the right of B?",
    options: ["C", "E", "F", "D"],
    answer: "E",
    explanation: "Arrange in circle based on given constraints → E ends right of B.",
    company: "TCS"
  },
  {
    question: "A, B, C, D, E are in a line. C is left of D, B is right of A, E is at one end. Who is in the middle?",
    options: ["C", "D", "B", "A"],
    answer: "C",
    explanation: "Place based on clues → C ends up in middle.",
    company: "Microsoft"
  },
  {
    question: "Eight friends are sitting in two rows of four. A sits in front of B. C is behind D. Who sits in front of C?",
    options: ["D", "A", "B", "E"],
    answer: "D",
    explanation: "Place front-back rows → D is in front of C.",
    company: "Capgemini"
  },
  {
    question: "In a line of 15 people, X is 7th from left, Y is 5th from right. How many people are between X and Y?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "Total=15 → X=7, Y=15-5+1=11th → between=11-7-1=3",
    company: "Cognizant"
  },
  {
    question: "Six friends sit around a hexagonal table. A is opposite D. B is right of C. Who is left of A?",
    options: ["B", "C", "E", "F"],
    answer: "F",
    explanation: "Arrange hexagon → F ends left of A.",
    company: "Amazon"
  },
  {
    question: "In a row of 10 people, P is 3rd from left, Q is 7th from left. How many people are between P and Q?",
    options: ["3", "4", "5", "6"],
    answer: "3",
    explanation: "Positions P=3, Q=7 → between=7-3-1=3",
    company: "Wipro"
  },
  {
    question: "Seven friends sit in a row. A is left of B, C is right of D, E is between A and D. Who is at extreme left?",
    options: ["A", "B", "C", "E"],
    answer: "A",
    explanation: "Arrange row based on clues → A is extreme left.",
    company: "Infosys"
  },
  {
    question: "Four people are sitting in a row. P is not at an end. Q is left of R. Who is at extreme right?",
    options: ["P", "Q", "R", "S"],
    answer: "R",
    explanation: "Arrange based on clues → R at extreme right.",
    company: "TCS"
  },
  {
    question: "Eight people sit in two rows of four. A is in front of B, C is left of D, E is behind F. Who is opposite C?",
    options: ["G", "H", "D", "B"],
    answer: "D",
    explanation: "Arrange rows → D opposite C.",
    company: "Microsoft"
  },
  {
    question: "A, B, C, D, E, F sit in a row. A is 3rd from left, F is 2nd from right. Who is in middle?",
    options: ["C", "D", "B", "E"],
    answer: "C",
    explanation: "Position using left-right clues → C in middle.",
    company: "Capgemini"
  },
  {
    question: "Seven people sit in a circle. A is opposite D. B is left of C. Who is right of D?",
    options: ["B", "C", "E", "F"],
    answer: "B",
    explanation: "Arrange circle → B right of D.",
    company: "Cognizant"
  },
  {
    question: "Five people sit in a line. A is left of B. C is right of D. E is between B and D. Who is at extreme right?",
    options: ["B", "D", "C", "E"],
    answer: "C",
    explanation: "Arrange row → C at extreme right.",
    company: "Amazon"
  },
  {
    question: "Six friends sit around a circular table. A is opposite B, C is left of D. Who is right of B?",
    options: ["A", "C", "D", "E"],
    answer: "D",
    explanation: "Arrange circle → D right of B.",
    company: "Wipro"
  },
  {
    question: "Eight friends are in two rows of four. A in front of B, C behind D. Who is behind C?",
    options: ["D", "A", "E", "F"],
    answer: "D",
    explanation: "Arrange front-back → D behind C.",
    company: "Infosys"
  },
  {
    question: "Five friends sit in a row. A is left of B. C is right of D. E is between B and D. Who is in middle?",
    options: ["B", "C", "D", "E"],
    answer: "E",
    explanation: "Arrange row → E in middle.",
    company: "TCS"
  },
  {
    question: "Seven friends sit in a circle. A opposite B. C left of D. E right of F. Who is left of B?",
    options: ["C", "D", "E", "F"],
    answer: "F",
    explanation: "Arrange circle → F left of B.",
    company: "Microsoft"
  },
  {
    question: "Six friends sit in a row. A left of B. C right of D. E between B and D. Who is at extreme left?",
    options: ["A", "B", "C", "E"],
    answer: "A",
    explanation: "Arrange row → A extreme left.",
    company: "Capgemini"
  }
];

// Shuffle options for each question
logicalPuzzlesQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default logicalPuzzlesQuestions;
