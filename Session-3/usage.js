const mymodule= require('./utility/module')//imported my module here

mymodule.addStudent({id:1,name:"Krishna"});
mymodule.addStudent({id:2,name:"Parth"});
mymodule.addStudent({id:3,name:"Pooja"})

mymodule.updateById({id:3,name:"Pooja Soni"})

mymodule.getAllStudents();

mymodule.getById(2);

mymodule.removeById(2);
mymodule.getAllStudents();