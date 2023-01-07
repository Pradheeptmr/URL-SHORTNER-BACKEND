import React, {useState} from "react";
import{Typography,TextField,Button} from'@mui/material';
import axios from "axios";
import{ Navigate, useNavigate} from "react-router-dom"


function LoginComponent() {
    const initialValues={
        email:"",
        password:""
    };
    const [formdata,setFormdata]=useState(initialValues)
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=axios.post("http//localstorage:8000/product",
           {user:{...formdata}});
           localStorage.set("token",response.data);
           Navigate("/product");
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <>
         <div style={{margin:"10%"}} >
            <Typography Variant="h4">LoginComponent</Typography>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div>
                    <TextField 
                    type="text"
                    name="email"
                    label="Email">
                    Value{formdata.email}
                    onChange={(e)=>setFormdata
                    ({...formdata,email:e.target.valve})}
                    </TextField>
                    
                </div>
                <br/>
                <div>
                    <TextField
                     type="password
                    "name="password"
                    label="Password">
                     Value{formdata.password}
                     onChange={(e)=>setFormdata
                     ({...formdata,password:e.target.valve})}
                    </TextField>
                </div>
                <br/>
                <div>
                    <Button 
                    type="submit">
                        submit
                        </Button>
                </div>
            </form>
         </div>
        </>
    )
}

export default LoginComponent;