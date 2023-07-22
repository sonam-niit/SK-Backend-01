const bcrypt= require('bcrypt');
const plainText="Sonam@123"; //While Registering

async function genhash(){
    const saltRounds=10;
    try {
        const key =await bcrypt.hash(plainText,saltRounds);
        return key;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function login(password){
    const dbPwd=await genhash(); //$2b$10$MTBcAx5k1yOFJj.opqI5/ubiDHlFWCaDvZ5QL9nmjP6Xh4UgGPkCe
    try {
       const res =await bcrypt.compare(password,dbPwd);
       if(res){
        console.log("Successfully Logged In..!!");
       }else{
        console.log("Wrong Password..!!");
       }
    } catch (error) {
        console.log(error);
    }
    
}

login("Sonam@1234");
