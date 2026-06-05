<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="site-header-inner">
        <RouterLink class="brand" :to="{ name: 'home' }" aria-label="TShirt-Willy Startseite">
          <span class="brand-mark">
            <img src="https://cdn-proxy.hoststudios.de/willy_logo.png" alt="TShirt-Willy Logo" />
          </span>
          <span class="brand-copy">
            <strong>TShirt-Willy</strong>
            <small>Textildruck, Merchandise und Branding</small>
          </span>
        </RouterLink>

        <nav class="main-nav" aria-label="Hauptnavigation">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav-link"
            type="button"
            @click="openSection(item.id)"
          >
            {{ item.label }}
          </button>
        </nav>

        <button class="btn btn-primary header-cta" type="button" @click="openSection('vertrieb')">
          Projekt anfragen
        </button>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="site-footer-inner">
        <div class="footer-brand">
          <strong>TShirt-Willy</strong>
          <p>
            Professionelle Veredelung fuer T-Shirts, Hoodies, Tassen, Fahrzeugdesigns
            und individuelle Markenauftritte.
          </p>
        </div>

        <div class="footer-links">
          <button type="button" class="footer-link" @click="openSection('leistungen')">
            Leistungen
          </button>
          <button type="button" class="footer-link" @click="openSection('konfigurator')">
            Konfigurator
          </button>
          <button type="button" class="footer-link" @click="openSection('referenzen')">
            Referenzen
          </button>
          <button type="button" class="footer-link" @click="openSection('vertrieb')">
            Vertrieb
          </button>
        </div>

        <div class="footer-meta">
          <span>&copy; {{ year }} TShirt-Willy</span>
          <span>Made for starke Marken, Teams und Serienproduktion.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navItems = [
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'konfigurator', label: 'Konfigurator' },
  { id: 'referenzen', label: 'Referenzen' },
  { id: 'vertrieb', label: 'Vertrieb' },
]

const year = new Date().getFullYear()

async function openSection(sectionId) {
  if (route.name !== 'home') {
    await router.push({ name: 'home', query: { section: sectionId } })
    return
  }

  const target = document.getElementById(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
