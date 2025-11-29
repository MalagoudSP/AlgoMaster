export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Status = 'solved' | 'attempted' | 'unsolved';
export type Topic = 'Array' | 'String' | 'Linked List' | 'Tree' | 'Graph' | 'Dynamic Programming' | 'Binary Search' | 'Stack' | 'Queue' | 'Hash Table' | 'Heap' | 'Sorting' | 'Two Pointers' | 'Sliding Window' | 'Recursion' | 'Backtracking' | 'Greedy' | 'Math';

export interface Problem {
  id: number;
  title: string;
  difficulty: Difficulty;
  topics: Topic[];
  acceptance: number;
  status: Status;
  isPremium?: boolean;
  frequency?: number;
  companies?: string[];
}

export interface ProblemDetail extends Problem {
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  hints?: string[];
  starterCode: {
    typescript: string;
    javascript: string;
    python: string;
  };
  solution?: string;
}

export const problems: Problem[] = [
  { id: 1, title: "Two Sum", difficulty: "Easy", topics: ["Array", "Hash Table"], acceptance: 49.2, status: "solved", frequency: 95, companies: ["Google", "Amazon", "Meta"] },
  { id: 2, title: "Add Two Numbers", difficulty: "Medium", topics: ["Linked List", "Math", "Recursion"], acceptance: 40.1, status: "attempted", frequency: 78, companies: ["Microsoft", "Amazon"] },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", topics: ["String", "Sliding Window", "Hash Table"], acceptance: 33.8, status: "unsolved", frequency: 88, companies: ["Amazon", "Meta", "Bloomberg"] },
  { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", topics: ["Array", "Binary Search"], acceptance: 35.9, status: "unsolved", frequency: 65, companies: ["Google", "Apple"] },
  { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", topics: ["String", "Dynamic Programming"], acceptance: 32.4, status: "unsolved", frequency: 72 },
  { id: 15, title: "3Sum", difficulty: "Medium", topics: ["Array", "Two Pointers", "Sorting"], acceptance: 32.2, status: "solved", frequency: 82 },
  { id: 20, title: "Valid Parentheses", difficulty: "Easy", topics: ["String", "Stack"], acceptance: 40.7, status: "solved", frequency: 90 },
  { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", topics: ["Linked List", "Recursion"], acceptance: 62.5, status: "solved", frequency: 85 },
  { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", topics: ["Linked List", "Heap"], acceptance: 49.9, status: "unsolved", frequency: 70, isPremium: true },
  { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", topics: ["Array", "Binary Search"], acceptance: 38.9, status: "attempted", frequency: 75 },
  { id: 42, title: "Trapping Rain Water", difficulty: "Hard", topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack"], acceptance: 59.2, status: "unsolved", frequency: 80 },
  { id: 46, title: "Permutations", difficulty: "Medium", topics: ["Array", "Backtracking"], acceptance: 75.4, status: "solved", frequency: 68 },
  { id: 49, title: "Group Anagrams", difficulty: "Medium", topics: ["Array", "Hash Table", "String", "Sorting"], acceptance: 66.7, status: "solved", frequency: 77 },
  { id: 53, title: "Maximum Subarray", difficulty: "Medium", topics: ["Array", "Dynamic Programming"], acceptance: 50.0, status: "solved", frequency: 88 },
  { id: 56, title: "Merge Intervals", difficulty: "Medium", topics: ["Array", "Sorting"], acceptance: 46.3, status: "attempted", frequency: 85 },
  { id: 70, title: "Climbing Stairs", difficulty: "Easy", topics: ["Dynamic Programming", "Math"], acceptance: 51.7, status: "solved", frequency: 82 },
  { id: 76, title: "Minimum Window Substring", difficulty: "Hard", topics: ["String", "Sliding Window", "Hash Table"], acceptance: 40.4, status: "unsolved", frequency: 72 },
  { id: 94, title: "Binary Tree Inorder Traversal", difficulty: "Easy", topics: ["Tree", "Stack", "Recursion"], acceptance: 73.9, status: "solved", frequency: 65 },
  { id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", topics: ["Tree", "Binary Search", "Recursion"], acceptance: 31.8, status: "attempted", frequency: 70 },
  { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", topics: ["Tree", "Queue"], acceptance: 64.0, status: "solved", frequency: 75 },
  { id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", topics: ["Array", "Dynamic Programming"], acceptance: 54.1, status: "solved", frequency: 92 },
  { id: 124, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", topics: ["Tree", "Dynamic Programming", "Recursion"], acceptance: 38.6, status: "unsolved", frequency: 68 },
  { id: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", topics: ["Array", "Hash Table"], acceptance: 49.0, status: "solved", frequency: 74 },
  { id: 139, title: "Word Break", difficulty: "Medium", topics: ["String", "Dynamic Programming", "Hash Table"], acceptance: 45.5, status: "attempted", frequency: 78 },
  { id: 146, title: "LRU Cache", difficulty: "Medium", topics: ["Hash Table", "Linked List"], acceptance: 40.5, status: "attempted", frequency: 85 },
  { id: 152, title: "Maximum Product Subarray", difficulty: "Medium", topics: ["Array", "Dynamic Programming"], acceptance: 34.9, status: "unsolved", frequency: 70 },
  { id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", topics: ["Array", "Binary Search"], acceptance: 48.7, status: "solved", frequency: 72 },
  { id: 200, title: "Number of Islands", difficulty: "Medium", topics: ["Array", "Graph", "Recursion"], acceptance: 56.5, status: "solved", frequency: 88 },
  { id: 206, title: "Reverse Linked List", difficulty: "Easy", topics: ["Linked List", "Recursion"], acceptance: 73.4, status: "solved", frequency: 90 },
  { id: 207, title: "Course Schedule", difficulty: "Medium", topics: ["Graph", "Recursion"], acceptance: 45.5, status: "attempted", frequency: 75 },
  { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", topics: ["Array", "Sorting", "Heap"], acceptance: 65.9, status: "solved", frequency: 82 },
  { id: 226, title: "Invert Binary Tree", difficulty: "Easy", topics: ["Tree", "Recursion"], acceptance: 73.9, status: "solved", frequency: 78 },
  { id: 238, title: "Product of Array Except Self", difficulty: "Medium", topics: ["Array"], acceptance: 64.8, status: "solved", frequency: 85 },
  { id: 239, title: "Sliding Window Maximum", difficulty: "Hard", topics: ["Array", "Queue", "Sliding Window", "Heap"], acceptance: 46.6, status: "unsolved", frequency: 70, isPremium: true },
  { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", topics: ["Heap", "Sorting"], acceptance: 51.0, status: "unsolved", frequency: 75 },
  { id: 297, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", topics: ["Tree", "String", "Recursion"], acceptance: 55.5, status: "unsolved", frequency: 68 },
  { id: 300, title: "Longest Increasing Subsequence", difficulty: "Medium", topics: ["Array", "Binary Search", "Dynamic Programming"], acceptance: 52.1, status: "attempted", frequency: 78 },
  { id: 322, title: "Coin Change", difficulty: "Medium", topics: ["Array", "Dynamic Programming"], acceptance: 42.0, status: "solved", frequency: 82 },
  { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", topics: ["Array", "Hash Table", "Heap", "Sorting"], acceptance: 64.2, status: "solved", frequency: 80 },
  { id: 416, title: "Partition Equal Subset Sum", difficulty: "Medium", topics: ["Array", "Dynamic Programming"], acceptance: 46.7, status: "attempted", frequency: 72 },
  { id: 543, title: "Diameter of Binary Tree", difficulty: "Easy", topics: ["Tree", "Recursion"], acceptance: 56.4, status: "solved", frequency: 75 },
  { id: 572, title: "Subtree of Another Tree", difficulty: "Easy", topics: ["Tree", "Recursion"], acceptance: 46.0, status: "solved", frequency: 70 },
  { id: 647, title: "Palindromic Substrings", difficulty: "Medium", topics: ["String", "Dynamic Programming"], acceptance: 66.4, status: "attempted", frequency: 68 },
  { id: 704, title: "Binary Search", difficulty: "Easy", topics: ["Array", "Binary Search"], acceptance: 55.2, status: "solved", frequency: 85 },
  { id: 994, title: "Rotting Oranges", difficulty: "Medium", topics: ["Array", "Graph", "Queue"], acceptance: 52.9, status: "solved", frequency: 72 },
];

export const problemDetails: Record<number, ProblemDetail> = {
  1: {
    ...problems.find(p => p.id === 1)!,
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]"
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    hints: [
      "A brute force approach would be to iterate through each element and check if there exists another element that sums to target.",
      "Can we optimize using a hash map to store elements we've seen?"
    ],
    starterCode: {
      typescript: `function twoSum(nums: number[], target: number): number[] {
    // Write your solution here
    
}`,
      javascript: `function twoSum(nums, target) {
    // Write your solution here
    
}`,
      python: `def twoSum(nums: List[int], target: int) -> List[int]:
    # Write your solution here
    pass`
    }
  },
  121: {
    ...problems.find(p => p.id === 121)!,
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i-th\` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the *maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return \`0\`.`,
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0."
      }
    ],
    constraints: [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    hints: [
      "Track the minimum price seen so far",
      "At each step, calculate potential profit if sold today"
    ],
    starterCode: {
      typescript: `function maxProfit(prices: number[]): number {
    // Write your solution here
    
}`,
      javascript: `function maxProfit(prices) {
    // Write your solution here
    
}`,
      python: `def maxProfit(prices: List[int]) -> int:
    # Write your solution here
    pass`
    }
  }
};

export const topics: Topic[] = [
  'Array', 'String', 'Linked List', 'Tree', 'Graph', 'Dynamic Programming',
  'Binary Search', 'Stack', 'Queue', 'Hash Table', 'Heap', 'Sorting',
  'Two Pointers', 'Sliding Window', 'Recursion', 'Backtracking', 'Greedy', 'Math'
];

export const patterns = [
  { name: "Sliding Window", problems: 15, mastery: 60 },
  { name: "Two Pointers", problems: 18, mastery: 75 },
  { name: "Fast & Slow Pointers", problems: 8, mastery: 40 },
  { name: "Merge Intervals", problems: 10, mastery: 55 },
  { name: "Cyclic Sort", problems: 7, mastery: 30 },
  { name: "In-place Reversal", problems: 6, mastery: 85 },
  { name: "Tree BFS", problems: 12, mastery: 70 },
  { name: "Tree DFS", problems: 14, mastery: 65 },
  { name: "Two Heaps", problems: 5, mastery: 25 },
  { name: "Subsets", problems: 9, mastery: 50 },
  { name: "Binary Search", problems: 16, mastery: 80 },
  { name: "Top K Elements", problems: 8, mastery: 45 },
];
