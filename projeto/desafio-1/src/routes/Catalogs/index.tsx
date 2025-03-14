import './styles.css';
import Header from "../../Components/Header"
import Card from '../../Components/Card';
import CardComment from '../../Components/CardComment';


export default function Catalog() {
    return (
        <>
            <Header />
            <main className="d-catalog-main">
                <section id="d-catalog-section" className="d-container">
                    <div className="d-catalog-cards-container">
                        <Card />
                        <Card />
                    </div>

                </section>
                <CardComment />
                <section id="d-CardComment" className="d-cardcomment-container">
                    <div className="d-comment">
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                    </div>

                </section>
            </main>
        </>

    );
}