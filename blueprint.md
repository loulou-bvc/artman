# Blueprint : Site Vitrine ARTMAN

## Vue d'ensemble

Ce projet est un site vitrine d'une page (one-page) pour ARTMAN, une entreprise de rénovation intérieure. L'objectif est de présenter les services, les réalisations et de faciliter la prise de contact via un design moderne, épuré et professionnel.

---

## Design & Style

Le design a été entièrement repensé pour un look & feel "2025", en utilisant un thème sombre, des animations fluides et une typographie soignée.

*   **Palette de couleurs :**
    *   `--background`: #050505 (Noir profond)
    *   `--background-secondary`: #111111 (Gris foncé pour les cartes)
    *   `--text-primary`: #f1f1f1 (Blanc cassé)
    *   `--text-secondary`: #a1a1a1 (Gris clair)
    *   `--accent`: #32ff8a (Vert menthe vif)
    *   `--border`: rgba(255, 255, 255, 0.08) (Bordure blanche transparente)
    *   `--shadow`: rgba(4, 255, 138, 0.2) (Ombre portée verte)

*   **Typographie :**
    *   Titres (logo) : 'Anta', sans-serif
    *   Texte courant : 'Inter', sans-serif

*   **Composants clés :**
    *   **Header flottant :** Une barre de navigation fixe avec un effet de verre dépoli (`backdrop-filter: blur(10px)`).
    *   **Cartes (Services, Réalisations) :** Fond sombre, bordures subtiles, et effet de lévitation au survol.
    *   **Boutons :** Effet de lueur et de transformation au survol pour inciter à l'action.

---

## Structure & Sections

Le site est composé des sections suivantes dans `index.html`:

1.  **`<header class="main-header">`**
    *   Contient le logo, la navigation principale (`.main-nav`) et un bouton pour le menu mobile (`.mobile-nav-toggle`).
    *   La navigation est responsive et se transforme en superposition plein écran sur mobile.

2.  **`<section class="hero">`**
    *   Titre principal (`h1`), sous-titre, et deux boutons d'appel à l'action ("Demander un devis", "Nos réalisations").

3.  **`<section id="services" class="services-section">`**
    *   Nouvelle mise en page de type "liste" avec une présentation alternée.
    *   Chaque service est un lien (`<a class="service-item">`).
    *   Mise en page en grille avec le texte (`.service-text`) et l'image (`.service-image`) côte à côte.
    *   La classe `.alt` inverse l'ordre de l'image et du texte pour un affichage dynamique.
    *   Des séparateurs (`.divider`) sont placés entre chaque service.

4.  **`<section id="realisations" class="realisations">`**
    *   Titre de la section.
    *   Grille (`.realisations-grid`) de trois cartes (`.realisation-card`) avec des images de projets et un titre en superposition.
    *   Les images sont des placeholders de haute qualité.

5.  **`<section id="contact" class="contact">`**
    *   Titre et paragraphe d'introduction.
    *   Un formulaire de contact (`.contact-form`) avec les champs : nom, email, message, et un bouton d'envoi.

6.  **`<footer class="footer">`**
    *   Contient le logo, le copyright avec l'année dynamique, et un lien vers les mentions légales.

---

## Fonctionnalités JavaScript (`main.js`)

*   **Animations au défilement :** Utilise `IntersectionObserver` pour ajouter une classe `.visible` aux sections lorsqu'elles entrent dans le champ de vision, créant un effet d'apparition en fondu.
*   **Navigation mobile :** Le clic sur `.mobile-nav-toggle` ajoute/supprime la classe `.nav-open` sur le header pour afficher/masquer le menu en plein écran.
*   **Année dynamique :** Met à jour automatiquement l'année dans le footer.

---

## Plan Actuel

**Statut : Terminé.**

La section "Services" a été entièrement repensée selon la nouvelle structure demandée, avec une mise en page alternée image/texte. Le reste du site conserve le design moderne précédemment établi.
