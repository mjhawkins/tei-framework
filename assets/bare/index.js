
module.exports = {
    name: "TEI (Bare)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "bare.template"    }
        ]
      });
    }
}

