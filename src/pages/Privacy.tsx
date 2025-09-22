export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground leading-tight tracking-tight">Privacy beleid</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wij respecteren jouw privacy en zijn transparant over hoe we met jouw gegevens omgaan.
              </p>
            </div>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Algemeen</h2>
                <p>
                  Beterzo respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die je ons verschaft vertrouwelijk wordt behandeld. We gebruiken jouw gegevens alleen voor de doeleinden waarvoor ze zijn verstrekt.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Welke gegevens verzamelen we?</h2>
                <p>We verzamelen alleen gegevens die je vrijwillig aan ons verstrekt, zoals:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Naam en contactgegevens via contactformulieren</li>
                  <li>E-mailadres voor nieuwsbrieven of updates</li>
                  <li>Informatie die je deelt tijdens gesprekken of trainingen</li>
                  <li>Website-gebruiksgegevens via cookies (zie cookiebeleid)</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Hoe gebruiken we jouw gegevens?</h2>
                <p>We gebruiken jouw persoonlijke gegevens voor de volgende doeleinden:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Om contact met je op te nemen naar aanleiding van jouw vraag</li>
                  <li>Voor het leveren van onze diensten en ondersteuning</li>
                  <li>Om je te informeren over updates en nieuwe ontwikkelingen</li>
                  <li>Voor het verbeteren van onze website en dienstverlening</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Delen van gegevens</h2>
                <p>We verkopen, verhuren of delen jouw persoonlijke gegevens niet met derden, behalve:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Met jouw expliciete toestemming</li>
                  <li>Wanneer dit wettelijk verplicht is</li>
                  <li>Met betrouwbare serviceproviders die ons helpen bij onze dienstverlening</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Beveiliging</h2>
                <p>
                  We treffen passende technische en organisatorische maatregelen om jouw persoonlijke gegevens te beschermen tegen verlies, misbruik, ongeoorloofde toegang, openbaarmaking of wijziging.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Jouw rechten</h2>
                <p>Je hebt te allen tijde het recht om:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Inzage te krijgen in jouw persoonlijke gegevens</li>
                  <li>Correctie of aanvulling van jouw gegevens te vragen</li>
                  <li>Verwijdering van jouw gegevens te verzoeken</li>
                  <li>Bezwaar te maken tegen verwerking van jouw gegevens</li>
                  <li>Jouw toestemming in te trekken</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
                <p>
                  Onze website gebruikt cookies om de gebruikerservaring te verbeteren en websitestatistieken bij te houden. Je kunt cookies uitschakelen in je browserinstellingen, maar dit kan de functionaliteit van de website beïnvloeden.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Wijzigingen in dit privacybeleid</h2>
                <p>
                  We kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina gepubliceerd. We raden je aan om dit beleid regelmatig te controleren.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                <p>
                  Heb je vragen over dit privacybeleid of wil je gebruik maken van je rechten? Neem dan contact met ons op via{" "}
                  <a href="mailto:hi@beterzo.tech" className="text-primary hover:text-primary-hover font-semibold">
                    hi@beterzo.tech
                  </a>.
                </p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Laatst bijgewerkt: {currentYear}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}