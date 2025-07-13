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
    "Welcome to Varshini Shree's interactive terminal",
    "Type help to start with",
  ];

  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const historyScrollRef = useRef(null);

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

  // Auto-scroll history container to bottom on new history or typed lines
  useEffect(() => {
    if (historyScrollRef.current) {
      historyScrollRef.current.scrollTop = historyScrollRef.current.scrollHeight;
    }
  }, [history, typedLines]);

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
      setHistory((prev) => [...prev, input]);

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
        {/* Robot animation */}
        <div className="self-end mb-4 w-24">
          <Assistant message={null} />
        </div>

        {/* Greeting */}
        <div className="mb-4 min-h-[3rem]">
          {typedLines.map((line, i) => (
            <p key={i} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>

        {/* History */}
        {greetingDone && (
          <div
            ref={historyScrollRef}
            className="flex-1 overflow-y-auto mb-4"
          >
            {history.map((command, index) => (
            <div key={index} className="mb-3">
              <p>
                <span className="text-green-500">$</span> {command}
              </p>
              {parseCommand(command)}
            </div>
          ))}

          </div>
        )}

        {/* Input line */}
        {greetingDone && (
          <div className="flex items-center w-full max-w-3xl relative">
            <span className="mr-2 select-none">$ </span>
            <span>
              {input}

              {/* Blinking Cursor */}
              <span
                style={{
                  display: 'inline-block',
                  width: '4px',
                  height: '1rem',
                  backgroundColor: '#22c55e',
                  marginLeft: '2px',
                  animation: 'blink 1s step-start infinite',
                  verticalAlign: 'bottom',
                }}
              />
            </span>

            {/* Hidden Input */}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              style={{
                position: 'absolute',
                top: 0,
                left: '1.2rem',
                width: '1ch',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'transparent',
                caretColor: 'transparent',
                fontFamily: 'monospace',
                zIndex: 1,
                cursor: 'text',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
