
module.exports = {
    name: "TEI (Feature Structures)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "feature-structures.template"    }
        ]
      });
    }
}

