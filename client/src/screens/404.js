import React from 'react'
import sad from '../svg_icons/sad-outline.svg'

export default function ErrorPage(props){
    return(
        <div style={{display:'flex',position:'absolute',backgroundColor:'#f1f2f6',width:'100%', height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <ion-icon className="ui" src={sad}></ion-icon>
            <p>resource Not found</p>
            <p>404 page url not found on server</p>
            <p>check url</p>
            
        </div>
    )
}