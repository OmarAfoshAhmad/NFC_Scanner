'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-6">
            <div className="max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Error</h1>
                <p className="text-zinc-400 mb-6">Something went wrong.</p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-white text-zinc-950 rounded-lg font-bold"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
