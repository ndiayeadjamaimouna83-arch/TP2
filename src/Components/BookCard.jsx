export default function BookCard({ titre, auteur, estDisponible, onClikEmprunt }) {
    return (
        <div style={{
            border: "1px solid black",
            padding: "16px",
            borderRadius: "8px"
            
        }}>
            <h2> {titre} </h2>
            <p>{auteur} </p>
            <p>{estDisponible ? "🟢 Disponible" : "🔴Emprunté"}</p>
            <button onClick={onClikEmprunt}>{estDisponible ? "Emprunter" : "Rendre"}</button>
        </div>

    )
}