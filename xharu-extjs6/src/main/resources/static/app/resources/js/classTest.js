/**
 * Created with IntelliJ IDEA.
 * User: bryan
 * Date: 16. 2. 25
 * Time: 오전 8:26
 * To change this template use File | Settings | File Templates.
 */
var double=function(x){
    return x*x;
};

/*
 * 클래스 선언 (1) : 일반 속성
 * */
Ext.define('Person', {
    name:null,
    age:0,
    isAdult:false,
    constructor:function(name, age, isAdult){
        this.name = name;
        this.age = age;
        this.isAdult = isAdult;
    },
    brief:function(){
        console.log('name : ' + this.name + '\nnage : ' + this.age + '\nisAdult : ' + this.isAdult);
    }
});

console.log('Test 1');
// 객체 생성 후 멤버 접근
var oopchoi = Ext.create('Person');
oopchoi.name = '최성훈';
oopchoi.age = 20;
oopchoi.isAdult = true;
oopchoi.brief();

console.log('Test 2')
// 생성자 함수(constructor)에 인자를 넘기며 객체 생성
var oopchoi2 = Ext.create('Person', '최성훈', 20, true);
oopchoi2.brief();

/*
 * 클래스 선언 (2) : config 속성 - setter와 getter를 자동으로 만들어준다.
 * */
Ext.define('MyShape', {
    config:{
        x:0, y:0, width:0, height:0
    },
    constructor:function(x, y, width, height){
        this.setX(x), this.setY(y), this.setWidth(width), this.setHeight(height)
    },
    draw:function(){
        console.log('x : ' + this.getX() + '\ny : ' + this.getY() + '\nwidth : ' + this.getWidth() + '\nheight : ' + this.getHeight());
    }
});

console.log('Test 3');
// 객체 생성 후 멤버 접근
var shape = Ext.create('MyShape');
shape.setX(100);
shape.setY(50);
shape.setWidth(300);
shape.setHeight(200);
shape.draw();

console.log('Test 4');
var shape2 = Ext.create('MyShape', 100, 50, 300, 200);
shape2.draw();


/*
 * 클래스 선언 (3) : initConfig() 함수에 config 속성 전달하여 초기화
 * */
Ext.define('Car', {
    config:{
        name:null, createAt:null
    },
    constructor:function(config){
        this.initConfig(config);
    },
    run:function(){
        console.log('name : ' + this.getName() + '\ncreateAt : ' + this.getCreateAt());
    }
});

console.log('Test 5');
// 객체 생성 후 멤버 접근
var myCar = Ext.create('Car', {
    name:'oopchoi\'s car', createAt:new Date
});
myCar.run();

console.log('Test 6');
var myCar2 = Ext.create('Car', {
    name:'oopchoi\'s car', createAt:new Date,

    // 객체를 생성하면서 클래스에 지정한 config 속성에 초기 값을 전달하는 기능과 더불어
    // 생성되는 객체에 임의의 메소드나 속성을 추가 할 수 있다.
    speed:0,
    slowMove:function(){
        console.log('slowMove speed : ' + this.speed);
    }
});
myCar2.speed = 20;
myCar2.slowMove();

console.log('Test 7');
try{
    myCar.slowMove();
}catch(e){
    console.log('myCar객체에는 slowMove() 메소드가 없습니다.\n' + e.message);
}


/*
 * 클래스 선언 (4) : config 속성에 변화를 감지하는 apply속성() 메소드
 * */
Ext.define('Dog', {
    config:{
        name:null, age:0
    },
    constructor:function(config){
        this.initConfig(config);
    },
    applyAge:function(newValue, oldValue){
        console.log('age 속성이 변경되었습니다.\nnewValue : ' + newValue + '\noldValue : ' + oldValue + '\n실제 반환하는 값이 속성 값으로 적용됩니다.');
        if(newValue==oldValue){
            return ++newValue;
        }else{
            return newValue;
        }
    },
    balk:function(){
        console.log('called balk() => name : ' + this.getName() + '\nage : ' + this.getAge());
    }
});

console.log('Test 8 : apply속성명() 함수는 같은 이름의 config 속성 값이 변경되면 호출된다.');
var dog = Ext.create('Dog', {
    name:'my dog', age:1
});
dog.balk();
dog.setAge(1);
dog.balk();
