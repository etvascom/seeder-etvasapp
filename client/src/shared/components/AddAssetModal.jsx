import React, { useContext } from 'react'
import styled from 'styled-components'
import { Flex, IconButton, Typography, Space } from '@kogaio'

import { themed } from '@kogaio/utils'

import { apiErrors } from '@shared/constants'
import { trans } from '@shared/i18n'

import { AppContext } from 'app/services/Provider'
import { DynamicForm } from '.'

import { assetTypes, countryCodes } from '../constants'
import { addAssetFormLayout, getActions } from '../constants/addAssetFormLayout'

const AddAssetCard = props => {
  const { addNewAsset, isAddAssetVisible, setAddAssetVisible } = useContext(
    AppContext
  )

  const hideModal = () => setAddAssetVisible(false)

  const _addAsset = async (
    { assetType, assetDetails, countryCode },
    { setStatus }
  ) => {
    const response = await addNewAsset({
      type: assetType.value,
      value: assetDetails,
      countryCode: countryCode.value
    })
    if (response.error) {
      return setStatus(apiErrors[response.code] ?? 'Unhandled error')
    }
    setAddAssetVisible(false)
  }

  const actions = getActions({
    handleCancel: hideModal,
    handleSubmit: _addAsset
  })

  if (!isAddAssetVisible) return null

  return (
    <ShadowWrapper>
      <Container>
        <Flex alignItems='center' justifyContent='space-between'>
          <Typography variant='modalCardTitle'>{trans('Add asset')}</Typography>
          <IconButton fontSize='1rem' name='close' onClick={hideModal} />
        </Flex>
        <Space pt={{ xs: 4, md: 6 }}>
          <DynamicForm
            name='add-asset'
            grid={2}
            gutter={2}
            vSpacing={2}
            blur
            initialValues={{
              assetType: '',
              assetDetails: '',
              countryCode: countryCodes.find(
                countryCode => countryCode.value === 'DE'
              )
            }}
            errorDisplay='top'
            layout={addAssetFormLayout(assetTypes, countryCodes)}
            actions={actions}
          />
        </Space>
      </Container>
    </ShadowWrapper>
  )
}

const Container = styled.div`
  ${themed('Assets.cardContainer')}
`

const ShadowWrapper = styled.div`
  ${themed('Modal.shadow')};
`

export default AddAssetCard
