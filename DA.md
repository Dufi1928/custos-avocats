# DIRECTION ARTISTIQUE — CUSTOS AVOCATS
## Palette : Noir / Blanc / Gris / Vert

> **Philosophie DA :** Haut de gamme, sobre, autoritaire. Le site doit inspirer confiance et compétence au premier regard. Aucun effet décoratif gratuit — chaque choix visuel est fonctionnel.

---

## 1 — PALETTE DE COULEURS

| Token | Valeur | Usage |
|---|---|---|
| `--noir` | `#0a0b0a` | Fond principal, arrière-plans |
| `--blanc` | `#f4f5f2` | Texte principal, titres |
| `--gris` | `#7a7d78` | Texte secondaire, métadonnées |
| `--gris-clair` | `#c8cac4` | Corps de texte, labels, sous-titres |
| `--vert` | `#2d6a4a` | Accent principal, CTA, bordures actives |
| `--vert-vif` | `#3a8a60` | Hover states, surbrillance |

### Rationale
- **Noir profond** (#0a0b0a) : légèrement teinté vert pour une cohérence chromatique avec l'accent.
- **Blanc cassé** (#f4f5f2) : évite la fatigue visuelle du blanc pur sur fond noir.
- **Vert forêt** (#2d6a4a) : évoque la justice, la rigueur, la nature. Sobre et distinctif — loin des verts criards.

---

## 2 — TYPOGRAPHIE

> À définir. Pistes recommandées :
> - **Titres :** Police à empattement (serif) pour l'autorité — ex. *Playfair Display*, *Cormorant Garamond*.
> - **Corps :** Sans-serif neutre et lisible — ex. *Inter*, *DM Sans*.
> - **Provisoire :** `system-ui, -apple-system, sans-serif`

---

## 3 — ESPACEMENTS & GÉOMÉTRIE

| Token | Valeur | Usage |
|---|---|---|
| `--max-width` | `1100px` | Largeur maximale du contenu |
| `--gap` | `1.5rem` | Espacement de référence |
| `--radius` | `3px` | Rayon des coins — volontairement minimal (sobriété) |

---

## 4 — PRINCIPES VISUELS

- **Densité maîtrisée :** Beaucoup d'espace vide. Le contenu respire.
- **Hiérarchie stricte :** H1 imposant, corps discret, accents verts rares et précis.
- **Pas de gradients** : les surfaces sont monochrones. La profondeur vient des contrastes et opacités.
- **Bordures fines** : `1px solid rgba(255,255,255,0.08)` pour les séparations — presque invisibles.
- **Hover discret** : transitions `0.2s ease`, jamais de changement brutal.

---

## 5 — CONTRASTES WCAG AA (à valider)

| Texte | Fond | Ratio cible |
|---|---|---|
| `--blanc` sur `--noir` | — | ≥ 4.5:1 |
| `--gris-clair` sur `--noir` | — | ≥ 4.5:1 |
| `--vert-vif` sur `--noir` | — | ≥ 3:1 (grand texte) |

---

## 6 — À DÉFINIR

- [ ] Choix typographique définitif (titres + corps)
- [ ] Valeurs exactes de `--vert` et `--vert-vif` après validation contraste WCAG
- [ ] Comportement des animations d'entrée (GSAP scroll-triggered)
- [ ] Traitement visuel du Hero (full-screen ? demi-hauteur ?)
- [ ] Iconographie (SVG custom ou système d'icônes ?)
