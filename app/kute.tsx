'use client'
import { useEffect } from 'react'
import KUTE from 'kute.js'

export const KuteAnimation = () => {
    useEffect(() => {
        const tween = KUTE.fromTo(
            '#blob-1',
            { path: '#blob-1', fill: '#blob-1' },
            { path: '#blob-2', fill: '#blob-2' },
            { repeat: 999, duration: 5000, yoyo: true }
        )

        tween.start();
    }, [])

    return null
}