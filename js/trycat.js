try{
    "use strict";
    var x = 5;
    var y = 3;
    var z = x + y ;
    document.writeln(`${x} + ${y} = ${z}`);
}
catch(err){
    document.write(err);
    throw("You Can Not Do That");
}

finally{
    document.write("document error");
}