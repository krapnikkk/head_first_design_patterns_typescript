export default class ClassUtils {
    public static classMap: any;
    public static regClass(className: string, classDef: Object) {
        this.classMap[className] = classDef;
    }
    public static getRegClass(className: string): object {
        return this.classMap[className];
    }
    public static getClassName(classDef:any):any{
        return classDef.className;
    }
}