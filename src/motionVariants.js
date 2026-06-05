// Shared motion variants. We define them in plain JS so JSX can reference them with single braces.
export const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
export const fadeDown = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
export const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
export const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
export const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
export const scaleIn = { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } };
export const viewportOnce = { once: true, amount: 0.2 };
export const baseTransition = { duration: 0.55, ease: "easeOut" };
export const fadeUpFast = { ...fadeUp };
export const dropdownVariant = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };
