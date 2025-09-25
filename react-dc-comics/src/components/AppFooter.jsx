export default function AppFooter() {

    const footer_menu = [
        {
            id: 1,
            title: 'Pasticifio',
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
                }
            ]
        },
        {
            id: 2,
            title: 'Products',
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
                }
            ]
        }

    ]
    return (
        <footer>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>ci andrebbe il logo</p>
                    </div>
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

        </footer>
    )
}