import ProductCard from "./ProductCard"
import img_1 from "../assets/img/buy-comics-digital-comics.png"



export default function AppMain() {

    const title = '--> Content goes here <--'

    const cards = [
        {
            id: 1,
            text: 'DIGITAL COMICS',
            img: img_1
        }
    ]

    return (
        <main>
            <div className="container">
                <h1>{title}</h1>
                {/* <h1 style={{ textAlign: 'center' }}>{title}</h1> */}
            </div>

            <section>

                <div className="container">
                    <div className="row">
                        {cards.map(card => (
                            <div className="col" key={card.id} >
                                <ProductCard name={card.text} image={card.img} />
                            </div>

                        ))
                        }



                    </div>
                </div>

            </section>



        </main>
    )
}