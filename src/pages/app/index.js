import Footer from '../../components/App/Footer';
import Hero from '../../components/App/Hero';
import Navbar from '../../components/App/Navbar';
import ContactSales from '../../components/App/Section/ContactSales';
import Features from '../../components/App/Section/Features';
import Price from '../../components/App/Section/Price';
import Report from '../../components/App/Section/Report';
import Sales from '../../components/App/Section/Sales';
import Testimonials from '../../components/App/Section/Testimonials';
import Styles from './app.module.css'

const App = () => (
    <div className={ Styles.App }>
       <Navbar className={ Styles.Navbar }/>
        <div className={ Styles.hero }>
            <Hero/>
        </div>
        <section className={ Styles.testimonials }>
            <Testimonials/>
        </section>
        <section className={ Styles.sales }>
            <Sales/>
        </section>
        <section className={ Styles.report }>
            <Report/>
        </section>
        <div className={ Styles.features }>
            <Features/>
        </div>
        <div className={ Styles.price }>
            <Price/>
        </div>
        <div className={ Styles.contact }>
            <ContactSales/>
        </div>
        <footer className={ Styles.footer }>
            <Footer/>
        </footer>
    </div>
)

export default App;