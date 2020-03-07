# head_first_design_patterns

书籍《Head First设计模式》的读书笔记

使用JavaScript的超集typescript语言实现[相关代码案例](https://github.com/bethrobson/Head-First-Design-Patterns)

# 安装编译依赖库
```sh
  npm install
```

# 构建命令
```sh
  webpack
```

## 目录

[placeholder]:p

| 模式 | 案例 | 笔记 | 代码 |
|:-------- |:-------- |:-------- |:--------:|
|策略模式 Strategy| [鸭子模拟器](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/01_Strategy/index.html) | 策略模式允许你基于情况选择算法或策略 | [查看](./01_Strategy) |
|观察者模式 Observer| [气象局](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/02_Observer/index.html) | 定义了一个对象间的依赖，这样无论何时一个对象改变了状态，其他所有依赖者会收到提醒 | [查看](./02_Observer) |
|装饰器模式 Decorator| [星巴兹咖啡](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/03_Decorator/index.html) | 装饰器模式让你能在运行时动态地改变一个对象的表现，通过把它们封装到一个装饰器类 | [查看](./03_Decorator) |
|简单工厂模式 SimpleFactory| [简单披萨店工厂](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/04_SimpleFactory/index.html) | 简单工厂模式在不暴露生成逻辑的前提下生成一个实例。 | [查看](./04_SimpleFactory) |
|工厂方法模式 FactoryMethod| [披萨材料工厂](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/04_FactoryMethod/index.html) | 它提供了一个把生成逻辑移交给子类的方法 | [查看](./04_FactoryMethod) |
|抽象方法模式 AbstractFactory| [地区披萨店工厂](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/04_AbstractFactory/index.html) | 一个制造工厂的工厂；一个工厂把独立但是相关／有依赖性的工厂进行分类，但是不需要给出具体的类。 | [查看](./04_AbstractFactory) |
|单例模式 Singleton| [单例](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/05_Singleton/index.html) | 确保指定的类只生成一个对象 | [查看](./05_Singleton) |
|命令模式 Command| [家电遥控器](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/06_Command/index.html) | 允许你封装对象的功能。此模式的核心思想是分离调用者和接收者 | [查看](./06_Command) |
|适配器模式 Adapter| [火鸡&鸭子适配器](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/07_Adapter/index.html) | 适配器模式让你封装一个不兼容的对象到一个适配器，来兼容其他类 | [查看](./07_Adapter) |
|外观模式 Facade| [家庭剧院系统](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/08_Facade/index.html) | 外观模式提供了一个复杂子系统的简单接口 | [查看](./08_Facade) |
|模板模式 TemplateMethod| [咖啡馆](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/09_TemplateMethod/index.html) | 模板模式定义了一个算法会如何执行的骨架，但把这些步骤的实现移交给子类 | [查看](./09_TemplateMethod) |
|迭代器模式 Iterator| [菜单合并](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/10_Iterator/index.html) | 它提供了一种方式来获得对象的元素，而不必暴露底层实现。 | [查看](./10_Iterator) |
|组合模式 Composite| [菜单组合](https://krapnikkk.github.io/head_first_design_patterns_typescript/dist/10_Composite/index.html) | 组合模式让调用者可以用统一的模式对待不同的对象。 | [查看](./10_Composite) |

[/placeholder]:p

## Author
krapnik

