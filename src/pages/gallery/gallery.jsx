import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  let i = 1;

  for(i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
      Explore the energy and dedication of our gym community. Get inspired by the hard work and achievements captured in these moments.
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return(
                <article key={index}>
                  <img src={image} alt={`Gallery ${index + 1}`} />
                </article>
              ) 
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery