
module.exports = {
    name: "TEI (TEI for writing TEI Customizations)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "tei-for-writing-tei-customizations.template"    }
        ]
      });
    }
}

