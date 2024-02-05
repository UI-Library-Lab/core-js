# Ui Library Core js

# Table of Contents
- [Ui Library Core js](#ui-library-core-js)
- [Overview](#overview)
- [Getting started](#getting-started)
- [Folder Structure](#folder-structure)
## Overview
This is the core layer for js libraries for making main business logics to make and provide theme.<br/>
All the js libraries uses this library for handling same theme creator and theme tokens

## Getting Started
yarn:
```bash
yarn build
```

npm 
```bash
npm run build
```

## Folder Structure
```
.
└── src/
    ├── configs/
    │   ├── protocols.ts
    │   ├── lib-configs.ts
    │   └── constants/
    │       └── default-configs.ts
    ├── theme/
    │   ├── theme-creator.ts
    │   └── theme-creator/
    │       ├── index.ts
    │       ├── default-theme-creator.ts
    │       ├── user-theme-creator.ts
    │       └── theme-factory.ts
    └── index.ts
```