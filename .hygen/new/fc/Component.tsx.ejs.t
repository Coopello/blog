---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.tsx
---
<% if (have_props) { -%>
type Props = {
};
<% } -%>
/**
 * @package
 */
export const <%= h.changeCase.pascal(component_name) %>: <%- type_annotate %> = <%= props %> => {
  return (
    <<%= tag %>>
    </<%= tag %>>
  );
}
