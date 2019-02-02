interface String {
    CountAll(sign: string): number
}

String.prototype.CountAll = function(sign) {
    var count = 0;
    for(var i=0; i<this.length; i++) {
        if (this[i] == sign) {
            count++;
        }
    }
    return count;
}
var text = "blaaa";
var count = text.CountAll("a");