'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TerminalMockup } from "@/components/TerminalMockup";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <Hero />

            <TerminalMockup />

            <Features />

            {/* Remote Access Section */}
            <section id="remote" className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="glass p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                        {/* Background blur */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />

                        <div className="flex-1 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">Control agents from anywhere</h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Connect via <strong>CMDOP SDK</strong> or <strong>SSH</strong>. Manage remote servers,
                                reach your Claude sessions from any device. No port forwarding, no VPN.
                            </p>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</div>
                                    <span>CMDOP SDK with secure WebSocket tunneling</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</div>
                                    <span>SSH server management with key-based auth</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</div>
                                    <span>Real-time output streaming to mobile</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1 flex justify-center relative z-10">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="text-[10rem] md:text-[15rem] leading-none select-none grayscale opacity-50"
                            >
                                📱
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
