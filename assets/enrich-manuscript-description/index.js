
module.exports = {
    name: "TEI (ENRICH Manuscript description)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "enrich-manuscript-description.template"    }
        ]
      });
    }
}

