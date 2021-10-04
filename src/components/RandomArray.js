import React from 'react'
//forwarding refs to DOM components
export const RandomArray = React.forwardRef((props, ref) => {
  return (
    <div style={{ 'display': 'flex', alignItems: 'flex-end' }} ref={ref} className='items'>
      {props.randomArray.map((num, index) => {
        return (
          <div key={index} style={{ height: num * 20 + 'px' }} className='item'>
            <p id="barValue">{num}</p>
          </div>
        )
      })}
    </div>
  )
})
