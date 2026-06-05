<template>
  <div class="home-page">
    <section class="hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">Textildruck, Tassen, Fahrzeugdesigns und Merchsysteme</span>
        <h1>
          Branchenstarke Produkte fuer Marken, Teams und Kampagnen, die mehr als nur
          gut aussehen sollen.
        </h1>
        <p class="hero-text">
          TShirt-Willy verbindet hochwertige Veredelung, saubere Produktionslogik und
          persoenliche Vertriebsbetreuung. Von Premium-Shirts und Hoodies ueber Tassen,
          Geschenkartikel und Automotive-Designs bis hin zu kompletten Rollouts fuer
          Unternehmen, Vereine und Creator.
        </p>

        <div class="hero-actions">
          <button type="button" class="btn btn-primary" @click="scrollToSection('konfigurator')">
            Konzept konfigurieren
          </button>
          <button type="button" class="btn btn-secondary" @click="scrollToSection('referenzen')">
            Referenzen ansehen
          </button>
        </div>

        <div class="hero-stats">
          <article v-for="item in heroStats" :key="item.label" class="hero-stat">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </article>
        </div>
      </div>

      <div class="hero-stage">
        <div class="hero-stage-main">
          <img
            class="hero-image"
            src="https://cdn-proxy.hoststudios.de/willy-content/067.jpg"
            alt="Beispiel einer hochwertigen Textilveredelung von TShirt-Willy"
            loading="eager"
          />

          <div class="hero-stage-overlay">
            <div>
              <span class="overlay-label">Produktionsfokus</span>
              <strong>Workwear, Merch, Becher und Fahrzeugauftritte</strong>
            </div>
            <div>
              <span class="overlay-label">Vertriebsmodell</span>
              <strong>Briefing, Angebot und Umsetzung per Kontaktanfrage</strong>
            </div>
          </div>
        </div>

        <div class="hero-stage-note">
          <span>Von Einzelserie bis Rollout</span>
          <strong>Ihr Briefing wird unten direkt im Konfigurator als Projektkonzept vorbereitet.</strong>
        </div>
      </div>
    </section>

    <section class="intro-band">
      <div>
        <span class="eyebrow">Fuer B2B, Vereine, Gastro und Creator-Brands</span>
        <h2>Eine Website, die sofort zeigt: Hier arbeitet keine Druckbude von gestern.</h2>
      </div>

      <div class="intro-points">
        <article v-for="item in introPoints" :key="item.title" class="intro-point">
          <strong>{{ item.title }}</strong>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="leistungen" class="section-shell">
      <div class="section-heading">
        <span class="eyebrow">Leistungen</span>
        <h2>Produkte und Systeme fuer starke Sichtbarkeit im Alltag.</h2>
        <p>
          Ob Mitarbeiterkleidung, Event-Merch, Promotionware oder Fahrzeugbeschriftung:
          die Seite fuehrt Ihre Kernleistungen klarer, hochwertiger und vertriebsstaerker.
        </p>
      </div>

      <div class="services-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <span class="service-index">{{ service.index }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
          <div class="service-tags">
            <span v-for="tag in service.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="section-shell process-shell">
      <div class="section-heading">
        <span class="eyebrow">Ablauf</span>
        <h2>Vom Wunschmotiv zur sauberen Anfrage in vier klaren Schritten.</h2>
        <p>
          Damit die Bestellung spaeter bewusst ueber den Vertrieb laeuft, bildet der
          Konfigurator kein Checkout ab, sondern ein belastbares Anfrage-Briefing.
        </p>
      </div>

      <div class="process-grid">
        <article v-for="step in processSteps" :key="step.title" class="process-card">
          <span class="process-number">{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section id="konfigurator" class="section-shell configurator-shell">
      <div class="section-heading">
        <span class="eyebrow">Konfigurator</span>
        <h2>Produktkonzepte fuer T-Shirts, Hoodies, Tassen und Fahrzeugdesigns.</h2>
        <p>
          Kunden waehlen hier ihren Produkttyp, Stil, Farbe, Veredelung und Extras. Die
          Zusammenfassung kann direkt an Ihren Vertrieb uebergeben werden.
        </p>
      </div>

      <div class="studio-layout">
        <div class="studio-main">
          <div class="product-tabs" role="tablist" aria-label="Produktarten">
            <button
              v-for="product in products"
              :key="product.id"
              type="button"
              class="product-tab"
              :class="{ active: selectedProductId === product.id }"
              @click="selectedProductId = product.id"
            >
              <span class="tab-label">{{ product.label }}</span>
              <span class="tab-meta">{{ product.subtitle }}</span>
            </button>
          </div>

          <div class="studio-options">
            <div class="option-card">
              <div class="option-header">
                <div>
                  <span class="option-label">Produktlinie</span>
                  <h3>{{ activeProduct.label }}</h3>
                </div>
                <span class="option-badge">{{ activeProduct.badge }}</span>
              </div>
              <p>{{ activeProduct.description }}</p>
            </div>

            <div class="option-grid">
              <article class="option-card">
                <span class="option-label">Material oder Basis</span>
                <div class="chip-group">
                  <button
                    v-for="material in activeProduct.materials"
                    :key="material"
                    type="button"
                    class="chip"
                    :class="{ active: activeSelection.material === material }"
                    @click="activeSelection.material = material"
                  >
                    {{ material }}
                  </button>
                </div>
              </article>

              <article class="option-card">
                <span class="option-label">Veredelung</span>
                <div class="chip-group">
                  <button
                    v-for="method in activeProduct.methods"
                    :key="method"
                    type="button"
                    class="chip"
                    :class="{ active: activeSelection.method === method }"
                    @click="activeSelection.method = method"
                  >
                    {{ method }}
                  </button>
                </div>
              </article>

              <article class="option-card">
                <span class="option-label">Platzierung</span>
                <div class="chip-group">
                  <button
                    v-for="placement in activeProduct.placements"
                    :key="placement"
                    type="button"
                    class="chip"
                    :class="{ active: activeSelection.placement === placement }"
                    @click="activeSelection.placement = placement"
                  >
                    {{ placement }}
                  </button>
                </div>
              </article>

              <article class="option-card">
                <span class="option-label">Grundfarbe</span>
                <div class="color-group">
                  <button
                    v-for="color in activeProduct.palette"
                    :key="color.name"
                    type="button"
                    class="color-chip"
                    :class="{ active: activeSelection.color === color.name }"
                    @click="activeSelection.color = color.name"
                  >
                    <span class="color-swatch" :style="{ background: color.swatch }"></span>
                    <span>{{ color.name }}</span>
                  </button>
                </div>
              </article>

              <article class="option-card">
                <span class="option-label">Menge</span>
                <div class="chip-group">
                  <button
                    v-for="quantity in activeProduct.quantities"
                    :key="quantity"
                    type="button"
                    class="chip"
                    :class="{ active: activeSelection.quantity === quantity }"
                    @click="activeSelection.quantity = quantity"
                  >
                    {{ quantity }}
                  </button>
                </div>
              </article>

              <article class="option-card">
                <span class="option-label">Timing</span>
                <div class="chip-group">
                  <button
                    v-for="timeline in activeProduct.timelines"
                    :key="timeline"
                    type="button"
                    class="chip"
                    :class="{ active: activeSelection.timeline === timeline }"
                    @click="activeSelection.timeline = timeline"
                  >
                    {{ timeline }}
                  </button>
                </div>
              </article>
            </div>

            <article class="option-card">
              <span class="option-label">Extras</span>
              <div class="chip-group">
                <button
                  v-for="extra in activeProduct.extras"
                  :key="extra"
                  type="button"
                  class="chip"
                  :class="{ active: activeSelection.extras.includes(extra) }"
                  @click="toggleExtra(extra)"
                >
                  {{ extra }}
                </button>
              </div>
            </article>

            <article class="option-card">
              <span class="option-label">Projektinfo fuer den Vertrieb</span>
              <textarea
                v-model="activeSelection.note"
                class="project-note"
                rows="5"
                placeholder="Beschreiben Sie Motiv, Einsatzzweck, Lieferfenster oder besondere Wuensche."
              ></textarea>
            </article>
          </div>
        </div>

        <aside class="preview-panel">
          <div class="preview-media" :style="previewStyle">
            <img :src="activeProduct.cover" :alt="activeProduct.label" loading="lazy" />
            <div class="preview-object" :class="`shape-${activeProduct.id}`">
              <span class="preview-placement">{{ activeSelection.placement }}</span>
              <span class="preview-signature">{{ activeProduct.previewLabel }}</span>
            </div>
          </div>

          <div class="preview-copy">
            <span class="eyebrow">Konzeptvorschau</span>
            <h3>{{ conceptTitle }}</h3>
            <p>{{ conceptSummary }}</p>

            <ul class="brief-list">
              <li v-for="line in briefLines" :key="line">{{ line }}</li>
            </ul>

            <div class="preview-actions">
              <a class="btn btn-primary" :href="mailToHref">An Vertrieb senden</a>
              <button type="button" class="btn btn-secondary" @click="copyBrief">
                {{ copyLabel }}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section id="referenzen" class="section-shell references-shell">
      <div class="section-heading">
        <span class="eyebrow">Referenzen</span>
        <h2>Ausgewaehlte Motive und Produktionen aus Ihrem bestehenden Materialpool.</h2>
        <p>
          Die Referenzflaeche ist jetzt kein netter Zusatz mehr, sondern ein echtes
          Vertriebsargument. Sie beweist Bandbreite, Qualitaet und Wiedererkennung.
        </p>
      </div>

      <div class="reference-feature">
        <div class="reference-copy">
          <span class="reference-kicker">Produktionsstark und markentauglich</span>
          <h3>Von Arbeitskleidung bis Werbeartikel: jedes Motiv muss nicht nur druckbar, sondern verkaufbar sein.</h3>
          <p>
            Deshalb fuehren die Referenzen nicht nur Bilder, sondern zeigen auch
            Einsatzfelder: Teams, Promotions, Gastronomie, Creator Drops und mobile
            Markenauftritte auf Fahrzeugen.
          </p>
        </div>

        <div class="reference-metrics">
          <article v-for="metric in referenceMetrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </article>
        </div>
      </div>

      <div class="reference-grid">
        <article v-for="project in referenceProjects" :key="project.title" class="reference-card">
          <img :src="project.src" :alt="project.title" loading="lazy" />
          <div class="reference-card-copy">
            <span>{{ project.category }}</span>
            <h3>{{ project.title }}</h3>
          </div>
        </article>
      </div>

      <div class="reference-stream" aria-label="Weitere Referenzmotive">
        <div class="reference-track">
          <img
            v-for="(src, index) in scrollingReferences"
            :key="`${src}-${index}`"
            :src="src"
            alt="Weiteres Referenzmotiv von TShirt-Willy"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section id="vertrieb" class="section-shell sales-shell">
      <div class="section-heading">
        <span class="eyebrow">Vertrieb und Headquarter</span>
        <h2>Bestellungen laufen persoenlich, sauber gesteuert und ohne Reibungsverluste.</h2>
        <p>
          Statt eines anonymen Checkouts fuehrt die Seite jetzt aktiv in Ihre
          Vertriebsanfrage. Das passt besser zu individuellen Produktionen, Freigaben und
          Serienprojekten.
        </p>
      </div>

      <div class="sales-grid">
        <article class="sales-card sales-card-strong">
          <span class="option-label">Vertrieb</span>
          <h3>Direkter Projektstart per E-Mail oder Telefon</h3>
          <p>
            Angebot, Machbarkeitscheck, Produktionsfenster und Versandabstimmung laufen
            gesammelt ueber Ihren Vertrieb. Der Konfigurator erzeugt dafuer bereits eine
            klare Anfragebasis.
          </p>
          <a :href="`mailto:${salesContact.email}`">{{ salesContact.email }}</a>
          <a :href="`tel:${salesContact.phoneLink}`">{{ salesContact.phone }}</a>
          <span class="sales-note">{{ salesContact.hours }}</span>
        </article>

        <article class="sales-card">
          <span class="option-label">Headquarter</span>
          <h3>TShirt-Willy Projektzentrale</h3>
          <p>
            Showroom-Termine, Musterfreigaben, persoenliche Abstimmungen und Abholungen
            lassen sich ueber das Headquarter koordinieren.
          </p>
          <ul class="sales-list">
            <li v-for="item in headquartersNotes" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="sales-card">
          <span class="option-label">Anfahrt und Ablauf</span>
          <h3>So wird aus einer Anfrage ein geordnetes Produktionsprojekt</h3>
          <ul class="sales-list">
            <li v-for="item in salesSteps" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>

      <div class="sales-banner">
        <div>
          <span class="eyebrow">Naechster Schritt</span>
          <h3>Konfiguration senden, Freigabe erhalten und Produktion starten.</h3>
          <p>
            Die unten vorbereitete Anfrage ist bewusst vertriebsnah aufgebaut und kann
            direkt als Briefing fuer Ihr Team dienen.
          </p>
        </div>

        <div class="sales-banner-actions">
          <a class="btn btn-primary" :href="mailToHref">Anfrage jetzt senden</a>
          <button type="button" class="btn btn-secondary" @click="scrollToSection('konfigurator')">
            Konfigurator anpassen
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const heroStats = [
  { value: '1 bis 5.000+', label: 'Stueckzahlen von Einzelserie bis Rollout' },
  { value: '4 Produktwelten', label: 'Textil, Tassen, Werbeartikel und Automotive' },
  { value: '100 % Anfragebasiert', label: 'Ideal fuer individuelle Produktionen und Freigaben' },
]

const introPoints = [
  {
    title: 'Vertrieb statt Warenkorb',
    text: 'Komplexe Produktionen, mehrere Varianten und B2B-Abstimmungen werden direkt sauber in eine persoenliche Anfrage ueberfuehrt.',
  },
  {
    title: 'Qualitaet als Positionierung',
    text: 'Farben, Materialien, Veredelungen und Referenzen verkaufen die Leistung schon auf der Startseite.',
  },
  {
    title: 'Ausbaubar fuer jede Linie',
    text: 'Die Struktur ist jetzt stark genug fuer Workwear, Vereinsserien, Geschenkartikel, Promotions und Creator-Kollektionen.',
  },
]

const services = [
  {
    index: '01',
    title: 'Premium T-Shirts und Teamwear',
    text: 'Von schweren Streetwear-Qualitaeten bis zu funktionaler Arbeitskleidung mit belastbarer Veredelung.',
    tags: ['DTF', 'Flex/Flock', 'Siebdruck-Transfer'],
  },
  {
    index: '02',
    title: 'Hoodies, Sweats und Layering',
    text: 'Markenstarke Oberteile fuer Merch, Vereine, Gastronomie, Clubs und interne Arbeitgebermarken.',
    tags: ['Heavy Fit', 'Stickoptionen', 'Groessenmix'],
  },
  {
    index: '03',
    title: 'Tassen und Geschenkartikel',
    text: 'Personalisierte Becher, Geschenksets und Promotionware fuer wiedererkennbare Markenmomente.',
    tags: ['Sublimation', 'Corporate Gifts', 'Kleinauflagen'],
  },
  {
    index: '04',
    title: 'Fahrzeugdesigns und Flottenoptik',
    text: 'Vom einzelnen Firmenfahrzeug bis zum mobilen Markenauftritt fuer Service, Delivery und Events.',
    tags: ['Mockup', 'Freigabeprozess', 'Plot und Folie'],
  },
  {
    index: '05',
    title: 'Designanpassung und Produktionsbriefing',
    text: 'Ideen werden druckfaehig, serienfest und direkt vertriebsfaehig aufbereitet.',
    tags: ['Datencheck', 'Feinschliff', 'Machbarkeit'],
  },
  {
    index: '06',
    title: 'Rollouts fuer Unternehmen und Creator',
    text: 'Kampagnen, Kits, Merch-Drops und wiederkehrende Produktionen mit klarer Prozessfuehrung.',
    tags: ['Wiederholserien', 'B2B', 'Launch Support'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Produkt waehlen',
    text: 'Der Kunde startet mit der passenden Kategorie: Textil, Hoodie, Tasse oder Fahrzeugdesign.',
  },
  {
    number: '02',
    title: 'Konzept verfeinern',
    text: 'Farbe, Material, Veredelung, Platzierung, Auflage und Extras formen ein klares Produktbriefing.',
  },
  {
    number: '03',
    title: 'Anfrage uebergeben',
    text: 'Die Zusammenfassung wird per Klick an den Vertrieb gesendet oder als Briefing kopiert.',
  },
  {
    number: '04',
    title: 'Vertrieb uebernimmt',
    text: 'Angebot, Freigabe, Machbarkeit, Terminplanung und Produktion laufen persoenlich weiter.',
  },
]

const products = [
  {
    id: 'shirt',
    label: 'Premium T-Shirts',
    subtitle: 'Merch, Teamwear und Workwear',
    badge: 'Bestseller',
    description: 'Ideal fuer starke Logos, Creator-Drops, Teamkleidung und Promotion mit klarer Druckflaeche.',
    previewLabel: 'Frontprint',
    cover: 'https://cdn-proxy.hoststudios.de/willy-content/023.jpg',
    materials: ['180 g Premium Cotton', '240 g Heavy Box Fit', 'Organic Blend'],
    methods: ['DTF Transfer', 'Flex/Flock', 'Siebdruck-Transfer'],
    placements: ['Brust links', 'Front gross', 'Ruecken gross', 'Aermel'],
    quantities: ['1-9', '10-24', '25-49', '50-149', '150+'],
    timelines: ['Express 3-5 Werktage', 'Standard 7-10 Werktage', 'Rollout 2-3 Wochen'],
    extras: ['Namensdruck', 'Hangtags', 'Einzelverpackung', 'Groessenmix'],
    palette: [
      { name: 'Graphit', swatch: '#1d2632', ink: '#f8fafc' },
      { name: 'Creme', swatch: '#f2ebe0', ink: '#17202c' },
      { name: 'Signalrot', swatch: '#d14b32', ink: '#fff7f3' },
      { name: 'Sand', swatch: '#d7c3a1', ink: '#17202c' },
    ],
  },
  {
    id: 'hoodie',
    label: 'Hoodies und Sweats',
    subtitle: 'Streetwear, Teams und Gastronomie',
    badge: 'Hoher Warenwert',
    description: 'Mehr Flaeche, mehr Haptik und mehr Markenpraesenz fuer langfristig genutzte Oberteile.',
    previewLabel: 'Backpiece',
    cover: 'https://cdn-proxy.hoststudios.de/willy-content/031.jpg',
    materials: ['320 g Sweat', 'Heavy Brush 420 g', 'Premium Zip Hoodie'],
    methods: ['Stick + Print', 'DTF Transfer', 'Flock'],
    placements: ['Front klein', 'Ruecken gross', 'Brust + Aermel', 'Kapuzenprint'],
    quantities: ['5-14', '15-29', '30-79', '80-199', '200+'],
    timelines: ['Standard 7-10 Werktage', 'Merch Drop 2 Wochen', 'Rollout 3 Wochen'],
    extras: ['Nackenlabel', 'Sonderhangtag', 'Personalisierung', 'Faltservice'],
    palette: [
      { name: 'Tiefschwarz', swatch: '#151515', ink: '#f8fafc' },
      { name: 'Moos', swatch: '#4b5e44', ink: '#f8fafc' },
      { name: 'Smoke', swatch: '#808895', ink: '#f8fafc' },
      { name: 'Offwhite', swatch: '#ece8df', ink: '#17202c' },
    ],
  },
  {
    id: 'mug',
    label: 'Tassen und Becher',
    subtitle: 'Promotion, Geschenke und Gastro',
    badge: 'Ideal fuer Kleinserien',
    description: 'Perfekt fuer Corporate Gifts, Office-Kits, Vereine und wiedererkennbare Markenpraesente.',
    previewLabel: 'Wrap Print',
    cover: 'https://cdn-proxy.hoststudios.de/willy-content/042.jpg',
    materials: ['Keramik 330 ml', 'Emaille Mug', 'Premium Office Cup'],
    methods: ['Sublimation', 'Lasergravur', 'Full Wrap Print'],
    placements: ['Einseitig', 'Beidseitig', 'Rundum', 'Henkelzone'],
    quantities: ['12-23', '24-49', '50-99', '100-249', '250+'],
    timelines: ['Standard 5-7 Werktage', 'Eventserie 2 Wochen', 'Grossserie 3 Wochen'],
    extras: ['Geschenkbox', 'Set-Konfektion', 'Namenspersonalisierung', 'Kartonbranding'],
    palette: [
      { name: 'Porzellanweiss', swatch: '#fbfaf7', ink: '#17202c' },
      { name: 'Espresso', swatch: '#6b4d3a', ink: '#fffaf5' },
      { name: 'Sonnengelb', swatch: '#efb441', ink: '#17202c' },
      { name: 'Petrol', swatch: '#245768', ink: '#f8fafc' },
    ],
  },
  {
    id: 'car',
    label: 'Fahrzeugdesigns',
    subtitle: 'Flotte, Service und Promotion',
    badge: 'Mobile Reichweite',
    description: 'Fahrzeugauftritte, die die Marke im Strassenbild sichtbar machen und trotzdem produktionstauglich bleiben.',
    previewLabel: 'Side Livery',
    cover: 'https://cdn-proxy.hoststudios.de/willy-content/055.jpg',
    materials: ['Plotfolie', 'Digitaldruck-Folie', 'Teilverklebung'],
    methods: ['Layout + Mockup', 'Plotdaten', 'Vollflaechige Gestaltung'],
    placements: ['Seitenteil', 'Heck', 'Motorhaube', 'Komplettpaket'],
    quantities: ['1 Fahrzeug', '2-5 Fahrzeuge', '6-15 Fahrzeuge', '16+ Fahrzeuge'],
    timelines: ['Mockup 2-4 Werktage', 'Rollout 1-2 Wochen', 'Flotte 3 Wochen'],
    extras: ['QR-Code', 'Standortdaten', 'Konturdaten', 'Montagebriefing'],
    palette: [
      { name: 'Nachtblau', swatch: '#1b2d4a', ink: '#f8fafc' },
      { name: 'Silber', swatch: '#d5d8de', ink: '#17202c' },
      { name: 'Kupfer', swatch: '#b86c42', ink: '#fff7f2' },
      { name: 'Signalweiss', swatch: '#f8f8f5', ink: '#17202c' },
    ],
  },
]

const selections = reactive({
  shirt: {
    material: '240 g Heavy Box Fit',
    method: 'DTF Transfer',
    placement: 'Front gross',
    color: 'Graphit',
    quantity: '25-49',
    timeline: 'Standard 7-10 Werktage',
    extras: ['Groessenmix', 'Hangtags'],
    note: '',
  },
  hoodie: {
    material: '320 g Sweat',
    method: 'Stick + Print',
    placement: 'Ruecken gross',
    color: 'Tiefschwarz',
    quantity: '30-79',
    timeline: 'Standard 7-10 Werktage',
    extras: ['Personalisierung'],
    note: '',
  },
  mug: {
    material: 'Keramik 330 ml',
    method: 'Full Wrap Print',
    placement: 'Rundum',
    color: 'Porzellanweiss',
    quantity: '24-49',
    timeline: 'Standard 5-7 Werktage',
    extras: ['Geschenkbox'],
    note: '',
  },
  car: {
    material: 'Digitaldruck-Folie',
    method: 'Layout + Mockup',
    placement: 'Seitenteil',
    color: 'Nachtblau',
    quantity: '2-5 Fahrzeuge',
    timeline: 'Mockup 2-4 Werktage',
    extras: ['QR-Code'],
    note: '',
  },
})

const referenceProjects = [
  {
    title: 'Teamwear mit hoher Wiedererkennung',
    category: 'Textilproduktion',
    src: 'https://cdn-proxy.hoststudios.de/willy-content/004.jpg',
  },
  {
    title: 'Merch-Look fuer Launch und Community',
    category: 'Creator und Promotion',
    src: 'https://cdn-proxy.hoststudios.de/willy-content/010.jpg',
  },
  {
    title: 'Becher und Geschenkartikel fuer Markenmomente',
    category: 'Corporate Gifts',
    src: 'https://cdn-proxy.hoststudios.de/willy-content/018.jpg',
  },
  {
    title: 'Starke Grafik fuer mobile Reichweite',
    category: 'Automotive',
    src: 'https://cdn-proxy.hoststudios.de/willy-content/026.jpg',
  },
  {
    title: 'Workwear mit sauberem Markenbild',
    category: 'Service und Handwerk',
    src: 'https://cdn-proxy.hoststudios.de/willy-content/036.jpg',
  },
  {
    title: 'Serienfaehige Veredelung fuer Events',
    category: 'Rollout und Promotion',
    src: 'https://cdn-proxy.hoststudios.de/willy-content/049.jpg',
  },
]

const referenceMetrics = [
  { value: '66+', label: 'bildstarke Motive und Umsetzungen im Bestand' },
  { value: 'B2B bis Creator', label: 'Anwendungsfelder fuer unterschiedliche Zielgruppen' },
  { value: '1 Anfrage', label: 'von der Idee bis zum Vertriebsbriefing' },
]

const referenceStream = [
  'https://cdn-proxy.hoststudios.de/willy-content/002.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/007.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/013.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/021.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/029.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/040.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/053.jpg',
  'https://cdn-proxy.hoststudios.de/willy-content/061.jpg',
]

const scrollingReferences = [...referenceStream, ...referenceStream]

const salesContact = {
  email: 'vertrieb@tshirt-willy.de',
  phone: '+49 (0) 000 000000',
  phoneLink: '+49000000000',
  hours: 'Bitte echte Vertriebsdaten vor dem Go-live final ersetzen.',
}

const headquartersNotes = [
  'Headquarter, Showroom und Mustertermine nach Vereinbarung',
  'Persoenliche Freigaben fuer Textilien, Tassen und Fahrzeugkonzepte',
  'Anfahrt, Maps-Link und Standortdaten koennen zentral im letzten Schritt ergaenzt werden',
]

const salesSteps = [
  'Konfiguration oder Wunschprojekt absenden',
  'Logo, Motiv oder Designidee mitliefern',
  'Angebot, Machbarkeit und Lieferfenster erhalten',
  'Freigabe bestaetigen und Produktion starten',
]

const selectedProductId = ref('shirt')
const briefCopied = ref(false)

const activeProduct = computed(() => products.find((product) => product.id === selectedProductId.value) ?? products[0])
const activeSelection = computed(() => selections[selectedProductId.value])

function normalizeSelection(productId) {
  const product = products.find((entry) => entry.id === productId)
  const selection = selections[productId]

  if (!product || !selection) {
    return
  }

  if (!product.materials.includes(selection.material)) {
    selection.material = product.materials[0]
  }

  if (!product.methods.includes(selection.method)) {
    selection.method = product.methods[0]
  }

  if (!product.placements.includes(selection.placement)) {
    selection.placement = product.placements[0]
  }

  if (!product.quantities.includes(selection.quantity)) {
    selection.quantity = product.quantities[0]
  }

  if (!product.timelines.includes(selection.timeline)) {
    selection.timeline = product.timelines[0]
  }

  if (!product.palette.some((entry) => entry.name === selection.color)) {
    selection.color = product.palette[0].name
  }

  selection.extras = selection.extras.filter((extra) => product.extras.includes(extra))
}

products.forEach((product) => normalizeSelection(product.id))

watch(selectedProductId, () => {
  briefCopied.value = false
  normalizeSelection(selectedProductId.value)
})

const activeColor = computed(
  () =>
    activeProduct.value.palette.find((entry) => entry.name === activeSelection.value.color) ??
    activeProduct.value.palette[0]
)

const previewStyle = computed(() => ({
  '--preview-tone': activeColor.value.swatch,
  '--preview-ink': activeColor.value.ink,
}))

const conceptTitle = computed(() => `${activeProduct.value.label} als ${activeSelection.value.method}-Konzept`)

const conceptSummary = computed(() => {
  const extraText = activeSelection.value.extras.length
    ? `Mit Extras wie ${activeSelection.value.extras.join(', ')}.`
    : 'Ohne Zusatzoptionen fuer einen klaren, schlanken Rollout.'

  return `${activeProduct.value.description} Ausgelegt auf ${activeSelection.value.quantity} mit ${activeSelection.value.timeline}. ${extraText}`
})

const briefLines = computed(() => [
  `Produkt: ${activeProduct.value.label}`,
  `Material/Basis: ${activeSelection.value.material}`,
  `Veredelung: ${activeSelection.value.method}`,
  `Platzierung: ${activeSelection.value.placement}`,
  `Farbe: ${activeSelection.value.color}`,
  `Menge: ${activeSelection.value.quantity}`,
  `Timing: ${activeSelection.value.timeline}`,
  `Extras: ${activeSelection.value.extras.length ? activeSelection.value.extras.join(', ') : 'Keine'}`,
  `Projektinfo: ${activeSelection.value.note || 'Noch keine Zusatznotizen hinterlegt'}`,
])

const briefText = computed(() =>
  [
    'Hallo TShirt-Willy Team,',
    '',
    'ich moechte folgendes Projekt anfragen:',
    '',
    ...briefLines.value.map((line) => `- ${line}`),
    '',
    'Bitte sendet mir eine Rueckmeldung zu Preis, Machbarkeit und naechstem Schritt.',
  ].join('\n')
)

const mailToHref = computed(() => {
  const subject = `Projektanfrage ${activeProduct.value.label}`
  return `mailto:${salesContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(briefText.value)}`
})

const copyLabel = computed(() => (briefCopied.value ? 'Briefing kopiert' : 'Briefing kopieren'))

function toggleExtra(extra) {
  const extras = activeSelection.value.extras
  const index = extras.indexOf(extra)

  if (index >= 0) {
    extras.splice(index, 1)
  } else {
    extras.push(extra)
  }

  briefCopied.value = false
}

async function copyBrief() {
  if (!navigator.clipboard) {
    return
  }

  await navigator.clipboard.writeText(briefText.value)
  briefCopied.value = true
  window.setTimeout(() => {
    briefCopied.value = false
  }, 2200)
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function syncSectionFromRoute(section) {
  if (typeof section !== 'string' || !section) {
    return
  }

  nextTick(() => {
    const target = document.getElementById(section)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

onMounted(() => {
  syncSectionFromRoute(route.query.section)
})

watch(
  () => route.query.section,
  (section) => {
    syncSectionFromRoute(section)
  }
)

</script>

<style scoped>
.home-page {
  display: grid;
  gap: 2rem;
  width: var(--container);
  margin: 0 auto;
  padding: 1.4rem 0 4.5rem;
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 1.5rem;
  align-items: stretch;
}

.hero-copy,
.hero-stage-main,
.intro-band,
.service-card,
.process-card,
.product-tab,
.option-card,
.preview-panel,
.reference-feature,
.reference-card,
.sales-card,
.sales-banner {
  border: 1px solid rgba(15, 23, 32, 0.1);
  border-radius: 28px;
  background: rgba(255, 253, 249, 0.88);
  box-shadow: 0 24px 80px rgba(15, 23, 32, 0.08);
  backdrop-filter: blur(12px);
}

.hero-copy {
  padding: 2.6rem;
  background:
    radial-gradient(circle at top left, rgba(240, 90, 55, 0.16), transparent 42%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(250, 246, 240, 0.92));
}

.hero-copy h1 {
  margin: 0.8rem 0 1rem;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.96;
  max-width: 11ch;
}

.hero-text {
  max-width: 58ch;
  margin: 0;
  color: var(--muted);
  font-size: 1.02rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.8rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 2rem;
}

.hero-stat {
  display: grid;
  gap: 0.35rem;
  padding: 1rem;
  border-radius: 22px;
  background: rgba(15, 23, 32, 0.04);
  border: 1px solid rgba(15, 23, 32, 0.06);
}

.hero-stat strong,
.reference-metrics strong {
  font-family: var(--font-display);
  font-size: 1.15rem;
}

.hero-stat span,
.reference-metrics span {
  color: var(--muted);
  font-size: 0.92rem;
}

.hero-stage {
  display: grid;
  gap: 1rem;
}

.hero-stage-main {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  background: #101820;
}

.hero-image {
  width: 100%;
  height: 100%;
  min-height: 520px;
  object-fit: cover;
  display: block;
}

.hero-stage-main::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.04), rgba(16, 24, 32, 0.78));
}

.hero-stage-overlay {
  position: absolute;
  left: 1.2rem;
  right: 1.2rem;
  bottom: 1.2rem;
  z-index: 1;
  display: grid;
  gap: 0.9rem;
}

.hero-stage-overlay > div {
  display: grid;
  gap: 0.2rem;
  padding: 1rem 1.1rem;
  border-radius: 20px;
  background: rgba(16, 24, 32, 0.75);
  color: white;
}

.overlay-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.68);
}

.hero-stage-note {
  display: grid;
  gap: 0.25rem;
  padding: 1.1rem 1.2rem;
  border-radius: 24px;
  background: #17202c;
  color: white;
  box-shadow: 0 18px 40px rgba(15, 23, 32, 0.2);
}

.hero-stage-note span {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.64);
}

