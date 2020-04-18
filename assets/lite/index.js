
module.exports = {
    name: "TEI (Lite)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "lite.template"    }
        ]
      });
    }
}

