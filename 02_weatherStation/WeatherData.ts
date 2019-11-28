import ISubject from './ISubject';
import IObserver from './IObserver';
export default class WeatherData implements ISubject {
    private observers: Array<IObserver> = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;
    public constructor() {
        this.observers = [];
    }
    public notifyObserver(): void {
        for (let i = 0; i < this.observers.length; i++) {
            let observer: IObserver = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    public registerObserver(o: IObserver): void {
        this.observers.push(o);
    }

    public removeObserver(o: IObserver): void {
        let index = this.observers.indexOf(o);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    private setMeasurements(temperature: number, humidity: number, airpressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = airpressure;
        this.notifyObserver();
    }

    public getMeasurements(): void {
        fetch('https://bird.ioliu.cn/v2?url=http://www.nmc.cn/f/rest/real/59493&[Access-Control-Allow-Origin:*]')
            .then(function (res) {
                return res.json();
            }).then((value) => {
                let weather = value['weather'],
                    temperature = +weather['temperature'],
                    humidity = +weather['humidity'],
                    airpressure = +weather['airpressure'];
                this.setMeasurements(temperature, humidity, airpressure);
            })
    }
}