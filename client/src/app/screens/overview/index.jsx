import React, { useContext } from 'react'
import { Panel } from '@shared/components'
import { Typography, Space, Box } from '@etvas/etvaskit'
import { ApiContext } from '../../services/ApiProvider'
import { trans } from '@shared/i18n'
import NavBar from '../../navigation/NavBar'

const OverviewScreen = () => {
  const { customer } = useContext(ApiContext)

  return (
    <>
      <Typography variant='titleLarge' as='h1'>
        {trans('Overview')}
      </Typography>
      <NavBar />
      <Panel>
        <Panel.Section>
          <Typography as='h2'>{trans('Customer')}</Typography>
          <Space mt={6}>
            <Box>
              <Typography variant='labelSamll'>{trans('ID')}</Typography>
              <Typography as='h4' mt={0}>
                {customer ? customer.id : '...'}
              </Typography>
            </Box>
            <Box>
              <Typography variant='labelSamll'>
                {trans('First name')}
              </Typography>
              <Typography as='h4' mt={0}>
                {customer ? customer.firstName : '...'}
              </Typography>
            </Box>
            <Box>
              <Typography variant='labelSamll'>{trans('Last name')}</Typography>
              <Typography as='h4' mt={0}>
                {customer ? customer.lastName : '...'}
              </Typography>
            </Box>
          </Space>
        </Panel.Section>
      </Panel>
    </>
  )
}

export default OverviewScreen
