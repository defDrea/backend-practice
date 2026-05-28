import { lazy, Suspense } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./components/modal";
import { useModal } from "./hooks/useModal";
import { Loader } from "./components/Loader";
import { AppErrorBoundary } from "./components/ErrorBoundary";

const Dashboard = lazy(() =>
  import("./components/dashboard/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);

const VirtualizedTable = lazy(() =>
  import("./components/table/VirtualizedTable").then((module) => ({
    default: module.VirtualizedTable,
  }))
);

function App() {
  const { isOpen, open, close } = useModal();

  return (
    <AppErrorBoundary>
      <div style={{ padding: "20px" }}>
        <h1>Advanced React Patterns Project</h1>

        <button onClick={open}>
          Open Modal
        </button>

        <Modal isOpen={isOpen} close={close}>
          <ModalHeader>
            Compound Component Modal
          </ModalHeader>

          <ModalBody>
            This is a reusable modal system.
          </ModalBody>

          <ModalFooter />
        </Modal>

        <Suspense fallback={<Loader />}>
          <Dashboard />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <VirtualizedTable />
        </Suspense>
      </div>
    </AppErrorBoundary>
  );
}

export default App;