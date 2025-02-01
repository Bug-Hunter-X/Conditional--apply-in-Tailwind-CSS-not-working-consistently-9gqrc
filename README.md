# Conditional @apply Bug in Tailwind CSS with Next.js/Nuxt.js

This repository demonstrates a bug related to the use of Tailwind CSS's `@apply` directive within a conditional context, specifically when using Next.js or Nuxt.js.  The issue manifests as inconsistent application of styles based on component props or internal state.

The `bug.js` file showcases the problematic code, while `bugSolution.js` offers a solution to address this issue.  The issue often occurs because of how these frameworks handle dynamic class names and the timing of their application.

## Problem

The problem lies in how Tailwind processes the `@apply` directive when the class names it references are conditionally determined.  This usually results in the styles not being applied or being applied unexpectedly depending on the component’s state. 

## Solution

The solution file illustrates how to avoid this issue by using a different approach to applying styles conditionally in Tailwind CSS.

This could involve various strategies, such as:

* **Using the `className` prop directly instead of `@apply`:** Passing pre-defined class names to your component eliminates the conditional `@apply` issues. 
* **Applying classes conditionally in JavaScript:** You can dynamically create the className string based on conditions and assign it directly to the element. 
* **Using Tailwind's responsive modifiers:**  If the condition is based on screen size, using Tailwind's responsive modifiers might be simpler. 