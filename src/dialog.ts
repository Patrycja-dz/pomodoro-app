export function openDialog(
  dialog: HTMLDialogElement,
  element: HTMLButtonElement
) {
  element.addEventListener("click", () => {
    dialog?.showModal();
  });
}

export function closeDialog(
  dialog: HTMLDialogElement,
  element: HTMLButtonElement
) {
  element.addEventListener("click", () => {
    dialog?.close();
  });
}
