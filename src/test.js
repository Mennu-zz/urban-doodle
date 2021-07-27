function App() {
    const [
        count,
        setCount
    ] = useStickyState(0, "count");

    return (
        <div className="App">
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

render(<App />);