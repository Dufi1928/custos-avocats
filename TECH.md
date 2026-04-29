# SPÉCIFICATIONS TECHNIQUES — PORTFOLIO STUDIO ÉLITE
## Stack : Astro + GSAP + CSS Natif (Zero-JS hydration)

> **Philosophie Technique :** Performance brute et contrôle total. Le site doit être ultra-rapide (Lighthouse 100) tout en offrant une expérience visuelle cinématique lourde en animations.

---

## 1 — STACK & ARCHITECTURE (DÉCISIONS ARRÊTÉES)

### A. Core : Astro 5.0+
- **Island Architecture :** Zéro JavaScript expédié au client par défaut. Seuls les composants interactifs (ex: menu mobile, curseur custom) sont hydratés.
- **Content Collections :** Utilisation stricte de `src/content/` avec schémas **Zod** pour garantir l'intégrité des données de projets.

### B. Styling : CSS Natif & Custom Properties
- **Refus de Tailwind :** Pour préserver l'expressivité de la DA (opacités précises, mix-blend-mode), utilisation du CSS natif avec nesting.
- **Single Source of Truth :** Toutes les variables issues de `[DA.md](http://DA.md)` résident dans `src/styles/tokens.css`.

### C. Motion : GSAP (GreenSock)
- **Direct DOM Manipulation :** GSAP est utilisé via des balises `<script>` dans les composants Astro pour éviter la surcharge de frameworks tiers.
- **ScrollTrigger :** Standard pour toutes les entrées cinématiques et effets de parallaxe.

---

## 2 — STRUCTURE DES FICHIERS CRITIQUES

| Fichier | Rôle | Contrainte |
|---|---|---|
| `src/styles/tokens.css` | Design Tokens | Contient l'intégralité des variables de `[DA.md](http://DA.md)`. |
| `src/content/config.ts` | Schémas Zod | Typage fort pour les projets (title, year, slug, cover). |
| `src/layouts/Base.astro` | Template Maître | Gère le SEO, les Fonts et le `<slot />` global. |

---

## 3 — RÈGLES D'INGÉNIERIE (POO & DESIGN PATTERNS)

### A. Modularité & Composants
- Chaque îlot (Island) interactif doit être encapsulé.
- Utilisation du **Module Pattern** en TypeScript pour les scripts d'animation afin de ne pas polluer le scope global.

### B. Gestion des Médias
- **Images :** Utilisation du composant `<Image />` d'Astro pour la génération automatique des formats `.webp` et `.avif`.
- **Performance :** L'attribut `loading="eager"` est réservé uniquement au LCP (image de héros), le reste est en `lazy`.

---

## 4 — INSTRUCTIONS POUR CLAUDE CODE (RÉSUMÉ)

1. **Typage :** Aucun `any`. Utilise les interfaces générées par Astro pour les entrées de collection.
2. **Animations :** Favorise `gsap.timeline()` pour les séquences d'entrée afin de garantir que les éléments s'affichent de manière ordonnée et fluide.
3. **Sémantique :** Utilise les balises HTML5 appropriées pour le SEO ([Schema.org](http://Schema.org) / JSON-LD pour la fiche "Person").
4. **Maintenance :** Si une logique JS est répétée dans plusieurs composants Astro, crée un fichier utilitaire dans `src/utils/`.

---

## 5 — CHECKLIST DE VALIDATION TECHNIQUE

- [ ] Lighthouse score : 100/100/100/100.
- [ ] Zéro erreur TypeScript au `astro check`.
- [ ] Transitions de pages fluides (View Transitions API si pertinent).
- [ ] Contraste des couleurs validé WCAG AA (≥ 4.5:1 texte normal, ≥ 3:1 grand texte).

### Règles de performance (décisions arrêtées)

- **GSAP** : auto-hébergé dans `/public/js/` (pas de CDN), chargé avec `defer` — élimine 2700ms de blocage CDN.
- **Fonts** : auto-hébergées via `@fontsource` (packages npm), importées dans `Base.astro` — supprime la chaîne Google Fonts.
- **Design tokens** : inlinés dans `<style is:inline>` dans `Base.astro` — supprime la requête HTTP bloquante `tokens.css`.
- **Hero above-fold** : animations CSS pures (`@keyframes`) — GSAP réservé aux éléments scroll-triggered below-fold uniquement. Ne pas remettre de GSAP sur le hero (LCP régresserait).
- **Opacité initiale `opacity: 0`** : autorisée uniquement pour les éléments GSAP scroll-triggered (below-fold). Jamais sur les éléments above-fold — les animations CSS utilisent `animation-fill-mode: both` avec délai.

### Contrastes accessibilité (seuils WCAG AA calculés, non négociables)

| Texte | Fond | Opacité minimale | Ratio |
|---|---|---|---|
| `--beton` nav/labels | `--noir` | `0.65` | 5.49:1 |
| `--beton` footer | `--noir` | `0.65` | 5.49:1 |
| `--ambre` eyebrows | `--noir` | `0.85` | 5.37:1 |

---

## 6 — WORKFLOW GIT (RÈGLES OBLIGATOIRES)

### A. Commit & Push automatique après chaque modification

Après **chaque modification de fichier**, Claude Code exécute systématiquement la séquence suivante :

```bash
git add .
git commit -m "<message>"
git push
```

Aucune modification ne reste en état non-committé. Chaque changement est poussé immédiatement.

---

### B. Format des messages de commit

Les messages suivent la convention **Conventional Commits**, rédigés en anglais, à la troisième personne ou à l'infinitif. Ils décrivent ce qui a changé dans le code — jamais qui ou quoi l'a produit.

**Structure :**
```
<type>(<scope>): <description courte>
```

**Types autorisés :**

| Type | Usage |
|---|---|
| `feat` | Ajout d'une nouvelle fonctionnalité ou section |
| `fix` | Correction d'un bug ou d'un comportement incorrect |
| `style` | Modification visuelle ou CSS sans impact fonctionnel |
| `refactor` | Restructuration du code sans changement de comportement |
| `perf` | Optimisation de performance |
| `chore` | Mise à jour de config, dépendances, fichiers non-source |
| `docs` | Modification de documentation ou commentaires |

**Exemples de messages corrects :**
```
feat(hero): add scroll-triggered entrance animation
fix(nav): correct contrast ratio on mobile overlay
style(tokens): update amber variable to match DA specs
perf(images): switch hero to avif format for LCP gain
refactor(cursor): extract logic to utils/cursor.ts
chore(deps): update gsap to 3.12.5
```

---

### C. Règles absolues sur le contenu des commits

- **Zéro mention d'outil, d'auteur ou de processus** dans les messages. Ni "Claude", ni "AI", ni "generated", ni "automated", ni "assistant", ni aucun équivalent.
- **Zéro message générique** du type `update files`, `misc changes`, `wip`, `fix stuff`. Chaque message décrit précisément ce qui a changé.
- **Zéro co-author tag** dans le corps du commit (pas de `Co-authored-by:`).
- Le message doit pouvoir être lu dans l'historique Git par n'importe quel développeur et paraître naturel, neutre, professionnel.

---

### D. Cas particuliers

- **Modification de plusieurs fichiers liés** (ex: un composant + son CSS) : un seul commit groupé avec un message qui couvre l'ensemble.
- **Modification de fichiers non liés** : commits séparés, un par contexte logique.
- **Correction immédiate après un commit** : nouveau commit `fix` — ne pas amender le commit précédent (l'historique doit rester lisible).
