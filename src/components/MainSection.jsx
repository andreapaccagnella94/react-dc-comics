import ProductCard from "./ProductCard"

export default function MainSection({ cards }) {

    return (
        <section>
            <div className="container">
                <div className="row">
                    {cards.map(card => (
                        <div className="col" key={card.id} >
                            console.log(cards);

                            {/* <ProductCard cards={cards} /> */}
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}