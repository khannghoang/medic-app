"use client"
import React from "react";
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
export default function TransitionText({TEXTS, className}:{TEXTS:string[],className?:string}){
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <span className={className}>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </span>
    );
}