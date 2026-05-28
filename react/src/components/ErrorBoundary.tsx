import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return <h2>Something went wrong.</h2>;
}

export function AppErrorBoundary({ children }: any) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}