'use client';

import { motion } from "framer-motion";

export function TerminalMockup() {
    return (
        <section className="py-24 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="/app-screenshot.png"
                        alt="Open Agent Manager — parallel Claude Code sessions with project sidebar, terminal tabs, and live agent output"
                        className="w-full h-auto"
                    />
                </div>
            </motion.div>
        </section>
    );
}
