
module.exports = {
    name: "TEI (Drama)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "drama.template"    }
        ]
      });
    }
}

