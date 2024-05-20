import Header from '../../components/Header'

import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio velit perspiciatis recusandae ea, laudantium harum libero minima pariatur enim voluptatum repellendus quo deserunt repudiandae voluptas voluptatem numquam quisquam cumque suscipit.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="story gif" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit, suscipit earum ab accusamus laudantium consequatur quis molestias voluptatibus omnis hic dolor non aspernatur? Tempore nostrum consequuntur cumque repudiandae rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptatibus quidem qui repellendus ea minima ut et placeat maxime consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam sapiente.
          </p>
        </div>
      </div>
    </section>

    {/* vision section */}
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit, suscipit earum ab accusamus laudantium consequatur quis molestias voluptatibus omnis hic dolor non aspernatur? Tempore nostrum consequuntur cumque repudiandae rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptatibus quidem qui repellendus ea minima ut et placeat maxime consequatur.
          </p>

        </div>

        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    {/* Mission Section */}

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit, suscipit earum ab accusamus laudantium consequatur quis molestias voluptatibus omnis hic dolor non aspernatur? Tempore nostrum consequuntur cumque repudiandae rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptatibus quidem qui repellendus ea minima ut et placeat maxime consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About