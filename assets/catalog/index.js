
module.exports = {
    name: "TEI (catalog)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "catalog.template"    }
        ]
      });
    }
}

