import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen items-center justify-center bg-white'>
        <Loader2icon size={26} className="animate-spin text-zinc-950"/>
    </div>
  )
}

export default Loading