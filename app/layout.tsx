import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Open Agent Manager — Parallel Claude Code Sessions",
    description: "Desktop app for parallel Claude Code sessions with project management, drag-and-drop prompts, task boards, and remote access via CMDOP SDK or SSH.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
