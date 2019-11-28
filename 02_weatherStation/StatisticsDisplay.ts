import WeatherData from './WeatherData';
import IDisplayElement from './IDisplayElement';
import IObserver from './IObserver';
export default class StatisticsDisplay implements IObserver, IDisplayElement {
    private numReadings: number = 0;
    private maxTemp: number = 0.0;
    private minTemp: number = 200;
    private tempSum: number = 0.0;
    public weatherData: WeatherData;
    private name: string = "StatisticsDisplay";

    constructor(wb: WeatherData) {
        this.weatherData = wb;
        this.weatherData.registerObserver(this);
    }
    update(temp: number, humidity: number, pressure: number): void {
        this.tempSum += temp;
        this.numReadings++;

        if (temp > this.maxTemp) {
            this.maxTemp = temp;
        }

        if (temp < this.minTemp) {
            this.minTemp = temp;
        }

        this.display();
    }
    display(): void {
        console.log("Here is " + this.name);
        console.log("Avg/Max/Min temperature = " + (this.tempSum / this.numReadings)
            + "/" + this.maxTemp + "/" + this.minTemp);
    }

    public removenotification() {
        this.weatherData.removeObserver(this);
        console.log("bye bye!");
    }


}