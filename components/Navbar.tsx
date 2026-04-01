'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-background/50 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <img src="/logo.svg" alt="Open Agent Manager Logo" className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-black tracking-tighter">Open Agent Manager</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                    <a href="#remote" className="hover:text-foreground transition-colors">Remote</a>
                    <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/suenot/cmdop-agent-manager"
                        target="_blank"
                        className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <button className="bg-foreground text-background px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
