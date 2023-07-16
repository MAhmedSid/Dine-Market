import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-[1400px]">{children}</div>
}

export default Wrapper
