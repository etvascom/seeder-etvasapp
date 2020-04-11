import React, { createContext, useState, useEffect } from 'react'

const client = require('./client')

export const AppContext = createContext()

const Provider = ({ children, ...props }) => {
  const [assets, setAssets] = useState([])
  const [assetToDelete, setAssetToDelete] = useState(null)
  const [isDeletingAsset, setDeletingAsset] = useState(false)
  const [availableSlots, setAvailableSlots] = useState(0)
  const [isFetchingAssets, setFetchingAssets] = useState(false)
  const [isFetchingAvailableSlots, setFetchingAvailableSlots] = useState(false)
  const [isAddAssetVisible, setAddAssetVisible] = useState(false)

  const fetchAssets = async () => {
    setFetchingAssets(true)
    try {
      const response = await client.get('/assets')
      setAssets(response.data)
    } catch (err) {
      console.error('* Error fetching assets', err.response?.data || err)
    } finally {
      setFetchingAssets(false)
    }
  }

  const fetchAvailableSlots = async () => {
    setFetchingAvailableSlots(true)
    try {
      const response = await client.get('/assets/available')
      setAvailableSlots(response?.data.quantity)
    } catch (err) {
      console.error(
        '* Error fetching available slots',
        err.response?.data || err
      )
    } finally {
      setFetchingAvailableSlots(false)
    }
  }

  useEffect(() => {
    fetchAssets()
    fetchAvailableSlots()
  }, [])

  const addNewAsset = async newAsset => {
    try {
      await client.post('/assets', newAsset)
      await fetchAssets()
      await fetchAvailableSlots()
      return { success: true }
    } catch (err) {
      return _handleError(err)
    }
  }

  const requestDeleteAsset = async assetId => {
    setDeletingAsset(true)
    try {
      const { data } = await client.delete(`/assets/${assetId}`)

      await fetchAssets()
      await fetchAvailableSlots()
      return data
    } catch (err) {
      return _handleError(err)
    } finally {
      setDeletingAsset(false)
    }
  }

  function _handleError(err) {
    if (err.response && err.response.data) {
      return {
        error: true,
        code:
          err.response.data.errorCode ||
          err.response.data.code ||
          'INTERNAL_ERROR',
        message:
          err.response.data.userMessage ||
          err.response.data.message ||
          err.message
      }
    }
    return {
      error: true,
      code: 'INTERNAL_ERROR',
      message: err.message
    }
  }

  return (
    <AppContext.Provider
      value={{
        addNewAsset,
        assets,
        assetToDelete,
        setAssetToDelete,
        availableSlots,
        fetchAssets,
        isDeletingAsset,
        isFetchingAssets,
        isFetchingAvailableSlots,
        isAddAssetVisible,
        setAddAssetVisible,
        requestDeleteAsset,
        ...props
      }}>
      {children}
    </AppContext.Provider>
  )
}
export default Provider
