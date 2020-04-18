
module.exports = {
    name: "TEI (TEI with MathML)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "tei-with-mathml.template"    }
        ]
      });
    }
}

