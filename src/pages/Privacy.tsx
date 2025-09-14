export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-foreground">Privacybeleid</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Beterzo respecteert jouw privacy en beschermt jouw persoonlijke gegevens.
              </p>
            </div>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-foreground">Gegevensverzameling</h2>
                <p>
                  We verzamelen alleen de gegevens die nodig zijn om onze diensten te leveren, 
                  zoals contactinformatie en projectdetails.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-foreground">Gebruik van gegevens</h2>
                <p>
                  Jouw gegevens worden gebruikt voor communicatie over onze diensten en 
                  het leveren van de overeengekomen werkzaamheden.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-foreground">Beveiliging</h2>
                <p>
                  We nemen passende technische en organisatorische maatregelen om 
                  jouw gegevens te beschermen tegen ongeautoriseerde toegang.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-foreground">Contact</h2>
                <p>
                  Voor vragen over dit privacybeleid kun je contact opnemen via{" "}
                  <a href="mailto:hi@beterzo.tech" className="text-primary hover:text-primary-hover">
                    hi@beterzo.tech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}