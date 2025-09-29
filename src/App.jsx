import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
/* Centralizatio: Import the data */
import menu from './assets/data/HeaderMenu'
import cards from './assets/data/MainCard'
import footer_menu from './assets/data/FooterMenu'


function App() {

  return (
    <>
      <AppHeader menu={menu} />
      <AppMain cards={cards} />
      <AppFooter menu={footer_menu} />
    </>
  )
}

export default App
