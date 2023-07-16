import react,{useState} from 'react';
import axios from 'axios';

export function Upload(){

	const [imageName,setImageName]= useState();
	
	const handleSubmit=(event)=>{
        event.preventDefault();
        const formData= new FormData();
        formData.append("image",imageName);

        axios.post("http://localhost:5000/imageupload",formData,{
            headers:{"Content-Type":"multipart/form-data"}
        })
        .then((resposne)=>{
            alert("File Uploaded")
        })
        .catch((err)=>{console.log(err)})
	}

	const handleFileSelect=(event)=>{
        setImageName(event.target.files[0]);
	}
	return(
		<div>
			<h1>File Upload Page</h1>
			<form onSubmit={handleSubmit}>

				<input type="file" name="file" id="file"
				onChange={handleFileSelect} />
				<button type="submit">Upload</button>
			</form>
		</div>	
	
	);

}