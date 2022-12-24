import React from 'react'
import NewMoon from '../../assets/new_moon.png'
import WaningCrescent from '../../assets/waning_crescent.png'
import ThirdQuarter from '../../assets/third_quarter.png'
import WaningGibbous from '../../assets/waning_gibbous.png'
import FullMoon from '../../assets/full_moon.png'
import WaxingGibbous from '../../assets/waxing_gibbous.png'
import FirstQuarter from '../../assets/first_quarter.png'
import WaxingCrescent from '../../assets/waxing_crescent.png'
import UpArrow from '../../assets/up.png'
import DownArrow from '../../assets/down.png'

import { ItemContainer } from './styles';

function ItemCard({info}) {

  function moonCatch(moonPhase){
    switch(moonPhase){
      case 'New Moon':
        return 'Lua Nova';
        break;
      case 'Waning Crescent':
        return 'Minguante';
        break;
      case 'Third Quarter':
        return 'Quarto Minguante';
        break;
      case 'Waning Gibbous':
        return 'Gibosa Minguante';
        break;
      case 'Full Moon':
        return 'Lua Cheia';
        break;
      case 'Waxing Gibbous':
        return 'Gibosa Crescente';
        break;
      case 'First Quarter':
        return 'Quarto Crescente';
        break;
      case 'Waxing Crescent':
        return 'Crescente';
        break;
    }
  }

  function moonCatchImage(moonPhase){
    switch(moonPhase){
      case 'New Moon':
        return NewMoon;
        break;
      case 'Waning Crescent':
        return WaningCrescent;
        break;
      case 'Third Quarter':
        return ThirdQuarter;
        break;
      case 'Waning Gibbous':
        return WaningGibbous;
        break;
      case 'Full Moon':
        return FullMoon;
        break;
      case 'Waxing Gibbous':
        return WaxingGibbous;
        break;
      case 'First Quarter':
        return FirstQuarter;
        break;
      case 'Waxing Crescent':
        return WaxingCrescent;
        break;
    }
  }
  
  function adjustTime(time){
    let timeCourse = time.slice(6,9);
    let newTime = time.slice(0,2);
    let minutes = time.slice(3,5);
  
    if (newTime != '12' && timeCourse == 'PM'){
      switch(newTime){
        case '01':
          return '13' + ':' + minutes;
          break;
        case '02':
          return '14' + ':' + minutes;
          break;
        case '03':
          return '15' + ':' + minutes;
          break;
        case '04':
          return '16' + ':' + minutes;
          break;
        case '05':
          return '17' + ':' + minutes;
          break;
        case '06':
          return '18' + ':' + minutes;
          break;
        case '07':
          return '19' + ':' + minutes;
          break;
        case '08':
          return '20' + ':' + minutes;
          break;
        case '09':
        return '21' + ':' + minutes;
          break;
        case '10':
        return '22' + ':' + minutes;
          break;
        case '11':
        return '23' + ':' + minutes;
          break;
      }
    } else if (newTime == '12' && timeCourse == 'AM'){
      return '00:00';
    } else {
      return time.slice(0,5);
    }
  }

  return (
    <ItemContainer>
      <div className='weatherCard'>
        <div className='mainInfos'>

          <div className='condition'>
              <img src={info.forecast.forecastday[0].day.condition.icon}/>
          </div>

          <div className='names'>
            
            <p>{info.location.name}</p>
            <p>{info.location.region}, {info.location.country}</p>
            <p>{info.location.localtime.slice(11, 16)}</p>
          </div>          

          <div className='temps'>
            <p>{info.current.temp_c}ºc</p>
            <p>Min: {info.forecast.forecastday[0].day.mintemp_c}º / Max: {info.forecast.forecastday[0].day.maxtemp_c}º</p>
            <p>Sensação térmica: {info.current.feelslike_c}º</p>
          </div>
        </div>

        <div className='secondaryInfos'>
          <div className='sun'>
            <p>Nascer do sol: {adjustTime(info.forecast.forecastday[0].astro.sunrise)}</p>
            <p>Pôr do sol: {adjustTime(info.forecast.forecastday[0].astro.sunset)}</p>
          </div>

          <div className='moon'>
            <label>{moonCatch(info.forecast.forecastday[0].astro.moon_phase)}</label>
            <img src={moonCatchImage(info.forecast.forecastday[0].astro.moon_phase)}/>
          </div>
        </div>

        <hr/>

        <div className='futureDays'>
            <div className='tomorrow'>
              <div className='titleTomorrow'>
                <p>Amanhã - {info.forecast.forecastday[1].date.slice(5, 10).split('-').reverse().join('/')}</p>
              </div>

              <div className='firstRow'>
                <div className='conditionTomorrow'>
                  <img src={info.forecast.forecastday[1].day.condition.icon}/>
                </div>

                <div className='tempsTomorrow'>
                  <p>{info.forecast.forecastday[1].day.mintemp_c}º
                    <img className='arrows' src={DownArrow} />
                  </p>
                  <p>{info.forecast.forecastday[1].day.maxtemp_c}º
                    <img className='arrows' src={UpArrow} />
                  </p>
                </div>
              </div>
              
              <div className='sunTomorrow'>
                <p>Nascer do sol: {adjustTime(info.forecast.forecastday[1].astro.sunrise)}</p>
                <p>Pôr do sol: {adjustTime(info.forecast.forecastday[1].astro.sunset)}</p>
              </div>

              <div className='moonTomorrow'>
                <label>{moonCatch(info.forecast.forecastday[1].astro.moon_phase)}</label>
                <img src={moonCatchImage(info.forecast.forecastday[1].astro.moon_phase)}/>
              </div>
            </div>

            <div className='afterTomorrow'>
              <div className='titleAfterTomorrow'>
                <p>Depois de Amanhã - {info.forecast.forecastday[2].date.slice(5, 10).split('-').reverse().join('/')}</p>
              </div>

              <div className='firstRow'>
                <div className='conditionAfterTomorrow'>
                  <img src={info.forecast.forecastday[2].day.condition.icon}/>
                </div>

                <div className='tempsAfterTomorrow'>
                  <p>{info.forecast.forecastday[2].day.mintemp_c}º
                    <img className='arrows' src={DownArrow} />
                  </p>
                  <p>{info.forecast.forecastday[2].day.maxtemp_c}º
                    <img className='arrows' src={UpArrow} />
                  </p>
                </div>
              </div>
              
              <div className='sunAfterTomorrow'>
                <p>Nascer do sol: {adjustTime(info.forecast.forecastday[2].astro.sunrise)}</p>
                <p>Pôr do sol: {adjustTime(info.forecast.forecastday[2].astro.sunset)}</p>
              </div>

              <div className='moonAfterTomorrow'>
                <label>{moonCatch(info.forecast.forecastday[2].astro.moon_phase)}</label>
                <img src={moonCatchImage(info.forecast.forecastday[2].astro.moon_phase)}/>
              </div>
            </div>
          </div>
        </div>
    </ItemContainer>
  )
}

export default ItemCard;
