import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'

const StarRating = ({star}) => {
  return (
    <div>
        <Box component="fieldset" borderColor="#ff0000">
            <Rating name="read-only" readOnly value={star}/>
        </Box>
    </div>
  )
}

export default StarRating