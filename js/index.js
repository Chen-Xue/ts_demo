"use strict";
// 布尔类型
let flag = true;
// 数字类型
let num = 1;
// 字符串类型
let str = '你好';
// 数组类型
// 方法1
let arr1 = [1, 2, 3, 4];
let arr2 = ['1', '2', '3'];
// 方法2：泛型
let arr3 = [1, 2, 3, 4];
let arr4 = ['1', '2', '3'];
//元祖类型(tuple):属于数组一种
let arr5 = ['ts', 1, true];
// 枚举类型(标识符)
/**
 * 支付：0
 * 未支付：1
 * 交易成功：2
 */
var pay_status;
(function (pay_status) {
    pay_status[pay_status["status"] = 1] = "status";
})(pay_status || (pay_status = {}));
console.log(flag, num);
