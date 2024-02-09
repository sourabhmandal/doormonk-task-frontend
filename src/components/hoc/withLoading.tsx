import React from 'react'

export function withLoading<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithLoadingProps> {
  const WithLoading: React.FC<P & WithLoadingProps> = ({ isLoading, ...props }: WithLoadingProps & P) => {
    if (isLoading) {
      return <div>Loading...</div>
    }

    return <WrappedComponent {...(props as P)} />
  }

  return WithLoading
}
