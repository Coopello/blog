---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---
import renderer from "react-test-renderer";
import { <%= h.changeCase.pascal(component_name) %> } from "./";
// ______________________________________________________
//
describe("<%= path %>", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<<%= h.changeCase.pascal(component_name) %> />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
