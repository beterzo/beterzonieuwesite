export function PremiumClients() {
  const clients = [
    "Universiteit Utrecht",
    "TechCorp Solutions", 
    "InnovateLab",
    "SmartConsult",
    "DataDriven BV",
    "AutomateNow",
    "FutureWorks",
    "ProcessPro"
  ];

  return (
    <section className="section-spacing-sm">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Vertrouwd door
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}