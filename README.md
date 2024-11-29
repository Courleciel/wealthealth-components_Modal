
# Composant Modal - WealthHealth

`wealthealth-components_Modal` est un composant React simple et stylisé pour afficher des popups modales dans vos applications web.

---

## 📦 Installation

Installez le composant via npm :

```bash
npm install wealthealth-components_Modal
```

---

## 🚀 Utilisation

Après l'installation, importez et utilisez le composant dans votre projet :

```javascript
import React, { useState } from 'react';
import Modal from 'wealthealth-components_Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modal</button>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <h2>Contenu de la Modal</h2>
        <p>Ceci est un exemple de contenu pour la modal.</p>
      </Modal>
    </div>
  );
}

export default App;
```

Dans cet exemple, le bouton "Ouvrir la Modal" déclenche l'affichage de la modal avec le contenu spécifié.

---

## ⚙️ Propriétés

Le composant `Modal` accepte les propriétés suivantes :

| Propriété    | Type       | Description                                                                 |
|--------------|------------|-----------------------------------------------------------------------------|
| `show`       | `boolean`  | **Obligatoire**. Contrôle la visibilité de la modal.                        |
| `handleClose`| `function` | **Obligatoire**. Fonction appelée pour fermer la modal.                     |
| `children`   | `node`     | Contenu à afficher à l'intérieur de la modal.                               |

---

## 🎨 Personnalisation

Vous pouvez personnaliser l'apparence de la modal en modifiant les styles CSS associés ou en ajoutant vos propres classes CSS.

---

## 🌟 Fonctionnalités

- **Facile à utiliser** : Intégration simple avec des props claires.
- **Personnalisable** : Styles modifiables pour s'adapter à votre design.
- **Accessible** : Conçu pour être conforme aux normes d'accessibilité.

---

## 🔗 Liens

- **[Dépôt GitHub](https://github.com/Courleciel/wealthealth-components_Modal)**
- **[Package NPM](https://www.npmjs.com/package/@courleciel/modal)**

---

N'hésitez pas à contribuer, soumettre des problèmes ou proposer des améliorations !
