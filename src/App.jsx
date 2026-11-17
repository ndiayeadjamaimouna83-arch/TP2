import { useState } from "react"
import BookCard from "./Components/BookCard"

function App() {
  const [titre, setTitre] = useState("")
 const [auteur, setAuteur] = useState("")
  const[books, setBooks]  = useState([
    { id: 1, titre: "Chambre 7", auteur: "Fatou Dieng", estDisponible: true },
    { id: 2, titre: "La sagesse expliquée a ceux qui le cherchent", auteur: "Frédric Lenoir", estDisponible: false },
    { id: 3, titre: "La chévre de ma mére", auteur: "Ricardo Kaniama", estDisponible: true },
    { id: 4, titre: "Une si longue lettre ", auteur: "Mariama Ba", estDisponible: true }

  ])
  const handleSubmit = (e) => {
  e.preventDefault()

  if (titre.trim() === "" || auteur.trim() === "") return

  const nouveauLivre = {
    id: Date.now(),
    titre: titre,
    auteur: auteur,
    estDisponible: true
  }

  setBooks([...books, nouveauLivre])
  setTitre("")
  setAuteur("")
}
  const onClickEmprunt = (bookId) => {
  setBooks(books.map(book =>
    book.id === bookId
      ? { ...book, estDisponible: !book.estDisponible }
      : book
  ))
}
  const nbDisponibles = books.filter(b => b.estDisponible).length
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blibliotheque : {nbDisponibles}livres disponibles</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
  <input
    type="text"
    placeholder="Titre"
    value={titre}
    onChange={(e) => setTitre(e.target.value)}
  />
  <input
    type="text"
    placeholder="Auteur"
    value={auteur}
    onChange={(e) => setAuteur(e.target.value)}
  />
  <button type="submit">Ajouter</button>
</form>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} >
        
        {
          books.map((book)=> ( 
            <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
            

          ))
        }

      </div>
    </div>

  )


} export default App