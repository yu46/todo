import React from 'react'

import Link from './Link'
import { VisibilityFilters } from '../actions/'

const Footer = () => (
  <footer>
    <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
    <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
    <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    <Link filter={VisibilityFilters.SHOW_IMPORTANT}>important</Link>
  </footer>
)

export default Footer