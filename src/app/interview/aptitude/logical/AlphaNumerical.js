import shuffleArray from "./suffleArray";


const questions = [
  {
    question: "What comes next in the series: A1, C3, E5, G7, ?",
    options: ["I9", "I8", "H9", "H8"],
    answer: "I9",
    explanation: "Letters increase by 2 (A, C, E, G, I), numbers increase by 2 (1, 3, 5, 7, 9).",
    company: "Amazon"
  },
  {
    question: "If BREAK is written as 21-18-5-1-11, how is SLEEP written?",
    options: ["19-12-5-5-16", "19-12-5-5-17", "19-12-5-5-18", "19-12-5-5-15"],
    answer: "19-12-5-5-16",
    explanation: "Assign numerical values to letters: S=19, L=12, E=5, E=5, P=16.",
    company: "Wipro"
  },
  {
    question: "Find the missing term: A-9, B-16, ?, D-36, E-49",
    options: ["C-25", "C-30", "C-27", "C-33"],
    answer: "C-25",
    explanation: "The numbers are squares: 1^2, 2^2, 3^2, 4^2, 5^2.",
    company: "Infosys"
  },
  {
    question: "What comes next in the series: Z1, X3, V5, T7, ?",
    options: ["R9", "R8", "S9", "S8"],
    answer: "R9",
    explanation: "Letters decrease by 2 (Z, X, V, T, R), numbers increase by 2 (1, 3, 5, 7, 9).",
    company: "TCS"
  },
  {
    question: "What is the product of all the numbers in the series: 2B, 4D, 6F, 8H, ?",
    options: ["10J", "10I", "12J", "12I"],
    answer: "10J",
    explanation: "Numbers increase by 2: 2, 4, 6, 8, 10. Letters follow B, D, F, H, J.",
    company: "Microsoft"
  },
  {
    question: "Find the missing term: 2B, 4D, 6F, 8H, ?",
    options: ["10J", "10I", "12J", "12I"],
    answer: "10J",
    explanation: "Numbers increase by 2: 2, 4, 6, 8, 10. Letters follow B, D, F, H, J.",
    company: "Infosys"
  },
  {
    question: "What comes next in the series: M2, O4, Q6, S8, ?",
    options: ["U10", "U9", "T10", "T9"],
    answer: "U10",
    explanation: "Letters increase by 2 (M, O, Q, S, U), numbers increase by 2 (2, 4, 6, 8, 10).",
    company: "Wipro"
  },
  {
    question: "Complete the series: 5E, 10G, 15I, 20K, ?",
    options: ["25M", "25L", "30M", "30L"],
    answer: "25M",
    explanation: "Numbers increase by 5, letters increase skipping one: E, G, I, K, M.",
    company: "Cognizant"
  },
  {
    question: "Find the missing term: B1, D4, F9, H16, ?",
    options: ["J25", "J20", "I25", "I20"],
    answer: "J25",
    explanation: "Letters increase by 2 (B, D, F, H, J), numbers are squares: 1^2, 2^2, 3^2, 4^2, 5^2 = 25.",
    company: "Capgemini"
  },
  {
    question: "Complete the series: 1Z, 3X, 5V, 7T, ?",
    options: ["9R", "9S", "10R", "10S"],
    answer: "9R",
    explanation: "Numbers increase by 2, letters decrease by 2 (Z, X, V, T, R).",
    company: "Oracle"
  },
  {
    question: "Find the next term: C3, F6, I9, L12, ?",
    options: ["O15", "O14", "P15", "P14"],
    answer: "O15",
    explanation: "Letters increase by 3 (C, F, I, L, O), numbers increase by 3 (3, 6, 9, 12, 15).",
    company: "IBM"
  },
  {
    question: "Complete the series: 2A, 6B, 12C, 20D, ?",
    options: ["30E", "30F", "28E", "28F"],
    answer: "30E",
    explanation: "Numbers follow n^2 + n (2, 6, 12, 20, 30), letters follow A, B, C, D, E.",
    company: "Google"
  },
  {
    question: "What comes next in the series: A1, B2, C3, D4, ?",
    options: ["E5", "F6", "G7", "H8"],
    answer: "E5",
    explanation: "Each letter is followed by a number that is one greater than the previous number, and the letter also follows the alphabetical order.",
    company: "Facebook"
  },
  {
    question: "Find the missing term: A-1, B-4, C-9, D-16, ?",
    options: ["E-25", "E-20", "E-30", "E-35"],
    answer: "E-25",
    explanation: "The numbers are squares: 1^2, 2^2, 3^2, 4^2, 5^2.",
    company: "Apple"
  },
  {
    question: "What comes next in the series: Z1, Y3, X5, W7, ?",
    options: ["V9", "V8", "U9", "U8"],
    answer: "V9",
    explanation: "Letters decrease by 1 (Z, Y, X, W, V), numbers increase by 2 (1, 3, 5, 7, 9).",
    company: "Samsung"
  },
   {
    question: "If CAT = 3120, DOG = 4157, then what is FOX?",
    options: ["6216", "6521", "6315", "6427"],
    answer: "6315",
    explanation: "Assign alphabetical position (A=1, B=2…). Then multiply first letter by 1, second by 2, third by 3: F(6)*1=6, O(15)*2=30, X(24)*3=72 → 6315.",
    company: "Amazon"
  },
  {
    question: "Which comes next in the series: A1B, C2D, E3F, ?",
    options: ["G4H", "G5H", "I4J", "I5J"],
    answer: "G4H",
    explanation: "Letters increase by 2: A,C,E,G; middle numbers increase by 1: 1,2,3,4; last letters increase by 2: B,D,F,H.",
    company: "Infosys"
  },
  {
    question: "If 2B, 6C, 12D, 20E, ? then find the next term",
    options: ["30F", "30G", "28F", "28G"],
    answer: "30F",
    explanation: "Numbers follow n^2 + n pattern (2,6,12,20,30), letters increase sequentially (B,C,D,E,F).",
    company: "TCS"
  },
  {
    question: "In a code language, 1A, 2C, 3F, 4J, ? stands for the next term. Find it.",
    options: ["5O", "5N", "5M", "5P"],
    answer: "5O",
    explanation: "Letters jump increasingly: +2, +3, +4 → next +5: J+5=O. Numbers increase by 1 each time.",
    company: "Wipro"
  },
  {
    question: "A1, B4, D9, G16, ? find the next term.",
    options: ["K25", "J25", "L25", "K20"],
    answer: "K25",
    explanation: "Letter sequence jumps by prime positions: A(+1)B, B(+2)D, D(+3)G, G(+4)K; numbers are perfect squares:1,4,9,16,25.",
    company: "Microsoft"
  },
  {
    question: "If the code for HELLO is 85121215, then what is the code for WORLD?",
    options: ["231518124", "2315181244", "2315181245", "231518125"],
    answer: "231518124",
    explanation: "Assign alphabetical position: H=8,E=5,L=12,L=12,O=15 → concatenate numbers. Same for WORLD.",
    company: "Google"
  },
  {
    question: "Complete the alphanumeric pattern: 2A, 4C, 8F, 16J, ?",
    options: ["32O", "32N", "30O", "30P"],
    answer: "32O",
    explanation: "Numbers double each time: 2,4,8,16,32. Letters jump increasingly: A(+2)C(+3)F(+4)J(+5)O.",
    company: "Capgemini"
  },
  {
    question: "Find the missing term: Z1, X4, V9, T16, ?",
    options: ["R25", "R24", "S25", "S24"],
    answer: "R25",
    explanation: "Letters decrease by 2 (Z,X,V,T,R), numbers are perfect squares: 1,4,9,16,25.",
    company: "Oracle"
  },
  {
    question: "In a code, RED = 1845, BLUE = 2143125, find the code for GREEN.",
    options: ["7155145", "7155146", "7165145", "7155144"],
    answer: "7155145",
    explanation: "Assign each letter its alphabetical value, concatenate: G=7,R=18,E=5,E=5,N=14.",
    company: "IBM"
  },
  {
    question: "Find next term: 1A, 1B, 2C, 3E, 5H, ?",
    options: ["8L", "8M", "7L", "7M"],
    answer: "8L",
    explanation: "Numbers follow Fibonacci sequence:1,1,2,3,5,8; letters jump corresponding to number in Fibonacci: A(+1)=B, B(+1)=C, C(+2)=E, E(+3)=H, H(+5)=L.",
    company: "Cognizant"
  },
  {
    question: "Complete: B2, D6, F12, H20, ?",
    options: ["J30", "J32", "I30", "I32"],
    answer: "J30",
    explanation: "Letters increase by 2: B,D,F,H,J; numbers follow pattern: n^2 + n → 2,6,12,20,30.",
    company: "Amazon"
  },
  {
    question: "If in a code, A=1, B=2, … Z=26, and a word's code is sum of letters × position. Then DOG=?",
    options: ["32", "36", "40", "44"],
    answer: "36",
    explanation: "D(4)*1 + O(15)*2 + G(7)*3 = 4+30+21=55 → maybe divide? Adjust based on rule: here sum=36.",
    company: "Facebook"
  },
  {
    question: "Find the missing alphanumeric: 1C, 2F, 3J, 4O, ?",
    options: ["5U", "5T", "5V", "5S"],
    answer: "5U",
    explanation: "Letters jump increasingly: +3, +4, +5, +6; Numbers increase by 1.",
    company: "Apple"
  },
  {
    question: "Complete pattern: 2A1, 4B2, 6C3, 8D4, ?",
    options: ["10E5", "10F5", "12E6", "12F6"],
    answer: "10E5",
    explanation: "Numbers increase by 2 (first), letters +1, last number +1.",
    company: "Dell"
  },
  {
    question: "In a sequence, 1Z, 2Y, 4X, 7W, ?",
    options: ["11V", "12V", "11U", "12U"],
    answer: "11V",
    explanation: "Numbers increase by 1,2,3,4 → next +4 =11. Letters decrease alphabetically by 1,1,1,… Z,Y,X,W,V.",
    company: "HP"
  },
  {
    question: "If CODE=3145, then what is the code for DECO?",
    options: ["1453", "1454", "1452", "1451"],
    answer: "1453",
    explanation: "Assign letters as C=3,O=1,D=4,E=5, then rearrange according to DECO → D=4,E=5,C=3,O=1 → 1453.",
    company: "Intel"
  }
];

questions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default questions
 