'use client';
import { useEffect } from "react";
import KUTE from 'kute.js';

export default function BlobSvg() {
  useEffect(() => {
    const tween = KUTE.fromTo(
        '#blob-1',
        { path: '#blob-1', fill: '#blob-1' },
        { path: '#blob-2', fill: '#blob-2' },
        { repeat: 999, duration: 5000, yoyo: true }
    )

    tween.start();
  }, [])
    
  return (
    <svg
      id="blob"
      viewBox="0 0 960 300"
      width="9060"
      height="800"
    >
      <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2575fc" >
                  <animate attributeName="stop-color" 
                      values="#2575fc; #6a11cb; #2575fc" 
                      dur="10s" 
                      repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#6a11cb" >
                  <animate attributeName="stop-color" 
                      values="#6a11cb; #2575fc; #6a11cb" 
                      dur="10s" 
                      repeatCount="indefinite" />
              </stop>
          </linearGradient>
      </defs>
      <g transform="translate(482.4495805286293 159.0005839219383)">
        <path id="blob-1"
          d="M83.6 -86.6C99.7 -67.4 98.4 -33.7 94.7 -3.7C91.1 26.4 85.1 52.8 69 65.3C52.8 77.8 26.4 76.4 -4.5 80.9C-35.4 85.4 -70.7 95.7 -87.9 83.2C-105 70.7 -104 35.4 -98 6C-92 -23.3 -81 -46.7 -63.8 -65.8C-46.7 -85 -23.3 -100 5.2 -105.2C33.7 -110.4 67.4 -105.7 83.6 -86.6"
          fill="url(#myGradient)"
        ></path>
      </g>

      <g transform="translate(485.4357819004805 167.08530647307444)" style={{visibility: "hidden"}}>
        <path  id="blob-2"
          d="M54.7 -59.7C74 -35.4 95 -17.7 99.6 4.6C104.2 26.9 92.4 53.7 73.1 70.9C53.7 88.1 26.9 95.5 4.2 91.3C-18.4 87.1 -36.8 71.1 -56.9 53.9C-77.1 36.8 -99.1 18.4 -107.5 -8.5C-116 -35.4 -111 -70.7 -90.9 -95C-70.7 -119.4 -35.4 -132.7 -8.8 -123.9C17.7 -115 35.4 -84 54.7 -59.7" 
        ></path>
      </g>
    </svg>
  )
}