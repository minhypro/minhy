import React from 'react'
import Masonry from 'react-masonry-css'
import Card from '../components/Card'

function Projects() {

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
        <h2 className='mt-5 mb-20 text-5xl font-bold'>Work that I've done for the past 6 months</h2>
        <Card
          img='https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c993b6c45ac06cc1c_Project%203-p-1080.jpeg'
          title='CoinView mobile App'
          content='I was create it by myselft'
        />
        <Card
          img='https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c993b6c45ac06cc1c_Project%203-p-1080.jpeg'
          title='CoinView mobile App'
          content='I was create it by myselft'
        />
        <Card
          img='https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c993b6c45ac06cc1c_Project%203-p-1080.jpeg'
          title='CoinView mobile App'
          content='I was create it by myselft'
        />
        <Card
          img='https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c993b6c45ac06cc1c_Project%203-p-1080.jpeg'
          title='CoinView mobile App'
          content='I was create it by myselft'
        />
      </Masonry>
      
    </div>
  )
}

export default Projects