.intro-band {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 1.4rem;
  padding: 1.8rem 2rem;
}

.intro-band h2 {
  margin: 0.8rem 0 0;
  max-width: 18ch;
}

.intro-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.intro-point {
  padding: 1rem 1.1rem;
  border-radius: 22px;
  background: rgba(15, 23, 32, 0.04);
}

.intro-point strong {
  display: block;
  margin-bottom: 0.55rem;
  font-family: var(--font-display);
}

.intro-point p,
.section-heading p,
.service-card p,
.process-card p,
.option-card p,
.preview-copy p,
.reference-copy p,
.sales-card p,
.sales-banner p {
  margin: 0;
  color: var(--muted);
}

.section-shell {
  display: grid;
  gap: 1.2rem;
  scroll-margin-top: 6.8rem;
}

.section-heading {
  display: grid;
  gap: 0.7rem;
  max-width: 58rem;
}

.section-heading h2,
.reference-copy h3,
.sales-banner h3 {
  margin: 0;
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  line-height: 1;
}

.services-grid,
.process-grid,
.reference-grid,
.sales-grid {
  display: grid;
  gap: 1rem;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card {
  display: grid;
  gap: 1rem;
  padding: 1.6rem;
}

.service-index,
.process-number {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(240, 90, 55, 0.12);
  color: var(--brand);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.service-card h3,
.process-card h3,
.preview-copy h3,
.reference-card h3,
.sales-card h3,
.option-card h3 {
  margin: 0;
  font-size: 1.25rem;
}

.service-tags,
.chip-group,
.color-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.service-tags span {
  display: inline-flex;
  padding: 0.48rem 0.72rem;
  border-radius: 999px;
  background: rgba(15, 23, 32, 0.05);
  color: var(--muted);
  font-size: 0.88rem;
}

.process-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.process-card {
  display: grid;
  gap: 0.9rem;
  padding: 1.4rem;
}

.configurator-shell {
  gap: 1.5rem;
}

.studio-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(340px, 0.75fr);
  gap: 1rem;
  align-items: start;
}

.studio-main {
  display: grid;
  gap: 1rem;
}

.product-tabs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.product-tab {
  display: grid;
  gap: 0.35rem;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.product-tab:hover,
.chip:hover,
.color-chip:hover,
.reference-card:hover,
.service-card:hover,
.sales-card:hover {
  transform: translateY(-2px);
  border-color: rgba(15, 23, 32, 0.16);
  box-shadow: 0 18px 44px rgba(15, 23, 32, 0.1);
}

.product-tab.active,
.chip.active,
.color-chip.active {
  border-color: rgba(232, 93, 61, 0.3);
  box-shadow: 0 0 0 4px rgba(232, 93, 61, 0.12);
}

.tab-label {
  font-family: var(--font-display);
  font-size: 1.02rem;
}

.tab-meta,
.sales-note {
  color: var(--muted);
  font-size: 0.88rem;
}

.studio-options {
  display: grid;
  gap: 1rem;
}

.option-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.option-card {
  display: grid;
  gap: 0.9rem;
  padding: 1.3rem;
}

.option-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
}

.option-label,
.reference-kicker {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand);
}

