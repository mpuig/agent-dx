'use client'

import { type ReactNode, useRef, useEffect } from 'react'

export function Hero({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle: string
}) {
  return (
    <header className="hero">
      <div className="hero-label">{label}</div>
      <h1>{title}</h1>
      <p className="hero-sub">{subtitle}</p>
    </header>
  )
}

export function Contrast() {
  return (
    <div className="contrast">
      <div className="contrast-inner">
        <div className="contrast-human">
          <h3>Human DX</h3>
          <ul>
            <li>Terse flags and muscle memory</li>
            <li>Free-form, colorized output</li>
            <li>Interactive prompts when unsure</li>
            <li>
              Learn through <code>--help</code> and Stack Overflow
            </li>
            <li>Mistakes are typos</li>
          </ul>
        </div>
        <div className="contrast-agent">
          <h3>Agent DX</h3>
          <ul>
            <li>Structured JSON payloads</li>
            <li>Machine-readable, minimal output</li>
            <li>Fail fast with errors the agent can parse</li>
            <li>Learn through runtime schema introspection</li>
            <li>Mistakes are hallucinations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const principles = [
  {
    num: '01',
    href: '#structured-data',
    title: 'Structured data over flags',
    desc: 'Accept JSON payloads that map directly to your API. No translation loss, no flag ambiguity.',
  },
  {
    num: '02',
    href: '#schema-introspection',
    title: 'Runtime schema introspection',
    desc: 'Make the tool itself the documentation. Queryable at runtime, always current.',
  },
  {
    num: '03',
    href: '#context-discipline',
    title: 'Context-window discipline',
    desc: 'Every byte of output costs tokens. Be compact by default, verbose on request.',
  },
  {
    num: '04',
    href: '#untrusted-input',
    title: 'Untrusted input hardening',
    desc: 'Agents hallucinate. Validate with the same rigor as a public-facing API.',
  },
  {
    num: '05',
    href: '#skills',
    title: 'Skills encode expertise',
    desc: '--help lists flags. Skills teach workflow. Big difference.',
  },
  {
    num: '06',
    href: '#progressive-disclosure',
    title: 'Progressive disclosure',
    desc: 'Give the agent a map, not a manual. Load information in layers, on demand.',
  },
  {
    num: '07',
    href: '#orchestration',
    title: 'Orchestration and contracts',
    desc: 'File-based contracts between steps. State machines with quality gates, not linear pipelines.',
  },
  {
    num: '08',
    href: '#safety-rails',
    title: 'Safety rails',
    desc: 'Dry-run before mutating. Sanitize responses. The agent is not a trusted operator.',
  },
]

export function PrincipleGrid() {
  return (
    <div className="section section-wide" id="principles">
      <div className="section-num">Eight principles</div>
      <h2>What agent-first tooling looks like</h2>
      <p className="section-lead">
        Agents are fast, confident, and wrong in ways humans never are. These
        are the patterns that keep them from breaking your stuff.
      </p>
      <div className="principles">
        {principles.map((p) => (
          <a key={p.num} href={p.href} className="principle-card">
            <div className="principle-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export function Section({
  label,
  id,
  title,
  children,
}: {
  label: string
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="section" id={id}>
      <div className="section-num">{label}</div>
      <h2>{title}</h2>
      <div className="prose">{children}</div>
    </div>
  )
}

export function SectionDivider() {
  return <hr className="section-divider" />
}

export function Callout({ children }: { children: ReactNode }) {
  return <div className="callout">{children}</div>
}

export function CodePair({
  leftLabel,
  rightLabel,
  leftCode,
  rightCode,
}: {
  leftLabel: string
  rightLabel: string
  leftCode: string
  rightCode: string
}) {
  return (
    <div className="code-pair">
      <div>
        <div className="code-label">{leftLabel}</div>
        <pre>
          <code>{leftCode}</code>
        </pre>
      </div>
      <div>
        <div className="code-label">{rightLabel}</div>
        <pre>
          <code>{rightCode}</code>
        </pre>
      </div>
    </div>
  )
}

export function Diagram({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = typeof children === 'string' ? children : ''
    if (!text || !containerRef.current) return

    let cancelled = false
    import('mermaid').then(({ default: mermaid }) => {
      if (cancelled) return
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#3b82f6',
          primaryTextColor: '#e2e8f0',
          primaryBorderColor: '#475569',
          lineColor: '#64748b',
          secondaryColor: '#1e293b',
          tertiaryColor: '#0f172a',
          fontSize: '14px',
        },
      })
      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`
      mermaid.render(id, text).then(({ svg }) => {
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
        }
      })
    })

    return () => { cancelled = true }
  }, [children])

  return <div className="diagram" ref={containerRef} />
}

export function Checklist({ children }: { children: ReactNode }) {
  return <ol className="checklist">{children}</ol>
}

export function CheckItem({
  num,
  title,
  children,
}: {
  num: string
  title: ReactNode
  children: ReactNode
}) {
  return (
    <li>
      <span className="check-num">{num}</span>
      <span className="check-text">
        <strong>{title}</strong>
        {children}
      </span>
    </li>
  )
}
