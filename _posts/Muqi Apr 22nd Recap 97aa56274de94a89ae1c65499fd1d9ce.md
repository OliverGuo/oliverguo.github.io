
layout: post
title: Muqi Apr 22nd Recap
subtitle: 
gh-repo: daattali/beautiful-jekyll
gh-badge: [star, fork, follow]
tags: [test]
comments: true
---

Today we mainly focused on complexities of search and sort algorithm. As computer scientists, we divide such topic into two categories: time complexity and space complexity. While we mainly focused on time complexity because we can easily measure them, space complexity described the amount of memory space any give algorithm takes up. Usually, the less space an algorithm uses, the better.  We uses run time to describe time complexity, 

For example, the runtime of binary search is O(logN) and O(N) for linear search.

Binary search divides the array by half during each loop thereby decreasing into subproblems 2^N times with array size N. 

## Sort

Professor Rodrigues walked through the process of insertion sort on whiteboard. 

On a high level, insertion sort works by iterating through each element in the list and swap higher value with preceding value as needed until all values on the left of the boundary are sorted. 

![IMG_81B7D35A7C11-1.jpeg](Muqi%20Apr%2022nd%20Recap%2097aa56274de94a89ae1c65499fd1d9ce/IMG_81B7D35A7C11-1.jpeg)

However, insertion sort is not the most efficient sorting algorithm as its worst-case runtime is N^2 which is not ideal. 

Merge sort on the other hand is more efficient with O(N * logN) runtime. Merge sort is more efficient because it utilizes divide and conquer technique which is commonly used to divide a bigger problems into various smaller subproblems and then merge the solution together to get the results, similar to binary search. 

We also talked about Bogosort which is super inefficient but it was interesting to learn about it. 

## Big O

We also talked about big O notation which is used to describe the runtime of an algorithm. The symbol “O” defines the upper limit of a mathematical equation. Since we care about the worst case runtime of an algorithm, we usually use Big O notation to describe how efficient an algorithm is. 

For example: constant O(1), logN, nlogn, n^2, 2^n, n!

We then played around with CS city guide trip problem whose runtime grow very quickly as the we increase the size of input. 

Halting problem is proposed by Alan Turing. 

Basically, we have an algorithm describes as below:

if loop forever:

return 0

else:

return 1

But the caveat is that we defines such loop as: evil genius: T = never terminate, F = terminates. 

It creates paradox because if evil genius loops forever, then it should return True, but that’s not the case since we defined the algorithm to return false if loops forever. 

Thus the halting problem is unsolvable.