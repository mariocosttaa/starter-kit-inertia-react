import { useState, useEffect } from "react";
const useLocalTime = (utcTime, options = {}) => {
  const [formattedTime, setFormattedTime] = useState("");
  useEffect(() => {
    try {
      let dateObject;
      if (!utcTime) {
        dateObject = /* @__PURE__ */ new Date();
      } else if (utcTime instanceof Date) {
        dateObject = new Date(utcTime);
      } else if (typeof utcTime === "string") {
        dateObject = new Date(utcTime);
      } else {
        throw new Error("O formato de hora UTC deve ser uma string ou objeto Date");
      }
      if (isNaN(dateObject.getTime())) {
        throw new Error("Data inválida");
      }
      const locale = options.locale || navigator.language;
      const format = options.format || "full";
      let formatted;
      switch (format) {
        case "full":
          formatted = dateObject.toLocaleString(locale);
          break;
        case "date":
          formatted = dateObject.toLocaleDateString(locale);
          break;
        case "time":
          formatted = dateObject.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
          break;
        case "timeWithSeconds":
          formatted = dateObject.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
          break;
        default:
          formatted = dateObject.toLocaleString(locale);
      }
      setFormattedTime(formatted);
    } catch (err) {
      setFormattedTime("Erro: Data inválida");
    }
  }, [utcTime, options.format, options.locale]);
  return formattedTime;
};
export {
  useLocalTime as default
};
