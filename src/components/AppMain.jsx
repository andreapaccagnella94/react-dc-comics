import MainSection from "./MainSection"

export default function AppMain({ cards }) {

    const title = '--> Content goes here <--'


    return (
        <main>
            <div className="container">
                <h1>{title}</h1>
                {/* <h1 style={{ textAlign: 'center' }}>{title}</h1> */}
            </div>

            <MainSection cards={cards} />

        </main>
    )
}