import { useEffect, useState } from 'react'

export interface PerformanceCoachOptions {
  enabled?: boolean
}

export default function usePerformanceCoach(
  options: PerformanceCoachOptions = {},
) {
  const enabled = !!(options.enabled ?? process.env.NODE_ENV !== 'production')
  const [, setCount] = useState(0)
  useEffect(() => {
    if (!enabled) {
      return
    }
    const interval = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [enabled])
}
