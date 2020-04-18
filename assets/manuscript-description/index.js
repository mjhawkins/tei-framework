
module.exports = {
    name: "TEI (Manuscript description)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "manuscript-description.template"    }
        ]
      });
    }
}

