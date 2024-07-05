import { useState } from 'react'
import Button from './Button'

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div className='flex flex-col justify-center items-center gap-4 space-y-5'>
            <h1 className='mt-3 border border-slate-700 bg-slate-800/20 w-fit p-4 rounded-2xl'>
                {counter}
            </h1>

            <div className='flex gap-5'>
                <Button className='bg-blue-700/20 border border-blue-700 p-4 rounded-2xl' onClick={() => setCounter(counter + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">=
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Increment
                </Button>
                <Button className='bg-red-700/20 border border-red-700 p-4 rounded-2xl' onClick={() => setCounter(counter - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Decrement
                </Button>
            </div>

        </div>
    )
}

export default Counter