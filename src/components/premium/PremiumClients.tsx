export function PremiumClients() {
  const clients = [
    {
      name: "Bureau Reuring",
      logo: "/logos/bureau-reuring.png",
      description: "Automatisering van administratieve processen voor meer focus op klantcontact en strategische advisering."
    },
    {
      name: "Doxis",
      logo: "/logos/doxis.png",
      description: "Slimme documentverwerking en workflow-optimalisatie voor efficiëntere bedrijfsvoering."
    },
    {
      name: "Vinster",
      logo: "/logos/vinster.png",
      description: "AI-gedreven analyse en rapportage voor datagestuurde besluitvorming en groei."
    },
    {
      name: "Educared",
      logo: "/logos/educared.png",
      description: "Geautomatiseerde leertrajecten en persoonlijke ontwikkelingsplannen voor optimale kennisoverdracht."
    },
    {
      name: "LEK Sloopwerken",
      logo: "/logos/lek-sloopwerken.png",
      description: "Digitalisering van projectmanagement en veiligheidsprocessen voor efficiëntere uitvoering."
    },
    {
      name: "De Groene Wereld",
      logo: "/logos/de-groene-wereld.png",
      description: "Slimme tuinonderhoud planning en klantcommunicatie voor duurzame groei en klanttevredenheid."
    }
  ];

  return (
    <section className="section-spacing-sm">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Vertrouwd door
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-surface rounded-xl p-8 hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="mb-6">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-20 w-auto object-contain mx-auto"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">{client.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}