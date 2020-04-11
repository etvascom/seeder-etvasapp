import React from 'react'
import { Flex, Space } from '@kogaio'
import { Skeleton } from '.'

const skeletonAssets = Array.from(
  { length: Math.floor(Math.random() * 4) + 1 },
  () =>
    Math.random()
      .toString(36)
      .substring(7)
)

const AssetSkeletons = () => (
  <Flex flexDirection='column'>
    {skeletonAssets.map((asset, idx) => (
      <Space key={asset} mt={idx !== 0 ? 4 : 0}>
        <Skeleton height='48px' />
      </Space>
    ))}
  </Flex>
)

export default AssetSkeletons
