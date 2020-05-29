import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/index';
import styles from './App.module.css';

import image from './images/30179592 (1).jpg';
import SocialLink from './components/Social/SocialLink';
import img from './images/30365782.jpg'

function App() {
  const [data, setdata] = useState({});
  const [country, setcountry] = useState('');

  const readAllData = async () => {
    const result = await fetchData();
    setdata(result);
  };

  useEffect(() => {
    readAllData();
  }, []);

  const handleCountryChange = async (con) => {
    const result = await fetchData(con);

    setcountry(con);
    setdata(result);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
      <SocialLink />
      <img className={styles.image} src={img} alt="COVID-19" />
      <a href="https://www.webfreecounter.com/" target="_blank">
        <img src="https://www.webfreecounter.com/hit.php?id=gvkcpdx&nd=6&style=44" border="0" alt="hit counter"></img>
      </a>
      
      
    </div>
  );
}

export default App;
