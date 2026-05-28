import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return <h2>Something went wrong.</h2>;
}

export function AppErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}