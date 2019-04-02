(function(){
    'use strict';
    var a=[10,20];
   var b=a;
   var a=[30,40];
    console.log(a);
    console.log(b);

    var c={
        name:"radha",
    };
    var d=c;
    d.name="ramesh";
    c.name="rakesh";
    console.log(c);
    console.log(d);
    
//  1.spread operator  var  a={
//         fName:'radha',
//         lName:'parida'
//     }
//    var b={
//         ...a,
//         address:'hyd',
//     }
//     console.log(b);
})();