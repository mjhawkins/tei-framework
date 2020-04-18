
module.exports = {
    name: "TEI (TEI with W3C ITS for internationalization)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "tei-with-w3c-its-for-internationalization.template"    }
        ]
      });
    }
}

