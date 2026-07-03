"use client"
import React, { createContext, useState } from 'react'

export const CreateContext = createContext();

const ContextProvider = ({ children }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const contextInfo = {
     isToggleOpen, setIsToggleOpen
  }

  return <CreateContext value={contextInfo}>{children}</CreateContext>
}

export default ContextProvider