.option-badge {
  display: inline-flex;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(15, 23, 32, 0.06);
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 700;
}

.chip,
.color-chip {
  border: 1px solid rgba(15, 23, 32, 0.1);
  border-radius: 16px;
  background: white;
  color: var(--text);
  padding: 0.75rem 0.9rem;
  font: inherit;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.chip {
  font-size: 0.95rem;
}

.color-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}

.color-swatch {
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 32, 0.12);
}

.project-note {
  width: 100%;
  border: 1px solid rgba(15, 23, 32, 0.1);
  border-radius: 18px;
  background: white;
  color: var(--text);
  padding: 1rem;
  font: inherit;
  resize: vertical;
  min-height: 140px;
}

.project-note:focus {
  outline: 2px solid rgba(232, 93, 61, 0.22);
  outline-offset: 2px;
}

.preview-panel {
  position: sticky;
  top: 6.7rem;
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.preview-media {
  position: relative;
  min-height: 320px;
  border-radius: 24px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(15, 23, 32, 0.14), rgba(15, 23, 32, 0.78)),
    var(--preview-tone);
}

.preview-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.26;
}

.preview-object {
  position: absolute;
  inset: 0;
  margin: auto;
  display: grid;
  place-items: center;
  background: var(--preview-tone);
  color: var(--preview-ink);
  border: 5px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
}

