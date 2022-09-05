import * as React from "react"
import * as style from "./singlePortfolio.module.scss";
import cannabisHero from './cannabis-main-img.jpeg';
import cannabisImg1 from './toronto-cannabis-1.jpeg';
import cannabisImg2 from './toronto-cannabis-2.jpeg';
import cannabisImg3 from './toronto-cannabis-3.jpeg';
import cannabisImg4 from './toronto-cannabis-4.jpeg';
import cannabisImg5 from './toronto-cannabis-5.jpeg';
import cannabisImg6 from './toronto-cannabis-6.jpeg';
import chatIcon from './chat-white.png';
import flag from './flag.svg';
import logoSmartUIMobile from './smart-ui-logo-mobile.svg';
import {graphql} from "gatsby";

export const query = graphql`
  query ($language: String , $pageId:String ) {
   locales: allLocale(filter: {language: {eq: $language}, ns: {in:[  "global"]}}) {
      edges {
        node { 
          ns
          language
          data 
        }
      }
    }
    project :  allStrapiSingleProject(filter: {id: {eq:$pageId}}) {
    edges {
      node {
        id
        project_name
      }
    }
  }
  }
`
const SinglePortfolio = (props) => {
    console.log(props.data)
    return <div className={style.singlePortfolio}>
        <div className="noise"></div>
        <div>
            <div className="flag">
                <img className="flag__mobile" src={logoSmartUIMobile} alt="logoSmartUI"/>
                <img className="flag__desktop" src={flag} alt="logoSmartUI"/>
            </div>
            <button className="button button__chat">
                <img src={chatIcon} alt="chatIcon"/>
            </button>
        </div>
        <div className="container">
            <picture>
                <img src={cannabisHero} alt="cannabisHero"/>
            </picture>
            <div>
                <div className="wrap">
                    <h1>Toronto Cannabis Authority</h1>
                </div>
                <div className="wrap">
                    <div className="left">
                        <div className="block modified">
                            <h3 className="subtitle">Категорії : </h3>
                            <ul className="category">
                                <li>html</li>
                            </ul>
                        </div>
                        <div className="block modified">
                            <h3 className="subtitle">Сайт : </h3>
                            <p>https://
                                <wbr/>
                                torontocannabisauthority.ca/
                            </p>
                        </div>
                        <div className="block modified">
                            <h3 className="subtitle">Конструктори веб-сайтів : </h3>
                            <ul className="category">
                                <li>Wordpress</li>
                            </ul>
                        </div>
                        <div className="block">
                            <h3 className="subtitle">Огляд</h3>
                            <p>Інтернет-магазин від дизайну в Figma з багатьма інтерактивними елементами в JS до
                                WordPress.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="block">
                            <h3 className="subtitle">ПОСЛУГИ ТА ОБСЯГ</h3>
                            <ul>
                                <li>Дослідження та стратегія UX</li>
                                <li>Досвід дизайну</li>
                                <li>Візуальний дизайн</li>
                                <li>Мистецький напрямок</li>
                                <li>Творчий напрямок</li>
                                <li>Керівництво по стилю</li>
                                <li>Інструкції щодо вмісту</li>
                                <li>Фронтальна розробка</li>
                                <li>Технічні консультації</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button__wrap">
                        <a href="./#" className="button">Переглянути сайт</a>
                    </div>
                </div>
            </div>
            <div className="picture-mobile">
                <div className="picture-mobile__wrap">
                    <picture>
                        <img src={cannabisImg1} alt="cannabisImg"/>
                    </picture>
                    <picture>
                        <img src={cannabisImg2} alt="cannabisImg"/>
                    </picture>
                    <picture>
                        <img src={cannabisImg3} alt="cannabisImg"/>
                    </picture>
                </div>
            </div>
            <div className="wrap">
                <div className="left">
                    <div className="block">
                        <h3 className="subtitle">ВИКЛИК</h3>
                        <p>Завдання, висунуте Toronto Cannabis Authority, було таким: «У 2021 році ми матимемо найкращий
                            у світі веб-сайт з продажу канабісу». З точки зору вмісту, структури та загального
                            використання, розробити веб-сайт у таким чином, щоб він дуже добре відображав бренд,
                            технології та діяльність, водночас залишаючись провідним у сфері комерції з амбітними
                            цілями.</p>
                    </div>
                    <div className="block">
                        <h3 className="subtitle">НАШ ПІДХІД</h3>
                        <p>Завдання було амбітним, а завдання попереду – складним. Ми зібрали команду проекту з різними
                            наборами навичок для дослідження, мозкового штурму, створення, ітерації та виконання з метою
                            створення модельного веб-сайту в галузі. Щоб максимізувати позитивну взаємодію з
                            користувачем, окрім макета, оптимізованого для мобільних пристроїв, і дизайну, орієнтованого
                            на взаємодію з користувачем, ми збагатили веб-сайт низкою модних функцій, які гармонійно
                            працюють разом. Такі як :</p>
                        <ul>
                            <li>- Персоналізовані пропозиції, сповіщення та купони.</li>
                            <li>- Інструмент рекомендації продукту, який допомагає клієнтам знайти потрібний продукт
                                відповідно до їхніх потреб без використання будь-яких технічних термінів.
                            </li>
                            <li>- Розумне попередньо визначене порівняння продуктів, щоб визначити різницю без зусиль.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="block">
                        <h3 className="subtitle">РЕЗУЛЬТАТИ</h3>
                        <ul>
                            <li>Збільшення відвідуваності сайту на 13%.</li>
                            <li>Збільшення нових користувачів на 18%.</li>
                            <li>Час, проведений на веб-сайті після пошуку, збільшився на 134%</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="picture-desktop">
                <picture>
                    <img src={cannabisImg4} alt="cannabisImg"/>
                </picture>
                <picture>
                    <img src={cannabisImg5} alt="cannabisImg"/>
                </picture>
                <picture>
                    <img src={cannabisImg6} alt="cannabisImg"/>
                </picture>
            </div>
        </div>
    </div>

}

export default SinglePortfolio
