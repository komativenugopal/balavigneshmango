"use client"

import { useState, useEffect } from "react"

const languages = [
  { code: "en", name: "English" },
  { code: "te", name: "తెలుగు" },
  { code: "hi", name: "हिंदी" },
  { code: "ur", name: "اردو" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ta", name: "தமிழ்" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelected = localStorage.getItem("languageSelected")
    if (hasSelected) {
      setIsOpen(false)
    }
  }, [])

  const selectLanguage = (langCode: string) => {
    localStorage.setItem("languageSelected", "true")
    setIsOpen(false)

    if (langCode === "en") {
      // Reset to English - remove Google Translate cookie
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname;
      window.location.reload()
      return
    }

    // Set the Google Translate cookie for the selected language
    const langPath = `/en/${langCode}`
    document.cookie = `googtrans=${langPath}; path=/;`
    document.cookie = `googtrans=${langPath}; path=/; domain=.${window.location.hostname}`
    
    // Reload the page to apply translation
    window.location.reload()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
      <div className="bg-secondary p-6 md:p-8 rounded-2xl shadow-2xl text-center animate-float max-w-sm mx-4">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
          Select Your Language
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-base md:text-lg"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
