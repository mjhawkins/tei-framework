
module.exports = {
    name: "TEI (ODD customization)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "odd-customization.template"    }
        ]
      });
    }
}

