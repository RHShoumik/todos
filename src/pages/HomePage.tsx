import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext.tsx';
import TodoApp from './Todo';

function HomePage() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const buttonStyle = {
        backgroundColor: `var(--color-bg-${theme}-500)`,
        color: 'white',
        fontWeight: 'bold',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${theme}:bg-${theme}-body`}>
            {/* <div>
                <h1 className="text-4xl font-bold mb-4">Theme Toggle Example</h1>
                <button
                    className="bg-accent-500 hover:bg-accent-700 text-white font-bold py-2 px-4 rounded dark:bg-dark-500 dark:hover:bg-dark-700"
                    onClick={toggleTheme}
                >
                    Toggle Color
                </button>
                <p className="mt-4">This is the content area.</p>
            </div> */}
            <TodoApp />
        </div>
    );
}

export default HomePage;