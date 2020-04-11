import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { Skeleton } from '@shared/components'
import { trans } from '@shared/i18n'
import { AppContext } from 'app/services/Provider'

const StatusCard = ({ status, ...props }) => {
  const { isFetchingAssets, isFetchingAvailableSlots } = useContext(AppContext)
  return (
    <Wrapper {...props}>
      <Container>
        <Typography variant='assetsTitle'>{trans('My Status')}</Typography>
        {isFetchingAssets || isFetchingAvailableSlots ? (
          <Space my={6}>
            <Skeleton
              width={{ xs: '80px', lg: '100px' }}
              height={{ xs: '80px', lg: '100px' }}
              round
            />
          </Space>
        ) : (
          <IconWrapper>
            <Icon
              color='accentGreen'
              name='security'
              fontSize={{ xs: 3, md: 5 }}
            />
          </IconWrapper>
        )}
        <Space mt={1} mx='auto'>
          {isFetchingAssets || isFetchingAvailableSlots ? (
            <Skeleton height='21px' width='180px' />
          ) : (
            <Typography variant='assetsStatus'>
              {trans(`Monitored assets: ${status}`)}
            </Typography>
          )}
        </Space>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  ${themed('Status.container')}
`

const IconWrapper = styled.div`
  ${themed('Status.iconWrapper')}
`

const Wrapper = styled.div`
  ${themed('Status.wrapper')}
`

StatusCard.propTypes = {
  status: PropTypes.string
}

export default StatusCard
