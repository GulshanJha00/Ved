import shuffleArray from "./suffleArray";

const causeEffectQuestions = [
  {
    question: "Cause: Heavy rain leads to waterlogging in the city. Effect: Traffic jams increase.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Waterlogging due to heavy rain typically leads to traffic jams.",
    company: "Amazon"
  },
  {
    question: "Cause: A new virus spreads rapidly among people. Effect: Hospitals become overcrowded.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Rapid virus spread increases hospital admissions.",
    company: "Wipro"
  },
  {
    question: "Cause: Students studied diligently for the exam. Effect: They failed the exam.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "No, effect does not follow",
    explanation: "Studying diligently should not cause failure; the effect is unrelated.",
    company: "Infosys"
  },
  {
    question: "Cause: Factory released untreated waste into a river. Effect: Fish population declined.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Pollution from factory waste harms aquatic life.",
    company: "TCS"
  },
  {
    question: "Cause: Prices of vegetables increased sharply. Effect: People reduced consumption of vegetables.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Price hike generally reduces demand.",
    company: "Microsoft"
  },
  {
    question: "Cause: A heavy earthquake struck the city. Effect: Buildings collapsed.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Earthquake causes structural damage.",
    company: "Capgemini"
  },
  {
    question: "Cause: People switched off the lights. Effect: Energy consumption increased.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "No, effect does not follow",
    explanation: "Switching off lights decreases energy consumption.",
    company: "Cognizant"
  },
  {
    question: "Cause: Governments announced tax incentives for electric vehicles. Effect: Electric vehicle sales rose.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Tax incentives encourage EV purchases.",
    company: "Amazon"
  },
  {
    question: "Cause: A bridge collapsed due to weak construction. Effect: Traffic on alternate routes increased.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Collapsed bridge diverts traffic.",
    company: "Wipro"
  },
  {
    question: "Cause: Students practiced regularly for a coding contest. Effect: They lost the contest.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "No, effect does not follow",
    explanation: "Regular practice is unlikely to cause failure.",
    company: "Infosys"
  },
  {
    question: "Cause: A cyclone hit the coastal region. Effect: Crops were destroyed.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Cyclones damage agriculture.",
    company: "TCS"
  },
  {
    question: "Cause: Heavy snowfall blocked the roads. Effect: Public transport was disrupted.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Snowfall causes transport disruption.",
    company: "Microsoft"
  },
  {
    question: "Cause: A new movie released. Effect: Theatres remained empty.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "No, effect does not follow",
    explanation: "Movie release typically increases audience.",
    company: "Capgemini"
  },
  {
    question: "Cause: People wore masks during a pandemic. Effect: Infection rates decreased.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Masks reduce transmission of infections.",
    company: "Cognizant"
  },
  {
    question: "Cause: Heavy rainfall occurred for several days. Effect: Rivers overflowed.",
    options: ["Yes, effect follows", "No, effect does not follow", "Effect may follow", "Cannot say"],
    answer: "Yes, effect follows",
    explanation: "Persistent rain increases river water levels.",
    company: "Amazon"
  }
];

// Shuffle options for each question
causeEffectQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default causeEffectQuestions;
