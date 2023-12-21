// import React from "react";

const rootElement = document.querySelector(".root");


const getname = () => console.log("Hello from getname");



const App = () => {
    const [count, setCount] = React.useState(0);
    const [isTrue, setTrue] = React.useState(false)
    console.log("Initial render");
    React.useEffect(() => {
        console.log("This is from useEffect");
        console.log("From effect function", isTrue);

        setTrue(true)
        return () => {
            console.log("From cleanup", isTrue);
            console.log("This is from cleanup function");
            // setTrue(false)
        }
    }, [count, isTrue])

    getname()
    Promise.resolve("Hello").then(msg => console.log(msg)).catch(err => console.log(err.message)).finally(() => console.log("Finally running..."))

    return (
        <div>
            <h1>Hello REACT</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <span>You clicked {count} times</span>
            <button onClick={() => setTrue(true)}>Click</button>
        </div>
    );
};






ReactDOM.render(<App />, rootElement)


