module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "input",
        name: "component_name",
        message: "What is the name of component?",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "Is it have props?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { component_name, have_props } = answers;
      const path = `${component_name
        .charAt(0)
        .toUpperCase()}${component_name.slice(1)}`;
      const abs_path = `src/assets/${path}`;
      const type_annotate = have_props ? "FC<Props>" : "FC";
      const props = have_props ? "({})" : "()";
      const tag = args.tag ? args.tag : "div";
      return { ...answers, path, abs_path, type_annotate, props, tag };
    });
  },
};
