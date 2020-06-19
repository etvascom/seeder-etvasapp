import React from 'react'
import { Flex, Icon, Typography } from '@etvas/etvaskit'
import { T } from '@etvas/i18n'

const UnauthorizedScreen = () => (
  <Flex
    alignItems='center'
    flexDirection='column'
    justifyContent='center'
    position='absolute'
    width='100%'
    height='100%'>
    <Icon color='error' name='alertCircle' size='40px' />
    <Typography variant='titleLarge' mt={2}>
      <T label='error.authFailed' />
    </Typography>
  </Flex>
)

export default UnauthorizedScreen
