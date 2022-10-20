import { SelectionModel } from '@angular/cdk/collections';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';


import { faJava, faJsSquare, faPhp, faPython, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface ArticleEntry {
  no: number;
  done: boolean;
  title: string;
  leetcode: string;
  video: string;
  article: string;
  mainTopic: string;
  solution: {
    javascript: string;
    java: string;
    php: string;
    python: string;
  };
}

const ELEMENT_DATA: ArticleEntry[] = [
  {
    no: 1,
    done: false,
    title: 'Two Sum',
    leetcode: 'https://leetcode.com/problems/two-sum/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 2,
    done: false,
    title: 'Best Time to Buy and Sell Stock',
    leetcode: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    video: '',
    article: 'best-time-to-buy-and-sell-stock',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 3,
    done: false,
    title: 'Contains Duplicate',
    leetcode: 'https://leetcode.com/problems/contains-duplicate/',
    video: '',
    article: 'contains-duplicate',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 4,
    done: false,
    title: 'Product of Array Except Self',
    leetcode: 'https://leetcode.com/problems/product-of-array-except-self/',
    video: '',
    article: 'product-of-array-except-self',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 5,
    done: false,
    title: 'Maximum Subarray',
    leetcode: 'https://leetcode.com/problems/maximum-subarray/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 6,
    done: false,
    title: 'Maximum Product Subarray',
    leetcode: 'https://leetcode.com/problems/maximum-product-subarray/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 7,
    done: false,
    title: 'Find Minimum in Rotated Sorted Array',
    leetcode: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 8,
    done: false,
    title: 'Search in Rotated Sorted Array',
    leetcode: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 9,
    done: false,
    title: '3 Sum',
    leetcode: 'https://leetcode.com/problems/3sum/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 10,
    done: false,
    title: 'Container With Most Water',
    leetcode: 'https://leetcode.com/problems/container-with-most-water/',
    video: '',
    article: '',
    mainTopic: 'array',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 11,
    done: false,
    title: 'Sum of Two Integers',
    leetcode: 'https://leetcode.com/problems/sum-of-two-integers/',
    video: '',
    article: '',
    mainTopic: 'binary',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 12,
    done: false,
    title: 'Number of 1 Bits',
    leetcode: 'https://leetcode.com/problems/number-of-1-bits/',
    video: '',
    article: '',
    mainTopic: 'binary',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 13,
    done: false,
    title: 'Counting Bits',
    leetcode: 'https://leetcode.com/problems/counting-bits/',
    video: '',
    article: '',
    mainTopic: 'binary',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 14,
    done: false,
    title: 'Missing Number',
    leetcode: 'https://leetcode.com/problems/missing-number/',
    video: '',
    article: '',
    mainTopic: 'binary',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 15,
    done: false,
    title: 'Reverse Bits',
    leetcode: 'https://leetcode.com/problems/reverse-bits/',
    video: '',
    article: '',
    mainTopic: 'binary',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 16,
    done: false,
    title: 'Climbing Stairs',
    leetcode: 'https://leetcode.com/problems/climbing-stairs/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 17,
    done: false,
    title: 'Coin Change',
    leetcode: 'https://leetcode.com/problems/coin-change/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 18,
    done: false,
    title: 'Longest Increasing Subsequence',
    leetcode: 'https://leetcode.com/problems/longest-increasing-subsequence/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 19,
    done: false,
    title: 'Longest Common Subsequence',
    leetcode: 'https://leetcode.com/problems/longest-common-subsequence/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 20,
    done: false,
    title: 'Word Break Problem',
    leetcode: 'https://leetcode.com/problems/word-break/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 21,
    done: false,
    title: 'Combination Sum',
    leetcode: 'https://leetcode.com/problems/combination-sum-iv/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 22,
    done: false,
    title: 'House Robber',
    leetcode: 'https://leetcode.com/problems/house-robber/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 23,
    done: false,
    title: 'House Robber II',
    leetcode: 'https://leetcode.com/problems/house-robber-ii/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 24,
    done: false,
    title: 'Decode Ways',
    leetcode: 'https://leetcode.com/problems/decode-ways/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 25,
    done: false,
    title: 'Unique Paths',
    leetcode: 'https://leetcode.com/problems/unique-paths/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 26,
    done: false,
    title: 'Jump Game',
    leetcode: 'https://leetcode.com/problems/jump-game/',
    video: '',
    article: '',
    mainTopic: 'dynamic programming',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 27,
    done: false,
    title: 'Clone Graph',
    leetcode: 'https://leetcode.com/problems/clone-graph/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 28,
    done: false,
    title: 'Course Schedule',
    leetcode: 'https://leetcode.com/problems/course-schedule/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 29,
    done: false,
    title: 'Pacific Atlantic Water Flow',
    leetcode: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 30,
    done: false,
    title: 'Number of Islands',
    leetcode: 'https://leetcode.com/problems/number-of-islands/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 31,
    done: false,
    title: 'Longest Consecutive Sequence',
    leetcode: 'https://leetcode.com/problems/longest-consecutive-sequence/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 32,
    done: false,
    title: 'Alien Dictionary (Leetcode Premium)',
    leetcode: 'https://leetcode.com/problems/alien-dictionary/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 33,
    done: false,
    title: 'Graph Valid Tree (Leetcode Premium)',
    leetcode: 'https://leetcode.com/problems/graph-valid-tree/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 34,
    done: false,
    title: 'Number of Connected Components in an Undirected Graph (Leetcode Premium)',
    leetcode: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
    video: '',
    article: '',
    mainTopic: 'graph',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 35,
    done: false,
    title: 'Insert Interval',
    leetcode: 'https://leetcode.com/problems/insert-interval/',
    video: '',
    article: '',
    mainTopic: 'interval',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 36,
    done: false,
    title: 'Merge Intervals',
    leetcode: 'https://leetcode.com/problems/merge-intervals/',
    video: '',
    article: '',
    mainTopic: 'interval',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 37,
    done: false,
    title: 'Non-overlapping Intervals',
    leetcode: 'https://leetcode.com/problems/non-overlapping-intervals/',
    video: '',
    article: '',
    mainTopic: 'interval',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 38,
    done: false,
    title: 'Meeting Rooms (Leetcode Premium)',
    leetcode: 'https://leetcode.com/problems/meeting-rooms/',
    video: '',
    article: '',
    mainTopic: 'interval',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 39,
    done: false,
    title: 'Meeting Rooms II (Leetcode Premium)',
    leetcode: 'https://leetcode.com/problems/meeting-rooms-ii/',
    video: '',
    article: '',
    mainTopic: 'interval',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 40,
    done: false,
    title: 'Reverse a Linked List',
    leetcode: 'https://leetcode.com/problems/reverse-linked-list/',
    video: '',
    article: '',
    mainTopic: 'linked list',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 41,
    done: false,
    title: 'Detect Cycle in a Linked List',
    leetcode: 'https://leetcode.com/problems/linked-list-cycle/',
    video: '',
    article: '',
    mainTopic: 'linked list',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 42,
    done: false,
    title: 'Merge Two Sorted Lists',
    leetcode: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    video: '',
    article: '',
    mainTopic: 'linked list',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 43,
    done: false,
    title: 'Merge K Sorted Lists',
    leetcode: 'https://leetcode.com/problems/merge-k-sorted-lists/',
    video: '',
    article: '',
    mainTopic: 'linked list',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 44,
    done: false,
    title: 'Remove Nth Node From End Of List',
    leetcode: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
    video: '',
    article: '',
    mainTopic: 'linked list',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 45,
    done: false,
    title: 'Reorder List',
    leetcode: 'https://leetcode.com/problems/reorder-list/',
    video: '',
    article: '',
    mainTopic: 'linked list',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 46,
    done: false,
    title: 'Set Matrix Zeroes',
    leetcode: 'https://leetcode.com/problems/set-matrix-zeroes/',
    video: '',
    article: '',
    mainTopic: 'matrix',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 47,
    done: false,
    title: 'Spiral Matrix',
    leetcode: 'https://leetcode.com/problems/spiral-matrix/',
    video: '',
    article: '',
    mainTopic: 'matrix',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 48,
    done: false,
    title: 'Rotate Image',
    leetcode: 'https://leetcode.com/problems/rotate-image/',
    video: '',
    article: '',
    mainTopic: 'matrix',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 49,
    done: false,
    title: 'Word Search',
    leetcode: 'https://leetcode.com/problems/word-search/',
    video: '',
    article: '',
    mainTopic: 'matrix',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 50,
    done: false,
    title: 'Longest Substring Without Repeating Characters',
    leetcode: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 51,
    done: false,
    title: 'Longest Repeating Character Replacement',
    leetcode: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 52,
    done: false,
    title: 'Minimum Window Substring',
    leetcode: 'https://leetcode.com/problems/minimum-window-substring/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 53,
    done: false,
    title: 'Valid Anagram',
    leetcode: 'https://leetcode.com/problems/valid-anagram/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 54,
    done: false,
    title: 'Group Anagrams',
    leetcode: 'https://leetcode.com/problems/group-anagrams/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 55,
    done: false,
    title: 'Valid Parentheses',
    leetcode: 'https://leetcode.com/problems/valid-parentheses/',
    video: 'https://youtuube.com/thenewguy/asdfas',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 56,
    done: false,
    title: 'Valid Palindrome',
    leetcode: 'https://leetcode.com/problems/valid-palindrome/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 57,
    done: false,
    title: 'Longest Palindromic Substring',
    leetcode: 'https://leetcode.com/problems/longest-palindromic-substring/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 58,
    done: false,
    title: 'Palindromic Substrings',
    leetcode: 'https://leetcode.com/problems/palindromic-substrings/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 59,
    done: false,
    title: 'Encode and Decode Strings (Leetcode Premium)',
    leetcode: 'https://leetcode.com/problems/encode-and-decode-strings/',
    video: '',
    article: '',
    mainTopic: 'string',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 60,
    done: false,
    title: 'Maximum Depth of Binary Tree',
    leetcode: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 61,
    done: false,
    title: 'Same Tree',
    leetcode: 'https://leetcode.com/problems/same-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 62,
    done: false,
    title: 'Invert/Flip Binary Tree',
    leetcode: 'https://leetcode.com/problems/invert-binary-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 63,
    done: false,
    title: 'Binary Tree Maximum Path Sum',
    leetcode: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 64,
    done: false,
    title: 'Binary Tree Level Order Traversal',
    leetcode: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 65,
    done: false,
    title: 'Serialize and Deserialize Binary Tree',
    leetcode: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 66,
    done: false,
    title: 'Subtree of Another Tree',
    leetcode: 'https://leetcode.com/problems/subtree-of-another-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 67,
    done: false,
    title: 'Construct Binary Tree from Preorder and Inorder Traversal',
    leetcode: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 68,
    done: false,
    title: 'Validate Binary Search Tree',
    leetcode: 'https://leetcode.com/problems/validate-binary-search-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 69,
    done: false,
    title: 'Kth Smallest Element in a BST',
    leetcode: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 70,
    done: false,
    title: 'Lowest Common Ancestor of BST',
    leetcode: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 71,
    done: false,
    title: 'Implement Trie (Prefix Tree)',
    leetcode: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 72,
    done: false,
    title: 'Add and Search Word',
    leetcode: 'https://leetcode.com/problems/add-and-search-word-data-structure-design/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 73,
    done: false,
    title: 'Word Search II',
    leetcode: 'https://leetcode.com/problems/word-search-ii/',
    video: '',
    article: '',
    mainTopic: 'tree',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 74,
    done: false,
    title: 'Merge K Sorted Lists',
    leetcode: 'https://leetcode.com/problems/merge-k-sorted-lists/',
    video: '',
    article: '',
    mainTopic: 'heap',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 75,
    done: false,
    title: 'Top K Frequent Elements',
    leetcode: 'https://leetcode.com/problems/top-k-frequent-elements/',
    video: '',
    article: '',
    mainTopic: 'heap',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }, {
    no: 76,
    done: false,
    title: 'Find Median from Data Stream',
    leetcode: 'https://leetcode.com/problems/find-median-from-data-stream/',
    video: '',
    article: '',
    mainTopic: 'heap',
    solution: {
      javascript: '',
      java: '',
      php: '',
      python: ''
    }
  }
];

@Component({
  selector: 'app-blind-leetcode',
  templateUrl: './blind-leetcode.component.html',
  styleUrls: ['./blind-leetcode.component.scss']
})
export class BlindLeetcodeComponent implements OnInit, AfterContentInit {
  @ViewChild('input') theInput: HTMLElement;

  showToDo = false;
  cacapipi = '';
  localStorageBlock = [];

  faYouTube = faYoutube;
  faBook = faBook;
  faJava = faJava;
  faJsSquare = faJsSquare;
  faPhp = faPhp;
  faPython = faPython;

  selection = new SelectionModel<ArticleEntry>(true, []);

  displayedColumns: string[] = ['no', 'select', 'title', 'topic', 'video', 'article', 'solution'];
  dataSource = new MatTableDataSource<ArticleEntry>(ELEMENT_DATA);

  constructor(private local: LocalStorageService) {
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: ArticleEntry, filter: string) => {
      const includeAll = [];
      if (this.showToDo) {
        includeAll.push(false);
      } else {
        includeAll.push(true, false);
      }

      return includeAll.includes(data.done) && data.title.toLowerCase().indexOf(filter) !== -1;
    };

    this.localStorageBlock = new Array(76).fill(0);
    // console.log(this.localStorageBlock);
  }

  ngAfterContentInit(): void {
    const doneList = this.local.getData('blind-leetcode-done');
    if (doneList) {
      const secondDoneList = JSON.parse(doneList);

      for (let i = 0; i < secondDoneList.length; i++) {
        if (secondDoneList[i]) {
          this.dataSource.filteredData[i].done = true;
        }
      }

      this.localStorageBlock = JSON.parse(doneList);
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(event: PointerEvent, row: any): string {
    this.serializeObject(!event.target['firstChild'].checked, row);
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.no + 1}`;
  }

  public applyFilter(event: Event) {
    // TODO: doing this, just because we cannot run filterPredicate when filter string
    // is empty. Please find another way, this is not ideal
    this.dataSource.data = ELEMENT_DATA;
    let filterValue;
    if (typeof event === 'object' && event.target) {
      filterValue = (event.target as HTMLInputElement).value;
    } else {
      filterValue = this.theInput['nativeElement'].value;
    }

    // filterPredicate not running, handle special case
    if (!filterValue && this.showToDo) {
      this.dataSource.data = ELEMENT_DATA.filter((element: ArticleEntry) => {
        return !element.done;
      });
    }

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private serializeObject(isChecked: boolean, theRow: ArticleEntry): any {
    const idx = theRow.no - 1;

    if (isChecked) {
      this.localStorageBlock[idx] = 1;
    } else {
      this.localStorageBlock[idx] = 0;
    }
    const toBeSaved = JSON.stringify(this.localStorageBlock);

    this.local.saveData('blind-leetcode-done', toBeSaved);
  }
}
