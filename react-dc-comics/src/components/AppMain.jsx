import ProductCard from "./ProductCard"
import img_1 from "../assets/img/buy-comics-digital-comics.png"
import img_2 from "../assets/img/buy-comics-merchandise.png"
import img_3 from "../assets/img/buy-comics-subscriptions.png"
import img_4 from "../assets/img/buy-comics-shop-locator.png"
import img_5 from "../assets/img/buy-dc-power-visa.svg"


export default function AppMain() {

    const title = '--> Content goes here <--'

    const cards = [
        {
            id: 1,
            text: 'DIGITAL COMICS',
            img: img_1
        },
        {
            id: 2,
            text: 'DC MERCHANDISE',
            img: img_2
        },
        {
            id: 3,
            text: 'SUBSCRIPTION',
            img: img_3
        },
        {
            id: 4,
            text: 'COMIC SHOP LOCATOR',
            img: img_4
        },
        {
            id: 5,
            text: 'DC POWER VISA',
            img: img_5
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