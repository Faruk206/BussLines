import './App.css';
import './Searchikonica.css'
import GornjiVakuf from './Slike/Gornji_Vakuf.jpeg'
import NoviTravnik from './Slike/NoviTravnik.png'
import Bugojno from './Slike/Bugojno.png'
import Kartica from './Kartice';

function Sadrzaj() {
  return (
    <div class = "wrapper">
            <div class="Search">
		<div class="searchbox">
			<input id = "input" type="text" class="searchbox__input" onkeyup="filtriraj()" placeholder="Pretraži gradove..." />
			<svg class="searchbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
				<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
			</svg>
		</div>
        <div id="KantonalneLinije" class="tabcontent">
            <div className = "fx">
                <Kartica slika = "https://media-cdn.tripadvisor.com/media/photo-s/1c/2b/64/4c/donji-vakufe-dji-mavic.jpg" Linija="Travnik-Donji Vakuf"/>
                <Kartica slika = {GornjiVakuf} Linija="Travnik-Gornji Vakuf"/>
                <Kartica slika = "https://furaj.ba/wp-content/uploads/2019/06/3-kraljevski-grad.jpg" Linija="Travnik-Jajce"/>
                <Kartica slika = {NoviTravnik} Linija="Travnik-Novi Travnik"/>
                <Kartica slika = {Bugojno} Linija="Travnik-Bugojno"/>
                <Kartica slika = "https://foca-24.info/storage/uploads/2021-09-04/1630760458_izbori-za-clanove-savjeta-mjesnih-zajednica-3-oktobra.jpg" Linija="Travnik-Vitez"/>
                <Kartica slika = "https://fojnica.net/wp-content/uploads/2020/03/Fojnica-3-696x392.jpg" Linija="Travnik-Fojnica"/>
                <Kartica slika = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Kiseljak_nebo_1.JPG" Linija="Travnik-Kiseljak"/>
                <Kartica slika = "https://arhiv.stav.ba/wp-content/uploads/2019/05/1.-Otvaranje-Copy.jpg" Linija="Travnik-Busovača"/>
                </div>
            </div>
        </div>
    </div>           
  );
}

export default Sadrzaj;
