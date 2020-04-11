import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, IconButton, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

const AssetItem = ({
  showDeleteAsset,
  details: { assetId, type, value, maskedValue },
  ...props
}) => {
  const iconName = (() => {
    switch (type) {
      case 'email':
      case 'EMAIL':
        return 'email'
      case 'id':
        return 'perm_identity'
      case 'creditCard':
        return 'credit_card'
      case 'phone':
        return 'smartphone'
      case 'passportnumber':
        return 'book'
      default:
        return null
    }
  })()

  return (
    <Space p={3}>
      <ItemContainer {...props}>
        <Icon name={iconName} fontSize={4} />
        <ItemText ml={{ xs: 2, md: 4 }}>
          <Typography>{value || maskedValue}</Typography>
        </ItemText>
        <IconButton
          name='delete'
          fontSize={4}
          onClick={showDeleteAsset(assetId)}
        />
      </ItemContainer>
    </Space>
  )
}

const ItemContainer = styled.div`
  ${themed('Assets.item')};
`

const ItemText = styled.div`
  ${themed('Assets.itemText')};
`

AssetItem.propTypes = {
  showDeleteAsset: PropTypes.func,
  details: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
    assetId: PropTypes.string,
    maskedValue: PropTypes.string
  })
}

export default AssetItem
