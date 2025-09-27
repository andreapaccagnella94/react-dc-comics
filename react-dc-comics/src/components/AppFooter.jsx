import footerLogo from "../assets/img/dc-logo-bg.png"
export default function AppFooter() {

    const footer_menu = [
        {
            id: 1,
            title: 'DC COMICS',
            list: [
                {
                    id: 1,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 2,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 3,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 4,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 5,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 6,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 7,
                    text: 'Il pastificio',
                    link: '#'
                }
            ]
        },
        {
            id: 2,
            title: 'SHOP',
            list: [
                {
                    id: 1,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 2,
                    text: 'Il pastificio',
                    link: '#'
                }
            ]
        },
        {
            id: 3,
            title: 'DC',
            list: [
                {
                    id: 1,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 2,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 3,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 4,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 5,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 6,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 7,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 8,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 9,
                    text: 'Il pastificio',
                    link: '#'
                },
            ]

        },
        {
            id: 4,
            title: 'SITES',
            list: [
                {
                    id: 1,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 2,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 3,
                    text: 'Il pastificio',
                    link: '#'
                },
                {
                    id: 4,
                    text: 'Il pastificio',
                    link: '#'
                }

            ]
        }
    ]
    return (
        <footer>

            <div className="container">
                <div className="links">

                    <div className="row">
                        <div className="col">
                            <div className="row-rev">

                                {footer_menu.map(menu => (

                                    <div className="col" key={menu.id}>
                                        <h3>{menu.title}</h3>
                                        <ul>
                                            {menu.list.map(list_item => (

                                                <li key={list_item.id}>
                                                    <a href={list_item.link}>{list_item.text}</a>
                                                </li>
                                            ))

                                            }

                                        </ul>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="col">
                            <img src={footerLogo} alt="" />
                        </div>
                    </div>

                    {/* <div className="col">
                        <h3>Pastificio</h3>
                        <ul>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Products</h3>
                        <ul>
                            <li>
                                <a href="">Le Classiche</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                            <li>
                                <a href="">il Pastificio</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="sing-up">

                </div>
            </div>

        </footer>
    )
}