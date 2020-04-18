# tei-framework package

A Framework package for the [Atom Text Editor](https://atom.io/) containing the [Text Encoding Initiative (TEI)](https://tei-c.org/) schema and template files. Requires the [linter-autocomplete-jing package](https://atom.io/packages/linter-autocomplete-jing).

## How to use

This package can be installed via Atom's built-in package manager, as per the instructions in 
[Atom's manual](https://flight-manual.atom.io/using-atom/sections/atom-packages/), by searching for tei-framework. It can also be installed via the command line with `apm install tei-framework`

### Creating a new file from a template

To create a new file from a template [open a project folder in Atom](https://flight-manual.atom.io/getting-started/sections/atom-basics/#opening-directories) and right click (or hold ctrl and click in OS X) its root menu item (or any another folder) in file tree and select "Create file from template" from the contextual menu that appears. Then, select the desired template file in the dialog that appears.

![Image of file tree context menu](https://raw.githubusercontent.com/mjhawkins/tei-framework/master/README-IMG/file-tree-context-menu.jpg)

A new file with a filename based on the current date and time will then be created in that location.

### About validation
Once linter-autocomplete-jing and all its dependencies are installed, all XML documents are validated in the background as you work on them. In order to validate against a TEI schema, it's necessary to associate a schema with it using at least one `<?xml-model ?>` declaration in the prolog. Any documents created from the included templates will have these added automatically.

If you are working on an existing TEI file that doesn't already have any `<?xml-model ?>` declarations, you will have to add them manually. Please consult either the appropriate template file or simply add the following to validate against the TEI (All plus SVG and mathML) schema.
```<?xml-model href="http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_allPlus.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
<?xml-model href="http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_allPlus.rng" type="application/xml"
	schematypens="http://purl.oclc.org/dsdl/schematron"?>
```
## Notes

The file template code is from https://github.com/AlexeySokolov/atom-smart-template. The TEI schemata and template files are from https://jenkins.tei-c.org/job/oxygen-tei-stable/.
