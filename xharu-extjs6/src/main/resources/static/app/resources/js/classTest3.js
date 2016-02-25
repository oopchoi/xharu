// 클래스 js 파일 로딩 (index.html이 있는 위치를 클래스 패스로 인식한다.)
Ext.require('resources.js.ClassA');
Ext.require('resources.js.ClassB');
Ext.require('resources.js.ClassC');

Ext.onReady(function(){
    console.log('Test 13');
    var a = Ext.create('resources.js.ClassA');
    var b = Ext.create('resources.js.ClassB');
    var c = Ext.create('resources.js.ClassC');
    console.log('a : ' + a.getClsName() + '\nb : ' + b.getClsName() + '\nc : ' + c.getClsName() + '\nsuper of c : ' + c.getSupperClsName());
});
