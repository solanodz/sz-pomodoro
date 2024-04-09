"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Switch } from './ui/switch'

export const ToggleMode = () => {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant='link' disabled={true}></Button>
    }

    const dark = theme === 'dark'

    return <Switch checked={dark} onCheckedChange={() => setTheme(`${dark ? "light" : "dark"}`)} />

    //return <Button variant='link' onClick={() => setTheme(`${dark ? "ligth" : "dark"}`)}>{dark ? <MdSunny /> : <FaMoon />}</Button>
}

