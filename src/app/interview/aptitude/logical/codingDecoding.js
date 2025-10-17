import shuffleArray from "./suffleArray";

const codingDecodingQuestions = [
  {
    question: "If in a code, APPLE is written as BQQMF, how is ORANGE written?",
    options: ["PSBOHF", "PSBONE", "OSBNHF", "PSBONG"],
    answer: "PSBOHF",
    explanation: "Each letter is shifted by +1 in the alphabet.",
    company: "Amazon"
  },
  {
    question: "If TABLE is coded as UBCMF, how will CHAIR be coded?",
    options: ["DIBJS", "DIBJR", "DHBJS", "DHBIJ"],
    answer: "DIBJS",
    explanation: "Each letter is shifted +1 in alphabetical order.",
    company: "Wipro"
  },
  {
    question: "If CAT is coded as XZG, how is DOG coded?",
    options: ["WLT", "WLH", "WLK", "WLJ"],
    answer: "WLT",
    explanation: "Coding is reverse alphabetical shift: A→Z, B→Y etc.",
    company: "Infosys"
  },
  {
    question: "If in a code, 1=A, 2=B, ..., then 26=Z, how will 3, 15, 4, 5 be read?",
    options: ["CODE", "COED", "DECO", "EDOC"],
    answer: "CODE",
    explanation: "3=C, 15=O, 4=D, 5=E → CODE",
    company: "TCS"
  },
  {
    question: "If in a certain code, FRIEND is written as GSHJOE, how is SCHOOL written?",
    options: ["TDIPPM", "TDJPPM", "TDIPPL", "SCRIPL"],
    answer: "TDIPPM",
    explanation: "Each letter is shifted by +1 in the alphabet.",
    company: "Microsoft"
  },
  {
    question: "If in a code, 2=Z, 3=Y, 4=X, ..., how is 5 represented?",
    options: ["W", "V", "U", "X"],
    answer: "V",
    explanation: "Reverse coding: 2=Z,3=Y,4=X,5=V",
    company: "Capgemini"
  },
  {
    question: "If in a code, BOOK is written as CNPL, how is READ written?",
    options: ["SFBE", "SFBE", "SFBF", "SFEC"],
    answer: "SFBE",
    explanation: "Each letter is shifted +1 in alphabet.",
    company: "Cognizant"
  },
  {
    question: "If in a code, 7 is coded as 14, 8 as 16, how is 12 coded?",
    options: ["24", "22", "26", "20"],
    answer: "24",
    explanation: "Coding rule: multiply the number by 2.",
    company: "Amazon"
  },
  {
    question: "If in a code, MONDAY is written as 13151425, how is FRIDAY written?",
    options: ["6219425", "6219495", "6219424", "6219426"],
    answer: "6219425",
    explanation: "Letters are replaced by their alphabet positions: F=6, R=18 etc.",
    company: "Wipro"
  },
  {
    question: "If in a code, 'MEET' is coded as 'NGFU', how is 'JOIN' coded?",
    options: ["KPKO", "KPKM", "KPKN", "KQJO"],
    answer: "KPKO",
    explanation: "Each letter is shifted +1, then -1 alternatively.",
    company: "Infosys"
  },
  {
    question: "If in a code, SECRET is written as QDBSDS, how is AGENT coded?",
    options: ["ZHFMS", "ZHFNT", "ZGFNT", "ZHFMS"],
    answer: "ZHFMS",
    explanation: "Each letter is shifted -1 in the alphabet.",
    company: "TCS"
  },
  {
    question: "If in a code, ALPHA is coded as ZKOZG, how is BETA coded?",
    options: ["YDSZ", "YDTZ", "YDSY", "YDTA"],
    answer: "YDSZ",
    explanation: "Reverse alphabetical coding: A→Z, B→Y etc.",
    company: "Microsoft"
  },
  {
    question: "If in a code, 1=A, 2=B,...,26=Z, then 20,8,5 is?",
    options: ["THE", "ETH", "HET", "TEH"],
    answer: "THE",
    explanation: "20=T, 8=H, 5=E → THE",
    company: "Capgemini"
  },
  {
    question: "If in a code, 'WATER' is coded as 'XBUFQ', how is 'FIRE' coded?",
    options: ["GJSF", "GJSE", "GJSG", "GJSH"],
    answer: "GJSF",
    explanation: "Each letter shifted +1",
    company: "Cognizant"
  },
  {
    question: "If in a code, 'EARTH' = 5121820, how is 'MARS' coded?",
    options: ["13182019", "13181219", "13182019", "13182018"],
    answer: "13182019",
    explanation: "Letters replaced by their alphabet positions: M=13, A=1, R=18, S=19",
    company: "Amazon"
  },
  {
    question: "If in a code, 'ZERO' is coded as 'AESP', how is 'ONE' coded?",
    options: ["POF", "OPF", "POG", "OPE"],
    answer: "POF",
    explanation: "Each letter is shifted +1 in alphabet: Z→A, E→F, R→S, O→P",
    company: "Wipro"
  },
  {
    question: "If in a code, 'GOOD' is written as 'HPPF', how is 'LUCK' written?",
    options: ["MVCL", "MVCL", "MVCM", "MVDL"],
    answer: "MVCL",
    explanation: "Each letter shifted +1 in alphabet.",
    company: "Infosys"
  },
  {
    question: "If in a code, 'HELLO' is coded as 'JGNNQ', how is 'WORLD' coded?",
    options: ["XPSME", "XQSME", "XPQME", "XPSNE"],
    answer: "XPSME",
    explanation: "Each letter shifted +2.",
    company: "TCS"
  },
  {
    question: "If in a code, 'CAT' = 3120, how is 'DOG' = ?",
    options: ["4157", "4156", "4155", "4158"],
    answer: "4157",
    explanation: "Letters converted to alphabet positions: D=4, O=15, G=7 → 4157",
    company: "Microsoft"
  },
  {
    question: "If in a code, 'BOOK' = 214115, how is 'PEN' coded?",
    options: ["161514", "161515", "161613", "161514"],
    answer: "161514",
    explanation: "Letters converted to alphabet positions: P=16, E=5, N=14 → 161514",
    company: "Capgemini"
  }
];

// Shuffle options for each question
codingDecodingQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default codingDecodingQuestions;
