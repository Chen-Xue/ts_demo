// 布尔类型
let flag:boolean = true;

// 数字类型
let num:number = 1;

// 字符串类型
let str:string = '你好';

// 数组类型
// 方法1
let arr1:number[] = [1,2,3,4]
let arr2:string[] = ['1','2','3']
// 方法2：泛型
let arr3:Array<number> = [1,2,3,4]
let arr4:Array<string> = ['1','2','3']

//元祖类型(tuple):属于数组一种
let arr5:[string,number,boolean] = ['ts',1,true]

// 枚举类型(标识符)
/**
 * 支付：0
 * 未支付：1
 * 交易成功：2
 */
enum pay_status {status=1,}

console.log(flag,num)