import React, { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const SchulteTable = () => {
    const [numbers, setNumbers] = useState([]);
    const [size, setSize] = useState(5);
    const [currentNumber, setCurrentNumber] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        shuffleNumbers();
    }, [size]);

    const shuffleNumbers = () => {
        const newNumbers = Array.from({ length: size * size }, (_, i) => i + 1);
        for (let i = newNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newNumbers[i], newNumbers[j]] = [newNumbers[j], newNumbers[i]];
        }
        setNumbers(newNumbers);
        setCurrentNumber(1);
        setShowSuccess(false);
    };

    const handleNumberClick = (number) => {
        if (number === currentNumber) {
            if (number === size * size) {
                setShowSuccess(true);
            } else {
                setCurrentNumber(currentNumber + 1);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Schulte Table</h1>
            <div className="mb-4">
                <label htmlFor="size-select" className="mr-2">Table Size:</label>
                <select
                    id="size-select"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="border rounded p-1"
                >
                    {[3, 4, 5, 6, 7].map((n) => (
                        <option key={n} value={n}>{n}x{n}</option>
                    ))}
                </select>
            </div>
            <div
                className="grid gap-2 mb-4"
                style={{
                    gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
                    width: `${size * 60}px`,
                    maxWidth: '100%'
                }}
            >
                {numbers.map((number, index) => (
                    <button
                        key={index}
                        onClick={() => handleNumberClick(number)}
                        className={`w-14 h-14 flex items-center justify-center border rounded 
              ${number === currentNumber ? 'bg-blue-500 text-white' : 'bg-white'}
              hover:bg-blue-100 transition-colors`}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <Button onClick={shuffleNumbers} className="mb-4">
                <Shuffle className="mr-2 h-4 w-4" /> Shuffle
            </Button>
            {showSuccess && (
                <Alert>
                    <AlertTitle>Congratulations!</AlertTitle>
                    <AlertDescription>
                        You've completed the Schulte table successfully.
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
};

export default SchulteTable;