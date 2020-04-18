
module.exports = {
    name: "TEI (Minimal with XInclude)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "minimal-with-xinclude.template"    }
        ]
      });
    }
}

