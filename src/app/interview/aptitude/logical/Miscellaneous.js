import shuffleArray from "./suffleArray";

const statementAssumptionQuestions = [
  {
    question: "Statement: The government has announced a new health scheme for senior citizens.\nAssumption: The scheme will improve healthcare access for elderly people.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "The government’s announcement implies the assumption that the scheme benefits elderly.",
    company: "Amazon"
  },
  {
    question: "Statement: A company decided to increase salaries by 10%.\nAssumption: Employees will be happier.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Salary increase generally implies positive impact on employees.",
    company: "Infosys"
  },
  {
    question: "Statement: The school closed for a week due to heavy rains.\nAssumption: Students cannot attend classes during the closure.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Closure prevents students from attending classes.",
    company: "TCS"
  },
  {
    question: "Statement: The shopkeeper lowered the price of shoes.\nAssumption: People will buy more shoes.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Price drop is expected to attract customers.",
    company: "Microsoft"
  },
  {
    question: "Statement: A man applied for a passport.\nAssumption: He wants to travel abroad.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Applying for a passport implies intention to travel internationally.",
    company: "Capgemini"
  },
  {
    question: "Statement: The company announced a new project for environmental cleanup.\nAssumption: The company is concerned about environment.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Launching environmental project shows concern for environment.",
    company: "Cognizant"
  },
  {
    question: "Statement: Traffic police issued a fine to the driver.\nAssumption: The driver violated traffic rules.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Issuing a fine generally implies rule violation.",
    company: "Wipro"
  },
  {
    question: "Statement: The government banned sale of plastic bags.\nAssumption: Plastic bags are harmful to environment.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Ban indicates concern for environmental harm.",
    company: "Amazon"
  },
  {
    question: "Statement: A student failed in an exam.\nAssumption: The student did not prepare well.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is not implicit",
    explanation: "Failure could be due to other reasons as well.",
    company: "TCS"
  },
  {
    question: "Statement: A person bought a gym membership.\nAssumption: The person wants to stay fit.",
    options: ["Assumption is implicit", "Assumption is not implicit", "Cannot say", "None of these"],
    answer: "Assumption is implicit",
    explanation: "Buying a gym membership implies intention to maintain fitness.",
    company: "Infosys"
  },
  {
    question: "All cats are animals. All animals are living beings. Conclusion: All cats are living beings?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Conclusion follows",
    explanation: "All cats → animals → living beings, so conclusion is true.",
    company: "Amazon"
  },
  {
    question: "All roses are flowers. Some flowers are red. Conclusion: Some roses are red?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Cannot say",
    explanation: "Some flowers being red doesn't imply roses are red.",
    company: "Wipro"
  },
  {
    question: "All men are mortal. Socrates is a man. Conclusion: Socrates is mortal?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Conclusion follows",
    explanation: "Socrates is a man → mortal.",
    company: "Infosys"
  },
  {
    question: "Some books are magazines. Some magazines are papers. Conclusion: Some books are papers?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Cannot say",
    explanation: "Relations are partial, cannot conclude.",
    company: "TCS"
  },
  {
    question: "All dogs are animals. Some animals are pets. Conclusion: Some dogs are pets?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Cannot say",
    explanation: "Only some animals are pets, may not include dogs.",
    company: "Microsoft"
  },
  {
    question: "All squares are rectangles. All rectangles are quadrilaterals. Conclusion: All squares are quadrilaterals?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Conclusion follows",
    explanation: "Squares → rectangles → quadrilaterals.",
    company: "Capgemini"
  },
  {
    question: "No A is B. Some B are C. Conclusion: Some A are not C?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Cannot say",
    explanation: "Cannot conclude from given statements.",
    company: "Cognizant"
  },
  {
    question: "All pens are instruments. All instruments are useful. Conclusion: All pens are useful?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Conclusion follows",
    explanation: "Pens → instruments → useful.",
    company: "Amazon"
  },
  {
    question: "Some birds are parrots. All parrots are colorful. Conclusion: Some birds are colorful?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Conclusion follows",
    explanation: "Some birds are parrots → colorful.",
    company: "Wipro"
  },
  {
    question: "All humans are mortal. All mortals die. Conclusion: All humans die?",
    options: ["Conclusion follows", "Conclusion does not follow", "Cannot say", "None of these"],
    answer: "Conclusion follows",
    explanation: "Humans → mortal → die.",
    company: "TCS"
  },
  {
    question: "What is the angle between hands of a clock at 3:00?",
    options: ["90°", "180°", "120°", "60°"],
    answer: "90°",
    explanation: "At 3:00, hands are perpendicular → 90°.",
    company: "Amazon"
  },
  {
    question: "Angle between hands at 6:00?",
    options: ["180°", "90°", "150°", "120°"],
    answer: "180°",
    explanation: "Hands opposite → 180°.",
    company: "Wipro"
  },
  {
    question: "Angle between hands at 9:15?",
    options: ["172.5°", "180°", "90°", "97.5°"],
    answer: "172.5°",
    explanation: "Angle=|30*hour - 11/2*minutes| = |30*9 - 11/2*15|=172.5°",
    company: "Infosys"
  },
  {
    question: "Time when hands are at right angle between 2 and 3?",
    options: ["2:27", "2:30", "2:15", "2:20"],
    answer: "2:27",
    explanation: "Angle=|30H-11/2*M|=90° → solve for M.",
    company: "TCS"
  },
  {
    question: "Angle between hands at 12:20?",
    options: ["50°", "60°", "40°", "70°"],
    answer: "50°",
    explanation: "Angle=|30*12 -11/2*20|=50°",
    company: "Microsoft"
  },
  {
    question: "At what time between 4 and 5 will hands be together?",
    options: ["4:21 9/11", "4:22", "4:23", "4:20"],
    answer: "4:21 9/11",
    explanation: "Time when hands coincide: M=(60*H)/11 → 4:21 9/11",
    company: "Capgemini"
  },
  {
    question: "Angle at 7:30?",
    options: ["135°", "120°", "150°", "130°"],
    answer: "135°",
    explanation: "Angle=|30*7-11/2*30|=135°",
    company: "Cognizant"
  },
  {
    question: "Angle between hands at 10:10?",
    options: ["115°", "120°", "110°", "105°"],
    answer: "115°",
    explanation: "Angle=|30*10-11/2*10|=115°",
    company: "Amazon"
  },
  {
    question: "Time when hands are opposite between 1 and 2?",
    options: ["1:32 8/11", "1:30", "1:31", "1:33"],
    answer: "1:32 8/11",
    explanation: "Time when angle=180° → solve for M",
    company: "Wipro"
  },
  {
    question: "Angle between hands at 8:20?",
    options: ["100°", "110°", "90°", "95°"],
    answer: "100°",
    explanation: "Angle=|30*8-11/2*20|=100°",
    company: "Infosys"
  }
];

statementAssumptionQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default statementAssumptionQuestions;
