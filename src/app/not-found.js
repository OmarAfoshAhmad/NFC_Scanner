'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-4 font-sans">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-black text-white/10 select-none">404</h1>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
                    <p className="text-zinc-400 max-w-md mx-auto">
                        The system could not locate the requested resource.
                        It may have been moved or deleted.
                    </p>
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
                >
                    Return to Hub
                </Link>
            </div>
        </div>
    );
}
