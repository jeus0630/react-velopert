import {useState, useRef} from "react";

const Test = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    return (
        <div>
            <div>useState: {count}</div>
            <button onClick={() => setCount(count + 1)}>useState 변경</button>

            <div>useRef: {countRef.current}</div>
            <button onClick={() => countRef.current++}>useRef 변경</button>
        </div>
    );
};

export default Test;