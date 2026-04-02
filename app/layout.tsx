import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Open Agent Manager — Parallel AI Coding Agent Sessions",
    description: "Desktop terminal for parallel AI coding agent sessions. Projects on the left, terminals on the right. Connect local, SSH, or CMDOP.",
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
