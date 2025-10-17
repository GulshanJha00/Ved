import shuffleArray from "./suffleArray";

const decisionMakingQuestions = [
  {
    question: "A company is facing declining sales. What should management do?",
    options: [
      "Launch a new advertising campaign",
      "Fire employees immediately",
      "Ignore the trend",
      "Reduce product quality"
    ],
    answer: "Launch a new advertising campaign",
    explanation: "Management should take a proactive step like marketing to improve sales.",
    company: "Amazon"
  },
  {
    question: "Traffic congestion is increasing in a city. What should the city administration do?",
    options: [
      "Build better roads and improve public transport",
      "Increase fines without measures",
      "Close the city",
      "Do nothing"
    ],
    answer: "Build better roads and improve public transport",
    explanation: "Effective decision involves long-term solutions like infrastructure improvement.",
    company: "Wipro"
  },
  {
    question: "A student fails in multiple subjects. What should the principal advise?",
    options: [
      "Provide extra coaching and guidance",
      "Expel the student",
      "Ignore the results",
      "Reduce syllabus randomly"
    ],
    answer: "Provide extra coaching and guidance",
    explanation: "Constructive steps involve helping the student improve through guidance.",
    company: "Infosys"
  },
  {
    question: "A company receives repeated customer complaints. What is the best course of action?",
    options: [
      "Investigate complaints and improve product/service",
      "Ignore complaints",
      "Blame customers",
      "Increase prices"
    ],
    answer: "Investigate complaints and improve product/service",
    explanation: "Proper decision involves analyzing the problem and taking corrective measures.",
    company: "TCS"
  },
  {
    question: "There is a water shortage in a town. What should authorities do?",
    options: [
      "Implement water rationing and promote awareness",
      "Increase water rates drastically",
      "Do nothing",
      "Allow free water usage"
    ],
    answer: "Implement water rationing and promote awareness",
    explanation: "Decision should be sustainable and helpful to solve the problem.",
    company: "Microsoft"
  },
  {
    question: "Employees are demotivated due to low incentives. What should HR do?",
    options: [
      "Introduce performance-based incentives",
      "Cut salaries further",
      "Ignore their concerns",
      "Lay off staff"
    ],
    answer: "Introduce performance-based incentives",
    explanation: "Decision should improve motivation and productivity positively.",
    company: "Capgemini"
  },
  {
    question: "A factory causes pollution complaints from locals. What is the right course?",
    options: [
      "Adopt cleaner technology and reduce emissions",
      "Continue as usual",
      "Bribe officials",
      "Move factory secretly"
    ],
    answer: "Adopt cleaner technology and reduce emissions",
    explanation: "Sustainable decision involves addressing the root cause responsibly.",
    company: "Cognizant"
  },
  {
    question: "Sales team is underperforming. What should management do?",
    options: [
      "Provide training and performance targets",
      "Fire them all immediately",
      "Reduce commission",
      "Ignore underperformance"
    ],
    answer: "Provide training and performance targets",
    explanation: "Decision should aim at improving skills and motivating team.",
    company: "Amazon"
  },
  {
    question: "There is frequent power outage in a city. What should the authorities decide?",
    options: [
      "Upgrade power infrastructure and schedule maintenance",
      "Increase electricity bills",
      "Do nothing",
      "Blame the weather"
    ],
    answer: "Upgrade power infrastructure and schedule maintenance",
    explanation: "Long-term solutions ensure continuous supply, not temporary blame.",
    company: "Wipro"
  },
  {
    question: "Students are facing mental stress due to exams. What should schools do?",
    options: [
      "Provide counseling and reduce unnecessary pressure",
      "Increase syllabus",
      "Ignore the issue",
      "Punish students for stress"
    ],
    answer: "Provide counseling and reduce unnecessary pressure",
    explanation: "Proper decision addresses the root cause constructively.",
    company: "Infosys"
  },
  {
    question: "A company’s website is getting frequent cyber attacks. What should IT department do?",
    options: [
      "Strengthen security protocols and monitor systems",
      "Ignore attacks",
      "Shut down website permanently",
      "Blame users"
    ],
    answer: "Strengthen security protocols and monitor systems",
    explanation: "Decision should be preventive and proactive to safeguard assets.",
    company: "TCS"
  },
  {
    question: "A public park is littered frequently. What should municipal authorities do?",
    options: [
      "Install dustbins and increase awareness",
      "Close the park",
      "Fine visitors excessively",
      "Ignore littering"
    ],
    answer: "Install dustbins and increase awareness",
    explanation: "Effective decisions combine infrastructure and public education.",
    company: "Microsoft"
  },
  {
    question: "Company faces repeated production defects. What is the right action?",
    options: [
      "Implement quality control checks",
      "Ignore defects",
      "Blame workers randomly",
      "Reduce production"
    ],
    answer: "Implement quality control checks",
    explanation: "Decision ensures defects are minimized systematically.",
    company: "Capgemini"
  },
  {
    question: "A local shop is losing customers. What is the best decision?",
    options: [
      "Improve product/service quality and customer experience",
      "Increase prices drastically",
      "Reduce product quality",
      "Do nothing"
    ],
    answer: "Improve product/service quality and customer experience",
    explanation: "Decision should enhance value for customers to retain them.",
    company: "Cognizant"
  },
  {
    question: "Students cheat frequently in exams. What should the principal do?",
    options: [
      "Introduce monitoring and awareness programs",
      "Ignore cheating",
      "Punish all students",
      "Cancel exams"
    ],
    answer: "Introduce monitoring and awareness programs",
    explanation: "Proper decision prevents problem sustainably and educates students.",
    company: "Amazon"
  },
  {
    question: "There is traffic violation on busy roads. What should police do?",
    options: [
      "Increase patrolling and enforce rules",
      "Ignore violations",
      "Impose fines without monitoring",
      "Close roads"
    ],
    answer: "Increase patrolling and enforce rules",
    explanation: "Proactive and monitored approach reduces violations effectively.",
    company: "Wipro"
  },
  {
    question: "Company suffers employee theft. What is the best decision?",
    options: [
      "Install surveillance and internal audit",
      "Ignore theft",
      "Fire all employees",
      "Blame suppliers"
    ],
    answer: "Install surveillance and internal audit",
    explanation: "Decision addresses cause and prevents recurrence responsibly.",
    company: "Infosys"
  },
  {
    question: "Local community faces water contamination. What is the right course?",
    options: [
      "Provide clean water and repair pipelines",
      "Ignore complaints",
      "Blame residents",
      "Reduce water supply"
    ],
    answer: "Provide clean water and repair pipelines",
    explanation: "Effective action solves problem sustainably.",
    company: "TCS"
  },
  {
    question: "Company receives negative social media feedback. What should marketing do?",
    options: [
      "Address complaints and improve service",
      "Ignore feedback",
      "Delete posts",
      "Blame competitors"
    ],
    answer: "Address complaints and improve service",
    explanation: "Decision improves reputation and customer satisfaction.",
    company: "Microsoft"
  },
  {
    question: "Local roads have potholes. What should civic authorities do?",
    options: [
      "Repair potholes and maintain roads regularly",
      "Ignore issues",
      "Charge higher tax",
      "Close roads permanently"
    ],
    answer: "Repair potholes and maintain roads regularly",
    explanation: "Proactive and constructive decision improves safety and service.",
    company: "Capgemini"
  }
];

// Shuffle options for each question
decisionMakingQuestions.forEach(q => {
  q.options = shuffleArray(q.options);
});

export default decisionMakingQuestions;
