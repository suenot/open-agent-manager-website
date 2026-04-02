'use client';

import { motion } from "framer-motion";
import { Layers, Globe, Terminal as TerminalIcon, FolderTree, GripVertical } from "lucide-react";

const features = [
    {
        icon: <FolderTree className="w-8 h-8" />,
        title: "Project Sidebar",
        description: "All your projects in a list on the left. Open a project — its terminals appear on the right. Import, archive, reorder."
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Parallel Sessions",
        description: "Run multiple AI coding agent sessions at once. Each project can have its own set of terminal tabs running side by side."
    },
    {
        icon: <TerminalIcon className="w-8 h-8" />,
        title: "Real Terminal",
        description: "True PTY terminal, not a wrapper. Full interactive shell with GPU-accelerated rendering."
    },
    {
        icon: <GripVertical className="w-8 h-8" />,
        title: "Prompt Queue",
        description: "Draft prompts per project. Drag and drop to reorder, then send to the active terminal when ready."
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Local, SSH, or CMDOP",
        description: "Work locally or connect to remote machines via SSH. Use CMDOP for secure tunneling without VPN or port forwarding."
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">What it does</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        No bloat, just what you need: projects, terminals, and prompt drafts.
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
