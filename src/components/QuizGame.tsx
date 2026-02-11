import { useState, useEffect, useCallback } from 'react';
import QuizCard from './QuizCard';
import { fireConfetti } from './ConfettiEffect';
import { useSpeech } from '../hooks/useSpeech';

interface WordItem {
    id: string;
    category: string;
    word: string;
    emoji: string;
}

function shuffleArray<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function pickOptions(data: WordItem[], target: WordItem, count: number): WordItem[] {
    const others = data.filter((w) => w.id !== target.id);
    const shuffled = shuffleArray(others);
    const options = shuffled.slice(0, count - 1);
    options.push(target);
    return shuffleArray(options);
}

export default function QuizGame() {
    const [data, setData] = useState<WordItem[]>([]);
    const [target, setTarget] = useState<WordItem | null>(null);
    const [options, setOptions] = useState<WordItem[]>([]);
    const [shakingId, setShakingId] = useState<string | null>(null);
    const [correctId, setCorrectId] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(0);
    const [lastTargetId, setLastTargetId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const { speak } = useSpeech();

    // Load data
    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((json: WordItem[]) => {
                setData(json);
                setLoading(false);
            });
    }, []);

    // Chọn câu hỏi mới
    const nextQuestion = useCallback(() => {
        if (data.length === 0) return;

        let newTarget: WordItem;
        do {
            newTarget = data[Math.floor(Math.random() * data.length)];
        } while (newTarget.id === lastTargetId && data.length > 1);

        const opts = pickOptions(data, newTarget, 4);
        setTarget(newTarget);
        setOptions(opts);
        setShakingId(null);
        setCorrectId(null);
        setDisabled(false);
        setLastTargetId(newTarget.id);
        setRound((r) => r + 1);
    }, [data, lastTargetId]);

    // Bắt đầu game khi data sẵn sàng
    useEffect(() => {
        if (data.length > 0 && target === null) {
            nextQuestion();
        }
    }, [data, target, nextQuestion]);

    // Phát âm câu hỏi khi target thay đổi
    useEffect(() => {
        if (target && round > 0) {
            const timer = setTimeout(() => {
                speak(`Where is the ${target.word}?`);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [target, round, speak]);

    const handleSelect = (selected: WordItem) => {
        if (disabled) return;

        if (selected.id === target?.id) {
            // ĐÚNG!
            setCorrectId(selected.id);
            setDisabled(true);
            fireConfetti();
            speak('Amazing!', () => {
                // Auto chuyển câu sau 2s
                setTimeout(() => {
                    nextQuestion();
                }, 1500);
            });
            setScore((s) => s + 1);
        } else {
            // SAI — shake
            setShakingId(selected.id);
            setTimeout(() => setShakingId(null), 600);
        }
    };

    // Nút phát lại câu hỏi
    const handleRepeat = () => {
        if (target) {
            speak(`Where is the ${target.word}?`);
        }
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <div className="text-white text-2xl font-bold animate-pulse">
                    🎮 Loading...
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col items-center px-4 py-6 sm:py-8 max-w-2xl mx-auto w-full">
            {/* Score */}
            <div className="w-full flex justify-between items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white font-bold text-lg">
                    ⭐ {score}
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white font-semibold text-sm">
                    #{round}
                </div>
            </div>

            {/* Câu hỏi */}
            <div className="mb-6 sm:mb-8 text-center">
                <p className="text-white/80 text-base sm:text-lg font-semibold mb-1">
                    Where is the...
                </p>
                <button
                    onClick={handleRepeat}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-wide 
                     drop-shadow-lg hover:scale-105 transition-transform cursor-pointer
                     bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-3"
                >
                    {target?.word} 🔊
                </button>
            </div>

            {/* Grid 4 cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-lg">
                {options.map((opt) => (
                    <QuizCard
                        key={`${round}-${opt.id}`}
                        word={opt.word}
                        emoji={opt.emoji}
                        onClick={() => handleSelect(opt)}
                        isShaking={shakingId === opt.id}
                        isCorrect={correctId === opt.id}
                        disabled={disabled}
                    />
                ))}
            </div>

            {/* Chủ đề hiện tại */}
            <div className="mt-6 text-white/50 text-sm font-medium">
                {target?.category}
            </div>
        </div>
    );
}
