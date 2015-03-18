Ext.data.JsonP.GeoExt_OverviewMap({"tagname":"class","name":"GeoExt.OverviewMap","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"OverviewMap.js","href":"OverviewMap.html#GeoExt-OverviewMap"}],"aliases":{"widget":["gx_overviewmap"]},"alternateClassNames":[],"extends":"Ext.Component","mixins":[],"requires":["GeoExt.Version"],"uses":[],"members":[{"name":"dynamic","tagname":"cfg","owner":"GeoExt.OverviewMap","id":"cfg-dynamic","meta":{}},{"name":"map","tagname":"cfg","owner":"GeoExt.OverviewMap","id":"cfg-map","meta":{}},{"name":"overviewOptions","tagname":"cfg","owner":"GeoExt.OverviewMap","id":"cfg-overviewOptions","meta":{}},{"name":"ctrl","tagname":"property","owner":"GeoExt.OverviewMap","id":"property-ctrl","meta":{"readonly":true}},{"name":"ovCls","tagname":"property","owner":"GeoExt.OverviewMap","id":"property-ovCls","meta":{}},{"name":"destroy","tagname":"method","owner":"GeoExt.OverviewMap","id":"method-destroy","meta":{"private":true}},{"name":"destroyControl","tagname":"method","owner":"GeoExt.OverviewMap","id":"method-destroyControl","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"GeoExt.OverviewMap","id":"method-initComponent","meta":{"private":true}},{"name":"initControl","tagname":"method","owner":"GeoExt.OverviewMap","id":"method-initControl","meta":{"private":true}},{"name":"reinitControl","tagname":"method","owner":"GeoExt.OverviewMap","id":"method-reinitControl","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.OverviewMap","short_doc":"A component encapsulating an OpenLayers.Control.OverviewMap control. ...","component":true,"superclasses":["Ext.Component"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>GeoExt.OverviewMap</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Files</h4><div class='dependency'><a href='source/OverviewMap.html#GeoExt-OverviewMap' target='_blank'>OverviewMap.js</a></div></pre><div class='doc-contents'><p>A component encapsulating an OpenLayers.Control.OverviewMap control.</p>\n\n<p>When you use this component in an application, make sure to include the\nstylesheet 'overviewmap.css' or add the following to your own stylesheet.</p>\n\n<p><code>\n.gx-overview-map .olControlOverviewMapElement { padding: 0; }\n</code></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dynamic' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-cfg-dynamic' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-cfg-dynamic' class='name expandable'>dynamic</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If set to true the overview will be reinitialized on \"baselayerchange\"\nevents of its bound map. ...</div><div class='long'><p>If set to true the overview will be reinitialized on \"baselayerchange\"\nevents of its bound map.\nThis can be used to make sure that the overview shows the same baselayer\nas the map.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-cfg-map' class='name expandable'>map</a> : OpenLayers.Map<span class=\"signature\"></span></div><div class='description'><div class='short'>The OpenLayers.Map that this overview is bound to. ...</div><div class='long'><p>The OpenLayers.Map that this overview is bound to. If not set by the user\na gx_mappanel's map will be guessed.</p>\n</div></div></div><div id='cfg-overviewOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-cfg-overviewOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-cfg-overviewOptions' class='name expandable'>overviewOptions</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The overview options that the underlying OpenLayers.Control.OverviewMap\nwill be initialized with. ...</div><div class='long'><p>The overview options that the underlying OpenLayers.Control.OverviewMap\nwill be initialized with. Following settings are defaults and should\ngenerally not be overridden:</p>\n\n<ul>\n<li>\"div\" configuration will default to the containers DOM element</li>\n<li>\"size\" will default to the containers actual dimensions</li>\n<li>\"maximized\" will always be true to make the overview visible</li>\n</ul>\n\n\n<p>If you want to hide the overview map, simple use the components show/hide\nmethods.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ctrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-property-ctrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-property-ctrl' class='name expandable'>ctrl</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Reference to the OpenLayers.Control.OverviewMap control.{OpenLayers.Control.OverviewMap}</p>\n</div><div class='long'><p>Reference to the OpenLayers.Control.OverviewMap control.{OpenLayers.Control.OverviewMap}</p>\n</div></div></div><div id='property-ovCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-property-ovCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-property-ovCls' class='name expandable'>ovCls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Custom CSS class added to this components #cls. ...</div><div class='long'><p>Custom CSS class added to this components #cls.</p>\n<p>Defaults to: <code>'gx-overview-map'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Destroys the encapsulated OpenLayers.Control.OverviewMap removing it from\nthe map controls and unbinds all events fro...</div><div class='long'><p>Destroys the encapsulated OpenLayers.Control.OverviewMap removing it from\nthe map controls and unbinds all events from this component.\nDeletes the components ctrl, map and overviewOptions members.</p>\n</div></div></div><div id='method-destroyControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-method-destroyControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-method-destroyControl' class='name expandable'>destroyControl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Destroys the OpenLayers.Control.OverviewMap control after removing it\nfrom this components bound map. ...</div><div class='long'><p>Destroys the OpenLayers.Control.OverviewMap control after removing it\nfrom this components bound map.</p>\n</div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-method-initControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-method-initControl' class='name expandable'>initControl</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Initializes an OpenLayers.Control.OverviewMap control adding it to the\nconfigured map. ...</div><div class='long'><p>Initializes an OpenLayers.Control.OverviewMap control adding it to the\nconfigured map.</p>\n</div></div></div><div id='method-reinitControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.OverviewMap'>GeoExt.OverviewMap</span><br/><a href='source/OverviewMap.html#GeoExt-OverviewMap-method-reinitControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.OverviewMap-method-reinitControl' class='name expandable'>reinitControl</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Helper method that refers to the private initControl and destroyControl\nmethods to force an update of the overview ma...</div><div class='long'><p>Helper method that refers to the private initControl and destroyControl\nmethods to force an update of the overview map by bluntly creating a new one.\nThis can be called to update the map after setting new <a href=\"#!/api/GeoExt.OverviewMap-cfg-overviewOptions\" rel=\"GeoExt.OverviewMap-cfg-overviewOptions\" class=\"docClass\">overviewOptions</a>.</p>\n</div></div></div></div></div></div></div>","meta":{}});