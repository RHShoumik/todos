import React from 'react'

interface CardWrapperProps {
  children: React.ReactNode;
}
const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="relative bg-white shadow-sm sm:mx-auto sm:rounded-lg sm:px-10">
      <div className="divide-y divide-gray-300/50">
        {children}
      </div>
    </div>
  )
}

export default CardWrapper