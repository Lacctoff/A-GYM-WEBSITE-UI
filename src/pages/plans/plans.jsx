import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'

import './plans.css'

const Plans = () => {
  return (
    <>
      <Header title="Memebership Plans" image={HeaderImage}>
        Choose a plan that fits your goals and lifestyle. Whether you're just
        starting out or a seasoned athlete, we have a membership for you!
      </Header>

      <section className="plan">
        <div className="container plan__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}

                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Plans