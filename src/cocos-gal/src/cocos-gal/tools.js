var CocosGalTools = {
    trace: function(){
        cc.log(Array.prototype.join.call(arguments, ", "));
    },

    objToJson: function(o){
        var cache = [];
        return JSON.stringify(o, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
    },

    traceObj: function(obj){
        this.trace(this.objToJson(obj));
    },

    readJson: function(str){
        var result = null;
        cc.loader.load(str, function(err, results){
            if(err){
                this.trace("Failed to load" + str + ", Err message: " + err);
                return;
            }
            result = results[0];
        });
        return result;
    },

    findFont: function(resource) {
        if (cc.sys.isNative) {
            return resource.srcs[0];
        } else {
            return resource.name;
        }
    }
};