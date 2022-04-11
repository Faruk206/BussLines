import './App.css';
import './Searchikonica.css'
import GornjiVakuf from './Slike/Gornji_Vakuf.jpeg'
import NoviTravnik from './Slike/NoviTravnik.png'
import Bugojno from './Slike/Bugojno.png'
import Kartica from './Kartice';

function Sadrzaj() {
  return (
    <div class = "wrapper">
        <div id="KantonalneLinije" class="tabcontent">
            <div className = "fx">
                <Kartica slika = "https://media-cdn.tripadvisor.com/media/photo-s/1c/2b/64/4c/donji-vakufe-dji-mavic.jpg" Linija="Travnik-Donji Vakuf"/>
                <Kartica slika = {GornjiVakuf} Linija="Travnik-Gornji Vakuf"/>
                <Kartica slika = "https://furaj.ba/wp-content/uploads/2019/06/3-kraljevski-grad.jpg" Linija="Travnik-Jajce"/>
                <Kartica slika = {NoviTravnik} Linija="Travnik-Novi Travnik"/>
                <Kartica slika = {Bugojno} Linija="Travnik-Bugojno"/>
                <Kartica slika = "https://foca-24.info/storage/uploads/2021-09-04/1630760458_izbori-za-clanove-savjeta-mjesnih-zajednica-3-oktobra.jpg" Linija="Travnik-Vitez"/>
                <Kartica slika = "https://domaceubih.ba/wp-content/uploads/2020/06/Fojnica3.jpg" Linija="Travnik-Fojnica"/>
                <Kartica slika = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Kiseljak_nebo_1.JPG" Linija="Travnik-Kiseljak"/>
                <Kartica slika = "https://arhiv.stav.ba/wp-content/uploads/2019/05/1.-Otvaranje-Copy.jpg" Linija="Travnik-Busovača"/>
            </div>
        </div>
    </div>           
  );
}

export default Sadrzaj;
