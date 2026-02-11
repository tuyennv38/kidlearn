import QuizGame from './components/QuizGame';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col font-nunito">
            {/* Header */}
            <header className="text-center py-4 sm:py-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-lg tracking-tight">
                    🌟 TinyEnglish
                </h1>
                <p className="text-white/70 text-sm sm:text-base font-semibold mt-1">
                    Learn English with fun! 🎉
                </p>
            </header>

            {/* Quiz Game */}
            <QuizGame />

            {/* Footer */}
            <footer className="text-center py-3 text-white/30 text-xs">
                Made with ❤️ for kids
            </footer>
        </div>
    );
}
