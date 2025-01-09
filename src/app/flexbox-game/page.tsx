import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Check, ChevronLeft, ChevronRight, RotateCcw, HelpCircle } from 'lucide-react';

const LEVELS = [
  // Basic Levels (1-6)
  {
    number: 1,
    description: "Park the car in the center of the garage. Use justify-content to center the car horizontally.",
    hint: "Try using: justify-content: center;",
    emoji: "🚗",
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        justifyContent: "center"
      },
      solution: ["justify-content: center"]
    }
  },
  {
    number: 2,
    description: "Park the luxury car in the middle of the garage both horizontally and vertically.",
    hint: "You'll need both justify-content and align-items properties",
    emoji: "🚙",
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      },
      solution: ["justify-content: center", "align-items: center"]
    }
  },
  {
    number: 3,
    description: "Park multiple cars in a row using space-between.",
    hint: "Try using: justify-content: space-between;",
    emoji: "🚓",
    multiCar: true,
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      },
      solution: ["justify-content: space-between", "align-items: center"]
    }
  },
  {
    number: 4,
    description: "Park cars with equal spacing around them using space-around.",
    hint: "Use justify-content: space-around;",
    emoji: "🚕",
    multiCar: true,
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center"
      },
      solution: ["justify-content: space-around"]
    }
  },
  {
    number: 5,
    description: "Stack cars vertically in the center.",
    hint: "Combine flex-direction: column with justify-content and align-items",
    emoji: "🚐",
    multiCar: true,
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      solution: ["flex-direction: column", "justify-content: center", "align-items: center"]
    }
  },
  {
    number: 6,
    description: "Park cars in reverse order horizontally.",
    hint: "Use flex-direction: row-reverse;",
    emoji: "🚗",
    multiCar: true,
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        flexDirection: "row-reverse",
        justifyContent: "space-between"
      },
      solution: ["flex-direction: row-reverse", "justify-content: space-between"]
    }
  },
  {
    number: 7,
    description: "Wrap multiple cars into two rows.",
    hint: "Use flex-wrap: wrap and set a specific width",
    emoji: "🚓",
    multiCar: true,
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "center"
      },
      solution: ["flex-wrap: wrap", "justify-content: space-around", "align-content: center"]
    }
  },
  {
    number: 8,
    description: "Make the middle car larger using flex-grow.",
    hint: "Use flex-grow: 2 on the middle element",
    emoji: "🚙",
    multiCar: true,
    setup: {
      containerStyles: {
        display: "flex",
        height: "100%",
        justifyContent: "space-between"
      },
      itemStyles: [
        { flexGrow: 1 },
        { flexGrow: 2 },
        { flexGrow: 1 }
      ],
      solution: ["flex-grow: 2"]
    }
  }
];

