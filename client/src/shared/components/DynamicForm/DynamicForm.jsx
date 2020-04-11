import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import { Flex, Box } from '@kogaio'

import DynamicShadow from './DynamicShadow'
import DynamicStatus from './DynamicStatus'
import DynamicField from './DynamicField'
import DynamicActions from './DynamicActions'

import validateValues from './validateValues'

const DynamicForm = ({
  name,
  grid,
  gutter,
  vSpacing,
  blur,
  errorDisplay,
  initialValues,
  layout,
  actions,
  errors,
  ...props
}) => {
  const validationRules = layout.reduce((rules, row) => {
    const fieldValidations = row.fields.reduce((fieldRules, field) => {
      if (field.validate) {
        fieldRules[field.name] = field.validate
      }
      return fieldRules
    }, {})
    return {
      ...rules,
      ...fieldValidations
    }
  }, {})

  const _handleValidation = values => {
    let validationErrors = validateValues(values, validationRules)
    if (errors && Object.keys(errors).length > 0) {
      validationErrors = {
        ...validationErrors,
        ...errors
      }
    }

    return validationErrors
  }

  const _handleSubmit = async (values, formActions) => {
    const { setSubmitting, setStatus, setErrors } = formActions
    setStatus()
    const submitButton = actions.find(button => !!button.action)
    if (submitButton) {
      const result = await submitButton.action(values, formActions)
      if (result?.hasErrors) {
        setStatus(result.errorMessage)
        setErrors(result.fieldErrors)
      }
    } else {
      console.warn('* DynamicForm: could not find a submit action.')
    }
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues || {}}
      validate={_handleValidation}
      onSubmit={_handleSubmit}
      >
      {({ isSubmitting, status, setStatus }) => (
        <StyledForm {...props}>
          <Form noValidate>
            <DynamicShadow visible={blur && isSubmitting} />
            {errorDisplay === 'top' ? <DynamicStatus title={status} /> : null}
            {layout.map(row => (
              <Flex mx={-gutter} key={`dyn-${name}-${row.rowId}`}>
                {row.fields.map(field => (
                  <StyledCell
                    key={`dyn-${name}-${row.rowId}-${field.id}`}
                    mx={gutter}
                    mb={vSpacing}
                    layout={field.width / grid}>
                    <DynamicField {...field} />
                  </StyledCell>
                ))}
              </Flex>
            ))}
            {errorDisplay === 'bottom' ? (
              <DynamicStatus title={status} />
            ) : null}
            <DynamicActions layout={actions} clearFormStatus={() => setStatus(null)} />
          </Form>
        </StyledForm>
      )}
    </Formik>
  )
}

const StyledForm = styled.div`
  position: relative;
`

const StyledCell = styled(Box)`
  flex: 0 1 ${({ layout }) => `${layout * 100}%`};
`

DynamicForm.propTypes = {
  name: PropTypes.string,
  initialValues: PropTypes.object,
  blur: PropTypes.bool,
  grid: PropTypes.number,
  gutter: PropTypes.number,
  vSpacing: PropTypes.number,
  errorDisplay: PropTypes.string,
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      rowId: PropTypes.string,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          width: PropTypes.number,
          id: PropTypes.string,
          name: PropTypes.string,
          value: PropTypes.any
        })
      )
    })
  ),
  actions: PropTypes.array,
  errors: PropTypes.object
}

DynamicForm.defaultProps = {
  blur: true
}

export default DynamicForm
