import create from 'zustand'

const useOverlayStore = create((set) => ({
    overlayStaus: false,
    openOverlay: () => set({ overlayStaus: true }),
    closeOverlay: () => set({ overlayStaus: false })
}))

const useModalStore = create((set) => ({
    modalStatus: false,
    openModal: () => set({ modalStatus: true }),
    closeModal: () => set({ modalStatus: false }),
    toggleModal: () => set((state) => ({ modalStatus: !state.modalStatus })),
}))

export { useOverlayStore, useModalStore }
