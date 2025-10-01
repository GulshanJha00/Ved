"use client";
import React from "react";

const questions = [
  {
    topic: "Arrays & Strings",
    list: [
      { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", diff: "Easy" },
      { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", diff: "Easy" },
      { name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", diff: "Medium" },
      { name: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", diff: "Medium" },
      { name: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", diff: "Medium" },
      { name: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", diff: "Medium" },
      { name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", diff: "Medium" },
      { name: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", diff: "Medium" },
      { name: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", diff: "Easy" },
      { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", diff: "Hard" },
    ],
  },
  {
    topic: "Hashing & Prefix Sum",
    list: [
      { name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", diff: "Medium" },
      { name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", diff: "Easy" },
      { name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", diff: "Medium" },
      { name: "Two Sum II - Input Array Is Sorted", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", diff: "Easy" },
      { name: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", diff: "Medium" },
      { name: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", diff: "Hard" },
      { name: "Range Sum Query - Immutable", link: "https://leetcode.com/problems/range-sum-query-immutable/", diff: "Easy" },
      { name: "Maximum Average Subarray I", link: "https://leetcode.com/problems/maximum-average-subarray-i/", diff: "Easy" },
      { name: "3Sum", link: "https://leetcode.com/problems/3sum/", diff: "Medium" },
      { name: "4Sum", link: "https://leetcode.com/problems/4sum/", diff: "Medium" },
    ],
  },
  {
    topic: "Linked List",
    list: [
      { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", diff: "Easy" },
      { name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", diff: "Easy" },
      { name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", diff: "Easy" },
      { name: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", diff: "Easy" },
      { name: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", diff: "Medium" },
      { name: "Reorder List", link: "https://leetcode.com/problems/reorder-list/", diff: "Medium" },
      { name: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", diff: "Medium" },
      { name: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", diff: "Medium" },
      { name: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", diff: "Medium" },
      { name: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", diff: "Hard" },
    ],
  },
  {
    topic: "Stack & Queue",
    list: [
      { name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", diff: "Easy" },
      { name: "Min Stack", link: "https://leetcode.com/problems/min-stack/", diff: "Medium" },
      { name: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", diff: "Medium" },
      { name: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", diff: "Medium" },
      { name: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", diff: "Easy" },
      { name: "Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/", diff: "Easy" },
      { name: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", diff: "Easy" },
      { name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", diff: "Hard" },
      { name: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/", diff: "Medium" },
      { name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", diff: "Hard" },
    ],
  },
  {
    topic: "Binary Trees & BST",
    list: [
      { name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", diff: "Easy" },
      { name: "Same Tree", link: "https://leetcode.com/problems/same-tree/", diff: "Easy" },
      { name: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", diff: "Easy" },
      { name: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/", diff: "Easy" },
      { name: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/", diff: "Easy" },
      { name: "Path Sum", link: "https://leetcode.com/problems/path-sum/", diff: "Easy" },
      { name: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", diff: "Medium" },
      { name: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", diff: "Medium" },
      { name: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", diff: "Medium" },
      { name: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", diff: "Medium" },
      { name: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", diff: "Hard" },
      { name: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", diff: "Medium" },
      { name: "Kth Smallest Element in a BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", diff: "Medium" },
      { name: "Binary Search Tree Iterator", link: "https://leetcode.com/problems/binary-search-tree-iterator/", diff: "Medium" },
      { name: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/", diff: "Hard" },
    ],
  },
  {
    topic: "Recursion & Backtracking",
    list: [
      { name: "Subsets", link: "https://leetcode.com/problems/subsets/", diff: "Medium" },
      { name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", diff: "Medium" },
      { name: "Permutations", link: "https://leetcode.com/problems/permutations/", diff: "Medium" },
      { name: "Word Search", link: "https://leetcode.com/problems/word-search/", diff: "Medium" },
      { name: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", diff: "Medium" },
      { name: "N-Queens", link: "https://leetcode.com/problems/n-queens/", diff: "Hard" },
      { name: "Letter Combinations of a Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", diff: "Medium" },
      { name: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/", diff: "Medium" },
    ],
  },
  {
    topic: "Dynamic Programming",
    list: [
      { name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", diff: "Easy" },
      { name: "House Robber", link: "https://leetcode.com/problems/house-robber/", diff: "Medium" },
      { name: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/", diff: "Medium" },
      { name: "Coin Change", link: "https://leetcode.com/problems/coin-change/", diff: "Medium" },
      { name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", diff: "Medium" },
      { name: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", diff: "Medium" },
      { name: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", diff: "Medium" },
      { name: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", diff: "Medium" },
      { name: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", diff: "Hard" },
      { name: "Word Break", link: "https://leetcode.com/problems/word-break/", diff: "Medium" },
      { name: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/", diff: "Medium" },
      { name: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/", diff: "Medium" },
      { name: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", diff: "Medium" },
      { name: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/", diff: "Hard" },
      { name: "Interleaving String", link: "https://leetcode.com/problems/interleaving-string/", diff: "Hard" },
    ],
  },
  {
    topic: "Greedy",
    list: [
      { name: "Assign Cookies", link: "https://leetcode.com/problems/assign-cookies/", diff: "Easy" },
      { name: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/", diff: "Medium" },
      { name: "Gas Station", link: "https://leetcode.com/problems/gas-station/", diff: "Medium" },
      { name: "Jump Game", link: "https://leetcode.com/problems/jump-game/", diff: "Medium" },
      { name: "Jump Game II", link: "https://leetcode.com/problems/jump-game-ii/", diff: "Medium" },
      { name: "Candy", link: "https://leetcode.com/problems/candy/", diff: "Hard" },
    ],
  },
  {
    topic: "Graphs",
    list: [
      { name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", diff: "Medium" },
      { name: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", diff: "Medium" },
      { name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", diff: "Medium" },
      { name: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/", diff: "Medium" },
      { name: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", diff: "Medium" },
      { name: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", diff: "Hard" },
      { name: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/", diff: "Medium" },
      { name: "Graph Valid Tree", link: "https://leetcode.com/problems/graph-valid-tree/", diff: "Medium" },
      { name: "Shortest Path in Binary Matrix", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", diff: "Medium" },
      { name: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/", diff: "Medium" },
    ],
  },
  {
    topic: "Tries / Advanced",
    list: [
      { name: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/", diff: "Medium" },
      { name: "Design Add and Search Words Data Structure", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", diff: "Medium" },
      { name: "Word Search II", link: "https://leetcode.com/problems/word-search-ii/", diff: "Hard" },
    ],
  },
  {
    topic: "Bit Manipulation / Math / Binary Search",
    list: [
      { name: "Single Number", link: "https://leetcode.com/problems/single-number/", diff: "Easy" },
      { name: "Number of 1 Bits", link: "https://leetcode.com/problems/number-of-1-bits/", diff: "Easy" },
      { name: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", diff: "Medium" },
      { name: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/", diff: "Medium" },
      { name: "Sqrt(x)", link: "https://leetcode.com/problems/sqrtx/", diff: "Easy" },
      { name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", diff: "Medium" },
      { name: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", diff: "Medium" },
      { name: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/", diff: "Medium" },
      { name: "Divide Two Integers", link: "https://leetcode.com/problems/divide-two-integers/", diff: "Medium" },
      { name: "Power of Two", link: "https://leetcode.com/problems/power-of-two/", diff: "Easy" },
    ],
  },
];


const Page = () => {
  return (
  <div className="bg-black text-white min-h-screen p-4 sm:p-6">
    <h1 className="text-2xl mt-10 sm:text-3xl text-blue-400 font-bold mb-6 text-center">
      Top 107 LeetCode Questions
    </h1>

    {questions.map((section, idx) => (
      <div key={idx} className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl text-blue-300 mb-3 sm:mb-4">
          {section.topic}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-2 text-left text-sm sm:text-base">#</th>
                <th className="p-2 text-left text-sm sm:text-base">Question</th>
                <th className="p-2 text-left text-sm sm:text-base">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {section.list.map((q, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-800 hover:bg-gray-800"
                >
                  <td className="p-2 text-sm sm:text-base">{i + 1}</td>
                  <td className="p-2 text-sm sm:text-base">
                    <a
                      href={q.link}
                      target="_blank"
                      className=" cursor-pointer text-red-400 hover:underline"
                    >
                      {q.name}
                    </a>
                  </td>
                  <td className="p-2 text-gray-400 text-sm sm:text-base">
                    {q.diff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

};

export default Page;
