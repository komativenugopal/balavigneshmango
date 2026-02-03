const varieties = [
  {
    name: "Banganapalli",
    description: "Known as the 'King of Mangoes', Banganapalli has a sweet, fibreless pulp with a pleasant aroma. It's golden yellow when ripe and is perfect for desserts and smoothies.",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/5/CU/XV/OH/130329392/whatsapp-image-2021-05-27-at-3-35-41-pm-500x500.jpeg"
  },
  {
    name: "Totapuri",
    description: "Recognizable by its distinctive parrot beak shape, Totapuri has a tangy flavor and firm flesh. It's excellent for pickles and chutneys.",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/4/412587761/GB/JK/GH/146632251/product-jpeg.jpg"
  },
  {
    name: "Chinna Rasalu",
    description: "Small but incredibly sweet, Chinna Rasalu mangoes are juicy with a rich flavor. They're perfect for eating fresh or making juice.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/487470771/PN/LA/PQ/160452207/pedda-rasalu-500x500.jpeg"
  },
  {
    name: "Pedda Rasalu",
    description: "Larger version of Rasalu mangoes, they're known for their exceptional sweetness and aromatic flavor. Great for desserts and milkshakes.",
    image: "https://m.media-amazon.com/images/I/51B0A+jirTS._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Cheruku Rasalu",
    description: "Named for their sugar-cane like sweetness, these mangoes have a distinctive flavor and aroma. They're perfect for eating fresh.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/351416286/ME/GS/FP/188330100/mango-plant-500x500.jpg"
  },
  {
    name: "Kobbari Mamidi Kayalu",
    description: "These coconut-flavored raw mangoes are perfect for pickles and savory dishes. They have a unique tangy taste that's irresistible.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWKPWF38Hzzioi9qNlVi4j2TwH35NYRWxdw&s"
  }
]

export function MangoVarieties() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 animate-float">
          Our Mango Varieties
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {varieties.map((variety, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={variety.image || "/placeholder.svg"}
                  alt={variety.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {variety.name}
                </h3>
                <p className="text-card-foreground leading-relaxed">
                  {variety.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
