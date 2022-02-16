import styled from 'styled-components'
import food from '../../assets/comida-boteco.jpeg'
import { Button } from 'react-bootstrap'
import { BsDoorOpen } from "react-icons/bs";

const Front = styled.img`
  width: auto;
`

const Main = styled.div`
  display: flex;
  gap: 3px;
`

const Final = styled.div`
  display: flex;
  justify-content: center;
`

const Enter = styled(Button)`

  color: #fff;
  background-color: #000;
  padding: 0.5rem;
  border: none;
  margin: 0.8rem 0;

  &:hover{
    background-color: #000;
    color: #fff;
    box-shadow: 5px 10px #696969;
  }
`

export const Home = () => {
  return (
    <Main>
      <Front src={food} alt="Foto de comida de boteco" />
      <p>
        <h3>Blueteco</h3>
        Nossa História
        <br />
        Bacon ipsum dolor amet andouille short ribs swine brisket meatball. 
        Ham bacon ribeye, brisket sirloin tenderloin alcatra ground round. Cow short ribs beef cupim shank pork loin. 
        Meatball alcatra kevin pig cupim shoulder.
        <br />
        <br />
        Bloody mary glogg the blenheim saketini ectoplasm dom chivas regal. 
        Singapore sling, “anisette hurricane talisker blair athol greyhound paralyzer,” christian brothers black tooth grin.” 
        Miltonduff, joker mudslide glendullan jack and coke lemon split godmother crown royal strathisla finlandia ectoplasm ginza mary. 
        Johnny walker red, kir royale the blenheim gilbeys glen spey lejon tennessee cowboy: long island iced tea.
        <br />
        <br />
        To go, est ut affogato, to go crema percolator steamed whipped latte. 
        Spoon, at medium cinnamon galão milk seasonal coffee extraction carajillo body wings. 
        Doppio acerbic con panna plunger pot espresso breve, arabica cream roast galão decaffeinated. 
        To go irish shop affogato, aromatic skinny steamed foam white. Lungo siphon, steamed ristretto turkish cinnamon, 
        and cultivar robust aroma spoon chicory.
        <br />
        <Final>
          <Enter href="/produtos">
            Entrar <BsDoorOpen />
          </Enter>
        </Final>
      </p>
    </Main>
  )
}