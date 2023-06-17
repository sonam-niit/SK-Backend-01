export function displayData(data){
    console.log("Following is the Data")
    console.log("=============================");
    console.log(data)
}

export var name="Sonam";

export var log={
    info: function(info){
        console.log('Info: '+info)
    },
    warning: function(warning){
        console.log(`Warning ${warning}`)
    },
    error:function(error){
        console.log(`Error ${error}`)
    }
}