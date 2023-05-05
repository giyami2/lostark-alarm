import React, { useRef, useEffect, forwardRef } from "react";
import { mergeRefs } from "react-merge-refs";

const ClickOutside = forwardRef(
  ({ active = true, onClick, children }, forwardedRef) => {
    const innerRef = useRef();

    const child = children ? React.Children.only(children) : undefined;

    if (!child || child.type === React.Fragment) {
      throw new Error("A valid non Fragment React Children should be provided");
    }

    if (typeof onClick != "function") {
      throw new Error("onClick must be a valid function");
    }

    useEffect(() => {
      if (active) {
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);
      }
      return () => {
        if (active) {
          document.removeEventListener("mousedown", handleClick);
          document.removeEventListener("touchstart", handleClick);
        }
      };
    });

    const handleClick = (event) => {
      if (!hasParent(event.target, innerRef?.current)) {
        onClick(event);
      }
    };

    const composedRefCallback = (element) => {
      if (typeof child.ref === "function") {
        child.ref(element);
      } else if (child.ref) {
        child.ref.current = element;
      }
    };

    return React.cloneElement(child, {
      ref: mergeRefs([composedRefCallback, innerRef, forwardedRef]),
    });
  }
);

ClickOutside.displayName = "ClickOutside";
export default ClickOutside;

function hasParent(element, root) {
  return root && root.contains(element) && isInDOM(element);
}

function isInDOM(obj) {
  return Boolean(obj.closest("body"));
}
