import shuffleArray from "./suffleArray";

const analogyQuestions = [
  {
    question: "Book is to Reading as Fork is to ?",
    options: ["Drawing", "Writing", "Eating", "Stirring"],
    answer: "Eating",
    explanation: "Book is used for reading; similarly, fork is used for eating.",
    company: "Amazon"
  },
  {
    question: "Fire : Heat :: Ice : ?",
    options: ["Cold", "Water", "Solid", "Melting"],
    answer: "Cold",
    explanation: "Fire produces heat; Ice represents cold.",
    company: "Wipro"
  },
  {
    question: "Pen is to Paper as Knife is to ?",
    options: ["Bread", "Cutting Board", "Wood", "Blade"],
    answer: "Bread",
    explanation: "Pen is used on paper; Knife is used to cut bread.",
    company: "Infosys"
  },
  {
    question: "Bird is to Fly as Fish is to ?",
    options: ["Jump", "Swim", "Dive", "Crawl"],
    answer: "Swim",
    explanation: "Birds fly; fish swim.",
    company: "TCS"
  },
  {
    question: "Up is to Down as Left is to ?",
    options: ["Right", "Backward", "Forward", "Center"],
    answer: "Right",
    explanation: "Opposites: Up → Down; Left → Right.",
    company: "Microsoft"
  },
  {
    question: "Dog is to Bark as Cat is to ?",
    options: ["Meow", "Purr", "Roar", "Hiss"],
    answer: "Meow",
    explanation: "Dog makes bark sound; cat makes meow sound.",
    company: "Capgemini"
  },
  {
    question: "Doctor is to Hospital as Teacher is to ?",
    options: ["School", "Class", "College", "Book"],
    answer: "School",
    explanation: "Doctors work in hospitals; Teachers work in schools.",
    company: "Cognizant"
  },
  {
    question: "Knife is to Cut as Pen is to ?",
    options: ["Write", "Draw", "Read", "Erase"],
    answer: "Write",
    explanation: "Knife is used to cut; Pen is used to write.",
    company: "Amazon"
  },
  {
    question: "Sock is to Foot as Glove is to ?",
    options: ["Hand", "Arm", "Leg", "Finger"],
    answer: "Hand",
    explanation: "Sock covers foot; glove covers hand.",
    company: "Wipro"
  },
  {
    question: "Light is to Dark as Hot is to ?",
    options: ["Cold", "Warm", "Fire", "Ice"],
    answer: "Cold",
    explanation: "Opposites: Light → Dark; Hot → Cold.",
    company: "Infosys"
  },
  {
    question: "Smile is to Happiness as Cry is to ?",
    options: ["Sadness", "Anger", "Pain", "Joy"],
    answer: "Sadness",
    explanation: "Smile expresses happiness; Cry expresses sadness.",
    company: "TCS"
  },
  {
    question: "King is to Throne as Teacher is to ?",
    options: ["Desk", "Classroom", "Students", "Book"],
    answer: "Desk",
    explanation: "King sits on a throne; Teacher sits at a desk.",
    company: "Microsoft"
  },
  {
    question: "Mercury is to Planet as Oxygen is to ?",
    options: ["Gas", "Water", "Metal", "Air"],
    answer: "Gas",
    explanation: "Mercury is a planet; Oxygen is a gas.",
    company: "Capgemini"
  },
  {
    question: "Horse is to Mane as Elephant is to ?",
    options: ["Trunk", "Tusks", "Tail", "Ears"],
    answer: "Trunk",
    explanation: "Horse has mane; Elephant has trunk.",
    company: "Cognizant"
  },
  {
    question: "Mirror is to Reflection as Camera is to ?",
    options: ["Click", "Photo", "Lens", "Light"],
    answer: "Photo",
    explanation: "Mirror shows reflection; Camera produces photo.",
    company: "Amazon"
  },
    {
    question: "2 : 8 :: 3 : ?",
    options: ["9", "12", "6", "15"],
    answer: "12",
    explanation: "2^3 = 8; similarly, 3^3 = 27 → but tricky: here pattern is multiply by 4 → 3*4=12.",
    company: "Amazon"
  },
  {
    question: "AB : BC :: CD : ?",
    options: ["DE", "CE", "DF", "BD"],
    answer: "DE",
    explanation: "Each letter moves forward by 1 in alphabet: A→B, B→C → AB : BC; C→D, D→E → CD : DE.",
    company: "Infosys"
  },
  {
    question: "Pencil : Writing :: Knife : ?",
    options: ["Eating", "Cutting", "Sharpening", "Chopping"],
    answer: "Cutting",
    explanation: "Pencil is used for writing; Knife is used for cutting.",
    company: "TCS"
  },
  {
    question: "2, 6, 12 : 3, 9, 27 :: 4, ?, ? : 5, ?, ?",
    options: ["8,16;10,20", "6,18;7,21", "8,24;10,50", "None of these"],
    answer: "8,16;10,20",
    explanation: "Pattern: Multiply each number by 2 for left, Multiply by 2 for right series → tricky numeric analogy.",
    company: "Microsoft"
  },
  {
    question: "COW : CALF :: DOG : ?",
    options: ["Puppy", "Cub", "Foal", "Kitten"],
    answer: "Puppy",
    explanation: "COW's young is CALF; DOG's young is PUPPY.",
    company: "Capgemini"
  },
  {
    question: "Book : Library :: Movie : ?",
    options: ["Theater", "Cinema", "Screen", "Hall"],
    answer: "Theater",
    explanation: "Books are kept in Library; Movies are shown in Theater.",
    company: "Cognizant"
  },
  {
    question: "A : Z :: B : ?",
    options: ["Y", "X", "W", "V"],
    answer: "Y",
    explanation: "Opposite letters in alphabet: A→Z, B→Y.",
    company: "Wipro"
  },
  {
    question: "12 : 144 :: 15 : ?",
    options: ["225", "150", "180", "200"],
    answer: "225",
    explanation: "12^2 =144; 15^2 =225.",
    company: "Amazon"
  },
  {
    question: "Dog : Bark :: Cow : ?",
    options: ["Moo", "Meow", "Neigh", "Roar"],
    answer: "Moo",
    explanation: "Dog makes Bark; Cow makes Moo.",
    company: "Infosys"
  },
  {
    question: "Clock : Time :: Thermometer : ?",
    options: ["Temperature", "Heat", "Mercury", "Scale"],
    answer: "Temperature",
    explanation: "Clock measures Time; Thermometer measures Temperature.",
    company: "TCS"
  },
  {
    question: "Tree : Leaf :: Flower : ?",
    options: ["Petal", "Stem", "Root", "Branch"],
    answer: "Petal",
    explanation: "Leaf is part of Tree; Petal is part of Flower.",
    company: "Microsoft"
  },
  {
    question: "14 : 196 :: 16 : ?",
    options: ["256", "224", "240", "260"],
    answer: "256",
    explanation: "14^2=196; 16^2=256.",
    company: "Capgemini"
  },
  {
    question: "ABC : CBA :: 123 : ?",
    options: ["321", "213", "312", "132"],
    answer: "321",
    explanation: "Letters are reversed; numbers follow same pattern.",
    company: "Cognizant"
  },
  {
    question: "Finger : Hand :: Toe : ?",
    options: ["Foot", "Leg", "Nail", "Knee"],
    answer: "Foot",
    explanation: "Finger is part of Hand; Toe is part of Foot.",
    company: "Amazon"
  },
  {
    question: "Water : H2O :: Carbon Dioxide : ?",
    options: ["CO2", "CO", "C2O", "O2C"],
    answer: "CO2",
    explanation: "Chemical analogy: Water = H2O; Carbon Dioxide = CO2.",
    company: "Wipro"
  }
];

analogyQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default analogyQuestions;
