import React from 'react'
import { FaGear } from "react-icons/fa6";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Button, buttonVariants } from './ui/button';
import { ToggleMode } from './ToggleMode';


const Settings = ({
    pomodoroRef,
    shortBreakRef,
    longBreakRef,
    updateTimeDefaultValue,
}) => {

    const inputs = [
        {
            value: 'Pomodoro',
            ref: pomodoroRef,
            defaultValue: 25
        },
        {
            value: 'Short Break',
            ref: shortBreakRef,
            defaultValue: 5
        },
        {
            value: 'Long Break',
            ref: longBreakRef,
            defaultValue: 15
        }
    ];

    return (
        <div>

            <Dialog>
                <DialogTrigger className='flex gap-2 items-center'><FaGear className='text-xl' /></DialogTrigger>
                <DialogContent className=' rounded-md'>
                    <DialogHeader className='flex flex-col gap-4 text-left'>
                        <div className='flex flex-col gap-2'>
                            <DialogTitle>Timers</DialogTitle>
                            <div className='flex gap-2 text-left'>
                                {inputs.map((input, index) => (
                                    <div key={index} className='flex flex-col gap-2'>
                                        <Label>{input.value}</Label>
                                        <Input
                                            defaultValue={input.defaultValue}
                                            type='number'
                                            ref={input.ref}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <DialogTitle>Theme</DialogTitle>
                            <DialogDescription className='flex justify-between items-center'>
                                <Label className='text-muted-foreground'>Dark Mode</Label>
                                <ToggleMode />
                            </DialogDescription>
                        </div>
                        <DialogClose onClick={updateTimeDefaultValue} className={`${buttonVariants({ variant: 'default' })} w-full`}>Save Settings</DialogClose>

                    </DialogHeader>
                </DialogContent>
            </Dialog >
        </div >
    )
}

export default Settings
