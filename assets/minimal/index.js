
module.exports = {
    name: "TEI (Minimal)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "minimal.template"    }
        ]
      });
    }
}