.shape-shirt,
.shape-hoodie {
  width: 210px;
  height: 240px;
  border-radius: 34px 34px 44px 44px;
}

.shape-shirt::before,
.shape-hoodie::before {
  content: '';
  position: absolute;
  top: -28px;
  left: 50%;
  width: 92px;
  height: 62px;
  transform: translateX(-50%);
  border-radius: 0 0 28px 28px;
  background: inherit;
  border: inherit;
  border-top: none;
}

.shape-shirt::after,
.shape-hoodie::after {
  content: '';
  position: absolute;
  top: 38px;
  left: -30px;
  right: -30px;
  height: 72px;
  border-radius: 34px;
  background: inherit;
  z-index: -1;
}

.shape-hoodie::before {
  width: 120px;
  height: 82px;
  border-radius: 24px 24px 38px 38px;
  top: -38px;
}

.shape-mug {
  width: 230px;
  height: 150px;
  border-radius: 26px;
}

.shape-mug::after {
  content: '';
  position: absolute;
  right: -34px;
  top: 34px;
  width: 54px;
  height: 74px;
  border: 10px solid rgba(255, 255, 255, 0.4);
  border-left: none;
  border-radius: 0 30px 30px 0;
}

.shape-car {
  width: 270px;
  height: 118px;
  border-radius: 28px 42px 28px 28px;
}

