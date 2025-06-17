import { jsxs, jsx } from "react/jsx-runtime";
const defaultSettings = {
  Layout: "vertical",
  SidebarType: "full",
  BoxedLayout: false,
  Direction: "ltr",
  Theme: "light",
  cardBorder: false,
  ColorTheme: "default"
};
function TemplateSettings({
  settings,
  setTemplateSettings
}) {
  return /* @__PURE__ */ jsxs("div", { className: "settings-panel", children: [
    /* @__PURE__ */ jsx("h5", { children: "Layout Settings" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "vertical-layout",
            checked: settings.Layout === "vertical",
            onChange: () => setTemplateSettings({ ...settings, Layout: "vertical" })
          }
        ),
        "Vertical Layout"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "horizontal-layout",
            checked: settings.Layout === "horizontal",
            onChange: () => setTemplateSettings({ ...settings, Layout: "horizontal" })
          }
        ),
        "Horizontal Layout"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "full-sidebar",
            checked: settings.SidebarType === "full",
            onChange: () => setTemplateSettings({ ...settings, SidebarType: "full" })
          }
        ),
        "Full Sidebar"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "mini-sidebar",
            checked: settings.SidebarType === "mini-sidebar",
            onChange: () => setTemplateSettings({ ...settings, SidebarType: "mini-sidebar" })
          }
        ),
        "Mini Sidebar"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "boxed-layout",
            checked: settings.BoxedLayout,
            onChange: () => setTemplateSettings({ ...settings, BoxedLayout: true })
          }
        ),
        "Boxed Layout"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "full-layout",
            checked: !settings.BoxedLayout,
            onChange: () => setTemplateSettings({ ...settings, BoxedLayout: false })
          }
        ),
        "Full Layout"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "ltr-layout",
            checked: settings.Direction === "ltr",
            onChange: () => setTemplateSettings({ ...settings, Direction: "ltr" })
          }
        ),
        "LTR"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "rtl-layout",
            checked: settings.Direction === "rtl",
            onChange: () => setTemplateSettings({ ...settings, Direction: "rtl" })
          }
        ),
        "RTL"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "light-layout",
            checked: settings.Theme === "light",
            onChange: () => setTemplateSettings({ ...settings, Theme: "light" })
          }
        ),
        "Light Theme"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "dark-layout",
            checked: settings.Theme === "dark",
            onChange: () => setTemplateSettings({ ...settings, Theme: "dark" })
          }
        ),
        "Dark Theme"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "card-with-border",
            checked: settings.cardBorder,
            onChange: () => setTemplateSettings({ ...settings, cardBorder: true })
          }
        ),
        "Card with Border"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            id: "card-without-border",
            checked: !settings.cardBorder,
            onChange: () => setTemplateSettings({ ...settings, cardBorder: false })
          }
        ),
        "Card with Shadow"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "sidebartoggler",
        onClick: () => setTemplateSettings({
          ...settings,
          SidebarType: settings.SidebarType === "full" ? "mini-sidebar" : "full"
        }),
        children: "Toggle Sidebar"
      }
    ) })
  ] });
}
export {
  TemplateSettings as default,
  defaultSettings
};
