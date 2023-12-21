# useEffect hook in React

useEffect is a React Hook that allows you to perform side effects in functional components. Side effects are operations or computations that don't directly result in updating the UI but are necessary for your component's functionality, such as data fetching, subscriptions, manual DOM manipulations, etc.

## Basic Syntax

```javascript
import React {useEffect} from "react"
function MyComponent(){
    useEffect(()=>{
        // Side Effect goes here
        // This code run after every render
        return()=>{
            // Cleanup code goes here
            // This code run when the component unmount or before the next effect
        }
    },[/*dependency array*/])
}
```

## Parameters

### Effect Function

The first argument to useEffect is the effect function. This function contains the code for your side effect.

### Dependency Array

The second argument is an optional array of dependencies. When any of the dependencies change, the effect function will be re-run. If the array is empty, the effect runs only once after the initial render. Omitting the dependency array means the effect runs after every render.

### CleanUp function

The effect function can return a cleanup function. This function is called when the component is unmounted or before the next effect runs. It's useful for cleaning up resources like event listeners or subscriptions.

## More about the cleanup function

The cleanup function is a function returned in the useEffect hooks

Cleanup function executed in two scenarios

- Whenever the component is unmounted that is when we navigate the pages of toggle between the components

- When the effect function runs second time

## UseEffect Life Cycle

Whenever the component is re-rendered or during the initial render the code inside it run before the execution of the useEffect hook