const FlexboxMaster = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [cssInput, setCssInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  
  const targetPlaygroundRef = useRef<HTMLDivElement>(null);
  const previewPlaygroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadProgress();
    updateTargetLayout();
  }, [currentLevel]);

  const loadProgress = () => {
    const savedInput = localStorage.getItem(`level${currentLevel}Input`);
    if (savedInput) setCssInput(savedInput);
  };

  const saveProgress = () => {
    localStorage.setItem(`level${currentLevel}Input`, cssInput);
  };

  const updateTargetLayout = () => {
    if (!targetPlaygroundRef.current) return;
    const level = LEVELS[currentLevel];
    Object.assign(targetPlaygroundRef.current.style, level.setup.containerStyles);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssInput(e.target.value);
    try {
      const playground = previewPlaygroundRef.current;
      if (!playground) return;
      
      // Reset to default styles first
      Object.assign(playground.style, { 
        display: 'flex',
        height: '100%'
      });
      
      // Clear any previously set styles
      const computedStyle = window.getComputedStyle(playground);
      for (const key of Array.from(computedStyle)) {
        if (key.startsWith('flex') || key.startsWith('justify') || key.startsWith('align')) {
          playground.style[key as any] = '';
        }
      }
      
      // Apply new styles
      e.target.value.split('\n')
        .filter(line => line.trim())
        .forEach(line => {
          const [prop, value] = line.split(':').map(s => s.trim());
          if (prop && value) {
            const formattedValue = value.replace(';', '').trim();
            playground.style[prop.replace(/-./g, x => x[1].toUpperCase()) as any] = formattedValue;
          }
        });
      setError('');
      saveProgress();
    } catch (err) {
      setError('Invalid CSS syntax');
    }
  };

  const checkAnswer = () => {
    const userInput = cssInput
      .split('\n')
      .map(line => line.trim())
      .filter(line => line)
      .map(line => line.endsWith(';') ? line : line + ';');

    const requiredProperties = LEVELS[currentLevel].setup.solution;
    const hasAllProperties = requiredProperties.every(required => 
      userInput.some(input => 
        input.replace(/\s+/g, '') === required.replace(/\s+/g, '') + ';'
      )
    );

    if (hasAllProperties) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        if (currentLevel < LEVELS.length - 1) {
          setCurrentLevel(prev => prev + 1);
          setCssInput('');
        }
      }, 1500);
    } else {
      setError('Not quite right. Try again!');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleReset = () => {
    setCssInput('');
    setError('');
    const playground = previewPlaygroundRef.current;
    if (playground) {
      Object.assign(playground.style, { display: 'flex', height: '100%' });
    }
  };

  const Car = ({ emoji, size = "text-6xl", style = {} }: { emoji: string; size?: string; style?: React.CSSProperties }) => (
    <div 
      className={`${size} transform hover:scale-110 transition-transform duration-200`}
      style={style}
    >
      {emoji}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 text-center border border-[#2a2a3d]">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Ved's Flexbox Master
          </h1>
          <p className="text-gray-400">
            Powered by{' '}
            <a 
              href="https://quadropic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Quadropic
            </a>
          </p>
        </div>

        {/* Level Info */}
        <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 border border-[#2a2a3d]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-purple-400">Level {LEVELS[currentLevel].number}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => currentLevel > 0 && setCurrentLevel(prev => prev - 1)}
                disabled={currentLevel === 0}
                className="p-2 rounded-lg bg-[#2a2a3d] disabled:opacity-50 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => currentLevel < LEVELS.length - 1 && setCurrentLevel(prev => prev + 1)}
                disabled={currentLevel === LEVELS.length - 1}
                className="p-2 rounded-lg bg-[#2a2a3d] disabled:opacity-50 text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <p className="text-gray-300 mt-4">{LEVELS[currentLevel].description}</p>
          {showHint && (
            <div className="mt-4 p-4 bg-[#2a2a3d] rounded-lg">
              <p className="text-gray-400">{LEVELS[currentLevel].hint}</p>
            </div>
          )}
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-4 p-2 rounded-lg bg-[#2a2a3d] text-gray-400 hover:text-gray-300"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>

        {/* Playground */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Target Playground */}
          <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 border border-[#2a2a3d]">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Target</h3>
            <div
              ref={targetPlaygroundRef}
              className="w-full h-64 bg-[#2a2a3d] rounded-lg"
            >
              {LEVELS[currentLevel].multiCar ? (
                <>
                  <Car emoji={LEVELS[currentLevel].emoji} />
                  <Car emoji={LEVELS[currentLevel].emoji} />
                  <Car emoji={LEVELS[currentLevel].emoji} />
                </>
              ) : (
                <Car emoji={LEVELS[currentLevel].emoji} />
              )}
            </div>
          </div>

          {/* Preview Playground */}
          <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 border border-[#2a2a3d]">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Your Solution</h3>
            <div
              ref={previewPlaygroundRef}
              className="w-full h-64 bg-[#2a2a3d] rounded-lg"
            >
              {LEVELS[currentLevel].multiCar ? (
                <>
                  <Car emoji={LEVELS[currentLevel].emoji} />
                  <Car emoji={LEVELS[currentLevel].emoji} />
                  <Car emoji={LEVELS[currentLevel].emoji} />
                </>
              ) : (
                <Car emoji={LEVELS[currentLevel].emoji} />
              )}
            </div>
          </div>
        </div>

        {/* CSS Input */}
        <div className="bg-[#1a1a2e] rounded-xl shadow-lg p-6 border border-[#2a2a3d]">
          <h3 className="text-xl font-bold text-purple-400 mb-4">CSS Input</h3>
          <textarea
            value={cssInput}
            onChange={handleInputChange}
            className={`w-full h-32 p-4 bg-[#2a2a3d] rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              shake ? 'animate-shake' : ''
            }`}
            placeholder="Enter your CSS here..."
          />
          {error && (
            <div className="mt-4 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center gap-2 text-red-200">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-2 text-green-200">
              <Check className="h-4 w-4" />
              <p>Success! Moving to the next level...</p>
            </div>
          )}
          <div className="flex gap-2 mt-4">
            <button
              onClick={checkAnswer}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium"
            >
              Check Answer
            </button>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-[#2a2a3d] text-gray-400 hover:text-gray-300"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexboxMaster;
