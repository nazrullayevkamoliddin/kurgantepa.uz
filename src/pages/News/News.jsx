import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { link } from '../../cfg';
import '../News/news.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function MediaCard() {
  const [isLoad, setIsload] = useState(false)
  const count = 6
  const [state, setState]=useState([])
  const [olds, setOlds]=useState(count-6)
  const [newS, setNews]=useState(count)
  const [currentPage, setCurrentPage]=useState(1)
//   const [page, setPage] = React.useState(1);
// const handleChange = () => {
//     // setCurrentPage(value);
//     setOlds(olds+6)
//     setNews(newS+6)
//     setCurrentPage(currentPage+1)
//   };
  useEffect(()=>{
      axios(link+'/api/base').then(e=>{
          if(e.data.data.length > 0){
              setState(e.data.data.reverse().slice(olds,newS))
              setIsload(true)
          }
          else if(e.status == 404){
              setIsload(false)
          }
      })
  },[] && [currentPage])
  
  function plusPage (){
      if(state.length>count-1){
          setNews(newS+count)
          setOlds(olds+count)
          setCurrentPage(currentPage+1)
          window.scrollTo({top:0, behavior: "smooth"})
      }
  }
  function minusPage (){
      if(olds !== 0){
          setNews(newS-count)
          setOlds(olds-count)
          setCurrentPage(currentPage-1)
          window.scrollTo({top:0, behavior: "smooth"})
      }
  }

  return (
    <div className='now'>
      <div className="load">
           <div className="news">
                    <h2>2022- yil - Inson qadrini ulug'lash va faol mahalla yili</h2>
                   <h2>So'nggi yangiliklar</h2>
            </div>
      </div>  
      
      <>
      <div className="cont">
          {state.map(e=>{
              return(
                    <Card className='cards' sx={{ maxWidth: 320 }} >
                      <CardMedia
                      className='med'
                        component="img"
                        height="200"
                        src={e.images[0].url}
                      />
                       <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                       <p className='par'>{e.title.slice(0,35)}{e.title.length>35?'...':null}</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>{e.about.slice(0,50)}{e.about.length>0?'...':null}</p>
                          </Typography>
                          </CardContent>
                          <CardActions>
                          <Button size="small">Ulashish</Button>
                          <Link to={'/src/'+e._id}><Button size="small">Batafsil</Button></Link>
                        </CardActions>
                      
                </Card>
              )
          })}
      </div>  
      <div className="stak">
      <Stack spacing={5} direction="row">
    <Button className='but' variant="outlined" onClick={()=>{minusPage()}}><i className="fas fa-arrow-left"></i></Button>
    <b className='bold'>{currentPage}</b>
    <Button className='but' variant="outlined" onClick={()=>plusPage()}><i className="fas fa-arrow-right"></i></Button>
    </Stack>
      </div>
  </>
  
  </div>
    
  );
}
