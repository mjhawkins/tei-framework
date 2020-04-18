
module.exports = {
    name: "TEI (Corpus)",
    directory: false,
    params: [],
    rules: function(config) {
      return({
        items: [
          { destinationFile: "untitled.xml", sourceTemplateFile: "corpus.template"    }
        ]
      });
    }
}

