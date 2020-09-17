import React from 'react'


const Rainbow =(WrappedComponent) =>{
   const colours =['red', 'pink', 'orange', 'blue' ,'green', 'yelllow']
   const randomColours = colours[ Math.floor(Math.random() * 5)]
   const className = randomColours+ '-text'
   return(props) => {
    //    console.log( )
       return (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
      )
   }
}


export default Rainbow;