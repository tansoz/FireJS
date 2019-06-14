(function(){
    window.$ = function(obj){
        return Fire(obj);
    }
    Array.prototype.constructor = function(){
        this.prototype.constructor();
        this.__proto__.__objname__ = "array";
    }
    var load = new load();
    load.Run();
    function Fire(obj) {
        return jundgeType(obj);
    }
    var isLoad = false;
    function load(){
        var obj = new Object();
        obj.load_func_arr = [];
        obj.Add = function(func){
            obj.load_func_arr.push(func);
        }
        obj.Run = function(){
            window.addEventListener('load',function(){
                isLoad = true;
                for(i in obj.load_func_arr){
                    var func = obj.load_func_arr[i];
                    func();
                }
            });
        }
        return obj;
    }
    function jundgeType(obj){
        console.log(obj);
        console.log(typeof(obj));
        switch(typeof(obj)){
            case "function":
                if(!isLoad){
                    load.Add(obj);
                }else{
                    obj();
                }
                break;
            case "string":
                selector(obj);
                console.log(obj);
                break;
            case "object":
                if(obj.length!="undefined"){
                    return arrayHandler(obj);
                }
                break;

        }
    }
    function selector(selector){
        var firstStep = selector.split(" ");
        console.log(firstStep);
        for(var i = 0;i<firstStep;i++){

        }
    }
    function arrayHandler(arr){
        var obj = new Object();
        obj.foreach = function(func){
            for(key in arr){
                func(arr[key],key);
            }
        }
        return obj;
    }

})();