export default function ProductCard({ cards }) {


    return (
        <>
            <div className="card">
                <img src={cards.image} alt="" />
                <h3>{cards.name}</h3>
            </div>
        </>
    )
}