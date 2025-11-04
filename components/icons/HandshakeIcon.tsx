import React from 'react';

const HandshakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 10.5c.667 1.5 1 3.25 1 5.25a8.636 8.636 0 01-1.5 5M9.5 10.5c-.667 1.5-1 3.25-1 5.25a8.636 8.636 0 001.5 5" />
    <path d="M14.828 14.828A4 4 0 0112 16a4 4 0 01-2.828-1.172" />
    <path d="M17 12.5a5 5 0 00-10 0" />
    <path d="M21 12.5c0-1.657-3.134-5-9-5s-9 3.343-9 5" />
  </svg>
);

export default HandshakeIcon;
