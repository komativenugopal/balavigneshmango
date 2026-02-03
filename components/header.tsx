"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Bala Vigneshwara Mango Merchants
        </h1>
        
        {/* Language Selector */}
        <div className="flex items-center gap-4">
          <div 
            id="google_translate_element" 
            className="block"
          />
        </div>
      </div>
      
      {/* Mobile Language Selector */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-2">
          <div id="google_translate_element_mobile" />
        </div>
      )}
    </header>
  )
}
