"use client"

import NestedList from "@/components/NestedList"
 


import Image from 'next/image'
import Button ,  { ButtonProps } from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';

import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { purple } from '@mui/material/colors';

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

import FormControl from '@mui/material/FormControl';

import { useState } from 'react';


import localFont from 'next/font/local';

import Container from '@mui/material/Container';


import { createTheme , ThemeProvider } from '@mui/material/styles';


import Grid from '@mui/material/Grid';


const theme = createTheme({
  direction: 'rtl',
});
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../fonts/Vazirmatn-FD-Regular.woff2' })




const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width : '20em',
  fontSize : '1em',
}));



function Forum() {

  const [ show , setShow ] = useState(false);


  return <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  
>

  <div>
  <TextField 
  inputProps={{style: {fontSize: 18 , fontFamily : 'vazir'}}} // font size of input text
  InputLabelProps={{style: {fontSize: 18 , fontFamily : 'vazir'}}} // font size of input label
   id="outlined-basic"  placeholder="نام کاربری" variant="outlined"  type="text"  sx={{ width: '20em' }} />
  { show && <FormHelperText id="my-helper-text"  className="vazir-font">
  text
  </FormHelperText> }
  </div>


  <div>
  <TextField 
  inputProps={{style: {fontSize: 20 , fontFamily : 'vazir'}}} // font size of input text
  InputLabelProps={{style: {fontSize: 20 , fontFamily : 'vazir'}}} // font size of input label
  id="outlined-basic"  placeholder="رمز عبور" variant="outlined" type="password"  sx={{ width: '20em' }} />
  { show && <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> }
  </div>

  <div>
    <Button className="vazir-font"  variant="contained" sx={{ width: '23em' , padding : '1em 0' }}>
    ورود
    </Button>
  </div>

</Box>
}





const CenterGrid = styled(Grid)<ButtonProps>(({ theme }) => ({
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  height : '100vh'
}));




export default function Home() {


  return (

      <>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            
            <Grid item xs={3}>
              <NestedList />
            </Grid>
            <CenterGrid item xs={7}>
              <Forum />
            </CenterGrid>

          </Grid>
        </Box>



      </>

  )
}