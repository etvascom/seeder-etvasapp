/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Box } from '@kogaio/Responsive'
import { themeGet } from '@kogaio/utils'

const Skeleton = ({
  bg,
  className,
  count,
  duration,
  height,
  highlight,
  round,
  width,
  ...passedProps
}) => (
  <SkeletonItem
    as='span'
    background={bg}
    borderRadius={width && height && round ? 'round' : 4}
    className={`skeleton-item ${className}`}
    duration={duration}
    height={height}
    highlight={highlight}
    width={width || 1}
    {...passedProps}>
    &zwnj;
  </SkeletonItem>
)

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(100% + 200px) 0;
  }
`
const background = ({ bg }) => themeGet('colors.skeletonBg', bg)
const highlight = ({ highlight }) => themeGet('colors.skeletonHighlight', highlight)

export const SkeletonItem = styled(Box)`
  animation: ${skeletonKeyframes} ${({ duration }) => String(duration)}s
    ease-in-out infinite;
  background-color: ${background};
  background-image: linear-gradient(
    90deg,
    ${background},
    ${highlight},
    ${background}
  );
  background-repeat: no-repeat;
  background-size: 200px 100%;
  display: inline-block;
  line-height: 1;
`

Skeleton.propTypes = {
  bg: PropTypes.string,
  className: PropTypes.string,
  count: PropTypes.number,
  duration: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  highlight: PropTypes.string,
  round: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
}

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  height: null,
  round: false,
  width: null
}

export default Skeleton
