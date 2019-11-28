export default class SingletonClassic{
    private static Instance:SingletonClassic;//This is not thread safe!

    private constructor(){

    }

    public static getInstance():SingletonClassic{
        if(this.Instance == null){
            this.Instance = new SingletonClassic();
        }
        return this.Instance;
    }

    public getDescription():string{
        return "I'm a classic Singleton!";
    }
}