import React from 'react'
import Masonry from 'react-masonry-css'
import Card from '../components/Card'
import ycommerce from '../assets/images/ycommerce.png'
import ymovie from '../assets/images/ymovie.png'
import airbnb from '../assets/images/airbnb.png'
import gamefi from '../assets/images/gamefi.png'
import drumkit from '../assets/images/drumkit.png'
import theband from '../assets/images/theband.png'

function Projects() {

  const myprojects = [
    {
      title: 'Ycommerce',
      content: 'A MERN stack eCommerce website that I handle all the things on both Frontend and Backend side with the latest technologies. Full-function shopping cart and many more features',
      img: ycommerce,
      link: "https://ycommerce.herokuapp.com/"
    },
    {
      title: 'Ymovie',
      content: 'A daily updated Movie info website (include watch trailer and hidden cam version) with ReactJS and API get from themoviedb and other resources',
      img: ymovie,
      link: "https://62e15373b6e64727675684d9--cozy-starlight-bd6a7d.netlify.app/"
    },
    {
      title: 'AirBnb clone',
      content: 'HTML, CSS and pure JavaScript to clone AirBnb website with fully responsive',
      img: airbnb,
      link: 'https://minhypro.github.io/clone-air-bnb/'
    },
    {
      title: 'GameFi',
      content: 'My first self-built website with no tutorial by HTML, CSS and pure JavaScript. Cool animation and fully responsive',
      img: gamefi,
      link: 'https://minhypro.github.io/game-fi-clone/'
    },
    {
      title: 'Drum kit',
      content: 'Play drums by typing the keyboard. I made with supporting from Angela Yu from The App Brewer',
      img: drumkit,
      link: 'https://minhypro.github.io/drum-kit/'
    },
    {
      title: 'The Band',
      content: 'The entry level website template in W3School. Inspired by Son Dang from F8 with love 💖',
      img: theband,
      link: 'https://minhypro.github.io/w3-the-band/'
    }
  ]

  return (
    <div id='projects' className='container mx-auto pt-20'>
      <h2 className='text-3xl font-bold'>My projects</h2>
      <Masonry
        breakpointCols={{
          default: 2,
          768: 1}
        }
        className='my-masonry-grid my-10'
        columnClassName='my-masonry-grid_column'
      >
        <h2 className='mt-5 mb-20 text-5xl font-bold'>Work that I've done for nearly one year</h2>
        {myprojects.map(project => (
          <Card
          key={project.title}
          img={project.img}
          title={project.title}
          content={project.content}
          link={project.link}
          />
        ))}
      </Masonry>
    </div>
  )
}

export default Projects
