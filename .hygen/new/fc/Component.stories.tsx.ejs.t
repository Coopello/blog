---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---
import { <%= h.changeCase.pascal(component_name) %> } from "./";

export default { title: "<%= path %>" };

export const initial = () => <<%= h.changeCase.pascal(component_name) %>/>;
