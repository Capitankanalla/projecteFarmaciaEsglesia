# projecteFarmaciaEsglesia

# 🏥 Pharmacy Web Refactor — MVP

Repositori dedicat a la **refactorització i modernització** de la pàgina web actual de la farmàcia (actualment desenvolupada en WordPress). 

L'objectiu principal d'aquest projecte és construir un **MVP (Producte Mínim Viable)** utilitzant tecnologies web estàndard (**HTML5, CSS3, JavaScript ES6+ i control de versions Git**) per millorar dràsticament el rendiment, la velocitat de càrrega i l'experiència d'usuari (UX/UI) abans de presentar la nova proposta al client.

---

## 🎯 Objectius del Projecte

- **Rendiment extrem:** Eliminar el *bloatware*, plugins innecessaris i la carga lenta de WordPress.
- **Prototipatge ràpid:** Crear un MVP interactiu i funcional per validar la nova proposta visual i d'estructura amb el client.
- **Disseny *Mobile-First*:** Assegurar una experiència impecable en dispositius mòbils, la font principal de tràfic per a farmàcies de barri/proximitat.
- **Neteja de codi:** Establir una estructura base sòlida, semàntica i fàcil de mantenir.

---

## 🛠️ Tecnologies Utilitzades

- **HTML5:** Marcador semàntic i accessible (WCAG).
- **CSS3:** Estils moderns utilitzant Flexbox, Grid i Variables CSS (sense *frameworks* pesats inicialment).
- **JavaScript (Vanilla ES6+):** Lògica interactiva lleugera (menús, modals, filtrat de productes/serveis).

---

## 📂 Estructura del Projecte

```text
pharmacy-web-mvp/
├── assets/
│   ├── css/
│   │   ├── main.css          # Estils globals i variables
│   │   └── components/       # Estils modulars (header, footer, cards...)
│   ├── js/
│   │   ├── main.js            # Lògica principal
│   │   └── modules/           # Mòduls JS reutilitzables
│   └── img/                   # Imatges optimitzades, icones i logo
├── pages/                     # Pàgines secundàries (serveis, contacte...)
├── index.html                 # Pàgina principal (Landing MVP)
├── .gitignore
└── README.md

📋 Mòduls de l'MVP (Primera aproximació)
[ ] Capçalera d'Urgència: Horaris, telèfon directe i botó de WhatsApp.

[ ] Hero / Proposta de Valor: Presentació clara de la farmàcia.

[ ] Serveis Destacats: Atenció personalitzada, anàlisis, ortopèdia, etc.

[ ] Ubicació i Horari: Estat en directe (Obert/Tancat) i mapa.

[ ] Contacte / Encàrrecs: Formulari ràpid de reserva o consulta.
