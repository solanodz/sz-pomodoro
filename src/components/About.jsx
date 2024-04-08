import React from 'react'
import Link from 'next/link'

const About = () => {

    const info = [
        {
            title: '',
            content: ``
        },
        {
            title: '',
            content: ``,
            li: `
            1. Decide on the task to be done.
            2. Set the pomodoro timer (traditionally to 25 minutes).
            3. Work on the task.
            4. End work when the timer rings and put a checkmark on a piece of paper.
            5. If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2.
            6. After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.`
        },
        {
            title: 'What are the benefits of the Pomodoro Technique?',
            content: `The technique has been widely popularized by dozens of apps and websites providing timers and instructions. Main benefits include:
            - Improved productivity
            - Better time management
            - Enhanced focus
            - Reduced procrastination
            - Increased motivation`
        }
    ]
    return (
        <div className='my-12 mx-2 flex flex-col gap-2'>
            <div>
                <h3 className='text-orange-700 text-lg sm:text-xl font-semibold my-2'>What is the Pomodoro Technique?</h3>
                <p className='text-sm text-muted-foreground'>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>
            </div>
            <div>
                <h3 className='text-orange-700 text-lg sm:text-xl font-semibold my-2'>How to use the Pomodoro Technique?</h3>
                <ol className='text-sm flex flex-col  text-muted-foreground'>
                    <li>1. Decide on the task to be done.</li>
                    <li>2. Set the pomodoro timer (traditionally to 25 minutes).</li>
                    <li>3. Work on the task.</li>
                    <li>4. End work when the timer rings and put a checkmark on a piece of paper.</li>
                    <li>5. If you have fewer than four checkmarks, take a short break (3-5 minutes), then go to step 2.</li>
                    <li>6. After four pomodoros, take a longer break (15-30 minutes), reset your checkmark count to zero, then go to step 1.</li>
                </ol>
            </div>
            <div>
                <h3 className='text-orange-700 text-lg sm:text-xl font-semibold my-2'>What are the benefits of Pomodoro Technique?</h3>
                <p className='text-sm text-muted-foreground'>The technique has been widely popularized by dozens of apps and websites providing timers and instructions. Main benefits include:</p>
                <ul className='text-sm sm:text-sm flex flex-col  text-muted-foreground'>
                    <li>• Improved productivity</li>
                    <li>• Better time management</li>
                    <li>• Enhanced focus</li>
                    <li>• Reduced procrastination</li>
                    <li>• Increased motivation</li>
                </ul>
            </div>
            <div>
                <h3 className='text-orange-700 text-lg sm:text-xl font-semibold my-2'>What is SZ.POMODORO?</h3>
                <p className='text-sm text-muted-foreground'>This is just a small clone of <Link className='text-white underline' href='https://pomofocus.io/' target="_blank">pomofocus.io</Link>. An open source project that inspired me to create <span className='text-orange-700'> sz.pomodoro</span>.</p>
            </div>
        </div>
    )
}

export default About
