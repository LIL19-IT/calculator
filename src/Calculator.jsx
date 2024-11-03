import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [lastInput, setLastInput] = useState('');
    const [history, setHistory] = useState([]);

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    const handleClearEntry = () => {
        setInput(lastInput);
    };

    const handleCalculate = () => {
        try {
            const result = eval(input.replace('%', '/100')).toString();
            setHistory([...history, `${input} = ${result}`]);
            setLastInput(input);
            setInput(result);
        } catch (error) {
            setInput('Error');
        }
    };

    const handleToggleSign = () => {
        if (input.startsWith('-')) {
            setInput(input.substring(1));
        } else {
            setInput('-' + input);
        }
    };

    const handleReciprocal = () => {
        try {
            setInput((1 / parseFloat(input)).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const handleSquare = () => {
        try {
            setInput((Math.pow(parseFloat(input), 2)).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const handleSquareRoot = () => {
        try {
            setInput((Math.sqrt(parseFloat(input))).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input || '0'}</div>
            <div className="buttons">
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={handleClearEntry}>CE</button>
                <button onClick={handleClear}>C</button>
                <button onClick={handleBackspace}>←</button>
                <button onClick={handleReciprocal}>1/x</button>
                <button onClick={handleSquare}>x^2</button>
                <button onClick={handleSquareRoot}>√x</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>x</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={handleToggleSign}>+/−</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button className="equal" onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
