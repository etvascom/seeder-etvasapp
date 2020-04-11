import React, { useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Flex, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { trans } from '@shared/i18n'
import { AppContext } from 'app/services/Provider'
import { AssetSkeletons, AssetItem, ModalConfirmation } from '.'

const TOTAL_ASSETS = 30

const AssetsCard = ({ ...props }) => {
  const {
    assets,
    assetToDelete,
    setAssetToDelete,
    requestDeleteAsset,
    availableSlots,
    isDeletingAsset,
    isFetchingAssets,
    isFetchingAvailableSlots,
    setAddAssetVisible
  } = useContext(AppContext)

  const [errorDeleteAsset, setErrorDeleteAsset] = useState()

  const monitored = useMemo(() => (!isFetchingAssets ? assets.length : '...'), [
    isFetchingAssets,
    assets
  ])

  const remainingSuffix = useMemo(() => (availableSlots === 1 ? '' : 's'), [
    availableSlots
  ])

  const remainingAssets = useMemo(
    () => (!isFetchingAvailableSlots ? availableSlots : '...'),
    [isFetchingAvailableSlots, availableSlots]
  )

  const showDeleteAsset = id => () => setAssetToDelete(id)
  const _deleteAsset = async () => {
    const response = await requestDeleteAsset(assetToDelete)
    if (response.success) {
      setAssetToDelete(null)
    }
    if (response.error) {
      setErrorDeleteAsset(response.message)
      console.error('Error caught while deleting an asset from list:', response)
    }
  }

  const hideDeleteModal = () => {
    setAssetToDelete(null)
    setErrorDeleteAsset(null)
  }

  return (
    <Wrapper {...props}>
      <Container>
        <Flex alignItems='center' justifyContent='space-between'>
          <Space pr={{ xs: 1, md: 2 }}>
            <Typography variant='assetsTitle'>
              {trans('My Assets')} ({monitored}/{TOTAL_ASSETS})
            </Typography>
          </Space>
          <Button
            disabled={isFetchingAssets || isFetchingAvailableSlots}
            icon={{ name: 'add' }}
            minWidth='109px'
            onClick={() => setAddAssetVisible(true)}
            title={trans('Add Asset')}
            variant='outlined'
          />
        </Flex>
        <Space mt={1}>
          <Typography variant='assetsDescription'>
            {trans('Monitor and manage your assets here')}
          </Typography>
        </Space>
        <HorizontalLine />
        {isFetchingAssets ? (
          <AssetSkeletons />
        ) : (
          <AssetList assets={assets} showDeleteAsset={showDeleteAsset} />
        )}
        <Space mt={4}>
          <Typography variant='assetsDescription' textAlign='center'>
            {trans(
              `You still have ${remainingAssets} asset${remainingSuffix} left for monitoring`
            )}
          </Typography>
        </Space>
        <ModalConfirmation
          errorMessage={errorDeleteAsset}
          isVisible={assetToDelete != null}
          loading={isDeletingAsset}
          title={trans('Are you sure you want to delete this asset?')}
          cancel={{
            text: trans('Cancel'),
            variant: 'neutral',
            handler: hideDeleteModal
          }}
          confirm={{
            text: trans('Delete'),
            variant: 'danger',
            handler: _deleteAsset
          }}
        />
      </Container>
    </Wrapper>
  )
}

const AssetList = ({ assets, showDeleteAsset, ...props }) => (
  <Flex flexDirection='column' {...props}>
    {assets.map((asset, idx) => (
      <Space key={idx} mt={idx !== 0 ? 4 : 0}>
        <AssetItem details={asset} showDeleteAsset={showDeleteAsset} />
      </Space>
    ))}
  </Flex>
)

const Container = styled.div`
  ${themed('Assets.container')}
`

const HorizontalLine = styled.span`
  ${themed('HorizontalLine')};
`

const Wrapper = styled.div`
  ${themed('Assets.wrapper')}
`

AssetsCard.propTypes = {
  count: PropTypes.shape({
    total: PropTypes.number,
    monitored: PropTypes.number
  }).isRequired
}

AssetsCard.defaultProps = {
  count: {
    total: TOTAL_ASSETS,
    monitored: 0
  }
}

export default AssetsCard
