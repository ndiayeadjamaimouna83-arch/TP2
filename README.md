# React + Vite


## create projet

npm create vite@latest 001
j'ai choisie : framework 'React',Variante 'javascript',linter 'Esint'. 
## BookCard.jsx
nous devont développer une petite application de gestion de catalogue de livres pour 
une bibliothèque universitaire.
## App.jsx
1-useState([...]) renvoie deux choses : books (la valeur actuelle) et setBooks (la fonction pour la modifier).
2-nbDisponibles n’a pas besoin d’être un état, Il est recalculé à chaque affichage à partir de books, donc il reste toujours à jour (en temps réel).
3-key={book.id} : React s’en sert pour identifier chaque carte. Il doit être unique.
4-DANS onClickEmprunt :
on ne modifie jamais books directement : on crée un nouveau tableau avec .map()
{ ...book, estDisponible: !book.estDisponible } copie le livre en inversant seulement sa disponibilité (! inverse un booléen)
setBooks(...) demande à React de rafraîchir l’affichage
A-La fonction de soumission :
1-e.preventDefault() empêche le rechargement de la page.
2-[...books, nouveauLivre] crée un nouveau tableau avec tous les anciens livres plus le nouveau.
3-Date.now() donne un id unique.
4-setTitre("") et setAuteur("") vident les champs.



