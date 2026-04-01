"use client";
import { useEffect, useState } from "react";

type CheckedType = Record<string, boolean>;

const STORAGE_KEY = "dbms_checklist";

// ✅ FULL DATA
const DATA = [
  {
    title: "DBMS Fundamentals",
    items: [
      "What is DBMS vs RDBMS",
      "Types of DBMS",
      "3-Level Architecture",
      "Data Independence",
      "Schema vs Instance",
      "DDL, DML, DCL, TCL",
    ],
  },
  {
    title: "ER Model",
    items: [
      "Entity & Attributes",
      "Relationships (1:1, 1:N, M:N)",
      "Strong vs Weak Entity",
      "ER Diagram",
      "ER to Relational",
    ],
  },
  {
    title: "Keys",
    items: [
      "Super Key, Candidate Key, Primary Key",
      "Foreign Key",
      "Composite & Alternate Key",
      "Referential Integrity",
    ],
  },
  {
    title: "SQL",
    items: [
      "SELECT, WHERE, GROUP BY",
      "JOINs",
      "Subqueries",
      "Aggregate Functions",
      "Indexes",
      "Window Functions",
    ],
  },
  {
    title: "Normalization",
    items: [
      "1NF, 2NF, 3NF",
      "BCNF",
      "Functional Dependencies",
      "Anomalies",
      "Lossless Join",
    ],
  },
  {
    title: "Transactions",
    items: [
      "ACID Properties",
      "Transaction States",
      "Serializability",
      "Recoverability",
    ],
  },
  {
    title: "Concurrency",
    items: [
      "Locks (S/X)",
      "2PL",
      "Deadlocks",
      "Isolation Levels",
      "MVCC",
    ],
  },
  {
    title: "Indexing",
    items: [
      "B-Tree, B+ Tree",
      "Dense vs Sparse",
      "Hashing",
      "Index Trade-offs",
    ],
  },
];

export default function Page() {
  const [checked, setChecked] = useState<CheckedType>({});

  // load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setChecked(JSON.parse(data));
  }, []);

  // save
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = (item: string) => {
    setChecked((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const markAll = (items: string[]) => {
    const updates: CheckedType = {};
    items.forEach((item) => {
      updates[item] = true;
    });
    setChecked((prev) => ({ ...prev, ...updates }));
  };

  const total = DATA.flatMap((t) => t.items).length;
  const done = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((done / total) * 100);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white px-4 py-8">
      
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-2">📚 DBMS Checklist</h1>
        <p className="text-gray-400 mb-6">
          Track your DBMS preparation
        </p>

        {/* PROGRESS */}
        <div className="mb-6">
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {done} / {total} completed ({progress}%)
          </p>
        </div>

        {/* TOPICS */}
        <div className="space-y-4">
          {DATA.map((topic, i) => {
            const topicDone = topic.items.filter((item) => checked[item]).length;
            const topicTotal = topic.items.length;

            return (
              <div
                key={i}
                className="bg-[#1a1a2e] border border-gray-800 rounded-xl p-4 relative"
              >
                {/* LEFT BORDER */}
                <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 rounded-l-xl" />

                {/* HEADER */}
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{topic.title}</h3>
                    <p className="text-sm text-gray-400">
                      {topicDone}/{topicTotal} done
                    </p>

                    {/* MINI PROGRESS */}
                    <div className="w-full h-1 bg-gray-800 rounded mt-2">
                      <div
                        className="h-1 bg-yellow-400 rounded"
                        style={{
                          width: `${(topicDone / topicTotal) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => markAll(topic.items)}
                    className="text-sm border border-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                  >
                    Mark all
                  </button>
                </div>

                {/* ITEMS */}
                <div>
                  {topic.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-none"
                    >
                      {/* CUSTOM CHECKBOX */}
                      <div
                        onClick={() => toggle(item)}
                        className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer
                          ${
                            checked[item]
                              ? "bg-purple-500 border-purple-500"
                              : "border-gray-500"
                          }`}
                      >
                        {checked[item] && "✓"}
                      </div>

                      {/* TEXT */}
                      <span
                        className={`text-sm ${
                          checked[item]
                            ? "line-through text-gray-500"
                            : "text-gray-300"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* RESET */}
        <button
          onClick={() => setChecked({})}
          className="mt-6 w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
}