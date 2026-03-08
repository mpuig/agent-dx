import { useMDXComponents as getNextraMDXComponents } from 'nextra/mdx-components'
import {
  Hero,
  Contrast,
  PrincipleGrid,
  Section,
  SectionDivider,
  Callout,
  CodePair,
  Diagram,
  Checklist,
  CheckItem,
} from './components/landing'

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...getNextraMDXComponents(),
    Hero,
    Contrast,
    PrincipleGrid,
    Section,
    SectionDivider,
    Callout,
    CodePair,
    Diagram,
    Checklist,
    CheckItem,
    ...components,
  }
}
