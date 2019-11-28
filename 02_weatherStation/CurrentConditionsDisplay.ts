import IObserver from './IObserver';
import IDisplayElement from './IDisplayElement';
import WeatherData from './WeatherData';
export default class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private tempemrature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    public weatherData: WeatherData;
    private name: string = "CurrentConditionsDisplay";

    constructor(wd: WeatherData) {
        this.weatherData = wd;
        this.weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.tempemrature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
    public display(): void {
        console.log('Here is ' + this.name);
        console.log(this.tempemrature, this.humidity, this.pressure);
    }


}