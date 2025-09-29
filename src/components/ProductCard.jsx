export default function ProductCard({ card }) {


    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={card.img} alt="" />
                    <h3>{card.text}</h3>
                </div>
            </div>
        </>
    )
}