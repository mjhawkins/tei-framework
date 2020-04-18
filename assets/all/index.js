
module.exports = {
    name: "TEI (All)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "all.template"    }
        ]
      });
    }
}

