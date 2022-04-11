import './App.css';
import './Searchikonica.css'


function Header() {
  return (
    <div>
      <h1 className="Naslov">Autobuske linije Travnik</h1>
      <div className = "FlexZaDugmadi">
        <button className="tabdugme1 tabdugme" id="Otvoren" onclick="PromijeniTab(event, 'KantonalneLinije')">Kantonalne linije</button>
        <button className="tabdugme2 tabdugme" onclick="PromijeniTab(event, 'OpstinskeLinije')">Opštinske linije</button>
      </div>
      <div className = "Linija"></div>
      <h1 className = "kofolTekst">Polasci</h1>
    </div>
  );
}

export default Header;
