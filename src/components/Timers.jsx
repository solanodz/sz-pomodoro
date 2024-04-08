import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { FaPlay } from "react-icons/fa6"
import { VscDebugRestart } from "react-icons/vsc";
import { FaGear } from "react-icons/fa6";
import { BiVolumeMute } from "react-icons/bi";



export function Timers({
    stage,
    switchStage,
    getTickingTime,
    seconds,
    ticking,
    reset,
    timeUp,
    isTimeUp,
    muteAlarm,
    startTimer
}) {

    const opts = ["pomodoro", "short-break", "long-break"]


    return (
        <div className="flex-col w-full flex gap-2">
            <div className="flex gap-2 sm:gap-2 bg-zinc-800 p-1 w-fit mx-auto rounded-lg justify-center">
                {opts.map((opts, index) => {
                    return (
                        <h2
                            key={index}
                            className={`text-sm sm:text-md ${index === stage ? 'bg-zinc-950' : 'text-muted-foreground'} py-2 px-2 sm:px-6 cursor-pointer flex w-fit flex-row  rounded-md transition-all`}
                            onClick={() => switchStage(index)}
                        >
                            {opts}
                        </h2>
                    );
                })}
                {/*  */}
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className='text-xl sm:text-2xl'>Pomodoro</CardTitle>
                    <CardDescription className='text-xs italic'>
                        Make changes to the timer in the <FaGear className='inline' /> icon.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1 text-6xl sm:text-7xl my-2 text-center font-bold bg-zinc-900 p-6 w-fit rounded-xl mx-auto border">
                        <time>{getTickingTime()}:{seconds.toString().padStart(2, "0")}</time>
                    </div>
                </CardContent>
                <CardFooter className='flex gap-2 justify-center'>
                    <Button onClick={startTimer} size='sm' className='flex gap-2'>{ticking ? '∎ Stop timer' : `▶ Start timer`}</Button>
                    {ticking && (
                        <Button onClick={reset} size='sm' className='flex gap-2' variant='secondary'>↻ Reset timer</Button>
                    )}
                    {timeUp && isTimeUp && (
                        <Button onClick={muteAlarm} size='sm' className='flex gap-2' variant='secondary'><BiVolumeMute /></Button>
                    )}
                    <Button onClick={muteAlarm} size='sm' className='flex gap-2' variant='secondary'><BiVolumeMute /></Button>

                </CardFooter>
            </Card>
        </div>

    )
}
