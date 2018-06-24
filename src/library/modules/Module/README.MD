# <ModuleSection />
Used in `pages` as a layout element to create a grid structure that contains `<Module />` components.

It parses all `<Module />` components contained before they render and then handles rendering them.

`<ModuleSection />` wraps all modules with a `<Row/>`
each `<Module />` output will be wrapped with a `<Col />`

In the future it will allow for draggable and sortable layouts of areas of functionality that a user can modify and is rendered using a file or database data with settings custom to the user.

# <Module />
Used to identify areas where different pieces of functionality are used. More prominent in info pages.

Any props will be consumed and added to `<Column/>` so responsiveness can be used. Such as `colsm={8} colLg={3}`


#Example
```
<ModuleSection>
    <Module colsm={6}>
        <GlanceContainer/>
    </Module>
    <Module colsm={10}>
        <RelationshipsContainer />
    <Module>
    <Module colsm={16}>
        <DocumentsContainer />
    <Module>
</ModuleSection>
```
