# React State Update Bug

This repository demonstrates a common error in React state updates: directly modifying a state variable instead of using the setter function provided by `useState`. Directly modifying the state variable leads to React not recognizing the changes and will not trigger a re-render of the component. This results in unexpected behavior or renders that do not reflect the changes that were made.

## Bug Description
The bug is in the `MyComponent` function.  `count` is directly modified within the `useEffect` hook.  React does not recognize this state change and the counter will not update in the UI.  This is because React uses a mechanism to optimize and track changes, and directly modifying the state variable bypasses this mechanism.

## Solution
The solution is to use the `setCount` function which is correctly updating the state variable.