import React, { createContext, useContext } from "react";

type ModalContextType = {
  isOpen: boolean;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal components must be used inside Modal");
  }

  return context;
}

type ModalProps = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, close, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ isOpen, close }}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            minWidth: "300px",
          }}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export function ModalHeader({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>;
}

export function ModalBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ModalFooter() {
  const { close } = useModalContext();

  return (
    <button onClick={close}>
      Close
    </button>
  );
}