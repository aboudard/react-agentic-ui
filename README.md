# Agentic Movies - Version 1

## Objectif

Cette application constitue la première étape d'un parcours d'apprentissage autour des interfaces agentiques.

À ce stade, l'application ne contient :

- aucun LLM ;
- aucun framework d'agents ;
- aucun composant CopilotKit ;
- aucun protocole AG-UI ;
- aucune interface A2UI.

L'objectif est uniquement de comprendre les responsabilités de chaque couche de l'application.

---

## Architecture

```text
Utilisateur
    ↓
Chat React
    ↓
API Next.js
    ↓
movieAgent()
    ↓
Réponse JSON
    ↓
Composants React
```

---

## Principe

L'utilisateur saisit un message.

Exemple :

```text
Je cherche un film de science-fiction
```

Le frontend appelle une API Next.js :

```text
POST /api/copilotkit
```

Cette API invoque un agent simplifié :

```typescript
movieAgent(message)
```

L'agent retourne une réponse au format JSON :

```json
{
  "text": "Voici quelques films de science-fiction.",
  "movies": [
    {
      "id": 1,
      "title": "Interstellar",
      "year": 2014
    }
  ]
}
```

Le frontend affiche ensuite ces données à l'aide de composants React.

---

## Responsabilités

### React

Responsable de :

- l'affichage ;
- la saisie utilisateur ;
- le rendu des composants.

Ne contient aucune logique métier.

---

### API Next.js

Responsable de :

- recevoir les requêtes ;
- appeler l'agent ;
- retourner la réponse.

Ne décide jamais du contenu de la réponse.

---

### Agent

Responsable de :

- analyser la demande utilisateur ;
- appliquer les règles métier ;
- construire la réponse.

Toute l'intelligence de l'application se trouve dans cette couche.

---

## Structure du projet

```text
app/
├── api/
│   └── copilotkit/
│       └── route.ts
│
├── layout.tsx
└── page.tsx

agents/
└── movie-agent.ts

components/
├── chat.tsx
└── movie-card.tsx
```

---

## Installation

```bash
npm install
```

---

## Lancement

```bash
npm run dev
```

Application disponible sur :

```text
http://localhost:3000
```

---

## Ce que nous avons appris

Nous avons validé le découplage entre :

```text
Interface utilisateur
       ≠
Logique agentique
```

L'agent décide :

```text
Quels films proposer
```

React décide :

```text
Comment les afficher
```

---

## Limites de cette version

Cette implémentation ne démontre pas encore :

- CopilotKit ;
- AG-UI ;
- A2UI ;
- les agents basés sur LLM ;
- le streaming ;
- les Generative UI.

Le rendu des cartes de films est entièrement codé côté React.

---

## Objectifs de la version 2

Introduire :

```text
React
    ↓
CopilotKit
    ↓
Copilot Runtime
    ↓
movieAgent
```

afin de comprendre :

- le rôle réel de CopilotKit ;
- le protocole AG-UI ;
- le découplage entre frontend et backend agentique.

---

## Objectifs de la version 3

Remplacer la réponse métier :

```json
{
  "movies": [...]
}
```

par une description UI déclarative :

```text
A2UI
```

afin que l'interface soit générée par l'agent lui-même.

À partir de cette version, l'utilisateur ne naviguera plus dans l'interface : l'interface s'adaptera à son intention.