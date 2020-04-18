
module.exports = {
    name: "TEI (jTEI Article)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "jtei-article.template"    }
        ]
      });
    }
}

