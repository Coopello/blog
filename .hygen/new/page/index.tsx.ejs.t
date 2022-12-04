---
to: <%= abs_path %>/index.tsx
---
export { <%= h.changeCase.pascal(component_name) %> } from "./<%= h.changeCase.pascal(component_name) %>.page";
