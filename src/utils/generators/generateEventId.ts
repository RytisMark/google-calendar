declare global {
  interface Window {
    uuidv4(): any;
  }
}

export function generateEventId(): string {
  return window.uuidv4();
}
