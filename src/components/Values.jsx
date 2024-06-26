import mymage from '../images/values.jpg';
import SectionHead from './SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <img src={mymage} alt="Values" className='values__image'/>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="values" />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam. 
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values