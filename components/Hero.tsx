'use client';

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let width = 0;
        let height = 0;

        interface Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            speed: number;
            pulse: number;
            pulseSpeed: number;
        }

        const stars: Star[] = [];
        const STAR_COUNT = 120;

        function resize() {
            width = canvas!.parentElement?.clientWidth || window.innerWidth;
            height = canvas!.parentElement?.clientHeight || window.innerHeight;
            canvas!.width = width * window.devicePixelRatio;
            canvas!.height = height * window.devicePixelRatio;
            canvas!.style.width = width + "px";
            canvas!.style.height = height + "px";
            ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        function initStars() {
            stars.length = 0;
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.8 + 0.3,
                    opacity: Math.random() * 0.6 + 0.1,
                    speed: Math.random() * 0.15 + 0.02,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: Math.random() * 0.01 + 0.005,
                });
            }
        }

        function draw() {
            ctx!.clearRect(0, 0, width, height);

            for (const star of stars) {
                star.pulse += star.pulseSpeed;
                star.y -= star.speed;

                if (star.y < -5) {
                    star.y = height + 5;
                    star.x = Math.random() * width;
                }

                const flicker = Math.sin(star.pulse) * 0.3 + 0.7;
                const alpha = star.opacity * flicker;

                // Glow
                ctx!.beginPath();
                ctx!.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(139, 132, 255, ${alpha * 0.15})`;
                ctx!.fill();

                // Core
                ctx!.beginPath();
                ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx!.fill();
            }

            animationId = requestAnimationFrame(draw);
        }

        resize();
        initStars();
        draw();

        window.addEventListener("resize", () => {
            resize();
            initStars();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
        />
    );
}

export function Hero() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Subtle radial glow behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />

            {/* Star field */}
            <StarField />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/[0.05] border border-accent/[0.1] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-accent animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-accent-foreground/60 uppercase tracking-[0.2em]">Desktop App for macOS</span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 md:mb-10 tracking-tight leading-[1.1] text-foreground">
                            Open Agent
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-foreground/90 to-accent/80">
                                Manager
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
                            The ultimate desktop terminal for parallel Claude Code sessions. Manage projects
                            with drag-and-drop prompts, task boards, and remote access via CMDOP&nbsp;SDK&nbsp;or&nbsp;SSH.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                    >
                        <button className="w-full sm:w-auto bg-accent text-accent-foreground px-10 py-4 rounded-2xl shadow-xl hover:bg-accent/90 transition-all duration-500 hover:shadow-accent/40 font-bold text-lg hover:-translate-y-1">
                            Download for macOS
                        </button>
                        <button className="w-full sm:w-auto bg-card/50 backdrop-blur-sm border border-border text-foreground px-10 py-4 rounded-2xl shadow-xl hover:bg-muted transition-all duration-500 font-bold text-lg hover:-translate-y-1">
                            Documentation
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>
    );
}
