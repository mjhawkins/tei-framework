
module.exports = {
    name: "TEI (simplePrint)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "simpleprint.template"    }
        ]
      });
    }
}

