module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "select",
        name: "dir_type",
        message: "Which components directory?",
        choices: ["page", "ui", "domain/user", "domain/article"],
      },
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
      const { component_name, dir_type, have_props } = answers;
      const file_name = `${component_name
        .charAt(0)
        .toUpperCase()}${component_name.slice(1)}${
        dir_type === "page" ? ".page" : ""
      }`;
      const path = `${dir_type}/${file_name}`;
      const abs_path = `src/components/${path}`;
      const type_annotate = have_props ? "FC<Props>" : "FC";
      const props = have_props ? "({})" : "()";
      const tag = args.tag ? args.tag : "div";
      return { ...answers, path, abs_path, type_annotate, props, tag };
    });
  },
};
