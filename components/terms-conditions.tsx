import { CheckCircle, AlertCircle, Truck, Scale, MapPin, CreditCard } from "lucide-react"

export function TermsConditions() {
  const terms = [
    {
      icon: Scale,
      title: "Bulk Orders Only",
      description: "We supply mangoes only in bulk quantities. Retail orders are not accepted."
    },
    {
      icon: MapPin,
      title: "Delivery Area",
      description: "We can deliver all over South India including Tamil Nadu, Karnataka, Kerala, Telangana, and Andhra Pradesh."
    },
    {
      icon: Truck,
      title: "Minimum Order Quantity",
      description: "A minimum of 5 tons order must be placed for deliveries outside Krishna District, Andhra Pradesh."
    },
    {
      icon: CreditCard,
      title: "Transportation Charges",
      description: "Transportation charges must be borne by the customer. Charges vary based on distance and quantity."
    },
    {
      icon: CheckCircle,
      title: "Pricing Policy",
      description: "Pricing of the mango depends on the quantity the customer orders. Larger orders enjoy better rates."
    },
    {
      icon: AlertCircle,
      title: "Quality Guarantee",
      description: "We guarantee the quality of our mangoes. Any quality issues must be reported within 24 hours of delivery."
    }
  ]

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Terms & Conditions
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Please read our terms carefully before placing your order
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {terms.map((term, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <term.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{term.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{term.description}</p>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6 text-center">Important Notice</h3>
          <div className="space-y-3 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong>We supply mangoes only in bulk.</strong> Delivery available all over South
              India.
            </p>
            <p>
              A <strong>minimum of 5 tons</strong> order must be placed outside Krishna District,
              Andhra Pradesh.
            </p>
            <p>
              <strong>Transportation charges</strong> are to be borne by the customer.
            </p>
            <p>
              <strong>Pricing depends on quantity</strong> - larger orders get better rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
