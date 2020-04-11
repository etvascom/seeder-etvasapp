export const addAssetFormLayout = (assetTypes, countryCodes) => [
  {
    rowId: 'types',
    fields: [
      {
        width: 2,
        id: 'assetType',
        name: 'assetType',
        type: 'select',
        options: assetTypes,
        placeholder: 'Select asset type',
        label: 'Your Asset Type',
        validate: ['required']
      }
    ]
  },
  {
    rowId: 'country-code',
    fields: [
      {
        width: 2,
        id: 'countryCode',
        disabled: true,
        name: 'countryCode',
        type: 'select',
        options: countryCodes,
        placeholder: 'Country Code',
        label: 'Your Country Code',
        validate: ['required']
      }
    ]
  },
  {
    rowId: 'details',
    fields: [
      {
        width: 2,
        id: 'assetDetails',
        name: 'assetDetails',
        type: 'text',
        placeholder: 'Asset details',
        label: 'Your Asset Details',
        validate: ['required']
      }
    ]
  }
]

export const getActions = ({ handleSubmit, handleCancel }) => [
  {
    type: 'button',
    name: 'Cancel',
    label: 'Cancel',
    variant: 'neutral',
    handler: handleCancel
  },
  {
    type: 'submit',
    name: 'Save',
    label: 'Add Your Asset',
    variant: 'productPurchase',
    action: handleSubmit
  }
]
