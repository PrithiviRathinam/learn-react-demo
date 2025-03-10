import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    }
    
    return (
        <div>
            <h2>Counter</h2>
            <p>Counter App</p>
            <p>{count}</p>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}