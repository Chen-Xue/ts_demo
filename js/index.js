"use strict";
// #region
// // Day1:数据类型
// // 1.布尔类型
// let flag:boolean = true;
// // 2.数字类型
// let num:number = 1;
// // 3.字符串类型
// let str:string = '你好';
// // 4.数组类型
// // 方法1
// let arr1:number[] = [1,2,3,4]
// let arr2:string[] = ['1','2','3']
// // 方法2：泛型
// let arr3:Array<number> = [1,2,3,4]
// let arr4:Array<string> = ['1','2','3']
// // 5.元祖类型(tuple):属于数组一种
// let arr5:[string,number,boolean] = ['ts',1,true]
// // 6.枚举类型(标识符)
// enum Color {red,blue=5,orange}
// let c:Color = Color.orange
// // 7.nerver类型：其他类型(包含null和undefined)
// // 8.void类型：没有任何类型，一般用于定义方法的时候方法没有返回值
// // 9.any类型：任意类型
// #endregion 
// #region
// Day2函数的定义
// es5
// 1.函数声明
// function run(){
//     return 'run'
// }
// // 2.匿名函数
// let run2 = function(){
//     return 'run2'
// }
// // ts
// // 函数声明
// function fun():string{
//     return 'fun'
// }
// // 匿名函数
// let fun2 = function():string{
//     return 'fun2'
// }
// // ts定义方法传参
// function params1(name:string,age:number):string{
//     return `${name} --- ${age}`
// }
// console.log(params1('lisi',18))
// let p = function params2(name:string,age:number):string{
//     return `${name} --- ${age}`
// }
// console.log(p('zhangsan',30))
// // 没有返回值
// function n():void{
//     console.log('void') 
// }
// // 可选参数(参数可有可无用？标识符)
// // 可选参数必须配置到参数最后面
// function gitInfo(name:string,age?:number):string{
//     if(age){
//         return `${name} --- ${age}`
//     }else{
//         return `${name} --- 年龄保密`
//     }
// }
// console.log(gitInfo('张三'))
// // 默认参数 可选参数(可选参数位置随意放)
// function gitInfo1(name:string,age:number=20):string{
//     if(age){
//         return `${name} --- ${age}`
//     }else{
//         return `${name} --- 年龄保密`
//     }
// }
// console.log(gitInfo1('张三'))
// // 剩余参数
// function sum(a:number,b:number,...result:number[]):number{
//     let sum = a+b
//     for(let i = 0;i<result.length;i++){
//         sum+=result[i]
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,6))
// 函数重载
/**
 *
 * es5,同名下面会覆盖上面
function css(params){

}
function css(params,val){
    
}
 */
/**
 * ts
function css(name:string):string;
function css(age:number):number;
function css(str:any):any{
  if(typeof str == 'string'){
    return 'string'
  }else{
    return 'number'
  }
};
consoel.log(css(18))
 */
// #endregion
// #region
// Day3创建对象 继承
// es5 继承
/**
 * 基本类
 function Person(){
    this.name = "张三"
    this.age = 20
 }
 let p = new Person()
 console.log(p.name)
 */
// 构造函数原型链里面添加方法
// function Person(){
//     this.name = '张三'; //属性
//     this.age = 20;
//     this.run=function(){
//         console.log(this.name + '在运动')
//     }
// }
//  //原型链上的属性会被多个实例共享,构造函数不会
// Person.prototype.sex = '男'
// Person.prototype.work = function(){
//     console.log(this.name + '在工作')
// }
// let p = new Person();
// 继承Person类  原型链+对象冒充的组合继承模式
// 原型链实现继承
// #endregion
