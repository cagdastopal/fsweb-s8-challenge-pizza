import '/src/styles/SiparisFormu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';

  const pizzaFiyati = 85.5;
  const malzemeFiyati = 5;
  const malzemeler = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

function SiparisFormu() {

  const [sayi, setSayi] = useState(1);
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [seciliMalzeme, setSeciliMalzeme] = useState([]);
  const [not, setNot] = useState("");
  const history = useHistory();

  const handleClick  = () => {
      history.push("/onay");
  }

  const arttir = (event) => {
    event.preventDefault();
    setSayi(sayi + 1);
  }

  const azalt = (event) => {
    event.preventDefault();
    if(sayi > 1){
      setSayi(sayi - 1);
    }
  }

  const handleSelect = (event) => {
    setBoyut(event.target.value);
  }

  const handleOptionChange = (event) => {
    setHamur(event.target.value);
  }

  const handleCheckBoxChange = (event) => {

    const { value, checked } = event.target;

    if (checked) {
      setSeciliMalzeme([...seciliMalzeme, value]);
    } else {
      setSeciliMalzeme(seciliMalzeme.filter((item) => item !== value));
    }
  }

  const handleNotChange = (event) => {
    setNot(event.target.value);
  }

  const formGecerli = boyut !== "" && hamur !== "" && seciliMalzeme.length >= 4 && seciliMalzeme.length <= 10 && not !== "";
  
  return (
    <>
      <header className="top-header">
        <img src= "/images/iteration-1-images/logo.svg" />
        <div className='div-link'>
          <Link to="/" className='link'>Anasayfa</Link>
          <span>-</span>
          <Link to="/siparis" className='link active'>Sipariş Oluştur</Link>
        </div>
      </header>

      <main className="content">
        <div className='group16'>
          <h2>Position Absolute Acı Pizza</h2>
          <div className = "group15">
            <span className='price'>{pizzaFiyati.toFixed(2)}₺</span>
            <div className='group14'>
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
        </div>

        <section className='frame30'>
          <p className='information'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
          <form>
            <div className='group20'>
              <div className='group18'>
                <p className='bold'>Boyut Seç {boyut === "" && <span style={{ color: "red"}}> * </span>}</p> 
                <div className='group17'>
                  <label className="radio-feature"> <input type="radio" name="boyut" value="Küçük" checked={boyut === "Küçük"} onChange={handleSelect}/>Küçük</label>
                  <label className="radio-feature"> <input type="radio" name="boyut" value="Orta" checked={boyut === "Orta"} onChange={handleSelect}/>Orta</label>
                  <label className="radio-feature"> <input type="radio" name="boyut" value="Büyük" checked={boyut === "Büyük"} onChange={handleSelect}/>Büyük</label>
                </div>
              </div>

              <div className='group19'>
                  <p className='bold'>Hamur Seç {hamur === "" && <span style={{ color: "red"}}> * </span>}</p>
                  <select defaultValue="" onChange={handleOptionChange}>
                    <option value="" disabled>Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Orta">Orta</option>
                    <option value="Kalın">Kalın</option>
                  </select>
                </div>
            </div>

            <div className='frame10'>
              <p className='bold'>Ek Malzemeler</p>
              <p> En az 4, en fazla 10 malzeme seçebilirsiniz. {malzemeFiyati}₺ {(seciliMalzeme.length < 4 || seciliMalzeme.length > 10) && <span style={{ color: "red", fontWeight: "bold" }}> * </span>}</p>
            </div>

            <div className='frame9'>
              {
              malzemeler.map((malzeme, index) => (
                <label key={index}><input type="checkbox" value={malzeme} onChange={handleCheckBoxChange}/>{malzeme}</label>
              ))}
            </div>

            <div className='group21'>
              <p className='bold'>Sipariş Notu {not === "" && <span style={{ color: "red"}}> Boş Bırakılamaz! </span>}</p>
              <textarea className = "textarea1" placeholder="Siparişine eklemek istediğin bir not var mı?" onChange={handleNotChange}></textarea>
            </div>

            <div className='group24'>
              <div className='group23'>
                <button className='counter-btn' onClick={azalt}>-</button>
                <p>{sayi}</p>
                <button className='counter-btn' onClick={arttir}>+</button>
              </div>

              <div className='group22'>
                <div className='group22-1'>
                  <h4>Sipariş Toplamı</h4>
                  <div className='secim-div'>
                    <span>Seçimler</span>
                    <span>{(seciliMalzeme.length)*5}₺</span>
                  </div>
                  <div className='toplam-div red'>
                    <span>Toplam</span>
                    <span>{((seciliMalzeme.length)*5+85.5)*sayi}₺</span>
                  </div>
                </div>
                <button className='siparis-btn' onClick={handleClick} disabled={!formGecerli}>SİPARİŞ VER</button>
              </div>

            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default SiparisFormu