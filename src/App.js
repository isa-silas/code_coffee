import styled from 'styled-components';
import './App.css';
import { Cover, Content } from "./styled.js";
import Options from "./components/Options";
import OptionsImg from "./components/OptionsImg";


function App() {
  var links = [
    {
      link: 'https://www.google.com/search?q=nothing+to+say&rlz=1C1GCEB_pt-BRBR984BR984&sxsrf=APq-WBuCZVY_KSOwSD2kVMj1s5q1NCnGsw:1644681982975&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiNjvTqxfr1AhUJCrkGHaPVAekQ_AUoAXoECAIQAw&biw=1600&bih=713&dpr=1#imgrc=ATc_mvgfJIbjNM',
      text: 'About us'
    },
    {
      link: 'https://www.starbucks.com/menu',
      text: 'Menu'
    },
    {
      link: 'http://instagram.com',
      text: 'Stores'
    }
  ]

  var cards = [
    {
      img: "/coffeshop_view.jpg",
      text: 'Our space'
    },
    {
      img: '/coffee_product.jpg',
      text: 'Passion for coffee'
    },
    {
      img: '/macarrons.jpg',
      text: 'Best snacks for any developer'
    }
  ]
  return (
    <div className="App">
      <ul className="header">
        <div>
          <img src="/code_logo.png" />
          <img src="/coffee_logo.png" />
        </div>
        {
          links.map(function (element) {
            return <div>
              <Options
                link={element.link}
                text={element.text}
              />
            </div>
          }
          )
        }
      </ul>
      <div className="cover">
        <br></br>
        <Cover titleColor="#50fa7b" pSize="24" background="transparent">
          code + coffee
        </Cover>
      </div>

      <Content txtColor="#ff79c6" size="20" background="#44475a" >Why visit us?</Content>
      <ul className="cards">
        {
          cards.map(function (element) {
            return <div>
              <OptionsImg
                img={element.img}
                text={element.text}
              />
            </div>
          }
          )
        }
      </ul>


    </div>
  );
}

export default App;
