
module.exports = {
    name: "TEI (TEI with SVG)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "tei-with-svg.template"    }
        ]
      });
    }
}

