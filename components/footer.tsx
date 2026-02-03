import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1b5e20] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Bala Vigneshwara Mango Merchants
            </h3>
            <p className="text-white/80 leading-relaxed">
              Premium quality mangoes supplied in bulk across South India. Quality and customer satisfaction is our priority.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">Krishna District, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">Contact for inquiries</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">Email for bulk orders</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2 text-white/80">
              <li>Banganapalli Mangoes</li>
              <li>Totapuri Mangoes</li>
              <li>Rasalu Mangoes</li>
              <li>Cheruku Rasalu</li>
              <li>Raw Mangoes for Pickles</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Bala Vigneshwara Mango Merchants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
