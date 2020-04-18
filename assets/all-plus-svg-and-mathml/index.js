
module.exports = {
    name: "TEI (All plus SVG and MathML)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "all-plus-svg-and-mathml.template"    }
        ]
      });
    }
}

