/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.Loader.loadScript({
            url:'./resources/js/classTest.js',
            onLoad:function(userScope){
                //console.log('로딩한 js 파일에 있는 구문이 모두 실행 된 후...\ncalled double : ' + double(5));
            }
        });

        Ext.Loader.loadScript({
            url:'./resources/js/classTest2.js',
            onLoad:function(userScope){

            }
        });

        Ext.Loader.loadScript({
            url:'./resources/js/classTest3.js',
            onLoad:function(userScope){

            }
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
