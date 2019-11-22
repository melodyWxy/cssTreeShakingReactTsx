function inc (){

    var i = 0 ;
    return function(){
        i=i+1;
        console.log(i);
        return i;
    }
}

var fn1 = inc();
var fn2 = inc();
var fn3 = inc();
var fn4 = inc();
fn1() 
fn2()
fn3()
fn4();