.shape-car::before,
.shape-car::after {
  content: '';
  position: absolute;
  bottom: -18px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #17202c;
  border: 7px solid rgba(255, 255, 255, 0.5);
}

.shape-car::before {
  left: 34px;
}

.shape-car::after {
  right: 34px;
}

.preview-placement,
.preview-signature {
  position: absolute;
  display: inline-flex;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: #17202c;
  font-size: 0.82rem;
  font-weight: 800;
}

.preview-placement {
  top: 14px;
  left: 14px;
}

.preview-signature {
  bottom: 14px;
  right: 14px;
}

.preview-copy {
  display: grid;
  gap: 0.8rem;
  padding: 0.4rem 0.2rem 0.2rem;
}

.brief-list,
.sales-list {
  display: grid;
  gap: 0.65rem;
  margin: 0;
  padding-left: 1.15rem;
  color: var(--muted);
}

.preview-actions,
.sales-banner-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.reference-feature {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  gap: 1rem;
  padding: 1.4rem;
}

.reference-copy {
  display: grid;
  gap: 0.8rem;
}

.reference-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.reference-metrics article {
  display: grid;
  gap: 0.45rem;
  padding: 1rem;
  border-radius: 22px;
  background: rgba(15, 23, 32, 0.05);
}

.reference-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.reference-card {
  overflow: hidden;
}

