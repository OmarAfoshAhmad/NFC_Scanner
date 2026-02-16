'use client';

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 p-6 text-center">
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
                        Critical System Error
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
                        A root-level error occurred. Please try to refresh the application.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
}
