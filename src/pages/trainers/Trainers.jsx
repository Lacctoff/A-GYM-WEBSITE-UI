import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'

import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam id, soluta enim accusamus provident alias nam atque expedita blanditiis.
      </Header>

      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map((trainer) => {
              return  <Trainer key={trainer.id} image={trainer.image} name={trainer.name} job={trainer.job} socials={
                [
                  {icon: <BsInstagram/>, link: trainer.socials[0]},
                  {icon: <AiOutlineTwitter/>, link: trainer.socials[1]},
                  {icon: <FaFacebookF/>, link: trainer.socials[2]},
                  {icon: <FaLinkedinIn/>, link: trainer.socials[3]},
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers