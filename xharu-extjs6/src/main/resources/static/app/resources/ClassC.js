Ext.define('resources.js.ClassC',{
    extend:'resources.js.ClassA',
    requires:['resources.js.ClassA'],
    getClsName:function(){
        return 'ClassC';
    },
    getSupperClsName:function(){
        return this.superclass.getClsName();
    }
});
