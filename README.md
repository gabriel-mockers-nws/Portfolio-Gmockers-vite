# Portfolio Gabriel Mockers

Portfolio personnel développé avec React, Vite et TailwindCSS, présentant mes projets et compétences en développement web.

## 🚀 Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite 6.3.4** - Outil de build rapide et serveur de développement
- **TailwindCSS 4.1.5** - Framework CSS utilitaire
- **TypeScript** - Typage statique pour JavaScript
- **Framer Motion 12.10.5** - Animations et transitions fluides
- **React Router 7.2.0** - Navigation côté client
- **EmailJS 4.4.1** - Service d'envoi d'emails
- **Swiper 11.2.6** - Carrousel tactile moderne
- **React Simple Typewriter 5.0.1** - Effet machine à écrire
- **React Responsive Carousel 3.2.23** - Carrousel responsive

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (version 18 ou supérieure)
- **npm** (généralement inclus avec Node.js)

## 🛠️ Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/gabriel-mockers-nws/Portfolio-Gmockers-vite.git
   cd Portfolio-Gmockers-vite
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration des variables d'environnement** (si nécessaire)
   
   Créez un fichier `.env` à la racine du projet pour EmailJS :
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🚀 Scripts disponibles

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur `http://localhost:5173`

### Build de production
```bash
npm run build
```
Génère les fichiers optimisés pour la production dans le dossier `dist/`

### Preview de production
```bash
npm run preview
```
Prévisualise le build de production localement

### Linting
```bash
npm run lint
```
Vérifie la qualité du code avec ESLint

### Déploiement
```bash
npm run deploy
```
Déploie le projet (configuré avec gh-pages)

## 📁 Structure du projet

```
Portfolio-Gmockers-vite/
├── public/                 # Fichiers statiques
├── src/                    # Code source
│   ├── components/         # Composants React
│   ├── pages/             # Pages de l'application
│   ├── assets/            # Images, fonts, etc.
│   ├── styles/            # Fichiers CSS/SCSS
│   └── App.jsx            # Composant principal
├── package.json           # Dépendances et scripts
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration TailwindCSS
├── postcss.config.js      # Configuration PostCSS
└── eslint.config.js       # Configuration ESLint
```

## 🎨 Fonctionnalités

- **Design responsive** adapté à tous les écrans
- **Animations fluides** avec Framer Motion
- **Navigation dynamique** avec React Router
- **Formulaire de contact** fonctionnel avec EmailJS
- **Carrousels interactifs** pour présenter les projets
- **Effet typewriter** pour un impact visuel
- **Code optimisé** avec ESLint et Prettier

## 🌐 Déploiement

Le projet est déployé sur un VPS avec nom de domaine personnalisé.

Pour déployer votre propre version :
1. Buildez le projet : `npm run build`
2. Uploadez le contenu du dossier `dist/` sur votre serveur
3. Configurez votre serveur web pour servir les fichiers statiques

## 🔧 Outils de développement

- **ESLint** - Analyse statique du code
- **Autoprefixer** - Ajout automatique des préfixes CSS
- **PostCSS** - Transformation CSS
- **TypeScript** - Typage statique

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Gabriel Mockers**
- GitHub : [@gabriel-mockers-nws](https://github.com/gabriel-mockers-nws)

---

*Développé avec ❤️ par Gabriel Mockers*