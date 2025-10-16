'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { type Lang } from '@configs/i18n'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  useEffect(() => {
    const stored = localStorage.getItem('lang')

    if (stored === 'en' || stored === 'id') {
      setLangState(stored)
    }
  }, [])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => {
  const context = useContext(LangContext)

  if (!context) {
    throw new Error('useLang must be used within a LangProvider')
  }

  return context
}
