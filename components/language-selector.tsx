"use client"

import { useEffect } from "react"

const languages = [
  { code: "en", name: "English" },
  { code: "te", name: "తెలుగు" },
  { code: "hi", name: "हिंदी" },
  { code: "ur", name: "اردو" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ta", name: "தமிழ்" },
]

export function LanguageSelector() {

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage")

    if (savedLang && savedLang !== "en") {
      const langPath = `/en/${savedLang}`
      document.cookie = `googtrans=${langPath}; path=/;`
      document.cookie = `googtrans=${langPath}; path=/; domain=.${window.location.hostname}`
    }
  }, [])

  const selectLanguage = (langCode: string) => {
    localStorage.setItem("selectedLanguage", langCode)

    if (langCode === "en") {
      // Reset to English
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." +
        window.location.hostname

      window.location.reload()
      return
    }

    const langPath = `/en/${langCode}`
    document.cookie = `googtrans=${langPath}; path=/;`
    document.cookie = `googtrans=${langPath}; path=/; domain=.${window.location.hostname}`

    window.location.reload()
  }

  return (
    <>
      {/* Language Modal */}
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
        <div className="bg-secondary p-6 md:p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
            Select Your Language
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Change Language Button */}
      <button
        onClick={() => localStorage.removeItem("selectedLanguage")}
        className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-[10000]"
      >
        🌐 Change Language
      </button>
    </>
  )
}
