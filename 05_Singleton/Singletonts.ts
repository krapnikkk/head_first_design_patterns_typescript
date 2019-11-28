export default class Singletonts{
    private static Instance:Singletonts =  new Singletonts();//thread safe eagerly

    private constructor(){

    }

    public static getInstance():Singletonts{
        return this.Instance;
    }

    public getDescription():string{
        return "I'm a eagerly Singleton!";
    }
}