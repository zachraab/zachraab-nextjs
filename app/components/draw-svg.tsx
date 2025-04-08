"use client";
import { useEffect, useRef, useState } from "react";

export default function KuteDrawAnimation({
  drawText,
  isWhite = false,
  widthSize = 'w-3/4',
}: {
  drawText: string;
  isWhite?: boolean;
  widthSize?: string;
}) {
  const textRef = useRef<SVGTextElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [dynamicWidth, setDynamicWidth] = useState(300);
  const [dynamicHeight, setDynamicHeight] = useState(100);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
        const updateDimensions = () => {
            const bbox = text.getBBox(); //SVG-native method
            setDynamicWidth(bbox.width);
            setDynamicHeight(bbox.height);
        };
        updateDimensions();

        // Intersection Observer API alternative to scroll event listener
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayed) {
                    setIsVisible(true);
                    setHasPlayed(true);
                }
            },
            { threshold: .8 }
        );

        observer.observe(text);

        return () => {
            observer.disconnect();
        };
    }
  }, []);

  return (
    <svg
      className={`m-auto w-full md:m-0 md:${widthSize}`}
      viewBox={`0 0 ${dynamicWidth} ${dynamicHeight}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6a11cb" />
          <stop offset="100%" stopColor="#2575fc" />
        </linearGradient>
      </defs>
      <text
        className={`text-6xl${isVisible ? " draw" : ""}${
          isWhite ? " text-white" : ""
        }`}
        ref={textRef}
        fill="transparent"
        x="0"
        y="10"
        dominantBaseline="hanging"
        stroke={isWhite ? "white" : "url(#textGradient)"}
      >
        {drawText}
      </text>
    </svg>
  );
}
