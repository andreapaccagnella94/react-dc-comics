import AppLogo from "./AppLogo";


export default function AppHeader() {

    const menu = [
        {
            id: 1,
            text: 'CHARACTERS',
            link: '#',
            is_active: false
        },
        {
            id: 2,
            text: 'COMICS',
            link: '#',
            is_active: true
        },
        {
            id: 3,
            text: 'MOVIES',
            link: '#',
            is_active: false
        },
        {
            id: 1,
            text: 'TV',
            link: '#',
            is_active: false
        }
    ]

    return (
        <>
            <header>
                <div className="container">

                    <AppLogo />
                    <nav>
                        {/* <a href="">CHARACTERS</a>
                        <a href="" className="active">COMICS</a>
                        <a href="">MOVIES</a>
                        <a href="">TV</a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a> */}
                        {menu.map(item => <a href={item.link} key={item.id} className={item.is_active && 'active'}>{item.text}</a>)}
                    </nav>
                </div>
            </header>
        </>
    )
}