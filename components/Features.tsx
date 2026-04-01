'use client';

import { motion } from "framer-motion";
import { Layers, Smartphone, Terminal as TerminalIcon, FolderTree, GripVertical, ListChecks } from "lucide-react";

const features = [
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Parallel Sessions",
        description: "Run multiple Claude Code agents simultaneously. Tabbed interface with split-views and per-project environment variables."
    },
    {
        icon: <TerminalIcon className="w-8 h-8" />,
        title: "Real Terminal",
        description: "True PTY processes, not a headless wrapper. Full interactive terminal with GPU-accelerated rendering."
    },
    {
        icon: <FolderTree className="w-8 h-8" />,
        title: "Project Manager",
        description: "Sidebar with project tree, import projects, archive inactive ones. Environment variables and prompt templates per project."
    },
    {
        icon: <GripVertical className="w-8 h-8" />,
        title: "Drag & Drop Prompts",
        description: "Create reusable prompt templates and drag them into the active terminal. Reorder your prompt queue with dnd-kit."
    },
    {
        icon: <ListChecks className="w-8 h-8" />,
        title: "Task Boards",
        description: "Built-in task cards per project with todo, in-progress, and done statuses. Track your agent work alongside the terminal."
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Remote Access",
        description: "CMDOP SDK and SSH server support. Access your agents from your phone via secure WebSocket tunneling."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Power to your agents</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need to manage parallel Claude Code sessions from a single desktop app.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card glass p-8 group hover:border-accent/50 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
