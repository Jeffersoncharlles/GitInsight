import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback: (error: Error, reset: () => void) => ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { error: null }

  public static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  private reset = () => {
    this.setState({ error: null })
  }

  public render() {
    if (this.state.error) {
      return this.props.fallback(this.state.error, this.reset)
    }
    return this.props.children
  }
}
