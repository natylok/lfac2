export const OPEN_MODAL = "OPEN_MODAL";
export function openModal(modalState) {
    return { type: OPEN_MODAL, modalState: modalState };
}

export const CLOSE_MODAL = "CLOSE_MODAL";
export function closeModal(modalState) {
    return { type: CLOSE_MODAL, action: {} };
}

