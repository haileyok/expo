// @needsAudit
/**
 * The type of notification feedback generated by a UINotificationFeedbackGenerator object.
 * [`UINotificationFeedbackType`](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype)
 */
export var NotificationFeedbackType;
(function (NotificationFeedbackType) {
    /**
     * A notification feedback type indicating that a task has completed successfully.
     */
    NotificationFeedbackType["Success"] = "success";
    /**
     * A notification feedback type indicating that a task has produced a warning.
     */
    NotificationFeedbackType["Warning"] = "warning";
    /**
     * A notification feedback type indicating that a task has failed.
     */
    NotificationFeedbackType["Error"] = "error";
})(NotificationFeedbackType || (NotificationFeedbackType = {}));
// @needsAudit
/**
 * The mass of the objects in the collision simulated by a UIImpactFeedbackGenerator object
 * [`UINotificationFeedbackStyle`](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle)
 */
export var ImpactFeedbackStyle;
(function (ImpactFeedbackStyle) {
    /**
     * A collision between small, light user interface elements.
     */
    ImpactFeedbackStyle["Light"] = "light";
    /**
     * A collision between moderately sized user interface elements.
     */
    ImpactFeedbackStyle["Medium"] = "medium";
    /**
     * A collision between large, heavy user interface elements.
     */
    ImpactFeedbackStyle["Heavy"] = "heavy";
    /**
     * A collision between user interface elements that are soft, exhibiting a large amount of compression or elasticity.
     */
    ImpactFeedbackStyle["Soft"] = "soft";
    /**
     * A collision between user interface elements that are rigid, exhibiting a small amount of compression or elasticity.
     */
    ImpactFeedbackStyle["Rigid"] = "rigid";
})(ImpactFeedbackStyle || (ImpactFeedbackStyle = {}));
//# sourceMappingURL=Haptics.types.js.map