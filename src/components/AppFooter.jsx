import footerLogo from "../assets/img/dc-logo-bg.png"
import fbLogo from "../assets/img/footer-facebook.png"
export default function AppFooter({ menu }) {



    const followUs_menu = [
        {
            id: 1,
            text: 'FOLLOW US',
            list: [
                {
                    id: 1,
                    text: 'facebook',
                    img: fbLogo,
                    link: '#',

                },
                {
                    id: 2,
                    text: 'twitter',
                    img: fbLogo,
                    link: '#',

                },
                {
                    id: 3,
                    text: 'MOVIES',
                    img: fbLogo,
                    link: '#',

                },
                {
                    id: 4,
                    text: 'TV',
                    img: fbLogo,
                    link: '#',

                },
                {
                    id: 5,
                    text: 'GAMES',
                    img: fbLogo,
                    link: '#',

                }
            ]
        }
    ];

    return (
        <footer>

            <div className="links">
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="row-rev">

                                {menu.map(menu => (

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
            </div>
            <div className="sing-up">
                <div className="container">

                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            {followUs_menu.map(item => (
                                <div className="follow" key={item.id}>
                                    <h3>{item.text}</h3>

                                    {item.list.map(list_item => (


                                        <a href={list_item.link} key={list_item.id}>
                                            <img src={list_item.img} alt={list_item.text} />
                                        </a>

                                    ))
                                    }

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    )
}