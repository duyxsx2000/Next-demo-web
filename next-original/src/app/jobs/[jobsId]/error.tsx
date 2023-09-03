'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    
  }, [error])
 
  return (
    <div className='pt-[90x] h-96 bg-red-900'>
        <div className='h-[90px]'></div>
      <h2 className=''>Something went wron</h2>

     

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}