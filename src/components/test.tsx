import * as React from 'react'
import Button from '@mui/material/Button'

export const ButtonUsage: React.FC<IButtonUsage> = ({ title }) => {
  return <Button variant='contained'>{title}</Button>
}
