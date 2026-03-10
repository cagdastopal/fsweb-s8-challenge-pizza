import '/src/styles/SiparisFormu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import React from 'react';


function SiparisFormu() {

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

  const history = useHistory();

  const handleClick  = () => {
    history.push("/onay");
  }

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
                <p className='bold'>Boyut Seç</p>
                <div className='group17'>
                  <label className="radio-feature"> <input type="radio" name="boyut" value="kucuk" /> Küçük </label>
                  <label className="radio-feature"> <input type="radio" name="boyut" value="orta" /> Orta </label>
                  <label className="radio-feature"> <input type="radio" name="boyut" value="buyuk" /> Büyük </label>
                </div>
              </div>

              <div className='group19'>
                  <p className='bold'>Hamur Seç</p>
                  <select defaultValue="">
                    <option value="" disabled>Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="orta">Orta</option>
                    <option value="kalin">Kalın</option>
                  </select>
                </div>
            </div>

            <div className='frame10'>
              <p className='bold'>Ek Malzemeler</p>
              <p> En Fazla 10 malzeme seçebilirsiniz. {malzemeFiyati}₺</p>
            </div>

            <div className='frame9'>
              {
              malzemeler.map((malzeme, index) => (
                <label key={index}><input type="checkbox" />{malzeme}</label>
              ))}
            </div>

            <div className='group21'>
              <p className='bold'>Sipariş Notu</p>
              <textarea className = "textarea1" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
            </div>

            <div className='group24'>
              <div className='group23'>
                <button className='counter-btn'>-</button>
                <p>1</p>
                <button className='counter-btn'>+</button>
              </div>

              <div className='group22'>
                <div className='group22-1'>
                  <h4>Sipariş Toplamı</h4>
                  <div className='secim-div'>
                    <span>Seçimler</span>
                    <span>5₺</span>
                  </div>
                  <div className='toplam-div red'>
                    <span>Toplam</span>
                    <span>110.50₺</span>
                  </div>
                </div>
                <button className='siparis-btn' onClick={handleClick}>SİPARİŞ VER</button>
              </div>

            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default SiparisFormu
