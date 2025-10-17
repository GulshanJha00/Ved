import shuffleArray from "./suffleArray";

const classificationQuestions = [
  {
    question: "Find the odd one out: Lion, Tiger, Leopard, Elephant",
    options: ["Lion", "Tiger", "Leopard", "Elephant"],
    answer: "Elephant",
    explanation: "All others are big cats; Elephant is not a cat.",
    company: "Amazon"
  },
  {
    question: "Find the odd one out: Mercury, Venus, Mars, Pluto",
    options: ["Mercury", "Venus", "Mars", "Pluto"],
    answer: "Pluto",
    explanation: "Pluto is classified as a dwarf planet; others are major planets.",
    company: "Wipro"
  },
  {
    question: "Find the odd one out: Square, Rectangle, Circle, Rhombus",
    options: ["Square", "Rectangle", "Circle", "Rhombus"],
    answer: "Circle",
    explanation: "All others are quadrilaterals; Circle has no sides.",
    company: "Infosys"
  },
  {
    question: "Find the odd one out: Blue, Green, Red, Silver",
    options: ["Blue", "Green", "Red", "Silver"],
    answer: "Silver",
    explanation: "Blue, Green, Red are colors of light; Silver is a metal/color of metal.",
    company: "TCS"
  },
  {
    question: "Find the odd one out: Dog, Cat, Cow, Crow",
    options: ["Dog", "Cat", "Cow", "Crow"],
    answer: "Crow",
    explanation: "Dog, Cat, Cow are mammals; Crow is a bird.",
    company: "Microsoft"
  },
  {
    question: "Find the odd one out: 2, 3, 5, 9",
    options: ["2", "3", "5", "9"],
    answer: "9",
    explanation: "2, 3, 5 are prime numbers; 9 is not prime.",
    company: "Capgemini"
  },
  {
    question: "Find the odd one out: Pen, Pencil, Eraser, Notebook",
    options: ["Pen", "Pencil", "Eraser", "Notebook"],
    answer: "Eraser",
    explanation: "Pen, Pencil, Notebook are used for writing; Eraser is used for correction.",
    company: "Cognizant"
  },
  {
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: "Carrot",
    explanation: "Apple, Banana, Mango are fruits; Carrot is a vegetable.",
    company: "Amazon"
  },
  {
    question: "Find the odd one out: Mercury, Sodium, Iron, Aluminum",
    options: ["Mercury", "Sodium", "Iron", "Aluminum"],
    answer: "Mercury",
    explanation: "Mercury is liquid at room temperature; others are solid metals.",
    company: "Wipro"
  },
  {
    question: "Find the odd one out: Sparrow, Eagle, Penguin, Ostrich",
    options: ["Sparrow", "Eagle", "Penguin", "Ostrich"],
    answer: "Sparrow",
    explanation: "Eagle, Penguin, Ostrich are large/flightless birds; Sparrow is small and can fly.",
    company: "Infosys"
  },
  {
    question: "Find the odd one out: Circle, Triangle, Pentagon, Sphere",
    options: ["Circle", "Triangle", "Pentagon", "Sphere"],
    answer: "Sphere",
    explanation: "Circle, Triangle, Pentagon are 2D shapes; Sphere is 3D.",
    company: "TCS"
  },
  {
    question: "Find the odd one out: Hydrogen, Oxygen, Nitrogen, Carbon",
    options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
    answer: "Carbon",
    explanation: "Hydrogen, Oxygen, Nitrogen are gases at room temperature; Carbon is solid.",
    company: "Microsoft"
  },
  {
    question: "Find the odd one out: Rose, Lily, Tulip, Mango",
    options: ["Rose", "Lily", "Tulip", "Mango"],
    answer: "Mango",
    explanation: "Rose, Lily, Tulip are flowers; Mango is a fruit tree.",
    company: "Capgemini"
  },
  {
    question: "Find the odd one out: Gold, Silver, Iron, Oxygen",
    options: ["Gold", "Silver", "Iron", "Oxygen"],
    answer: "Oxygen",
    explanation: "Gold, Silver, Iron are metals; Oxygen is a gas.",
    company: "Cognizant"
  },
  {
    question: "Find the odd one out: Chair, Table, Bed, Cupboard",
    options: ["Chair", "Table", "Bed", "Cupboard"],
    answer: "Bed",
    explanation: "Chair, Table, Cupboard are furniture for sitting/storing; Bed is for sleeping.",
    company: "Amazon"
  }
];

// Shuffle options for each question
classificationQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default classificationQuestions;
