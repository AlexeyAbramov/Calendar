import classnames from "classnames";
import React from "react";

import cn from "./Button.module.scss";

enum ButtonType {
  TRANSPARENT,
  PRIMARY,
}

const buttonTypeCn = {
  [ButtonType.TRANSPARENT]: cn.typeTransparent,
  [ButtonType.PRIMARY]: cn.typePrimary,
};

type ButtonNativeProps = Omit<
  React.ComponentProps<"button">,
  "type" | " className"
>;

interface ButtonCustomProps {
  type?: ButtonType;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

type ButtonProps = ButtonNativeProps & ButtonCustomProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      iconLeft,
      iconRight,
      type = ButtonType.TRANSPARENT,
      children,
      ...otherProps
    },
    ref
  ) => {
    return (
      <button
        className={classnames(cn.button, buttonTypeCn[type])}
        ref={ref}
        {...otherProps}
      >
        {iconLeft && iconLeft}
        {children}
        {iconRight && iconRight}
      </button>
    );
  }
);
