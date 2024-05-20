import {FaCrown} from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data';
import Card from '../UI/Card';
import {Link} from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai'

// SectionHead was imported and has props passed into it: icon displays a FaCrown icon from react icons and Title: displays programs

// programs.map: ilterate through all the elements one by one
const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__containers">
            <SectionHead icon={<FaCrown/>} title="Programs" />
        
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs