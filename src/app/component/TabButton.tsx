import React, { Component, ReactNode } from 'react'

type TabButtonProps = {
    selectTab?: React.MouseEventHandler,
    children: ReactNode,
    active: boolean,
}
export const TabButton: React.FC<TabButtonProps> = ({active, selectTab, children}) => {
    const buttonClasses = active ? "text-white border-b border-purple-500" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
    </button>
  )
}
