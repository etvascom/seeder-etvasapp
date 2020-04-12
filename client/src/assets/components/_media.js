import breakpoints from '../core/breakpoints'

export const _media = (breakpoint, rules) => ({
  [`@media (min-width: ${breakpoint})`]: rules,
})

export const _md = rules => ({
  [`@media (min-width: ${breakpoints.md})`]: rules,
})

export const _lg = rules => ({
  [`@media (min-width: ${breakpoints.lg})`]: rules,
})
