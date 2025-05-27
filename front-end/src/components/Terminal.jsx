import React, { useState, useEffect, useRef } from 'react';
import { parseCommand } from '../terminal/commands';
import Assistant from './Assistant.jsx';
import './Terminal.css';

function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [greetingDone, setGreetingDone] = useState(false);
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const typingSpeed = 60;
  const linesToType = [
    'Welcome to my interactive terminal',
    'Type help to start with',
  ];

  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentLineIndex < linesToType.length) {
      const line = linesToType[currentLineIndex];
      let charIndex = 0;
      const interval = setInterval(() => {
        charIndex++;
        setTypedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = line.slice(0, charIndex);
          return newLines;
        });
        if (charIndex === line.length) {
          clearInterval(interval);
          setCurrentLineIndex((idx) => idx + 1);
        }
      }, typingSpeed);
      return () => clearInterval(interval);
    } else {
      setGreetingDone(true);
      inputRef.current?.focus();
    }
  }, [currentLineIndex]);

  const handleKeyDown = (e) => {
    if (!greetingDone) return;

    if (e.key === 'Enter') {
      if (!input.trim()) return;
      if (input.toLowerCase() === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      const output = parseCommand(input);
      setHistory((prev) => [...prev, { command: input, output }]);
      setInput('');
    }
  };

  return (
    <div
      className="bg-black text-green-500 font-mono h-screen p-6 flex flex-col justify-center items-center"
      ref={containerRef}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-3xl h-[80vh] p-4 border border-green-600 rounded overflow-y-auto flex flex-col">
        {/* Robot animation once */}
        <div className="self-end mb-4 w-24">
          <Assistant message={null} />
        </div>

        {/* Typed greeting */}
        <div className="mb-4 min-h-[3rem]">
          {typedLines.map((line, i) => (
            <p key={i} className="whitespace-pre-wrap">
              $ {line}
            </p>
          ))}
        </div>

        {/* History */}
        {greetingDone && (
          <div className="flex-1 overflow-y-auto mb-4">
            {history.map((entry, index) => (
              <div key={index} className="mb-3">
                <p>
                  <span className="text-green-500">$</span> {entry.command}
                </p>
                <div>{entry.output}</div>
              </div>
            ))}
          </div>
        )}

        {/* Input line with hidden input */}
        {greetingDone && (
          <div className="flex items-center w-full max-w-3xl">
            <span className="mr-2 select-none">$</span>
            {/* Visible typed text */}
            <span className="flex-grow">{input}</span>

            {/* Blinking cursor */}
            <span className="border-r-2 border-red-500 animate-blink ml-1 h-6"></span>

            {/* Hidden real input */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              className="absolute w-px h-px opacity-0 pointer-events-none focus:outline-none bg-black focus:ring-0 caret-black"
              autoFocus
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
