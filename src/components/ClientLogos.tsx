export function ClientLogos() {
  const clients = [
    "TechCorp",
    "InnovateLab", 
    "FutureWorks",
    "SmartSolutions",
    "DataDriven Co",
    "AutomateNow"
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-8 text-sm font-medium">
          Vertrouwd door onderwijsinstellingen, consultancybureaus en mkb's
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}