import React, { createContext, useContext, type ReactNode, useState, type Dispatch, type SetStateAction } from 'react'
import { type Character } from '../services/models.ts'

interface CharacterContextProps {
  character: Character | null
  setCharacter: Dispatch<SetStateAction<Character | null>>
}

const CharacterContext = createContext<CharacterContextProps | undefined>(undefined)

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [character, setCharacter] = useState<Character | null>(null)

  return (
        <CharacterContext.Provider value={{ character, setCharacter }}>
            {children}
        </CharacterContext.Provider>
  )
}

export const useCharacter = (): CharacterContextProps => {
  const context = useContext(CharacterContext)
  if (context == null) {
    throw new Error('useCharacter must be used within a CharacterProvider')
  }
  return context
}
