import ProductCard from "./ProductCard"

export default function MainSection({ cards }) {

    return (
        <section>
            <div className="container">
                <div className="row">
                    {cards.map(card => (
                        <ProductCard card={card} key={card.id} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}