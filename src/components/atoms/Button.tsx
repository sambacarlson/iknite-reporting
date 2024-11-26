import React, { ReactNode } from "react";
interface ButtonProps {
  onClick: () => void;
  title?: string;
  children?: ReactNode;
  disabled?: boolean;
}

/**
 * Simple button component
 *
 * @property {() => void} onClick
 * @property {string} [title] - children props overites this
 * @property {ReactNode} [children] - Adding children overwrites title and default styles
 * @returns {ReactNode}
 */
export default function Button({
  title,
  onClick,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={() => {
        !disabled && onClick();
      }}
      disabled={disabled}
      className={`
        ${!disabled && "hover:bg-opacity-60"}
        ${!children && "bg-secondary px-2 py-1"}
        ${children && "cursor-default"}
      `}
    >
      {!children && title}
      {children}
    </button>
  );
}
