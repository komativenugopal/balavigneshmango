"use client"

import { useState } from "react"

const languages = [
  { code: "en", name: "English" },
  { code: "te", name: "తెలుగు" },
  { code: "hi", name: "हिंदी" },
  { code: "ur", name: "اردو" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ta", name: "தமிழ்" },
]

export function LanguageSelector() {
  const [open, setOpen] = useState(false)

  const selectLanguage = (langCode: string) => {
    localStorage.setItem("selectedLanguage", langCode)

    if (langCode === "en") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." +
        window.location.hostname
    } else {
      const langPath = `/en/${langCode}`
      document.cookie = `googtrans=${langPath}; path=/;`
      document.cookie = `googtrans=${langPath}; path=/; domain=.${window.location.hostname}`
    }

    window.location.reload()
  }

  return (
    <>
      {/* Floating button – ALWAYS available */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-[10000]"
      >
        🌐 Change Language
      </button>

      {/* Language modal – ONLY opens on click */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
          <div className="bg-secondary p-6 rounded-2xl text-center max-w-sm mx-4">
            <h2 className="text-white text-xl font-bold mb-6">
              Select Your Language
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className="bg-primary text-white py-3 rounded-lg hover:scale-105 transition"
                >
                  {lang.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 text-white underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}
