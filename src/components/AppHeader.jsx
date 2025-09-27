import AppLogo from "./AppLogo";
import NavHeader from "./NavHeader";


export default function AppHeader({ menu }) {



    return (
        <>
            <header>
                <div className="container">
                    <AppLogo />
                    <NavHeader menu={menu} />
                </div>
            </header>
        </>
    )
}