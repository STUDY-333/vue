// let a = 1
// string、number、boolean、null、underfined
// let 变量名：类型 = 值
let a = 1;
a = 2;
a = 3;
//类型推导
// 类型的本质：集合或取值范围
let b = false; // false true
let c = false;
let b1 = false;
let c1;
let c2;
c1 = c2;
// 类型number | string 兼容 number | ''
// number | '' 兼容于 类型number | string
let d1;
let d2;
d1 = d2;
d2 = d1;
// d1的类型和d2的类型是全等的
c1 = 123;
// 子类型的数据可以赋值给父类型的变量
// 顶部类型 就是所有类型的父类型
// 父类型
// 子类型
// 底部类型 就是所有类型的子类型
// 类型兼容性
let string = new String(0);
let isActive = new Boolean(0);
// null和undefined
let n = null;
let u = undefined;
// T1 T2 T3 T4
// let t1:T1;
// let t2:T2;
// t1 = t2!;
// t2 = t1!;
let t1 = u;
let t2 = u;
let t3 = u;
let t4 = u;
let t5 = u;
let a1 = n;
let a2 = n;
let a3 = n;
let a4 = n;
let a5 = n;
// null 和 undefined是底部类型
// any类型（typescript => anyscript）
let t6 = 1;
let t7 = undefined;
let t8 = null;
let t9 = '';
let t10 = false;
let t11;
let t12;
t11 = t12;
t6.fn();
let t13 = t11;
let t14 = t11;
let t15 = 1;
let t16 = '';
let t17 = true;
let t18 = undefined;
let t19 = null;
let t20;
t20 = 13;
// 经过大家的严谨判断 unknown是一个顶部类型
if (typeof t20 === "number") {
    t20.toFixed();
}
t20 = "13";
if (typeof t20 === "string") {
    t20.includes("");
}
// 顶部类型（any unknown）底部类型（any undefined null）
// 类型兼容性（赋值操作判定）
// A ≥ B 且 B ≥ A 则 A === B
// 仅T ≥ U 则 U是T的子类型
// 数组的类型定义
// 1. type[]
// 2. Array<type>
let u1 = [1, 2, 3, 4];
let u2 = ["0", "1"];
let u3 = [false, true];
let u4 = [undefined];
// U56这个类型不能准确的反映数组的每一位具体是什么类型，我们可以使用元组来解决这个问题（元组是一种特殊的数组定义）
let u5 = [1, "1", false, undefined];
let u6 = [1, "1", false, undefined];
// 数组的兼容性如何判断？（协同变化）
// 数组兼容性取决于数组元素的兼容性
let p1;
p1.push(123);
let p2;
p1 = p2;
// 定义一个数组类型满足 兼容所有数组类型
// any[] unknown[]
// 定义一个兼容与任何数组的数组类型
// undefined[] null[] any[]
// 多个类型间使用 | 联接组成一个类型（联合类型）
// 通过type关键字给自定义的类型定义名称 以便直接使用名称使用
// type也可以给内置类型给名字
let u7 = [1, "1", false, undefined];
// u8是元组
let u8 = [1, "1", false, undefined];
// 1 | "1" | false
// 如果要给一个定义好的元组添加一个元素（必须兼容元组中所有类型组成的联合类型）
// 元组对越界元素的精准处理
u8.push();
let u9 = [
    1,
    "1",
    false,
    undefined,
];
// p3只能是空元组
let p3 = [];
// 如何控制类型推导的准确性
// 使用as const (常量断言)
let q1 = 1;
let q2 = 1;
let q3 = [1, "2", false];
let q4 = [1, "2", false];
// 在js中 typeof是检测类型的返回字符串
// 在ts中 typeof返回具体的类型
// 从变量中取类型，使用typeof
let q11;
let q21;
let q31;
let q41;
