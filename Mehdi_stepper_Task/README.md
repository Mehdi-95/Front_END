# GuiU - Guichet Unique Application

## Développeur
Cette application a été développée avec expertise par **Mehdi Bukhari**, un développeur front-end talentueux spécialisé dans la création d'interfaces utilisateur modernes et intuitives. Mehdi apporte une attention particulière aux détails et une expertise approfondie dans:

- Architecture React moderne
- Design responsive et adaptatif
- Expérience utilisateur optimisée
- Animations fluides et performantes
- Intégration de composants réutilisables
- Gestion efficace des états d'application

Son approche méticuleuse et sa passion pour le développement front-end se reflètent dans chaque aspect de cette application, de la structure du code à l'expérience utilisateur finale.

## Description
GuiU (Guichet Unique) est une application web moderne développée avec React pour la gestion des demandes d'homologation et autres services administratifs. L'application offre une interface utilisateur intuitive avec un système de navigation par étapes (stepper) et un design responsive.

## Technologies Utilisées
- React.js
- Tailwind CSS
- Heroicons
- DiceBear API (pour les avatars)

## Fonctionnalités Principales

### 1. Navigation
- Sidebar responsive et collapsible
- Menu de navigation intuitif
- Indicateurs visuels pour la section active

### 2. Interface Utilisateur
- Design moderne et épuré
- Responsive sur tous les appareils
- Animations fluides
- Thème personnalisé

### 3. Processus d'Homologation en 5 Étapes

#### Étape 1: Généralités
- Informations de base
- Sélection du type de demande
- Détails initiaux

#### Étape 2: Détails de la Demande
- Formulaire détaillé
- Validation des champs
- Options spécifiques selon le type de demande

#### Étape 3: Documents à Attacher
- Upload de documents par drag & drop
- Validation des types de fichiers
- Vérification de la taille des fichiers
- Liste des documents requis

#### Étape 4: Résumé des Informations
- Vue d'ensemble des informations saisies
- Organisation par sections
- Vérification finale

#### Étape 5: Paiement des Frais
- Multiples méthodes de paiement
  - Carte bancaire
  - Virement bancaire
  - Mobile Money
- Détails des frais
- Sécurisation des transactions

## Structure du Projet
```
react-stepper/
├── src/
│   ├── components/
│   │   ├── steps/
│   │   │   ├── Generalites.jsx
│   │   │   ├── DetailsDemandeStep.jsx
│   │   │   ├── DocumentsStep.jsx
│   │   │   ├── ResumeStep.jsx
│   │   │   └── PaiementStep.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StepButton.jsx
│   │   └── Homologations.jsx
│   ├── App.js
│   └── index.js
├── public/
└── package.json
```

## Installation

1. Cloner le repository
```bash
git clone [repository-url]
cd react-stepper
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer l'application en développement
```bash
npm start
```

## Configuration Requise
- Node.js (version 14 ou supérieure)
- npm ou yarn

## Fonctionnalités Responsives
- Layout adaptatif pour mobile, tablet et desktop
- Sidebar collapsible sur mobile
- Grilles responsives pour les formulaires
- Taille de texte adaptative
- Gestion optimisée des images et icônes

## Thème et Personnalisation
L'application utilise un thème personnalisé avec:
- Couleurs principales: bleu (#1D4ED8)
- Texte: gris foncé (#111827)
- Arrière-plan: gris clair (#F9FAFB)
- Accents: vert pour succès, rouge pour erreurs

## Sécurité
- Validation des entrées utilisateur
- Vérification des types de fichiers
- Protection contre les uploads malveillants
- Sécurisation des données sensibles

## Maintenance
Pour maintenir l'application:
1. Mettre à jour régulièrement les dépendances
2. Vérifier les logs pour les erreurs
3. Tester sur différents navigateurs
4. Maintenir la documentation à jour

## Support
Pour toute question ou problème:
- Consulter la documentation
- Contacter le support technique
- Vérifier les issues GitHub

## Contact du Développeur
Pour toute question concernant le développement ou pour des projets similaires, vous pouvez contacter Mehdi Bukhari:

- **Développeur**: Mehdi Bukhari
- **Spécialité**: Développement Front-end
- **Technologies**: React.js, Tailwind CSS, JavaScript moderne
- **Portfolio**: [Votre portfolio]
- **LinkedIn**: [Votre profil LinkedIn]
- **GitHub**: [Votre profil GitHub]
- **Email**: [Votre email professionnel]

## Licence
[Votre licence]

---
Développé avec ❤️ par Mehdi Bukhari pour GuiU
