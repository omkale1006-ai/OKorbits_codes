(function(){
  const PROBLEMS = [
    { id:1, title:'Two Sum', topic_filter:'arrays', topic_label:'Arrays, Hashing', difficulty:'easy', acceptance:'54%', company:'amazon', description:'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', examples:['Input: nums=[2,7,11,15], target=9 | Output: [0,1]','Input: nums=[3,2,4], target=6 | Output: [1,2]'] },
    { id:2, title:'Longest Substring Without Repeating Characters', topic_filter:'dynamic-programming', topic_label:'Sliding Window', difficulty:'medium', acceptance:'36%', company:'google', description:'Given a string s, find the length of the longest substring without repeating characters.', examples:['Input: s="abcabcbb" | Output: 3','Input: s="bbbbb" | Output: 1'] },
    { id:3, title:'Merge Intervals', topic_filter:'arrays', topic_label:'Intervals', difficulty:'medium', acceptance:'47%', company:'microsoft', description:'Given an array of intervals where intervals[i]=[starti, endi], merge all overlapping intervals.', examples:['Input: [[1,3],[2,6],[8,10],[15,18]] | Output: [[1,6],[8,10],[15,18]]'] },
    { id:4, title:'Binary Tree Level Order Traversal', topic_filter:'graphs', topic_label:'Trees, BFS', difficulty:'medium', acceptance:'58%', company:'microsoft', description:'Given the root of a binary tree, return level order traversal of its nodes values.', examples:['Input: root=[3,9,20,null,null,15,7] | Output: [[3],[9,20],[15,7]]'] },
    { id:5, title:'Course Schedule', topic_filter:'graphs', topic_label:'Graphs, Topological Sort', difficulty:'medium', acceptance:'49%', company:'amazon', description:'Return true if you can finish all courses based on prerequisite pairs.', examples:['Input: numCourses=2, prerequisites=[[1,0]] | Output: true'] },
    { id:6, title:'Word Ladder', topic_filter:'graphs', topic_label:'Graphs, BFS', difficulty:'hard', acceptance:'33%', company:'google', description:'Return shortest transformation sequence length from beginWord to endWord.', examples:['Input: beginWord="hit", endWord="cog" ... | Output: 5'] },
    { id:7, title:'Best Time to Buy and Sell Stock', topic_filter:'arrays', topic_label:'Arrays', difficulty:'easy', acceptance:'52%', company:'amazon', description:'Find the maximum profit by choosing one day to buy and one future day to sell.', examples:['Input: [7,1,5,3,6,4] | Output: 5'] },
    { id:8, title:'Contains Duplicate', topic_filter:'arrays', topic_label:'Arrays, Hashing', difficulty:'easy', acceptance:'62%', company:'microsoft', description:'Return true if any value appears at least twice in the array.', examples:['Input: [1,2,3,1] | Output: true'] },
    { id:9, title:'Product of Array Except Self', topic_filter:'arrays', topic_label:'Arrays, Prefix/Suffix', difficulty:'medium', acceptance:'66%', company:'google', description:'Return output[i] as product of all nums except nums[i] without division.', examples:['Input: [1,2,3,4] | Output: [24,12,8,6]'] },
    { id:10, title:'Maximum Subarray', topic_filter:'dynamic-programming', topic_label:'Dynamic Programming', difficulty:'medium', acceptance:'51%', company:'microsoft', description:'Find the contiguous subarray with the largest sum.', examples:['Input: [-2,1,-3,4,-1,2,1,-5,4] | Output: 6'] },
    { id:11, title:'Find Minimum in Rotated Sorted Array', topic_filter:'binary-search', topic_label:'Binary Search', difficulty:'medium', acceptance:'53%', company:'amazon', description:'Find minimum element in rotated sorted array in O(log n).', examples:['Input: [3,4,5,1,2] | Output: 1'] },
    { id:12, title:'Search in Rotated Sorted Array', topic_filter:'binary-search', topic_label:'Binary Search', difficulty:'medium', acceptance:'42%', company:'google', description:'Search target in rotated sorted array with unique values.', examples:['Input: nums=[4,5,6,7,0,1,2], target=0 | Output: 4'] }
  ];

  const SOLUTIONS = {
    1: [{ author:'Dost', language:'Python', explanation:'Use a hashmap for complements in one pass.', code:'def twoSum(nums, target):\n    seen = {}\n    for i, x in enumerate(nums):\n        if target - x in seen:\n            return [seen[target - x], i]\n        seen[x] = i', created_at:'2026-02-17 10:00' }],
    2: [{ author:'Dost', language:'Python', explanation:'Sliding window with last-seen index map.', code:'def lengthOfLongestSubstring(s):\n    left = 0\n    seen = {}\n    ans = 0\n    for right, ch in enumerate(s):\n        if ch in seen and seen[ch] >= left:\n            left = seen[ch] + 1\n        seen[ch] = right\n        ans = max(ans, right - left + 1)\n    return ans', created_at:'2026-02-17 10:10' }]
  };

  const CONTESTS = {
    live: { name:'Weekly DSA Sprint 42', start:'Live Now', duration:'90 mins', questions:4, participants:1284 },
    upcoming: [
      { name:'Binary Search Blitz', start:'Sat 8:00 PM', duration:'75 mins', questions:4, difficulty:'Easy-Medium' },
      { name:'Graph Grind Cup', start:'Sun 10:00 AM', duration:'120 mins', questions:5, difficulty:'Medium-Hard' },
      { name:'DP Marathon', start:'Wed 8:30 PM', duration:'100 mins', questions:4, difficulty:'Medium-Hard' }
    ],
    past: [
      { name:'Array Arena 18', date:'2026-02-10', participants:930, top_score:400 },
      { name:'Tree Trials 11', date:'2026-02-03', participants:881, top_score:380 },
      { name:'Hashing Heat 7', date:'2026-01-27', participants:845, top_score:360 }
    ],
    leaderboard: [
      { rank:1, user:'Dost', score:3920 },
      { rank:2, user:'AnitaK', score:3810 },
      { rank:3, user:'Arjun27', score:3740 },
      { rank:4, user:'NehaDSA', score:3600 },
      { rank:5, user:'Ritvik', score:3560 }
    ]
  };

  window.OKData = { PROBLEMS: PROBLEMS, SOLUTIONS: SOLUTIONS, CONTESTS: CONTESTS };
})();
