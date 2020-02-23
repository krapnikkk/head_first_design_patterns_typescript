import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import StatisticsDisplay from './StatisticsDisplay';
let weatherData:WeatherData = new WeatherData(),
    currentConditionsDisplay:CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData),
    statisticsDisplay:StatisticsDisplay = new StatisticsDisplay(weatherData);

    async function updateWeather(){
        await weatherData.getMeasurements();
        statisticsDisplay.removenotification();//then异步导致数据接受之前已经移除通知了
        await weatherData.getMeasurements();
    }
    updateWeather();


