import React from 'react'

interface CardWrapperProps {
  children: React.ReactNode;
}
const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="relative bg-light-card dark:bg-dark-card shadow-sm rounded-lg p-3">
      <div className="divide-y divide-gray-300/50">
        {children}
      </div>
    </div>
  )
}

export default CardWrapper