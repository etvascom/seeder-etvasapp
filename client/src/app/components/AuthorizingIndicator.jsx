import React from 'react'
import { ActivityIndicator, Flex, Space } from '@kogaio'
import { Typography } from '@etvas/etvaskit'
import { trans } from '@shared/i18n'

const AuthorizingIndicator = () => (
  <Flex
    alignItems='center'
    flexDirection='column'
    justifyContent='center'
    position='absolute'
    width='100%'
    height='100%'>
    <ActivityIndicator
      colors={{ background: 'white', primary: 'info' }}
      size='64px'
    />
    <Space mt={2}>
      <Typography>{trans('Authorizing')}...</Typography>
    </Space>
  </Flex>
)

export default AuthorizingIndicator
