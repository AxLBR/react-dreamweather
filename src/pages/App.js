import { useState } from 'react';
import Logo from '../assets/logo.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemCard from '../components/ItemCard';
import { api } from '../services/api';
import { Container } from './styles';

function App() {
  const [local, setLocal] = useState('');
  const [info, setInfos] = useState([]);
  const [error, setError] = useState('');

  const handleSearchLocal = async () => {
    const {data} = await api.get(`forecast.json?key=985bac5bf562468a8db125141222312&q=${local}&days=3&aqi=no&alerts=no`).catch(() => {
      return 'undefined';
    });
   
    if (data == undefined){
      setError('Localidade não encontrada !');
      setInfos('');
    } else {
      setError('');
      setInfos(structuredClone(data));
      setLocal('');      
    } 
  }

  //Reseta medidas da página para o mobile
  function resetHeight(){
    document.body.style.height = window.innerHeight + "px";
  }  

  window.addEventListener("resize", resetHeight);
  resetHeight();

  return (
    <Container>
      <Container className='header'>
        <img src={Logo} width={280} height={240} className='logo' alt="DreamWeather Logo"/>
        <Input value={local} onChange={(e) => setLocal(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? handleSearchLocal() : ''}/>
        <Button onClick={handleSearchLocal}/>
      </Container>


      <p className='error'>{error}</p> 
      <div className='containerCards'>
        {info != '' ? <ItemCard info={info}/> : ''}
      </div>
    </Container>
  );
}

export default App;