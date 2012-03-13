var library = 
(function(container) {
    var stringify = function(obj, rootName) {
        var content = '',
            attributes = '';
                
        if(obj !== null && obj !== undefined && typeof obj === 'object') {
            if(obj instanceof Array) {
                for(var i=0; i<obj.length;i++) {
                    content += stringify(obj[i]);
                }
            } else {
                for(var prop in obj) {
                    if(obj.hasOwnProperty(prop)) {
                        if(prop.match(/^@/) == '@'){
                            attributes += ' ' + prop.substr(1) + '=\"' + obj[prop] + '\"'; 
                        } else {
                            content += stringify(obj[prop], prop);                        
                        }
                    }
                }
            }
        } else {
            content = obj.toString();
        }
        return rootName ? '<' + rootName + attributes + '>' + content + '</' + rootName + '>' : content;
    };
    container.stringify = stringify;
    return container;
});



var useAMD = typeof define === "function",
    root = this;

if (typeof exports === 'undefined') {
    root.JSONX = root.JSONX || {};
}

if (useAMD) {
    define('./jsonx', [], function() {
        return library(root.JSONX || exports);
    });
} else {
    library(root.JSONX || exports);    
}
