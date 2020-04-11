import React from 'react'
import { Flex, Icon, Typography } from '@kogaio'
import { trans } from '@shared/i18n'

const UnauthorizedScreen = () => (
  <Flex
    alignItems='center'
    flexDirection='column'
    justifyContent='center'
    position='absolute'
    width='100%'
    height='100%'>
    <Icon color='red' fontSize={{ xs: '4rem', lg: '6rem' }} name='error' />
    <Typography fontSize={{ xs: 3, lg: 4 }} position='absolute'>
      {trans('Authorization Failed')}
    </Typography>
  </Flex>
)

export default UnauthorizedScreen
