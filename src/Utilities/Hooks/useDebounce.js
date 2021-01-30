import React, { useState } from "react";

export default function useDebounce() {
  const [typingText, settypingText] = useState("");
  function debounce(func, wait = 1000) {
    clearInterval(typingText);
    const interval = setInterval(() => {
      func();
    }, wait);
    settypingText(interval);
  }
  return debounce;
}
