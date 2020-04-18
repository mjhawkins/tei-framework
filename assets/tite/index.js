
module.exports = {
    name: "TEI (Tite)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "tite.template"    }
        ]
      });
    }
}

