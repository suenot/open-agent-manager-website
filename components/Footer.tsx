'use client';

import Link from 'next/link';
import { Sparkles, Send, Github } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border/50">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 relative z-10 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="flex items-center group w-fit">
                            <div className="relative mr-3">
                                <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:bg-accent/40 transition-colors" />
                                <img
                                    src="/logo.svg"
                                    alt="Open Agent Manager Logo"
                                    width={40}
                                    height={40}
                                    className="relative"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                Open Agent Manager
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                            Desktop app for managing parallel Claude Code sessions with project organization, drag-and-drop prompts, and remote access.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://t.me/suenot" className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group shadow-sm border border-border/50">
                                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://github.com/suenot" className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group shadow-sm border border-border/50">
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-muted-foreground mt-4 md:mt-0">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Platform</h4>
                            <a href="#features" className="hover:text-accent transition-colors">Features</a>
                            <a href="#remote" className="hover:text-accent transition-colors">Remote Access</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Resources</h4>
                            <a href="#" className="hover:text-accent transition-colors">Documentation</a>
                            <a href="https://github.com/suenot/cmdop-agent-manager" className="hover:text-accent transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <span className="text-sm text-muted-foreground font-medium">
                            © {currentYear} Open Agent Manager. All rights reserved.
                        </span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                        <a
                            href="https://reforms.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 group"
                        >
                            <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500/20 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">
                                Built with Reforms.AI
                            </span>
                        </a>
                        <span className="text-muted-foreground/40">•</span>
                        <span className="text-sm text-muted-foreground">
                            AI-powered projects for companies
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
