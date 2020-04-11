import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { trans } from '@shared/i18n'

const SupportScreen = props => (
  <Wrapper mt={4} {...props}>
    <Container>
      <Typography variant='pageTitle'>{trans('Support')}</Typography>

      <Box style={{ textAlign: 'left' }}>
        <Typography mt={4}>
          Continually harness empowered interfaces via clicks-and-mortar
          markets. Energistically benchmark focused platforms and technically
          sound deliverables. Phosfluorescently communicate cross-media
          collaboration and idea-sharing without vertical meta-services.
          Continually provide access to installed base models vis-a-vis
          cross-unit leadership. Energistically simplify emerging alignments
          rather than global human capital.
        </Typography>

        <Typography mt={4}>
          Holisticly extend efficient niche markets and multidisciplinary
          outsourcing. Proactively leverage existing an expanded array of
          e-tailers before dynamic niche markets. Appropriately facilitate
          integrated action items through cross-platform deliverables.
          Collaboratively leverage other's sustainable niches without emerging
          intellectual capital. Monotonectally enhance progressive data whereas
          multifunctional e-commerce.
        </Typography>

        <Typography mt={4}>
          Quickly disintermediate visionary e-tailers without bleeding-edge
          networks. Interactively target equity invested bandwidth after
          client-centric ROI. Quickly cultivate holistic outsourcing after
          synergistic web services. Objectively disseminate extensive technology
          vis-a-vis revolutionary e-tailers. Credibly syndicate diverse sources
          with value-added materials.
        </Typography>
      </Box>
    </Container>
  </Wrapper>
)

const Container = styled.div`
  ${themed('Page.container')}
`

const Wrapper = styled(Box)`
  ${themed('Page.wrapper')}
`

export default SupportScreen
