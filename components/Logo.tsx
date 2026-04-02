'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Terminal outline */}
            <rect x="10" y="20" width="80" height="60" rx="12" />
            
            {/* Command prompt arrow */}
            <path d="M 30 35 L 45 50 L 30 65" />

            {/* Blinking cursor */}
            <motion.line 
                x1="55" y1="65" x2="70" y2="65"
                strokeWidth="8"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    );
}
