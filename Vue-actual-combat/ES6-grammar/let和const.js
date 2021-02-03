function changeState(flag) {
    if (flag) {
        let color = 'red';
        console.log(color);
    } else {
        console.log(color);//ReferenceError: color is not defined
        return null;
    }
}

changeState(true)
var index = 0;
var index = 10;
// let index = 100;  //会报错
// console.log(index)  //会报错
{
    console.log(index)  //index不在同一个作用域下， 不会报错
}
