import '/src/styles/Onay.css';
import { useHistory } from "react-router-dom";

function Onay() {

  const history = useHistory();

  const handleClick  = () => {
    history.push("/");
  }

return (
  <div className="success-container">
    <p>Teknolojik Yemekler</p>
    <h2>TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!</h2>
    <button class="anasayfa" onClick={handleClick}>Ana Sayfa</button>
  </div>
  )
}

export default Onay
