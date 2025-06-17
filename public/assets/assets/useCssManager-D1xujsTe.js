import { useState, useEffect } from "react";
import { a as cssConfig } from "../ssr.js";
const MIN_LOADING_TIME = 0;
function removeOtherLayoutStyles(currentLayout) {
  if (typeof document === "undefined") return;
  const otherCssFiles = Object.entries(cssConfig).filter(([layout]) => layout !== currentLayout).flatMap(([_, files]) => files);
  otherCssFiles.forEach((cssFile) => {
    const existingLink = document.querySelector(`link[href="${cssFile}"]`);
    if (existingLink) {
      existingLink.remove();
    }
  });
}
function addLayoutStyles(currentLayout, onLoad) {
  if (typeof document === "undefined") return;
  const cssFiles = cssConfig[currentLayout] || [];
  let loadedCount = 0;
  const totalFiles = cssFiles.length;
  if (totalFiles === 0) {
    onLoad();
    return;
  }
  cssFiles.forEach((cssFile) => {
    if (!document.querySelector(`link[href="${cssFile}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssFile;
      link.onload = () => {
        loadedCount++;
        if (loadedCount === totalFiles) {
          onLoad();
        }
      };
      link.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFiles) {
          onLoad();
        }
      };
      document.head.appendChild(link);
    } else {
      loadedCount++;
      if (loadedCount === totalFiles) {
        onLoad();
      }
    }
  });
}
function getCurrentLayoutStyles() {
  if (typeof document === "undefined") return [];
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  return Array.from(links).map((link) => link.getAttribute("href")).filter((href) => href !== null);
}
function needsCSSChange(currentLayout) {
  const currentStyles = getCurrentLayoutStyles();
  const targetStyles = cssConfig[currentLayout] || [];
  const hasExtraStyles = currentStyles.some(
    (style) => !targetStyles.includes(style) && Object.values(cssConfig).flat().includes(style)
  );
  const hasMissingStyles = targetStyles.some((style) => !currentStyles.includes(style));
  return hasExtraStyles || hasMissingStyles;
}
function useCssManager(layout) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const switchStyles = async () => {
      const needsChange = needsCSSChange(layout);
      if (!needsChange) {
        return;
      }
      const startTime = Date.now();
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      await new Promise((resolve) => {
        addLayoutStyles(layout, () => {
          requestAnimationFrame(() => {
            removeOtherLayoutStyles(layout);
            setTimeout(resolve, 200);
          });
        });
      });
      const elapsedTime = Date.now() - startTime;
      const remainingTime = MIN_LOADING_TIME - elapsedTime;
      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }
      requestAnimationFrame(() => {
        setIsLoading(false);
      });
    };
    switchStyles();
    return () => {
      if (needsCSSChange(layout)) {
        removeOtherLayoutStyles(layout);
      }
    };
  }, [layout]);
  return { isLoading };
}
export {
  useCssManager as u
};
