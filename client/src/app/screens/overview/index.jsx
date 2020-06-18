import React, { useContext } from 'react'
import { Typography, Card } from '@etvas/etvaskit'
import { T } from '@etvas/i18n'

import { ApiContext } from '../../services/ApiProvider'

const OverviewScreen = () => {
  const { customer } = useContext(ApiContext)

  return (
    <Card p={[2, 4]}>
      <Typography variant='titleSmall' mb={4}>
        <T label='title.customer' />
      </Typography>

      <Typography variant='labelSmall'>
        <T label='label.id' />
      </Typography>
      <Typography variant='textSmall'>
        {customer ? customer.id : '...'}
      </Typography>
      <Typography variant='labelSmall' mt={2}>
        <T label='label.firstName' />
      </Typography>
      <Typography variant='textSmall'>
        {customer ? customer.firstName : '...'}
      </Typography>
      <Typography variant='labelSmall' mt={2}>
        <T label='label.lastName' />
      </Typography>
      <Typography variant='textSmall'>
        {customer ? customer.lastName : '...'}
      </Typography>
    </Card>
  )
}

export default OverviewScreen
