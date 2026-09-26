# Estructura del Projecte: Farmàcia de l'Església

Aquesta és la proposta d'arbre de directoris per a la migració de WordPress a Vanilla JS/CSS.

```text
/
├── assets/                 # Recursos estàtics
│   ├── img/                # Imatges (logos, serveis, hero)
│   ├── icons/              # Icones (svg preferred)
│   └── fonts/              # Tipografies locals (si calen)
├── css/                    # Estils pur i dur
│   ├── base.css            # Resets, variables i tipografia
│   ├── layout.css          # Estructura (header, footer, grid)
│   ├── components.css      # Botons, targetes, sliders
│   └── pages/              # Estils específics de pàgines
│       └── home.css
├── js/                     # Lògica Vanilla JS
│   ├── main.js             # Inicialització i globals
│   ├── menu.js             # Control del menú responsive
│   ├── i18n.js             # Sistema simple multidioma (ES/CA)
│   └── components/         # Lògica de components (slider, etc.)
├── locales/                # Fitxers de traducció
│   ├── ca.json
│   └── es.json
├── partials/               # Trossos d'HTML reutilitzables (opcional si usem JS per carregar)
│   ├── header.html
│   └── footer.html
├── index.html              # Pàgina principal (Home)
├── .gitignore              # Ignorar node_modules, .DS_Store, etc.
└── README.md
```

## Seccions Identificades a l'Original
1. **Header Top:** Contacte (WhatsApp, Telèfon), Adreça, Xarxes Socials i Selector d'Idioma.
2. **Navbar:** Navegació principal (Qui som, Serveis, Targeta, etc.).
3. **Hero Slider:** Horari 365 dies (8h-22h) i CTA WhatsApp.
4. **Grid de Serveis:** 10 serveis farmacèutics destacats amb imatge i títol.
5. **Secció "Treballa amb nosaltres":** Crida a l'acció per enviar el CV.
6. **Footer:** (Pendent de completar l'anàlisi de la part final del txt).

## Passos a seguir
1. [ ] Configurar el sistema de variables CSS (colors verds de farmàcia, tipografies).
2. [ ] Crear el Header i Navbar totalment responsive sense llibreries.
3. [ ] Implementar el sistema multidioma (CA/ES) amb un fitxer JSON.
4. [ ] Maquetar la Home seguint el disseny original però amb codi net.
