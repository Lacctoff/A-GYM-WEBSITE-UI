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
        Welcome to our gym, where your fitness journey begins. Our mission is to empower you to reach your full potential through tailored programs, expert guidance, and a supportive community.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story gif" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Founded on a passion for fitness, our gym was built to provide a space where everyone feels welcome. We started as a small group of enthusiasts and have grown into a vibrant community dedicated to achieving greatness.
            </p>
            <p>
              Our goal has always been simple: create a place where people can pursue their fitness goals, no matter their starting point.
            </p>
            <p>
              We believe in progress, not perfection, and we are here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Our vision is to inspire a healthier community by fostering a fitness culture that embraces everyone. We aim to be a leading fitness hub that transforms lives through dedication, passion, and innovation.
            </p>
            <p>
              We see a future where everyone feels empowered to achieve their best selves, both inside and outside the gym.
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide a welcoming and motivating environment where you can pursue your fitness goals. We are committed to offering top-quality equipment, expert coaching, and a community that supports your journey.
            </p>
            <p>
              We strive to make fitness accessible, enjoyable, and a part of everyday life for everyone.
            </p>
            <p>
              Together, we achieve more, and we’re here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