.reference-card img {
  width: 100%;
  height: 280px;
  display: block;
  object-fit: cover;
}

.reference-card-copy {
  display: grid;
  gap: 0.45rem;
  padding: 1rem 1.1rem 1.25rem;
}

.reference-card-copy span {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: var(--brand);
  font-weight: 800;
}

.reference-stream {
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(15, 23, 32, 0.08);
  background: rgba(255, 253, 249, 0.8);
}

.reference-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  padding: 1rem;
  animation: glide 34s linear infinite;
}

.reference-track img {
  width: 240px;
  height: 160px;
  border-radius: 18px;
  object-fit: cover;
  display: block;
}

.sales-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.sales-card {
  display: grid;
  gap: 0.9rem;
  padding: 1.5rem;
}

.sales-card-strong {
  background:
    linear-gradient(180deg, rgba(23, 32, 44, 0.98), rgba(23, 32, 44, 0.92)),
    rgba(255, 253, 249, 0.88);
  color: white;
}

.sales-card-strong p,
.sales-card-strong .sales-note {
  color: rgba(255, 255, 255, 0.74);
}

.sales-card a {
  width: fit-content;
  color: inherit;
  font-weight: 800;
  text-decoration: none;
}

.sales-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1.5rem 1.6rem;
  background:
    radial-gradient(circle at top right, rgba(240, 90, 55, 0.18), transparent 34%),
    rgba(255, 253, 249, 0.88);
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(240, 90, 55, 0.1);
  color: var(--brand);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@keyframes glide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 1180px) {
  .hero-panel,
  .intro-band,
  .studio-layout,
  .reference-feature,
  .sales-banner {
    grid-template-columns: 1fr;
  }

  .services-grid,
  .reference-grid,
  .sales-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .preview-panel {
    position: static;
  }

  .hero-copy h1 {
    max-width: 13ch;
  }
}

@media (max-width: 900px) {
  .hero-stats,
  .intro-points,
  .product-tabs,
  .option-grid,
  .reference-metrics {
    grid-template-columns: 1fr;
  }

  .services-grid,
  .reference-grid,
  .sales-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy,
  .hero-stage-main,
  .intro-band,
  .service-card,
  .process-card,
  .option-card,
  .preview-panel,
  .reference-feature,
  .sales-card,
  .sales-banner {
    border-radius: 24px;
  }

  .hero-copy {
    padding: 1.6rem;
  }

  .hero-stage-overlay {
    left: 0.9rem;
    right: 0.9rem;
    bottom: 0.9rem;
  }

  .hero-image {
    min-height: 420px;
  }
}

@media (max-width: 640px) {
  .home-page {
    width: min(100vw - 20px, 100%);
    padding-bottom: 4rem;
  }

  .hero-copy h1 {
    font-size: 2.35rem;
  }

  .hero-actions,
  .preview-actions,
  .sales-banner-actions {
    flex-direction: column;
  }

  .product-tab,
  .option-card,
  .service-card,
  .process-card,
  .sales-card,
  .sales-banner {
    padding: 1.15rem;
  }

  .reference-track img {
    width: 210px;
    height: 144px;
  }
}
</style>
