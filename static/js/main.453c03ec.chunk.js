(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},155:function(e,t,a){e.exports=a(345)},160:function(e,t,a){},223:function(e,t,a){},238:function(e,t,a){e.exports=a.p+"static/media/feedback_url_image.607338c8.png"},345:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),o=a.n(r),s=(a(160),a(111),a(17)),c=a(18),i=a(20),d=a(19),u=a(21),m=a(359),p=a(361),h=a(358),g=a(11),y=a(346),f=a(348),b=a(351),E=a(145),k=a(349);function v(e){var t=e.keyName,a=e.des,n=e.checked;return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:"15px 0"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("h3",null,t),l.a.createElement(E.a,{title:a},l.a.createElement(g.a,{type:"info-circle",theme:"twoTone",style:{margin:"3px"}}))),l.a.createElement(f.a,null,l.a.createElement(k.a,{defaultChecked:n})))}var S=a(357),w=S.a.Group,M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={showInput:!1},a.clickShowFileScopeToggle=function(){var e=a.state.showInput;a.setState({showInput:!e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.keyName,a=e.fileJson,n=e.value,r=e.hasFileMetadata,o=void 0!==r&&r,s=e.showFileMetadata,c=void 0===s||s,i=e.hint;console.log("hehe",i,n);var d=this.state.showInput?l.a.createElement(S.a,{addonBefore:"File Scope",placeholder:"default is global scope",defaultValue:a,addonAfter:l.a.createElement("a",{onClick:this.clickShowFileScopeToggle},l.a.createElement(g.a,{type:"check"}))}):l.a.createElement(y.a,{type:"primary",icon:"copy",disabled:!o,onClick:this.clickShowFileScopeToggle},"Show File Scope");return l.a.createElement("div",{style:{marginBottom:"15px"}},l.a.createElement(w,{size:"large",style:{display:"flex",marginTop:"10px",justifyContent:"space-between"}},l.a.createElement(f.a,{span:6},l.a.createElement(S.a,{defaultValue:t})),l.a.createElement(f.a,{span:6},l.a.createElement(S.a,{defaultValue:n,placeholder:i})),l.a.createElement(f.a,{style:{display:c?"default":"none"}},d),l.a.createElement(f.a,null,l.a.createElement(y.a,{type:"primary"},"Delete"))))}}]),t}(n.Component),x=a(356),C=a(354),O=a(350),j=a(364),D=a(360),T=a(363),A=a(16),N=a.n(A),z=(a(223),a(150)),F=a.n(z),_=(a(225),x.a.Item),I=S.a.Search,R=C.a.TabPane,P=["magenta","orange","green"];function B(e){var t=e.isSelected,a=e.onToggleMetadata;return l.a.createElement(y.a,{type:t?"danger":"primary",onClick:a},t?"Remove":"Add")}function V(e){var t=e.title,a=e.groupName,n=P[a.length%P.length];return l.a.createElement(O.a,{gutter:8,type:"flex"},l.a.createElement(f.a,null,l.a.createElement("p",null,t)),l.a.createElement(f.a,null,l.a.createElement(j.a,{color:n},a)))}var q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state=a.initState,a.componentWillReceiveProps=function(e,t){a.setState(a.initState)},a.onTabClick=function(e){console.log(e)},a.onClose=function(){console.log(a.props.globalMetadatas),a.setState(a.initState),a.props.onCancel()},a.onSubmitMetadatas=function(){var e=N.a.filter(a.state.metadatas,{isSelected:!0});a.setState(a.initState),a.props.onSubmitMetadatas(e)},a.onToggleMetadata=function(e){return function(){var t=N.a.find(a.state.metadatas,{key:e});t.isSelected=!t.isSelected,a.setState({metadata:N.a.assign(a.state.metadatas,t)})}},a.onToggleSecondDrawer=function(e){return function(){a.state.secondDrawerOpen?a.setState({secondDrawerOpen:!1}):e&&a.setState({secondDrawerOpen:!0,secondDrawerTitle:e.key,secondDrawerDes:e.des,secondDrawerType:e.type,secondDrawerGroup:e.group,secondDrawerImageDetail:e.imgUrl})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.isOpen,a=this.state.metadatas.map(function(t){return l.a.createElement(_,{actions:[l.a.createElement(B,{isSelected:t.isSelected,onToggleMetadata:e.onToggleMetadata(t.key)}),l.a.createElement(y.a,{type:"dashed",onClick:e.onToggleSecondDrawer(t)},"Detail")]},l.a.createElement(_.Meta,{style:{width:"180px"},title:l.a.createElement(V,{title:t.key,groupName:t.group}),description:l.a.createElement("p",{style:{width:"180px"}},t.des)}))}),n={height:"780px",overflowY:"auto"},r=N.a.groupBy(this.state.metadatas,"group"),o=N.a.keys(r).map(function(t,a){return l.a.createElement(R,{tab:t,key:a+1},l.a.createElement(x.a,{size:"large",style:n},r[t].map(function(a){return l.a.createElement(_,{actions:[l.a.createElement(B,{isSelected:a.isSelected,onToggleMetadata:e.onToggleMetadata(a.key)}),l.a.createElement(y.a,{type:"dashed",onClick:e.onToggleSecondDrawer(a)},"Detail")]},l.a.createElement(_.Meta,{style:{width:"180px"},title:l.a.createElement(V,{title:a.key,groupName:t}),description:l.a.createElement("p",{style:{width:"180px"}},a.des)}))})))}),s=N.a.isEmpty(this.state.secondDrawerImageDetail)?l.a.createElement("span",{className:"no-detail-screenshot"},"No Detail ScreenShot"):l.a.createElement("img",{src:this.state.secondDrawerImageDetail,alt:"No Detail ScreenShot",onClick:function(){e.setState({imageVisible:!e.state.imageVisible})}});return l.a.createElement(D.a,{title:"Add Metadata",width:"450",visible:t,onClose:this.onClose},l.a.createElement(I,{enterButton:"Search",size:"large",placeholder:"Seach Metadata"}),l.a.createElement(C.a,{style:{marginTop:"20px"},defaultActiveKey:"0",onChange:this.onTabClick},l.a.createElement(R,{tab:"All",key:"0"},l.a.createElement(x.a,{size:"large",style:n},a)),o),l.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,padding:"24px",width:"100%",backgroundColor:"white"}},l.a.createElement(y.a,{block:!0,onClick:this.onSubmitMetadatas,type:"primary",size:"large"},"Add")),l.a.createElement(D.a,{title:this.state.secondDrawerTitle,width:400,closable:!1,onClose:this.onToggleSecondDrawer(),visible:this.state.secondDrawerOpen},l.a.createElement("div",{className:"second-drawer-content"},l.a.createElement("div",null,"Metadata Group: ",l.a.createElement(j.a,{color:"blue"},this.state.secondDrawerGroup)),l.a.createElement("div",null,"Metadata Type: ",l.a.createElement(j.a,{color:"purple"},this.state.secondDrawerType)),l.a.createElement("div",null,"Used Count: ",l.a.createElement(j.a,{color:"cyan"},"109")),l.a.createElement(T.a,{type:"success",description:N.a.isEmpty(this.state.secondDrawerDes)?"No Description":this.state.secondDrawerDes,message:"Description"}),l.a.createElement("p",null,"Metadata ScreenShot: "),s,l.a.createElement(F.a,{visible:this.state.imageVisible,onClose:function(){e.setState({imageVisible:!1})},images:[{src:this.state.secondDrawerImageDetail,alt:"Docs ScreenShot Details"}]}))))}},{key:"initState",get:function(){return{metadatas:this.props.globalMetadatas.map(function(e){return N.a.assign(e,{isSelected:!1})}),secondDrawerOpen:!1,secondDrawerTitle:"",secondDrawerDes:"",secondDrawerGroup:"",secondDrawerImageDetail:"",secondDrawerType:"",imageVisible:!1}}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={openAddMetadata:!1},a.onToggleAddMetadata=function(){a.setState({openAddMetadata:!a.state.openAddMetadata})},a.onSubmitMetadatas=function(e){a.setState({openAddMetadata:!1}),a.props.addMetadataToPanel(e)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.metadatas,n=e.isChecked,r=e.metadataSet,o=a.map(function(e){return l.a.createElement(M,{key:e.key,keyName:e.key,fileJson:e.fileJson,hasFileMetadata:e.hasFileMetadata,value:e.value,hint:e.hint})});return l.a.createElement("div",null,l.a.createElement("h2",null,t),l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(f.a,{span:24},l.a.createElement("h2",null,"Metadata"),l.a.createElement("span",null,"Following metadata will be applied docset-wide (globalMetadata)"),l.a.createElement(b.a,null)),l.a.createElement(v,{keyName:"Accepts community contributions",des:"Select if your content accepts community contributions, adds a button to the rendered page which directs external users to a repository to submit pull requests",checked:n}),o,l.a.createElement(y.a,{type:"dashed",size:"large",icon:"plus",style:{width:"100%",marginTop:"10px"},onClick:this.onToggleAddMetadata},"Add Metadata")),l.a.createElement(q,{isOpen:this.state.openAddMetadata,onSubmitMetadatas:this.onSubmitMetadatas,onCancel:this.onToggleAddMetadata,globalMetadatas:r}))}}]),t}(n.Component),G=a(144),L=G.a.Option;function W(e){var t=e.keyName,a=(e.des,e.branches),n=e.selected,r=a.map(function(e){return l.a.createElement(L,{key:e},e)});return l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("h3",null,t),l.a.createElement(G.a,{mode:"tags",style:{width:"100%"},defaultValue:n,placeholder:"Input branch to filter"},r))}var K=x.a.Item;function U(e){var t=e.keyName,a=e.des,n=e.emails.map(function(e){return l.a.createElement(K,{key:e,actions:[l.a.createElement("a",{href:"/"},"Delete")]},e)});return l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("h3",null,t),l.a.createElement("span",null,a),l.a.createElement("div",{style:{display:"flex",margin:"20px 0 20px 0"}},l.a.createElement(S.a,{placeholder:"Add email..."}),l.a.createElement(y.a,{type:"primary",icon:"plus",style:{marginLeft:"10px"}},"Add email")),l.a.createElement(x.a,{bordered:!0},n))}function H(e){var t=e.keyName,a=e.des,n=e.value;return l.a.createElement(O.a,{style:{marginTop:"20px"},type:"flex",justify:"space-between"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("span",{style:{fontSize:"16px",color:"grey",fontWeight:"400"}},t),l.a.createElement(E.a,{title:a},l.a.createElement(g.a,{type:"info-circle",theme:"twoTone",style:{margin:"3px"}}))),l.a.createElement(S.a,{value:n,style:{margin:"10px 0"}}))}var Y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Public Contributor"),l.a.createElement(b.a,null),l.a.createElement(H,{keyName:"Git Repository URL open to public contributors",des:"The url of the git repository open to public contributors. If not specified, use current git repository url.",value:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"}),l.a.createElement(H,{keyName:"Git Repository Branch open to public contributors",des:"The branch of the git repository open to public contributors. If not specified, use current git repository branch.",value:"master"})),l.a.createElement("div",null,l.a.createElement("h2",null,"Email Notification"),l.a.createElement(b.a,null),l.a.createElement(U,{keyName:"Build/publish notifications will be sent to these email addresses",emails:["jasoz@microsoft.com","zifan@microsoft.com","yanzhao@microsoft.com","jahe@microsoft.com"]})),l.a.createElement("div",null,l.a.createElement("h2",null,"Branch level functionality"),l.a.createElement(b.a,null),l.a.createElement(W,{keyName:"Generate PDF on following branches",branches:["master","live","test","zifan-test"],selected:["master"]}),l.a.createElement(W,{keyName:"Generate intellisense on following  branches",branches:["master","live","test","zifan-test"],selected:["master","live"]}),l.a.createElement(W,{keyName:"Enable bilingual on following branches",branches:["master","live","test","zifan-test"],selected:["zifan-test","test"]})),l.a.createElement("div",null,l.a.createElement("h2",null,"Branch Policy"),l.a.createElement(b.a,null),l.a.createElement(W,{keyName:"No build/publish will be trigged on following branches",branches:["master","live","test","zifan-test"],selected:["live-sxs"]})))}}]),t}(n.Component),$=a(238),Q=a.n($),X=a(352),Z=a(353),ee=X.a.Item,te=G.a.Option,ae=S.a.TextArea,ne={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},le={labelCol:{span:24},wrapperCol:{span:24}},re=["bool","string","number","object","one or many"],oe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state=a.initState,a.onAddMetadataSet=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(t.key=t.name,t.group=N.a.first(t.group),console.log("hehe",t),a.props.onAddMetadataSet(t))})},a.validateValueExist=function(e){return function(t,n,l){var r=[];switch(e){case"name":r=a.state.names;break;case"value":default:r=a.state.values}console.log(r,n,e,r.includes(n)),r.includes(n)?l("The ".concat(e," name has already exist")):l()}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement(X.a,{onSubmit:this.onAddMetadataSet},l.a.createElement(ee,Object.assign({},ne,{label:"Metadata Name"}),e("name",{rules:[{required:!0,message:"Please input metadata name!"},{validator:this.validateValueExist("name")}]})(l.a.createElement(S.a,null))),l.a.createElement(ee,Object.assign({},ne,{label:l.a.createElement("span",null,"Metadata Value\xa0",l.a.createElement(E.a,{title:"Value is what your docfx.json key name."},l.a.createElement(g.a,{type:"question-circle-o"})))}),e("value",{rules:[{required:!0,message:"Please input metadata value!"},{validator:this.validateValueExist("value")}]})(l.a.createElement(S.a,null))),l.a.createElement(ee,Object.assign({},ne,{label:"Metadata Type"}),e("type",{rules:[{required:!0,message:"Please select metadata type!"}]})(l.a.createElement(G.a,{placeholder:"Select the metadata type"},re.map(function(e){return l.a.createElement(te,{value:e},e)})))),l.a.createElement(ee,Object.assign({},ne,{label:"Metadata Group"}),e("group",{rules:[{required:!0,message:"Please select metadata group!"}]})(l.a.createElement(G.a,{allowClear:!0,mode:"tags",placeholder:"Select the metadata group",notFoundContent:"Add new group"},this.state.groups.map(function(e){return l.a.createElement(te,{value:e},e)})))),l.a.createElement(ee,Object.assign({},le,{label:"Metadata Description"}),e("des",{rules:[{required:!0,message:"Describe this metadata!"}]})(l.a.createElement(ae,{rows:4}))),l.a.createElement(ee,Object.assign({},le,{label:"Metadata ScreenShot"}),e("imgUrl",{valuePropName:"fileList",getValueFromEvent:this.normFile})(l.a.createElement(Z.a.Dragger,{name:"files",action:"/action.do"},l.a.createElement("p",{className:"ant-upload-drag-icon"},l.a.createElement(g.a,{type:"inbox"})),l.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),l.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload.")))),l.a.createElement(ee,null,l.a.createElement(y.a,{block:!0,type:"primary",size:"large",htmlType:"submit"},"Add")))}},{key:"initState",get:function(){return this.props.metadataSet?{groups:N.a.uniq(this.props.metadataSet.map(function(e){return e.group})),names:this.props.metadataSet.map(function(e){return e.key}),values:this.props.metadataSet.map(function(e){return e.value})}:{group:[],names:[]}}}]),t}(n.Component),se=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClose,a=e.showMetadataRegister,n=e.metadataSet,r=e.onAddMetadataSet,o=X.a.create()(oe);return l.a.createElement(D.a,{visible:a,onClose:t,title:"Register New Metadata",width:450},l.a.createElement(o,{metadataSet:n,onAddMetadataSet:r}))}}]),t}(n.Component),ce=m.a.Header,ie=m.a.Sider,de=m.a.Content,ue=p.a.SubMenu,me=["Docset1","Docset2","Configuration"],pe=[{key:"feedback_github_repo",hasFileMetadata:!0,value:"MicrosoftDocs/azure-docs"},{key:"feedback_product_url",value:"https://feedback.azure.com/forums/34192--general-feedback"},{key:"breadcrumb_path",value:"/azure/bread/toc.json"},{key:"brand",value:"azure"}],he=[{key:"feedback_product_url",hasFileMetadata:!0,fileJson:"**/*.md",value:"https://feedback.azure.com/forums/34193--general-feedback"},{key:"breadcrumb_path",hasFileMetadata:!0,fileJson:"**/build/*.yaml",value:"/azurelearning/bread/toc.json"},{key:"brand",hasFileMetadata:!0,fileJson:"**/*.md",value:"azure learning"}],ge=[{group:"Feedback",key:"feedback product url",value:"feedback_product_url",imgUrl:Q.a,type:"string",des:"Config the feedback url for product"},{group:"Feedback",key:"feedback github repo",value:"feedback_github_repo",type:"string",des:""},{group:"Feedback",key:"feedback system",value:"feedback_system",type:"string",des:""},{group:"Feedback",key:"product feedback displaytext",value:"product_feedback_displaytext",type:"string",des:""},{group:"BreadCrumb",key:"breadcrumb path",value:"breadcrumb_path",type:"string",des:""},{group:"BreadCrumb",key:"extend breadcrumb",value:"extend_breadcrumb",type:"string",des:""},{group:"ContributorList",key:"author",value:"author",type:"string",des:""},{group:"ContributorList",key:"contributors to exclude",value:"contributors_to_exclude",type:"string",des:""}],ye=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1,selectedContent:0,name:me[0],docsetMetadata1:pe,docsetMetadata2:he,metadataSet:ge,showMetadataRegister:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.menuClick=function(e){a.setState({name:me[e.key],selectedContent:e.key})},a.addMetadataToPanel=function(e){e=e.map(function(e){var t=null;if(e.type)switch(e.type){case"bool":t="Boolean value: true/false";break;case"number":t="Number value: integer/float/double";break;case"object":t='JSON object value: {"a": "a value"}';break;case"one or many":t="One or many value: string/string[]";break;case"string":default:t="String value"}return e.value="",e.hint=t,e}),console.log(e),0===parseInt(a.state.selectedContent)?a.setState({docsetMetadata1:N.a.uniqBy(N.a.concat(a.state.docsetMetadata1,e),"key")}):a.setState({docsetMetadata2:N.a.uniqBy(N.a.concat(a.state.docsetMetadata2,e),"key")})},a.onAddMetadataSet=function(e){a.setState({metadataSet:N.a.concat(a.state.metadataSet,e),showMetadataRegister:!1}),h.a.success("New metadata has registed.")},a.onToggleMetadataRegister=function(){a.setState({showMetadataRegister:!a.state.showMetadataRegister})},a.contentRender=function(e){switch(parseInt(e)){case 2:return l.a.createElement(Y,null);case 1:return l.a.createElement(J,{name:a.state.name,metadatas:a.state.docsetMetadata2,isChecked:!1,metadataSet:a.state.metadataSet,addMetadataToPanel:a.addMetadataToPanel});case 0:default:return l.a.createElement(J,{name:a.state.name,metadatas:a.state.docsetMetadata1,isChecked:!0,metadataSet:a.state.metadataSet,addMetadataToPanel:a.addMetadataToPanel})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.contentRender(this.state.selectedContent);return l.a.createElement(m.a,null,l.a.createElement(ie,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,width:220},l.a.createElement("div",{className:"logo"}),l.a.createElement(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["0"],defaultOpenKeys:["sub1"],style:{textAlign:"left",padding:"20px 5px 20px 5px"},onClick:this.menuClick},l.a.createElement(ue,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(g.a,{type:"book"}),l.a.createElement("span",null,"Metadata"))},l.a.createElement(p.a.Item,{key:"0"},l.a.createElement(g.a,{type:"book"}),l.a.createElement("span",null,me[0])),l.a.createElement(p.a.Item,{key:"1"},l.a.createElement(g.a,{type:"book"}),l.a.createElement("span",null,me[1]))),l.a.createElement(p.a.Item,{key:"2"},l.a.createElement(g.a,{type:"file-text"}),l.a.createElement("span",null,me[2])))),l.a.createElement(m.a,null,l.a.createElement(ce,{style:{background:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement("div",{style:{background:"#fff",fontSize:"20px",fontWeight:"500",textAlign:"left"}},l.a.createElement(g.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),l.a.createElement("span",{style:{paddingLeft:"10px"}},"OPS Settings")),l.a.createElement(y.a,{type:"primary",icon:"setting",onClick:this.onToggleMetadataRegister},"Metadata Register")),l.a.createElement(de,{className:"main-content"},e,l.a.createElement(se,{metadataSet:this.state.metadataSet,onAddMetadataSet:this.onAddMetadataSet,onClose:this.onToggleMetadataRegister,showMetadataRegister:this.state.showMetadataRegister}))))}}]),t}(n.Component),fe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={metadatas:a.props.metadatas},a.onAddMetadata=function(){a.setState({metadatas:N.a.concat(a.state.metadatas,{key:"",value:""})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.name,t=this.state.metadatas.map(function(e){return l.a.createElement(M,{showFileMetadata:!1,key:e.key,keyName:e.key,fileJson:e.fileJson,hasFileMetadata:e.hasFileMetadata,value:e.value})});return l.a.createElement("div",null,l.a.createElement("h2",null,e),l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(f.a,{span:24},l.a.createElement("h2",null,"Metadata"),l.a.createElement("span",null,"Following metadata will be applied docset-wide (globalMetadata)"),l.a.createElement(b.a,null)),l.a.createElement(v,{keyName:"Accepts community contributions",des:"Select if your content accepts community contributions, adds a button to the rendered page which directs external users to a repository to submit pull requests",checked:!0}),t,l.a.createElement(y.a,{type:"dashed",size:"large",icon:"plus",style:{width:"100%",marginTop:"10px"},onClick:this.onAddMetadata},"Add Metadata")))}}]),t}(n.Component),be=m.a.Header,Ee=m.a.Sider,ke=m.a.Content,ve=(p.a.SubMenu,[{key:"feedback_github_repo",hasFileMetadata:!0,value:"MicrosoftDocs/azure-docs"},{key:"feedback_product_url",value:"https://feedback.azure.com/forums/34192--general-feedback"},{key:"breadcrumb_path",value:"/azure/bread/toc.json"},{key:"brand",value:"azure"}]),Se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=l.a.createElement(fe,{name:"Docset1",metadatas:ve});return l.a.createElement(m.a,null,l.a.createElement(Ee,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,width:220},l.a.createElement("div",{className:"logo"}),l.a.createElement(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["0"],defaultOpenKeys:["sub1"],style:{textAlign:"left",padding:"20px 5px 20px 5px"},onClick:this.menuClick},l.a.createElement(p.a.Item,{key:"0"},l.a.createElement(g.a,{type:"file-text"}),l.a.createElement("span",null,"Docset1")))),l.a.createElement(m.a,null,l.a.createElement(be,{style:{background:"#fff",fontSize:"20px",fontWeight:"500",textAlign:"left"}},l.a.createElement("div",null,l.a.createElement(g.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),l.a.createElement("span",{style:{paddingLeft:"10px"}},"OPS Settings"))),l.a.createElement(ke,{className:"main-content"},e)))}}]),t}(n.Component),we=a(355),Me=a(362);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(function(){return l.a.createElement(we.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(Me.a,{exact:!0,path:"/",component:ye}),l.a.createElement(Me.a,{path:"/old",component:Se})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,2,1]]]);
//# sourceMappingURL=main.453c03ec.chunk.js.map