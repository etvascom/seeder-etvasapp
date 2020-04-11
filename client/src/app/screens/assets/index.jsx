import React from 'react'
import { Box } from '@kogaio/Responsive'

import { AssetsCard, AddAssetModal } from '@shared/components'

const AssetsScreen = props => {
  return (
    <Box>
      <AssetsCard count={{ total: 30, monitored: 0 }} />
      <AddAssetModal />
    </Box>
  )
}

export default AssetsScreen
