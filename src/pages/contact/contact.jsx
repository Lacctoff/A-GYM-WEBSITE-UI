import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get in Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aperiam fugit dolore molestias quisquam tempore eius sit excepturi molestiae velit voluptas sapiente tenetur laborum quis ducimus, aliquid adipisci eaque rem!
    </Header>

    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:wolilacctoff@gmail.com" target='_blank' rel='noreferrer'><MdEmail/></a>
          <a href="mailto:wolilacctoff@gmail.com" target='_blank' rel='noreferrer'><BsMessenger/></a>
          <a href="http://wa.me/+2349032069510" target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact