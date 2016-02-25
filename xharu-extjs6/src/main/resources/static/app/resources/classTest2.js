/*
 * 부모 클래스
 * */
Ext.define('Shape', {
    config:{
        x:0, y:0
    },
    constructor:function(config){
        this.initConfig(config);
    },
    draw:function(){
        console.log('x : ' + this.getX() + '\ny : ' + this.getY());
    }
});

/*
 * 자식 클래스
 * */
Ext.define('Rect', {
    extend:'Shape',
    config:{
        width:0, height:0
    },
    constructor:function(config){
        this.initConfig(config);
    },
    draw:function(){
        console.log('x : ' + this.getX() + '\ny : ' + this.getY() + '\nwidth : ' + this.getWidth() + '\nheight : ' + this.getHeight());
    }
});

console.log('Test 9');
var rect = Ext.create('Rect', {
    x:100, y:50, width:300, height:200
});
rect.draw();

/*
* 클래스의 정적 속성
* */
Ext.define('AppConfig', {
    statics:{
        url:'default url',
        getURL:function(){
            return AppConfig.url;
        },
        setURL:function(value){
            this.url = value;
        }
    },
    config:{
        name:null
    },
    constructor:function(config){
        this.initConfig(config);
    },
    getAppInfo:function(){
        return 'name : ' + this.getName() + '\ninstance access url : ' + this.statics().getURL();
    }
});

console.log('Test 10');
var myApp = Ext.create('AppConfig', {
    name:"My App"
});
console.log('static member access\n' + myApp.getAppInfo() + '\nclass access url : ' + AppConfig.url);
myApp.statics().setURL('new url');
console.log('changed url');
console.log('static member access\n' + myApp.getAppInfo() + '\nclass access url : ' + AppConfig.url);

/*
 * 싱글톤 클래스
 * */
Ext.define('Message', {
    singleton:true,
    config:{
        messages:{a:1, b:2, c:3}
    },
    constructor:function(config){
        this.initConfig(config);
    },
    getMessage:function(key){
        return this.getMessages()[key];
    }
});

console.log('Test 11');
console.log('b key message : ' + Message.getMessage('b'));

console.log('Test 12');
try{
    var message = Ext.create('Message', {
        messages:{
            a:10, b:20, c:30
        }
    });
    console.log('b key message : ' + message.getMessage('b'));
    console.log('b key message : ' + Message.getMessage('b'));
}catch(e){
    console.log('싱글톤 클래스는 직접 객체를 생성하려고 시도하면 에러가 발생한다.\n' + e.message);
}
