import shuffleArray from "./suffleArray";

const criticalReasoningQuestions = [
  {
    question: "All cats are animals. Some animals are not dogs. Can we conclude that some cats are not dogs?",
    options: ["Yes", "No", "Cannot say", "Only sometimes"],
    answer: "Cannot say",
    explanation: "The given statements do not provide enough information about cats and dogs relationship.",
    company: "Amazon"
  },
  {
    question: "If all roses are flowers and some flowers fade quickly, can we say some roses fade quickly?",
    options: ["Yes", "No", "Cannot say", "Always"],
    answer: "Cannot say",
    explanation: "We cannot determine if the subset 'roses' belongs to the subset of flowers that fade quickly.",
    company: "Wipro"
  },
  {
    question: "If the first two statements are true, is the final statement true? All birds can fly. Penguins are birds. Penguins can fly.",
    options: ["True", "False", "Cannot say", "Sometimes true"],
    answer: "False",
    explanation: "Although penguins are birds, not all birds can fly; statement is false.",
    company: "Infosys"
  },
  {
    question: "Some students are athletes. All athletes are disciplined. Are some students disciplined?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Yes",
    explanation: "Some students are athletes and all athletes are disciplined, so some students are disciplined.",
    company: "TCS"
  },
  {
    question: "If no A is B and all B are C, can we conclude no A is C?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "A and C may have an intersection independent of B.",
    company: "Microsoft"
  },
  {
    question: "All phones are gadgets. Some gadgets are expensive. Can we conclude some phones are expensive?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "We don’t know if the expensive gadgets include phones.",
    company: "Capgemini"
  },
  {
    question: "If all roses are red and all red things are flowers, are all roses flowers?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Yes",
    explanation: "All roses are red, and all red things are flowers → all roses are flowers.",
    company: "Cognizant"
  },
  {
    question: "If some A are B and some B are C, can we conclude some A are C?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "The overlap between A and C is not guaranteed.",
    company: "Amazon"
  },
  {
    question: "All mammals are animals. All cats are mammals. Are all cats animals?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Yes",
    explanation: "All cats are mammals, all mammals are animals → all cats are animals.",
    company: "Wipro"
  },
  {
    question: "If some birds are parrots and all parrots can talk, can we say some birds can talk?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Yes",
    explanation: "Some birds are parrots and all parrots can talk → some birds can talk.",
    company: "Infosys"
  },
  {
    question: "If no A is B and all C are B, can we say some C are not A?",
    options: ["Yes", "No", "Cannot say", "Always"],
    answer: "Yes",
    explanation: "No A is B → all C which are B cannot be A → some C are not A.",
    company: "TCS"
  },
  {
    question: "All lions are mammals. Some mammals are carnivores. Are all lions carnivores?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "The subset of lions may or may not be part of carnivores.",
    company: "Microsoft"
  },
  {
    question: "If all A are B and all B are C, are all A C?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Yes",
    explanation: "Transitive relation: All A are B, all B are C → all A are C.",
    company: "Capgemini"
  },
  {
    question: "Some trees are mango trees. Some mango trees are tall. Are some trees tall?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "We don’t know if the trees subset overlaps with tall mango trees.",
    company: "Cognizant"
  },
  {
    question: "All cars are vehicles. Some vehicles are red. Are some cars red?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "We don’t know if the cars subset overlaps with red vehicles.",
    company: "Amazon"
  },
  {
    question: "If some students are athletes and all athletes are healthy, are some students healthy?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Yes",
    explanation: "Some students are athletes and all athletes are healthy → some students are healthy.",
    company: "Wipro"
  },
  {
    question: "All A are B. Some B are C. Are all A C?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "We cannot confirm whether A overlaps with C.",
    company: "Infosys"
  },
  {
    question: "If no A is B and some B are C, can we conclude some A are not C?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "There is no sufficient information about A and C.",
    company: "TCS"
  },
  {
    question: "All squares are rectangles. Some rectangles are blue. Are some squares blue?",
    options: ["Yes", "No", "Cannot say", "Sometimes"],
    answer: "Cannot say",
    explanation: "We cannot confirm if the subset of squares is blue.",
    company: "Microsoft"
  }
];

// Shuffle options for each question
criticalReasoningQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default criticalReasoningQuestions;
