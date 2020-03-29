(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n(1),r=n(9),a=(n(0),n(300)),i={id:"debugging",title:"Debugging"},s={id:"debugging",title:"Debugging",description:"## Generation",source:"@site/../docs/debugging.md",permalink:"/docs/debugging",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/debugging.md",lastUpdatedBy:"Jim Schubert",lastUpdatedAt:1584594490,sidebar:"docs",previous:{title:"Customization",permalink:"/docs/customization"},next:{title:"Workflow Integrations",permalink:"/docs/integrations"}},p=[{value:"Generation",id:"generation",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Logs",id:"logs",children:[]}],l={rightToc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"generation"},"Generation"),Object(a.b)("p",null,"As a user there may be times when generated outputs don't match your expectations it's unclear why. The CLI supports a ",Object(a.b)("inlineCode",{parentName:"p"},"--dry-run")," option which may be used to inspect the anticipated file operations without making changes to the file system."),Object(a.b)("p",null,"Suppose you generate using the ",Object(a.b)("inlineCode",{parentName:"p"},"--minimal-update")," option, and you notice on subsequent generations of a client that no files have changed. This is by design."),Object(a.b)("p",null,"For example, if you generate the aspnetcore generator passing ",Object(a.b)("inlineCode",{parentName:"p"},"--minimal-update --dry-run")," to the sample generation script in the code repository:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="-Dlog.level=off"\n./bin/aspnetcore-petstore-server.sh --minimal-update --dry-run\n')),Object(a.b)("p",null,"You'll see the output similar to the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"# START SCRIPT: ./bin/aspnetcore-petstore-server.sh\n\n\nDry Run Results:\n\ns /path/to/aspnetcore/.openapi-generator-ignore\nn /path/to/aspnetcore/.openapi-generator/VERSION\nn /path/to/aspnetcore/Org.OpenAPITools.sln\nn /path/to/aspnetcore/README.md\nn /path/to/aspnetcore/build.bat\nn /path/to/aspnetcore/build.sh\nw /path/to/aspnetcore/src/Org.OpenAPITools/.gitignore\nn /path/to/aspnetcore/src/Org.OpenAPITools/Attributes/ValidateModelStateAttribute.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Authentication/ApiAuthentication.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Controllers/PetApi.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Controllers/StoreApi.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Controllers/UserApi.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Converters/CustomEnumConverter.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Dockerfile\nn /path/to/aspnetcore/src/Org.OpenAPITools/Filters/BasePathFilter.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Filters/GeneratePathParamsValidationFilter.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Models/ApiResponse.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Models/Category.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Models/Order.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Models/Pet.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Models/Tag.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Models/User.cs\nn /path/to/aspnetcore/src/Org.OpenAPITools/Org.OpenAPITools.csproj\nn /path/to/aspnetcore/src/Org.OpenAPITools/Program.cs\nw /path/to/aspnetcore/src/Org.OpenAPITools/Properties/launchSettings.json\nn /path/to/aspnetcore/src/Org.OpenAPITools/Startup.cs\nw /path/to/aspnetcore/src/Org.OpenAPITools/appsettings.json\nw /path/to/aspnetcore/src/Org.OpenAPITools/wwwroot/README.md\nw /path/to/aspnetcore/src/Org.OpenAPITools/wwwroot/index.html\nn /path/to/aspnetcore/src/Org.OpenAPITools/wwwroot/openapi-original.json\nw /path/to/aspnetcore/src/Org.OpenAPITools/wwwroot/web.config\n\n\nStates:\n\n  - w Write\n  - n Write if New/Updated\n  - i Ignored\n  - s Skipped Overwrite\n  - k Skipped by user option(s)\n  - e Error evaluating file write state\n\n")),Object(a.b)("p",null,"The output lists the files which would be written in a normal run of the tool. Notice that we skip ",Object(a.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," because the file exists and we don't want to blow away the user's generation rules. Most of these files will overwrite output files only if the contents slated for write are different from those on the filesystem; this is denoted by an ",Object(a.b)("inlineCode",{parentName:"p"},"n")," preceding the filename. Some of the above lines begin with a ",Object(a.b)("inlineCode",{parentName:"p"},"w"),", meaning these files will ",Object(a.b)("em",{parentName:"p"},"always")," result in a write operation."),Object(a.b)("p",null,"If you find an operation that you feel should result in a different state, please ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/issues/new/choose"}),"open an issue")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/compare"}),"submit a pull request")," to change the behavior (we welcome all contributions)."),Object(a.b)("h2",{id:"templates"},"Templates"),Object(a.b)("p",null,"Sometimes, you may have issues with variables in your templates. As discussed in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/templating"}),"templating")," docs, we offer a variety of system properties for inspecting the models bound to templates."),Object(a.b)("dl",null,Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugOpenAPI")),Object(a.b)("dd",null,"Prints out the JSON model of the OpenAPI Document, as seen by OpenAPI Generator"),Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugModels")),Object(a.b)("dd",null,"Prints out the JSON model passed to model templates"),Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugOperations")),Object(a.b)("dd",null,"Prints out the JSON model passed to operation (api) templates"),Object(a.b)("dt",null,Object(a.b)("code",null,"-DdebugSupportingFiles")),Object(a.b)("dd",null,"Prints out the JSON model passed to supporting files")),Object(a.b)("p",null,"One or more of these properties can be passed alongside other command line options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go \\\n    -o out \\\n    -i petstore-minimal.yaml \\\n    -DdebugModels \\\n    -DdebugOperations\n")),Object(a.b)("p",null,"Or you can add these to your ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable (this applies to every invocation of the tool):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="${JAVA_OPTS} -DdebugModels -DdebugOperations"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: Globally available system options like these will apply to all invocations of the generator (CLI and plugins)")),Object(a.b)("h2",{id:"runtime"},"Runtime"),Object(a.b)("p",null,"When you're working with a custom generator, a new generator, or otherwise trying to understand the behavior of the toolset, you may need to attach a remote debugger in order to step through the code."),Object(a.b)("p",null,"The steps are shown here for a specific version of the generator, but apply the same if you're working off master or a feature branch."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Determine the version of ",Object(a.b)("inlineCode",{parentName:"li"},"openapi-generator")," you're using. For the CLI, this is:  ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"openapi-generator version\n"))),Object(a.b)("li",{parentName:"ul"},"Navigate to the ",Object(a.b)("inlineCode",{parentName:"li"},"openapi-generator")," source directory (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/contribute-building"}),"building")," docs for obtaining source code and brief introduction)."),Object(a.b)("li",{parentName:"ul"},"Checkout the branch/tag for the target version. Branches are not prefixed, but tags are prefixed with a ",Object(a.b)("inlineCode",{parentName:"li"},"v"),". For instance if you're using version ",Object(a.b)("inlineCode",{parentName:"li"},"3.3.0"),", you will execute:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"git checkout v3.3.0\n"))),Object(a.b)("li",{parentName:"ul"},"Open the project in your IDE."),Object(a.b)("li",{parentName:"ul"},"Setup your IDE for remote debugging. You'll want to define a port used for connecting the remote debugger. For this example, we'll use ",Object(a.b)("inlineCode",{parentName:"li"},"5005"),". See external tutorials for ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.jetbrains.com/help/idea/run-debug-configuration-remote-debug.html"}),"IntelliJ")," and ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.ibm.com/developerworks/library/os-eclipse-javadebug/index.html"}),"Eclipse")),Object(a.b)("li",{parentName:"ul"},"Export the debug configuration, specifying ",Object(a.b)("inlineCode",{parentName:"li"},"suspend=y")," so you have time to attach a remote debugger. These are passed as Java system properties, either on command line or as part of the ",Object(a.b)("inlineCode",{parentName:"li"},"JAVA_OPTS")," environment variable. This will look like:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'export JAVA_OPTS="${JAVA_OPTS} -agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005"\n'))),Object(a.b)("li",{parentName:"ul"},"Execute the generator with your desired options. You should see the application output ",Object(a.b)("em",{parentName:"li"},"only"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Listening for transport dt_socket at address: 5005\n"))),Object(a.b)("li",{parentName:"ul"},"Set breakpoints in code, and then attach your remote debugger from your IDE (see above). The generator will automatically unblock once the remote debugger is attached. You can now step through the code.")),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"You can try to enable debugging log with ",Object(a.b)("inlineCode",{parentName:"p"},"-Dlog.level=debug")," option to the ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_OPTS")," environment variable to see more information:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'export JAVA_OPTS="${JAVA_OPTS} -Dlog.level=debug"\n')),Object(a.b)("p",null,"Set the option then DEBUG logs are printed out:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go ...\n\n...\n...\n[main] DEBUG o.o.codegen.DefaultCodegen - debugging fromProperty for files : class Schema {\n    type: null\n    format: null\n    $ref: #/components/schemas/File\n...\n...\n")))}c.isMDXComponent=!0},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,O=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(O,s({ref:t},l,{components:n})):r.a.createElement(O,s({ref:t},l))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);