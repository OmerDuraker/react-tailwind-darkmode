import React from 'react';
import useDarkMode from "../hook/useDarkMode";

import night from '../assets/night.svg'
import day from '../assets/day.svg'

export default function Swithcer() {
    const [colorTheme, setTheme] = useDarkMode()
    return(
        <div>
            <button onClick={() => setTheme(colorTheme)} className="fixed item-center left-2/4 top-10 focus:outline-none">
                <img src={ colorTheme === 'light' ? night : day } alt="switch" width="40" />
            </button>
            <a href="https://www.linkedin.com/in/omerduraker/" target="_blank" rel="noreferrer">
                <div className="bg-white dark:bg-gray-800 m-4 rounded-lg shadow-lg">
                    <img src={"https://picsum.photos/id/444/500/180" + (colorTheme === 'light' ? "?grayscale" : "") } alt="Post" className="rounded-t-lg" />
                    <div className="px-4 py-2">
                        <h1 className="font-bold my-2 text-xl text-gray-800 dark:text-gray-300">UX Better Solutions</h1>
                        <p className="text-gray-500 dark:text-gray-300 my-2">Dark & Light mode with React & Tailwind 🤘</p>
                    </div>
                    <div className="px-4">
                        <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">#react</span>
                        <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">#darkmode</span>
                        <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">#tailwind</span>
                    </div>
                    <div className="flex items-center p-4">
                        <img src="https://picsum.photos/32/32" alt="Avatar" className="rounded-full" />
                        <div className="ml-2">
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Omer Duraker</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}