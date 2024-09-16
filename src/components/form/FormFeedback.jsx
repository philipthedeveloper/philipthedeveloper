import React, { PropsWithChildren } from "react";

const FormFeedback = ({ children }) => {
  return (
    <div className="w-full mt-1 text-xs text-[var(--feedback-color)] font-medium">
      {children}
    </div>
  );
};
export default FormFeedback;
