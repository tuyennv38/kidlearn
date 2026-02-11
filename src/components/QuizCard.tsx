import { motion } from 'framer-motion';

interface QuizCardProps {
    word: string;
    emoji: string;
    onClick: () => void;
    isShaking: boolean;
    isCorrect: boolean;
    disabled: boolean;
}

const pastelColors = [
    'from-pink-200 to-pink-300',
    'from-blue-200 to-blue-300',
    'from-green-200 to-green-300',
    'from-yellow-200 to-yellow-300',
    'from-purple-200 to-purple-300',
    'from-orange-200 to-orange-300',
    'from-teal-200 to-teal-300',
    'from-rose-200 to-rose-300',
];

function getColorByIndex(index: number) {
    return pastelColors[index % pastelColors.length];
}

export default function QuizCard({
    emoji,
    onClick,
    isShaking,
    isCorrect,
    disabled,
}: QuizCardProps) {
    // Dùng hash đơn giản từ emoji để chọn màu ổn định
    const colorIndex = emoji.codePointAt(0) ?? 0;
    const gradientClass = getColorByIndex(colorIndex);

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={`
        relative w-full aspect-square rounded-3xl
        bg-gradient-to-br ${gradientClass}
        shadow-lg hover:shadow-2xl
        flex items-center justify-center
        cursor-pointer transition-shadow duration-200
        border-4 border-white/60
        ${disabled ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'}
        ${isCorrect ? 'ring-4 ring-green-400 ring-offset-2' : ''}
      `}
            animate={
                isShaking
                    ? {
                        x: [0, -12, 12, -8, 8, -4, 4, 0],
                        transition: { duration: 0.5 },
                    }
                    : isCorrect
                        ? { scale: [1, 1.08, 1], transition: { duration: 0.3 } }
                        : {}
            }
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
        >
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl select-none drop-shadow-sm">
                {emoji}
            </span>

            {/* Hiệu ứng lấp lánh nhẹ */}
            <div className="absolute inset-0 rounded-3xl bg-white/10 pointer-events-none" />
        </motion.button>
    );
}
