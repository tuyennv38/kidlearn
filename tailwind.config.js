/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
            },
            colors: {
                pastel: {
                    pink: '#FFD6E0',
                    blue: '#C5E8FF',
                    green: '#C5F0C0',
                    yellow: '#FFF3C4',
                    purple: '#E8D5F5',
                    orange: '#FFE0C0',
                }
            },
            keyframes: {
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '20%': { transform: 'translateX(-8px)' },
                    '40%': { transform: 'translateX(8px)' },
                    '60%': { transform: 'translateX(-6px)' },
                    '80%': { transform: 'translateX(6px)' },
                }
            },
            animation: {
                shake: 'shake 0.5s ease-in-out',
            }
        },
    },
    plugins: [],
}
