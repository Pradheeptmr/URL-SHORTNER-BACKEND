import React,{useEffect,useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {useNavigate } from "react-router-dom";


function ProductComponent(){
  const[productlist,setProductlist]=useState([]);
  const navigate=useNavigate();
  const token=localstorage.getitem("token")
   
  useEffect=async(()=>{
    Jwt.decode(token);
    if(decodeToken.exp*1000<Date.now()) {
      navigate('/');
    }
    var response=axios.get("http://localhost:3002/product/get",{
      headers:{
        ["access-token"]:token
      }
    });
    setProductlist(response.data);
  },[])

  const updateProduct = async (id, userQuantity) =>{
    var decodedToken = jwt.decode(token);
    if(decodedToken.exp * 1000 < Date.now() ){
        navigate('/');
    } else {
        var response = await axios.put(`http://localhost:3002/product/update/${id}`, {
            userQuantity: userQuantity
        }, {
            headers: {
                "access-token": token
            }
        })
    
        var index = productlist.findIndex(row => row.id === id);
        var productlistCopy = [...productlist];
        productlistCopy[index] = response.data.value;
        setProductlist(productlistCopy);
    }
}
const logout = async () => {
        await localStorage.removeItem("token");
    navigate('/')
}

  
  return (
  <>  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guvi-Products
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container spacing={2} style={{margin:"2%"}} >
      {productlist.map(row=>{
       <Grid item key={row_id}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.productName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          price:{row.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Description:{row.description}
        </Typography>
        <Typography variant="body2">
           Quantity:{row.quantity}
          </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={e => updateProduct(row._id, 
        ++row.userQuantity)} disabled={row.userQuantity >= row.quantity}>+</Button>  
                                    {row.userQuantity}
                                <Button onClick={e => updateProduct(row._id, 
      --row.userQuantity)} disabled={row.userQuantity <= 0}>-</Button>
      </CardActions>
    </Card>
    </Grid>
  })}
      
    </Grid>
  </>  

  );
}
 














export default ProductComponent;