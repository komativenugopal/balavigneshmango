export function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/3d/ce/0d/3dce0d3bcc4b62df895fbc897026313d.jpg')"
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content - smaller and more transparent */}
      <div className="relative z-10 text-center p-6 bg-primary/40 backdrop-blur-sm rounded-xl max-w-xl mx-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
          Welcome to Bala Vigneshwara Mango Merchants
        </h1>
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          The place where mango quality begins. We have all variety of mangoes, supplied on demand, at reasonable prices and no compromise in quality.
        </p>
      </div>
    </section>
  )
}
