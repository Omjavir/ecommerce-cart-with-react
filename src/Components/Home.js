import Filters from './Filters'
import Footer from './Footer'
import Products from './Products'

const Home = () => {

    return (
        // <div style={{ display: 'flex' }}>
        <div style={{ justifyContent: 'center' }}>
            {/* <Filters /> */}
            <Products />
            <Footer />
        </div>
    )
}

export default Home