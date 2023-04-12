import React from 'react'

const PageWrapper = (props) => {

  const centered = props.centered;

  if ( Boolean(centered) === true ){

    return (
      <div className='pagewrappercentered'>
        {props.children}
      </div>
    )

  } else {

    return (
      <div className='pagewrapper'>
        {props.children}
      </div>
    ) 

  }
  
}

export default PageWrapper