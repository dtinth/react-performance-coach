import { useEffect, useState } from 'react'

/**
 * Options for passing to the {@link usePerformanceCoach} hook.
 * @public
 */
export interface PerformanceCoachOptions {
  /**
   * Whether to enable the hook. If false, the hook will not do anything.
   * By default, this is true when not in production.
   */
  enabled?: boolean
}

/**
 * Makes a React component re-render every 1 second. Useful for uncovering performance issues.
 * @public
 */
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
