import shuffleArray from "./suffleArray";

const bloodRelationQuestions = [
  {
    question: "Introducing a woman, a man said, “Her husband is the only son of my father.” How is the woman related to the man?",
    options: ["Wife", "Sister", "Mother", "Daughter"],
    answer: "Wife",
    explanation: "Her husband is the man's brother; she is his wife.",
    company: "Amazon"
  },
  {
    question: "Q’s mother is the sister of P and daughter of S. A is the son of P and brother of H. G is the father of H and grandfather of A. D is wife of G. How is S related to D?",
    options: ["Father-in-law", "Grandfather", "Brother-in-law", "Father"],
    answer: "Father-in-law",
    explanation: "S is D's father-in-law through her husband G.",
    company: "Wipro"
  },
  {
    question: "R is the son of A’s father’s sister. S is son of D, who is the mother of G and grandmother of A. H is the father of T and grandfather of R. D is wife of H. How is R related to D?",
    options: ["Nephew", "Son", "Grandson", "Insufficient Data"],
    answer: "Grandson",
    explanation: "R is D's grandson via her child.",
    company: "Infosys"
  },
  {
    question: "Anuj introduced a girl as the daughter of the only daughter of the father of his maternal uncle. How is Anuj related to that girl?",
    options: ["Son-in-law", "Brother", "Son", "Nephew"],
    answer: "Brother",
    explanation: "The girl is Anuj's sister via maternal uncle's daughter.",
    company: "TCS"
  },
  {
    question: "Pointing towards a person, a woman said to a man, 'His father is the only son of your mother.' How is the man related to that person?",
    options: ["Brother", "Father", "Son", "Husband"],
    answer: "Father",
    explanation: "The person is the son of the man.",
    company: "Microsoft"
  },
  {
    question: "X and Y are the children of Z. If Z is the father of X but Y is not the son of Z, then what is the relationship between Y and Z?",
    options: ["Sister and Brother", "Daughter and Father", "Niece and Uncle", "Insufficient data"],
    answer: "Daughter and Father",
    explanation: "Y is the daughter of Z.",
    company: "Capgemini"
  },
  {
    question: "If ‘A#B’ means A is father of B, ‘A*B’ means A is brother of B, ‘A@B’ means A is mother of B, then which of the following is correct about G@T#P?",
    options: ["G is mother of P", "P is father of T", "T is son of G", "P is brother of T"],
    answer: "T is son of G",
    explanation: "G is mother of T, and T is father of P → T is son of G.",
    company: "Cognizant"
  },
  {
    question: "P and Q are brothers. R is sister of P. S is sister of T. If T is son of Q, then who is uncle of S?",
    options: ["P", "R", "Q", "T"],
    answer: "P",
    explanation: "P is the brother of T's father (Q), making him S's uncle.",
    company: "Amazon"
  },
  {
    question: "In a family, A and B are married, A is male. D is only son of C, who is brother of A. E is sister of D. B is daughter-in-law of F, whose husband has died. How is E related to C?",
    options: ["Sister", "Daughter", "Cousin", "Mother"],
    answer: "Daughter",
    explanation: "C is father of D, and D's sister is E.",
    company: "Wipro"
  },
  {
    question: "Brothers and Sisters I have none. Looking at a portrait of a man, Harsh said, 'His mother is the wife of my father's son. Brothers and sisters I have none.' At whose portrait was Harsh looking?",
    options: ["His son", "His cousin", "His uncle", "His nephew"],
    answer: "His son",
    explanation: "The man's mother is Harsh's wife, so the man is Harsh's son.",
    company: "Infosys"
  },
  {
    question: "A girl introduced a boy as the son of the daughter of the father of her uncle. The boy is girl's:",
    options: ["Brother", "Son", "Uncle", "Son-in-law"],
    answer: "Brother",
    explanation: "The boy is the girl's maternal uncle's grandson → her brother.",
    company: "TCS"
  },
  {
    question: "Introducing a child, a man said, 'He is the son of my father's only daughter.' How is that man related to the child?",
    options: ["Father", "Brother", "Maternal Uncle", "Husband"],
    answer: "Maternal Uncle",
    explanation: "Father's only daughter is man's sister → child is sister's son.",
    company: "Microsoft"
  },
  {
    question: "If D is son of X, X is sister of Y, O is father of X, and Y is father of V. How is V related to O?",
    options: ["Nephew", "Grandson", "Brother", "Cousin"],
    answer: "Grandson",
    explanation: "O → X → D; Y → V; relationship: V is O's grandson.",
    company: "Capgemini"
  },
  {
    question: "K is the son of A's mother's sister. Q is daughter of D, who is the father of G and grandfather of A. P is the Daughter of H who is grandmother of K. D is husband of H and G is husband of L. How is P related to Q?",
    options: ["Mother", "Sister", "Daughter", "Cousin"],
    answer: "Sister",
    explanation: "P and Q share same parents → sisters.",
    company: "Cognizant"
  },
  {
    question: "Anu introduced a girl as the daughter of the only son of his father. How is that girl related to Anu?",
    options: ["Sister", "Niece", "Daughter", "Mother"],
    answer: "Daughter",
    explanation: "Girl is Anu's daughter through his own son.",
    company: "Amazon"
  },
  {
    question: "Pointing towards a person a man said to a woman, 'His mother is the wife of my mother’s only son.' How is the man related to that person?",
    options: ["Brother", "Father", "Son", "Grandfather"],
    answer: "Father",
    explanation: "The person is the son of the man.",
    company: "Wipro"
  },
  {
    question: "A and B are brothers. M is the father of A and brother of S. F is sister of B and K is mother of S. What is the relationship between M and K?",
    options: ["Sister and Brother", "Grandson and Grandmother", "Nephew and Aunt", "Son and Mother"],
    answer: "Son and Mother",
    explanation: "M is son of K.",
    company: "Infosys"
  },
  {
    question: "Introducing a boy, a man said, 'His mother is the wife of my father’s only son.' How is the man related to the boy?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    answer: "Father",
    explanation: "The boy is the son of the man.",
    company: "TCS"
  },
  {
    question: "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",
    options: ["Nephew", "Son", "Cousin", "Uncle to Grandson"],
    answer: "Cousin",
    explanation: "The man is daughter’s maternal uncle’s son → cousin.",
    company: "Microsoft"
  },
  {
    question: "Brothers and Sisters I have none. Looking at a portrait of a man, Harsh said, 'His mother is the wife of my father's son.' At whose portrait was Harsh looking?",
    options: ["His son", "His cousin", "His uncle", "His nephew"],
    answer: "His son",
    explanation: "Harsh is looking at his own son.",
    company: "Capgemini"
  },
  {
    question: "A girl introduced a boy as the son of the daughter of the father of her uncle. The boy is girl's:",
    options: ["Brother", "Son", "Uncle", "Son-in-law"],
    answer: "Brother",
    explanation: "Boy is her brother through maternal uncle.",
    company: "Cognizant"
  },
  {
    question: "Introducing a child, a man said, 'He is the son of my father's only daughter.' How is that man related to the child?",
    options: ["Father", "Brother", "Maternal Uncle", "Husband"],
    answer: "Maternal Uncle",
    explanation: "Child is son of man's sister.",
    company: "Amazon"
  },
  {
    question: "If D is son of X, X is sister of Y, O is father of X, and Y is father of V. How is V related to O?",
    options: ["Nephew", "Grandson", "Brother", "Cousin"],
    answer: "Grandson",
    explanation: "V is O's grandson through Y.",
    company: "Wipro"
  },
  {
    question: "K is the son of A's mother's sister. Q is daughter of D, who is the father of G and grandfather of A. P is the Daughter of H who is grandmother of K. D is husband of H and G is husband of L. How is P related to Q?",
    options: ["Mother", "Sister", "Daughter", "Cousin"],
    answer: "Sister",
    explanation: "P and Q are sisters.",
    company: "Infosys"
  },
  {
    question: "Anu introduced a girl as the daughter of the only son of his father. How is that girl related to Anu?",
    options: ["Sister", "Niece", "Daughter", "Mother"],
    answer: "Daughter",
    explanation: "The girl is Anu's daughter.",
    company: "TCS"
  },
  {
    question: "Pointing towards a person a man said to a woman, 'His mother is the wife of my mother’s only son.' How is the man related to that person?",
    options: ["Brother", "Father", "Son", "Grandfather"],
    answer: "Father",
    explanation: "The man is father of that person.",
    company: "Microsoft"
  },
  {
    question: "A and B are brothers. M is the father of A and brother of S. F is sister of B and K is mother of S. What is the relationship between M and K?",
    options: ["Sister and Brother", "Grandson and Grandmother", "Nephew and Aunt", "Son and Mother"],
    answer: "Son and Mother",
    explanation: "M is son of K.",
    company: "Capgemini"
  }
];

// Shuffle options for each question
bloodRelationQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default bloodRelationQuestions;
