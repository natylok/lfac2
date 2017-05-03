export const OPEN_MODAL = "OPEN_MODAL";
export function openModal(modelState) {
    return { type: OPEN_MODAL, modelState: modelState };
}

export const CLOSE_MODAL = "CLOSE_MODAL";
export function closeModal(modelState) {
    return { type: CLOSE_MODAL, action: {} };
}

