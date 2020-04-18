
module.exports = {
    name: "TEI (Speech)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "speech.template"    }
        ]
      });
    }
}

