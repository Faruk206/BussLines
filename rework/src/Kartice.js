import './App.css';
import './Searchikonica.css'

function Kartica(prop) {
  return (
    <div className="card">
        <img src={prop.slika} className = "KartaSlika" alt="city"/>
            <div className="card-body">
                <span className="tag tag-pink">Polasci</span>
                <h2>
                <u>{prop.Linija}</u>
                </h2>
                <p>
                Istražite najbrže...
                </p>
            <a href = "Sljedeca.html"><button className = "dugmadi">Provjeri</button></a>
        </div>
    </div>
  );
}

export default Kartica;
