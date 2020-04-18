SelectView = require './select-view'
{CompositeDisposable} = require 'atom'
path   = require 'path'
fsPlus = require 'fs-plus'
_      = require 'underscore'
fs     = require 'fs'


module.exports = AtomSmartTemplate =
  atomSmartTemplateView: null
  modalPanel: null
  subscriptions: null
  templatesRoot: null

  activate: (state) ->

    #@templatesRoot = path.join atom.getUserInitScriptPath(), '../', 'smart-templates'

    @assetsRoot    = path.join __dirname, "../", "assets"
    @templatesRoot = @assetsRoot

    fsPlus.makeTreeSync(@templatesRoot)

    @subscriptions = new CompositeDisposable

    # Command register
    @subscriptions.add atom.commands.add '.tree-view .selected', 'tei-framework:create-files-from-template', (e) => @createFilesFromTemplate(e)

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @atomSmartTemplateView.destroy()

  serialize: ->
    atomSmartTemplateViewState: @atomSmartTemplateView.serialize()


  scanTemplatesFolder: ->

    templates = []

    for item in (fs.readdirSync(@templatesRoot))

      fullPathToFolder = path.join @templatesRoot, item
      continue unless fsPlus.isDirectorySync(fullPathToFolder)

      fullPathToIndexIndex = path.join fullPathToFolder, "index.js"
      continue unless fsPlus.isFileSync(fullPathToIndexIndex)

      try
        delete require.cache[fullPathToIndexIndex]
        templateObject = require(fullPathToIndexIndex)
        templateObject.rootPath = fullPathToFolder
        throw "Template object does not contain 'name' field" unless templateObject.name
        throw "Template object does not contain 'rules' field"  unless templateObject.rules
        templates.push templateObject
      catch error
        console.error  "Template index '#{fullPathToIndexIndex}' error: #{error}"

    return templates

  createFilesFromTemplate: (e) ->

    itemPath = e.currentTarget?.getPath?()

    if itemPath
        new SelectView(itemPath, @scanTemplatesFolder())
