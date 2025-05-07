"use client";

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  className?: string;
}

export default function TypingAnimation({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 1500,
  className = "",
}: TypingAnimationProps) {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const handleTyping = () => {
      const currentString = strings[stringIndex];
      if (isDeleting) {
        setText(currentString.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex -1 === 0) {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        setText(currentString.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentString.length) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, stringIndex, isDeleting, strings, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className={`border-r-2 border-primary animate-pulse ${className}`}>
      {text}
    </span>
  );
}
