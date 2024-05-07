import React, { ReactNode } from "react";
import cx from "classnames";

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cx(
        className,
        "text-left w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:border-gray-700 dark:bg-slate-800 h-full"
      )}
    >
      {children}
    </div>
  );
};
