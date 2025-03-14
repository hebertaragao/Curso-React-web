import './styles.css';
import carImg from '../../assets/car.png';

export default function Card() {
    return (
        <div className="d-card">
            <h2>Venha nos visitar</h2>
            <img src={carImg} alt="Carro" />
            <h3>Audi Supra TT</h3>
            <p>Lorem ipsum dolor</p>
        </div>
    );
}