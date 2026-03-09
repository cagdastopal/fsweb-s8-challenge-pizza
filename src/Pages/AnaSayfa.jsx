import '/src/styles/AnaSayfa.css'
import { useHistory } from "react-router-dom";

function AnaSayfa() {

  const history = useHistory();

  const handleClick  = () => {
    history.push("/siparis");
  }
  
  return (
    <>
      <section class= "section1">
        <img src = "./images/iteration-1-images/home-banner.png" alt="" class="image2" />
        <div>
          <p class="p-1">Teknolojik Yemekler</p>
          <p class="text1">fırsatı kaçırma</p>
          <p class="text2">KOD ACIKTIRIR Pizza, DOYURUR</p>
          <button class="section1-link1" onClick={handleClick}>ACIKTIM</button>
        </div>
      </section>
    </>
  )
}

export default AnaSayfa
