import React from 'react';
import './service.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ecommerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sites and Platforms</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Data Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Visualization and Optimization with R</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Corporate Performance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Supply Chain</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Financials</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Marketing and Sales</p>
            </li>
          </ul>
        </article>
        {/* END OF DATA ANALYSIS */}
        <article className='service'>
          <div className='service__head'>
            <h3>Time Series Modeling and Forecasting</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regression Modelling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Time Series in R (ARIMA, GARCH, & Box-Jenkins multivariate methods)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comparison between Models for better Predictive Analysis</p>
            </li>
          </ul>
        </article>
        {/* END OF TIME SERIES MODELING */}
      </div> 
    </section>
  );
}

export default Services;
