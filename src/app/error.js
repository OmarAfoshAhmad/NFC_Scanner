'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service if needed
        console.error('Application Runtime Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-4 font-sans">
            <div className="text-center space-y-6 max-w-lg border border-red-500/20 bg-red-500/5 p-8 rounded-2xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-red-400">Application Error</h2>
                    <p className="text-zinc-400">
                        A runtime error occurred in the application layer.
                        The system state has been preserved.
                    </p>
                    <div className="mt-4 p-3 bg-black/40 rounded border border-white/5 text-xs font-mono text-zinc-500 text-left overflow-hidden text-ellipsis italic">
                        {error?.message || 'Unknown protocol violation'}
                    </div>
                </div>
                <button
                    onClick={() => reset()}
                    className="w-full inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-zinc-200"
                >
                    Reset Environment
                </button>
            </div>
        </div>
    );
}
