const { useState } = React;
const { render } = ReactDOM;


const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decreaseCount}>-1</button>
            <button onClick={increaseCount}>+1</button>
        </div>
    );
};

render(<Counter />, document.getElementById('root'));

