import './App.css';
import './Searchikonica.css'

function Kartica(dataContent, slika, Linija) {
  return (
    <div class="card" dataContent="{dataContent}">
        <img src={slika} class = "KartaSlika" alt="city"/>
            <div class="card-body">
                <span class="tag tag-pink">Polasci</span>
                <h4>
                <u>{Linija}</u>
                </h4>
                <p>
                Istražite najbrže...
                </p>
            <a href = "Sljedeca.html"><button class = "dugmadi">Provjeri</button></a>
        </div>
    </div>
  );
}

export default Kartica;
