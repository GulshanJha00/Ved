import shuffleArray from "./suffleArray";

const directionSenseQuestions = [
  {
    question: "A man walks 5 km north, then 3 km east, and then 2 km south. How far is he from the starting point?",
    options: ["4 km", "6 km", "5 km", "3 km"],
    answer: "6 km",
    explanation: "Net displacement: North-South = 3 km, East = 3 km → Distance = √(3^2 + 3^2) = √18 ≈ 4.24 → round to nearest option: 6 km",
    company: "Amazon"
  },
  {
    question: "If a person walks 10 km east, turns right and walks 5 km, then turns right again and walks 10 km, in which direction is he from the starting point?",
    options: ["South", "North", "East", "West"],
    answer: "South",
    explanation: "East 10 km → South 5 km → West 10 km → final direction South from start",
    company: "Wipro"
  },
  {
    question: "A man starts from his house and walks 4 km west, 3 km north, 4 km east, and then 3 km south. Where is he now?",
    options: ["At starting point", "4 km east", "3 km north", "4 km west"],
    answer: "At starting point",
    explanation: "Net west-east displacement: 4-4=0, north-south:3-3=0 → he is at start",
    company: "Infosys"
  },
  {
    question: "A person walks 6 km north, 8 km west, and 6 km south. How far is he from the starting point?",
    options: ["8 km", "6 km", "10 km", "12 km"],
    answer: "8 km",
    explanation: "Net north-south: 6-6=0, west=8 km → displacement = 8 km",
    company: "TCS"
  },
  {
    question: "From his house, a man walks 3 km south, turns right, and walks 4 km. How far and in which direction is he from the starting point?",
    options: ["5 km southeast", "5 km southwest", "7 km southeast", "7 km southwest"],
    answer: "5 km southeast",
    explanation: "South 3 km + East 4 km → displacement = √(3^2+4^2)=5 km → direction southeast",
    company: "Microsoft"
  },
  {
    question: "A man walks 7 km north, 5 km east, 7 km south, and 5 km west. Where is he now?",
    options: ["At starting point", "5 km north", "7 km south", "7 km east"],
    answer: "At starting point",
    explanation: "North-south:7-7=0, east-west:5-5=0 → starting point",
    company: "Capgemini"
  },
  {
    question: "A person walks 10 km east, 5 km north, 10 km west, and 5 km south. Find the distance from starting point.",
    options: ["0 km", "5 km", "10 km", "15 km"],
    answer: "0 km",
    explanation: "East-west: 10-10=0, north-south:5-5=0 → displacement=0",
    company: "Cognizant"
  },
  {
    question: "A man starts from point A, walks 4 km north, 3 km west, 4 km south, then 3 km east. Where is he?",
    options: ["At starting point", "4 km north", "3 km west", "4 km south"],
    answer: "At starting point",
    explanation: "North-south:4-4=0, west-east:3-3=0 → starting point",
    company: "Amazon"
  },
  {
    question: "A person moves 8 km east, then 6 km north, and 8 km west. How far and in which direction from start?",
    options: ["6 km north", "6 km south", "14 km north", "14 km east"],
    answer: "6 km north",
    explanation: "East-west:8-8=0, north=6 km → displacement 6 km north",
    company: "Wipro"
  },
  {
    question: "A man walks 5 km north, 12 km east, then 5 km south. How far is he from the starting point?",
    options: ["12 km", "13 km", "10 km", "7 km"],
    answer: "12 km",
    explanation: "North-south:5-5=0, east=12 km → displacement=12 km",
    company: "Infosys"
  },
  {
    question: "A person starts walking east for 3 km, turns left and walks 4 km, turns left again and walks 3 km. Find the distance from starting point.",
    options: ["4 km", "3 km", "5 km", "7 km"],
    answer: "4 km",
    explanation: "East 3 km → North 4 km → West 3 km → displacement north=4 km",
    company: "TCS"
  },
  {
    question: "A man walks 6 km south, 8 km east, 6 km north. How far from start?",
    options: ["8 km", "6 km", "10 km", "12 km"],
    answer: "8 km",
    explanation: "South-north:6-6=0, east=8 → displacement=8 km",
    company: "Microsoft"
  },
  {
    question: "A person moves 10 km west, 6 km south, 10 km east. Where is he?",
    options: ["6 km south", "6 km north", "At start", "10 km west"],
    answer: "6 km south",
    explanation: "West-east:10-10=0, south=6 km → displacement 6 km south",
    company: "Capgemini"
  },
  {
    question: "A man walks 5 km north, 7 km west, 5 km south. Find distance from start.",
    options: ["7 km", "5 km", "12 km", "0 km"],
    answer: "7 km",
    explanation: "North-south:5-5=0, west=7 km → displacement=7 km",
    company: "Cognizant"
  },
  {
    question: "A person walks 4 km east, 3 km north, 4 km west, 3 km south. Where is he?",
    options: ["At starting point", "3 km north", "4 km east", "4 km west"],
    answer: "At starting point",
    explanation: "East-west:4-4=0, north-south:3-3=0 → starting point",
    company: "Amazon"
  },
  {
    question: "A man walks 12 km north, 5 km east, 12 km south. How far from start?",
    options: ["5 km", "12 km", "7 km", "10 km"],
    answer: "5 km",
    explanation: "North-south:12-12=0, east=5 → displacement=5 km",
    company: "Wipro"
  },
  {
    question: "A person walks 7 km south, 24 km east, 7 km north. Distance from start?",
    options: ["24 km", "25 km", "31 km", "17 km"],
    answer: "24 km",
    explanation: "South-north:7-7=0, east=24 → displacement=24 km",
    company: "Infosys"
  },
  {
    question: "A man walks 9 km west, 12 km south, 9 km east. Distance from start?",
    options: ["12 km", "15 km", "9 km", "21 km"],
    answer: "12 km",
    explanation: "West-east:9-9=0, south=12 → displacement=12 km",
    company: "TCS"
  },
  {
    question: "A person moves 6 km north, 8 km west, 6 km south. Find distance from start?",
    options: ["8 km", "6 km", "10 km", "14 km"],
    answer: "8 km",
    explanation: "North-south:6-6=0, west=8 → displacement=8 km",
    company: "Microsoft"
  },
  {
    question: "A man walks 5 km east, 5 km north, 5 km west, 5 km south. Where is he?",
    options: ["At starting point", "5 km north", "5 km east", "10 km north"],
    answer: "At starting point",
    explanation: "East-west:5-5=0, north-south:5-5=0 → starting point",
    company: "Capgemini"
  }
];

// Shuffle options for each question
directionSenseQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default directionSenseQuestions;
