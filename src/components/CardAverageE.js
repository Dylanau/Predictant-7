import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography} from '@material-ui/core';



export default function CardCV({note}) {
  
  return (
   <div>
     
     <Card elevation = {3}>
       <CardHeader 
       
      title = {note.title}
      //Average Error
   

       />
        <CardContent>
          
          <Typography variant = "body 3" >
         Predicted CV Range:  
          </Typography>
          
        </CardContent>

     </Card>
   </div>
  )
}