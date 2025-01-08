"use client";
import React, { useState } from "react";

const levels = [
  {
    level: 1,
    hint: "Use 'row' direction to align items horizontally.",
    targetStyle: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
  },
  {
    level: 2,
    hint: "Try 'column' direction to align items vertically.",
    targetStyle: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
  },
  {
    level: 3,
    hint: "Use 'center' for justify-content to center items horizontally.",
    targetStyle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
    },
  },
  {
    level: 4,
    hint: "Use 'flex-end' for align-items to align items at the end vertically.",
    targetStyle: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-end",
    },
  },
  {
    level: 5,
    hint: "Use 'space-between' for justify-content to distribute items evenly.",
    targetStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
    },
  },
  {
    level: 6,
    hint: "Use 'space-around' for justify-content to distribute items with space around them.",
    targetStyle: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "stretch",
    },
  },
  {
    level: 7,
    hint: "Use 'space-evenly' for justify-content to distribute items with equal space around them.",
    targetStyle: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "stretch",
    },
  },
  {
    level: 8,
    hint: "Use 'row-reverse' direction to reverse the order of items horizontally.",
    targetStyle: {
      flexDirection: "row-reverse",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
  },
  {
    level: 9,
    hint: "Use 'column-reverse' direction to reverse the order of items vertically.",
    targetStyle: {
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
  },
  {
    level: 10,
    hint: "Combine 'column' direction with 'center' for align-items to center items vertically.",
    targetStyle: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
];

const FlexboxGame = () => {
  const [level, setLevel] = useState(1);
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");

  const handleFlexDirectionChange = (e) => {
    setFlexDirection(e.target.value);
  };

  const handleJustifyContentChange = (e) => {
    setJustifyContent(e.target.value);
  };

  const handleAlignItemsChange = (e) => {
    setAlignItems(e.target.value);
  };

  const handleNextLevel = () => {
    if (level < 10) {
      setLevel(level + 1);
      setFlexDirection("row");
      setJustifyContent("flex-start");
      setAlignItems("stretch");
    }
  };

  const currentLevel = levels[level - 1];

  return (
    <div className="flexbox-game-container">
      <h1 className="text-4xl font-bold mb-4">Flexbox Game</h1>
      <p className="text-lg mb-6">Level {level}</p>
      <p className="text-md mb-4">{currentLevel.hint}</p>

      <div className="controls">
        <div className="control">
          <label htmlFor="flexDirection">Flex Direction:</label>
          <select
            id="flexDirection"
            value={flexDirection}
            onChange={handleFlexDirectionChange}
          >
            <option value="row">Row</option>
            <option value="row-reverse">Row Reverse</option>
            <option value="column">Column</option>
            <option value="column-reverse">Column Reverse</option>
          </select>
        </div>

        <div className="control">
          <label htmlFor="justifyContent">Justify Content:</label>
          <select
            id="justifyContent"
            value={justifyContent}
            onChange={handleJustifyContentChange}
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
          </select>
        </div>

        <div className="control">
          <label htmlFor="alignItems">Align Items:</label>
          <select
            id="alignItems"
            value={alignItems}
            onChange={handleAlignItemsChange}
          >
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
          </select>
        </div>
      </div>

      <div
        className="flexbox-container"
        style={{
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        <div className="flexbox-item">1</div>
        <div className="flexbox-item">2</div>
        <div className="flexbox-item">3</div>
        <div className="flexbox-item">4</div>
        <div className="flexbox-item">5</div>
      </div>

      <button
        className="next-level-button bg-blue-500 text-white py-2 px-4 rounded mt-6"
        onClick={handleNextLevel}
      >
        Next Level
      </button>

      <style jsx>{`
        .flexbox-game-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .controls {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .control {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .flexbox-container {
          display: flex;
          width: 100%;
          height: 200px;
          border: 2px solid #ccc;
          margin-bottom: 20px;
        }

        .flexbox-item {
          width: 50px;
          height: 50px;
          background-color: #4caf50;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
        }

        .next-level-button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FlexboxGame;
