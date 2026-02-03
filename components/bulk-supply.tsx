import { Truck, Package, MapPin, Scale } from "lucide-react"

export function BulkSupply() {
  const features = [
    {
      icon: Package,
      title: "Bulk Orders Only",
      description: "We supply mangos only in bulk quantities"
    },
    {
      icon: MapPin,
      title: "South India Delivery",
      description: "We can deliver all over South India"
    },
    {
      icon: Scale,
      title: "Minimum Order",
      description: "A minimum of 5 tons order must be placed outside Krishna District, Andhra Pradesh"
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Transportation charges must be borne by the customer"
    }
  ]

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Bulk Supply Information
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We supply mangos only in bulk. Can be delivered all over South India.
        </p>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Detailed Description */}
        <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Important Terms & Conditions
          </h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <strong>We supply mangos only in bulk.</strong> We can deliver all over South India.
            </p>
            <p>
              A <strong>minimum of 5 tons order</strong> must be placed outside Krishna District, Andhra Pradesh.
            </p>
            <p>
              <strong>Transportation charges must be borne by the customer.</strong>
            </p>
            <p>
              <strong>Pricing of the mango depends on the quantity</strong> the customer orders. Larger orders enjoy better rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
