//Route Pages > Screen 1: Main chat interface

import React from 'react'
import { Sparkles } from 'lucide-react'
const HomePage = () => {
  return (
    <div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
            <Sparkles className="h-4 w-4 text-violet-300" strokeWidth={1.8} />
          </span>
          <h1>What are you craving?</h1>
    </div>
  )
}

export default HomePage