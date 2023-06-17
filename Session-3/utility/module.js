students=[]

const addStudent=(student)=>{
    students.push(student);
    console.log("Added successfully")
}

const getAllStudents=()=>{
    students.forEach(element => {
        console.log(element.id,element.name)
    });
}

const getById=(id)=>{
    result =students.find((ele)=>ele.id==id);
    console.log(result.id+" "+result.name)
}
const updateById=(student)=>{
    const index=students.findIndex((ele)=>ele.id==student.id);
    if(index>0){
        students[index]=student;
        console.log("updated successfully")
    }else{
        console.log("No students present to update")
    }
}

const removeById=(id)=>{
    const index=students.findIndex((ele)=>ele.id==id);
    students.splice(index,1);
    console.log("Deleted successfully")
}

module.exports={
    addStudent,
    removeById,
    getAllStudents,
    getById,
    updateById
}
