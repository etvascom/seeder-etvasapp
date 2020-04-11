import React from 'react'
import styled from 'styled-components'
import { Box, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { trans } from '@shared/i18n'

const Alerts = props => (
  <Wrapper mt={4} {...props}>
    <Container>
      <Typography variant='assetsTitle'>{trans('Alerts')}</Typography>

      <Space mt={1}>
        <Typography variant='assetsStatus'>Not Yet Implemented</Typography>
      </Space>
    </Container>
  </Wrapper>
)

const Container = styled.div`
  ${themed('Status.container')}
`

const Wrapper = styled(Box)`
  ${themed('Status.wrapper')}
`

export default Alerts
