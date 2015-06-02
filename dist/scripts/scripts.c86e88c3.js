"use strict";angular.module("tinkApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngMessages","ngSanitize","ngTouch","hljs","markdown","tink.tinkApi","tink.navigation","tink.accordion","tink.popover","tink.modal","tink.nationalnumber","tink.datepicker","tink.rangedatepicker","tink.backtotop","tink.upload","tink.timepicker","tink.checkbox","tink.interactivetable","tink.identitycardnumber","tink.sticktotop","yaru22.md"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/start",{templateUrl:"views/start.html",controller:"StartCtrl"}).when("/docs",{redirectTo:"/start"}).when("/docs/ui",{redirectTo:"/docs/ui/grid"}).when("/docs/:subpage",{templateUrl:"views/docs.html",controller:"DocsCtrl"}).when("/docs/:subpage/:subsubpage",{templateUrl:"views/docs.html",controller:"DocsCtrl"}).when("/changelog",{templateUrl:"views/changelog.html",controller:"ChangelogCtrl"}).when("/faq",{templateUrl:"views/faq.html"}).when("/shame",{templateUrl:"views/shame.html",controller:"ShameCtrl"}).when("/docs/themes",{redirectTo:"/docs/themes/stad"}).otherwise({redirectTo:"/"})}]).config(["hljsServiceProvider",function(a){a.setOptions({tabReplace:" ",useBR:!1,languages:["html","js","bash","css"]})}]).run(["$rootScope",function(a){var b="1.2.3";a.themes={digipolis:["tink."+b+".min.css","default."+b+".min.css","styleguide."+b+".min.css"],stad:["tink-stad."+b+".min.css","default-stad."+b+".min.css","styleguide-stad."+b+".min.css"],ocmw:["tink-ocmw."+b+".min.css","default-ocmw."+b+".min.css","styleguide-ocmw."+b+".min.css"],politie:["tink-politie."+b+".min.css","default-politie."+b+".min.css","styleguide-politie."+b+".min.css"]},a.theme={active:"digipolis",text:"Tink",html:"Tink"}}]),angular.module("tinkApp").controller("ChangelogCtrl",["$scope",function(a){a.changelog=[{date:"2015-04-27",version:"1.2.6",description:"",notes:"",items:[{type:"fixed",content:"Fixed the determinate checkbox directive"}]},{date:"2015-04-21",version:"1.2.5",description:"",notes:"",items:[{type:"fixed",content:"Fixed the accordion directive"}]},{date:"2015-04-20",version:"1.2.4",description:"",notes:"",items:[{type:"fixed",content:"Fixed badge behaviour and styling"},{type:"fixed",content:"Fixed an issue where the date object could not be addressed"},{type:"fixed",content:"Fixed an issue where code blocks were minified (where they should not)"}]},{date:"2015-04-13",version:"1.2.3",description:"",notes:"",items:[{type:"changed",content:"Added more badge options"}]},{date:"2015-04-07",version:"1.2.2",description:"",notes:"",items:[{type:"changed",content:"Added determinate checkbox"},{type:"fixed",content:"Fixed some issues with the responsiveness of SVG images"},{type:"fixed",content:"Fixed uncorrect display of select in Internet Explorer"}]},{date:"2015-03-31",version:"1.2.1",description:"",notes:"",items:[{type:"fixed",content:"Fixed an issue with the upload directive when no ng-model was defined"},{type:"fixed",content:"Removed unnecessary scripts"},{type:"fixed",content:"The whole surface area of the upload directive wasn't clickable"}]},{date:"2015-03-30",version:"1.2.0",description:"",notes:"",items:[{type:"added",content:"Back to top directive"},{type:"added",content:"Breadcrumbs"},{type:"added",content:"Added styling for the interactive table options"},{type:"changed",content:"Modal dialogs can now also work without an external template"},{type:"changed",content:"Popovers can now also work without an external template"},{type:"changed",content:"Skeleton now works the other way around; new helper classes make sure your layout is exactly how you want it to be"},{type:"changed",content:"Added drag and drop functionality to interactive table"},{type:"changed",content:"Datepicker now supports ARIA"},{type:"changed",content:"A calendar date is now updated live in the accompanying field and vice versa"},{type:"changed",content:"Changed the inner workings of the accordion directive"},{type:"fixed",content:"The datepicker months were not displayed correctly"},{type:"fixed",content:"Fixed an issue where the side navigation would chop off if there was not enough content on the page"},{type:"fixed",content:"Fixed faulty deletion behaviour in the upload directive"},{type:"fixed",content:"Fixed a label alignment issue"},{type:"fixed",content:"Updated documentation to reflect latest changes"}]},{date:"2015-03-10",version:"1.1.2",description:"",notes:"",items:[{type:"added",content:"Styling for interactive table sorting"},{type:"changed",content:"Better scrolling for modal dialog"},{type:"changed",content:"Better pagination"},{type:"fixed",content:"National number behaviour and validation"},{type:"fixed",content:"Datepicker weekdays"}]},{date:"2015-03-09",version:"1.1.1",description:"",notes:"",items:[{type:"fixed",content:"Fallback for interactive table without heading"},{type:"fixed",content:"Better sorting for interactive table"},{type:"fixed",content:"Popover transition on Safari"}]},{date:"2015-03-06",version:"1.1.0",description:"",notes:"Yanked release!",items:[{type:"added",content:"National number component"},{type:"added",content:"Interactive table component"},{type:"added",content:"Drag and drop upload component"},{type:"added",content:"Modal dialog component"},{type:"added",content:"Popover component"},{type:"added",content:"Theme for Politie"},{type:"fixed",content:"Theme select bug on Chrome"},{type:"fixed",content:"Miscellaneous bugfixes"}]},{date:"2015-02-13",version:"1.0.1",description:"",notes:"",items:[{type:"fixed",content:"Top navigation overflow"},{type:"fixed",content:"Datepicker focus"}]},{date:"2015-02-12",version:"1.0.0",description:"Initial release",items:[]}],a.timeline=[{type:"Road to 1.0.0",logs:[{date:"2015-02-12",title:"Tink v1.0.0",items:["Cross-browser compatibility","Hit area box component","Refactored side navigation","Theme switcher","New start page","Updated documentation","Bugfixes"]},{date:"2015-02-03",title:"Tink release candidate",items:["Optimised component variants","New callout component","More bugfixes"]},{date:"2015-01-30",title:"Fifth public beta",items:["Lots of bugfixes"]},{date:"2015-01-27",title:"Fourth public beta",items:["Tink theme variants optimisation","Revised datepicker component","Optimised bar component","More UX guidelines","Bugfixes"]},{date:"2015-01-20",title:"Third public beta",items:["First Tink theme variant (OCMW)","Native mobile datepicker and timepicker","Accordion component","Contribution guidelines","First UX guidelines"]},{date:"2015-01-13",title:"Second public beta",items:["Fixing all issues that arose from our first public beta","Better code examples"]},{date:"2015-01-06",title:"First public beta",items:["Functional skeleton app","Menu bar and behaviour","Side navigation and behaviour","Optimised components","Documentation overhaul"]},{date:"2014-12-02",title:"Architecture",items:["First navigation development","Panels","Breadcrumbs","Styling"]},{date:"2014-11-25",title:"Styleguide + bugfixing",items:["Further implementation of code examples","Complete missing documentation","Code normalisation"]},{date:"2014-11-18",title:"Further form development",items:["Further development of form elements","Form validation","Advanced typography","Further development of documentation","Mobile navigation"]},{date:"2014-11-12",title:"Cleanup",items:["Code normalisation","Preparing and packaging"]},{date:"2014-11-04",title:"Form elements",items:["First form elements","First buttons","First responsive media","First helper classes","First styleguide development"]},{date:"2014-10-24",title:"Documentation",items:["Setup documentation","Styleguide"]},{date:"2014-10-17",title:"Basic framework",items:["Grid system","Variable definition","Typography and basic styling","First development of tables","Icons","First development of helper classes"]},{date:"2014-10-03",title:"Preparation",items:["Code standards","Guidelines","Best practices","Accessibility","Definition of done"]}]}]}]),angular.module("tinkApp").controller("datepickerCtrl",["$scope","dateCalculator",function(a,b){var c=new Date,d=new Date;d.setDate(c.getDate()-5);var e=new Date;e.setDate(c.getDate()+5);var f=new Date(d);f.setDate(d.getDate()-1);var g=new Date(e);g.setDate(e.getDate()+1),a.maxDateStr=b.format(g,"dd/mm/yyyy"),a.minDateStr=b.format(f,"dd/mm/yyyy"),a.selectedDate1=null,a.selectedDate2=null,a.selectedDate3=null,a.selectedDate4=null,a.mindate=d,a.maxdate=e,a.validate=function(){a.datepickerForm.submitted=!0},a.signup=function(){a.dateForm.submitted=!0}}]),angular.module("tinkApp").controller("DocsCtrl",["$scope","$location","$routeParams","$document","stickyService",function(a,b,c,d,e){function f(){void 0!==c.subpage&&(g=c.subpage,void 0!==c.subsubpage?(h=c.subsubpage,-1!==j.indexOf(g)&&(a.showTabMenu=!0),""!==b.hash()&&(i=b.hash(),a.tabview=i),a.subview="views/docs-"+g+"-"+h+".html"):a.subview="views/docs-"+g+".html")}var g="",h="",i="",j=["directives","themes"];a.subview="",a.showTabMenu=!1,a.tabview="",a.location="#"+b.path(),d.ready(function(){setTimeout(function(){e.update()},300)}),f(),a.accordion={collapsed:!0},a.openAccordion=function(a,b){"loading"===a&&setTimeout(b,2e3)},a.selectedIds=[4],a.data=[{id:1,name:"België",children:[{id:2,name:"Antwerpen"},{id:3,name:"Vlaams-brabant",children:[{id:4,name:"Leuven"},{id:5,name:"Tienen"}]}]}]}]),angular.module("tinkApp").controller("dragandropCtrl",["$scope",function(a){a.files=[],a.valid={mimeTypes:["image/jpeg","image/png","image/pjpeg","image/gif"],extensions:[".jpg",".png",".gif"]}}]),angular.module("tinkApp").controller("formValidationPart1Ctrl",["$scope",function(a){a.signup={username:"11.11.11-111.11"},a.signup=function(){a.signupForm.$valid||(a.signupForm.submitted=!0)}}]),angular.module("tinkApp").controller("identityNoCtrl",["$scope",function(a){a.validateIdentityNo=function(){console.log(a.identityNoForm),a.identityNoForm.$valid||(a.identityNoForm.submitted=!0)}}]),angular.module("tinkApp").controller("MainCtrl",["$scope","$rootScope","$location","$anchorScroll","tinkApi",function(a,b,c,d,e){a.$on("$locationChangeStart",function(){"/"===c.path()?(a.sidenav.visible===!0&&e.sideNavToggle.closeById("sideNav1"),a.sidenav.visible=!1):a.sidenav.visible=!0}),a.sidenav={visible:!0},a.scrollTo=function(a){c.hash(a),d()},a.openMenu=function(){"/"!==c.$$path&&e.sideNavToggle.openById("sideNav1")},a.closeMenu=function(){"/"!==c.$$path&&e.sideNavToggle.closeById("sideNav1")}}]),angular.module("tinkApp").controller("modalCtrl",["$scope","$modal",function(a,b){a.openModal=function(){var a=b.open({templateUrl:"views/modal-template.html",controller:"ModalInstanceCtrl",resolve:{items:function(){return["lol"]}}});a.result.then(function(a){console.log(a)},function(){console.log("Modal dismissed at: "+new Date)})}}]),angular.module("tinkApp").controller("ModalInstanceCtrl",["$scope","$modalInstance",function(a,b){a.ok=function(){b.$close("ok is pressed")},a.cancel=function(){b.$dismiss("cancel is pressed")}}]),angular.module("tinkApp").controller("nationalNoCtrl",["$scope",function(a){a.validateNationalNo=function(){console.log(a.nationalNoForm),a.nationalNoForm.$valid||(a.nationalNoForm.submitted=!0)}}]),angular.module("tinkApp").controller("SidenavCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("tinkApp").controller("StartCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("tinkApp").controller("tableCtrl",["$scope",function(a){a.pages="5, 10, 25",a.data=[{firstname:"Jasper",lastname:"Van Proeyen",username:"@trianglejuice"},{firstname:"Tom",lastname:"Wuyts",username:"@pxlpanic"},{firstname:"Kevin",lastname:"De Mulder",username:"@clopin"},{firstname:"Vincent",lastname:"Bouillart",username:"@BouillartV"},{firstname:"Tom",lastname:"Hermans",username:"@tomhermans"},{firstname:"Lieven",lastname:"Van Gestel",username:"@lievenvg"},{firstname:"Jasper",lastname:"Van Proeyen",username:"@trianglejuice"},{firstname:"Tom",lastname:"Wuyts",username:"@pxlpanic"},{firstname:"Kevin",lastname:"De Mulder",username:"@clopin"},{firstname:"Vincent",lastname:"Bouillart",username:"@BouillartV"},{firstname:"Tom",lastname:"Hermans",username:"@tomhermans"},{firstname:"Lieven",lastname:"Van Gestel",username:"@lievenvg"}],a.headers=[{field:"firstname",alias:"Voornaam",checked:!0},{field:"lastname",alias:"Achternaam",checked:!1},{field:"username",alias:"Gebruikersnaam",checked:!0}],a.actions=[{name:"remove",callback:function(b){angular.forEach(b,function(b){a.data.splice(a.data.indexOf(b),1)})}}]}]),angular.module("tinkApp").directive("dannyCheck",[function(){return{require:"ngModel",scope:{ngModel:"="},link:function(a,b,c,d){var e=function(){"danny"===a.ngModel?d.$setValidity("dannyValid",!0):d.$setValidity("dannyValid",!1)};e(),b.on("blur",function(){a.$apply(function(){e()})})}}}]),angular.module("tinkApp").directive("highlightActive",["$location",function(a){return{restrict:"A",link:function(b,c){var d,e,f;return e=c.find("a"),f=function(){return a.path()},d=function(a,b){return b="#"+b,angular.forEach(a,function(a){var c,d,e;return d=angular.element(a),c=d.parent("li"),e=d.attr("href"),c.hasClass("active")&&c.removeClass("active"),0===b.indexOf(e)?c.addClass("active"):void 0})},d(e,a.path()),b.$watch(f,function(b,c){return b!==c?d(e,a.path()):void 0})}}}]),angular.module("hljs",[]).provider("hljsService",function(){var a={};return{setOptions:function(b){angular.extend(a,b)},getOptions:function(){return angular.copy(a)},$get:["$window",function(b){return(b.hljs.configure||angular.noop)(a),b.hljs}]}}).factory("hljsCache",["$cacheFactory",function(a){return a("hljsCache")}]).controller("HljsCtrl",["hljsCache","hljsService",function(a,b){var c=this,d=null,e=null,f=null,g=null;c.init=function(a){d=a},c.setLanguage=function(a){e=a,f&&c.highlight(f)},c.highlightCallback=function(a){g=a},c.highlight=function(h){if(d){var i,j;f=h,e?(j=c._cacheKey(e,f),i=a.get(j),i||(i=b.highlight(e,b.fixMarkup(f),!0),a.put(j,i))):(j=c._cacheKey(f),i=a.get(j),i||(i=b.highlightAuto(b.fixMarkup(f)),a.put(j,i))),d.html(i.value),d.addClass(i.language),null!==g&&angular.isFunction(g)&&g()}},c.clear=function(){d&&(f=null,d.text(""))},c.release=function(){d=null},c._cacheKey=function(){var a=Array.prototype.slice.call(arguments),b="!angular-highlightjs!";return a.join(b)}}]).directive("hljs",["$compile","$parse",function(a,b){return{restrict:"EA",controller:"HljsCtrl",compile:function(c,d){var e=c[0].innerHTML.replace(/^(\r\n|\r|\n)/m,""),f=c[0].textContent.toString().replace(/^(\r\n|\r|\n)/m,"");return e=e.replace(/\t/g,""),e=e.replace(/&amp;/g,"&"),e=e.replace(/&gt;/g,">"),e=e.replace(/&lt;/g,"<"),"html"===d.format?e=window.html_beautify(e,{indent_size:2,indent_char:"	"},!0):"js"===d.format?e=window.js_beautify(e,{indent_size:2,indent_char:"	"}):"css"===d.format&&(e=window.js_beautify(e,{indent_size:2,indent_char:"	"})),c.html('<pre class="pre-wrap hljs"><div></div></pre>'),function(c,d,g,h){function i(a){var b,c,d=document,e=a;d.body.createTextRange?(b=document.body.createTextRange(),b.moveToElementText(e),b.select()):window.getSelection&&(c=window.getSelection(),b=document.createRange(),b.selectNodeContents(e),c.removeAllRanges(),c.addRange(b))}var j,k;angular.isDefined(g.compile)&&(j=b(g.compile)),angular.isDefined(g.escape)?k=b(g.escape):angular.isDefined(g.noEscape)&&(k=b("false"));var l=null;if(d.bind("mousedown",function(a){1===a.which&&(l=a.clientX)}),d.bind("mouseup",function(a){1===a.which&&l===a.clientX&&i(d.children().children()[0])}),h.init(d.find("div")),g.onhighlight&&h.highlightCallback(function(){c.$eval(g.onhighlight)}),(e||f)&&angular.isUndefined(g.source)&&angular.isUndefined(g.include)){var m;m=k&&!k(c)?e:e,h.highlight(m),j&&j(c)&&a(d.find("div").contents())(c)}c.$on("$destroy",function(){h.release()})}}}}]).directive("language",[function(){return{require:"hljs",restrict:"A",link:function(a,b,c,d){c.$observe("language",function(a){angular.isDefined(a)&&d.setLanguage(a)})}}}]).directive("source",["$compile","$parse",function(a,b){return{require:"hljs",restrict:"A",link:function(c,d,e,f){var g;angular.isDefined(e.compile)&&(g=b(e.compile)),c.$watch(e.source,function(b){b?(f.highlight(b),g&&g(c)&&a(d.find("code").contents())(c)):f.clear()})}}}]).directive("include",["$http","$templateCache","$q","$compile","$parse",function(a,b,c,d,e){return{require:"hljs",restrict:"A",compile:function(f,g){var h=g.include;return function(f,g,i,j){var k,l=0;angular.isDefined(i.compile)&&(k=e(i.compile)),f.$watch(h,function(e){var h=++l;if(e&&angular.isString(e)){var i,m;i=b.get(e),i||(m=c.defer(),a.get(e,{cache:b,transformResponse:function(a){return a}}).success(function(a){h===l&&m.resolve(a)}).error(function(){h===l&&j.clear(),m.resolve()}),i=m.promise),c.when(i).then(function(a){a&&(angular.isArray(a)?a=a[1]:angular.isObject(a)&&(a=a.data),a=a.replace(/^(\r\n|\r|\n)/m,""),j.highlight(a),k&&k(f)&&d(g.find("code").contents())(f))})}else j.clear()})}}}}]),angular.module("markdown",[]).directive("markdown",["$sanitize","markdown",function(a,b){return{restrict:"EA",replace:!0,compile:function(a){var c=a[0].innerHTML.split("\n"),d="",e=0;for(var f in c){var g=c[f].trim();0===g.indexOf("```")&&g.length>3?(d+="<hljs>",e=1):0===g.indexOf("```")&&3===g.length?(d+="</hljs>",e=0):d+=0===e?b.makeHtml(c[f].trim()):c[f]+"\n"}a.html(d)}}}]),angular.module("tinkApp").directive("selectCode",function(){return{restrict:"A",link:function(a,b){b.on("focus",function(){this.select(),this.onmouseup=function(){return this.onmouseup=null,!1}})}}}),angular.module("tinkApp").directive("themeSwitcher",["$rootScope","$document","$cookies","safeApply",function(a,b,c,d){return{restrict:"EA",link:function(e,f){function g(a,b){a.attr("href",b)}return f.is("select")?(f.change(function(){var f=a.themes,h=$(this).val(),i=$(b[0].head).find("link"),j=f[h];if(j){c.theme=h;var k,l,m,n;if(i&&$(i[0]).attr("href").split("bower").length>1){k=f[h][0].split(".")[0]+".css",l=f[h][2].split(".")[0]+".css";var o=f[h][0].split(".")[0].replace("tink-",""),p=$(i[0]).attr("href").split("/");switch(o){case"tink":m=p[0]+"/tink-core/"+p[2]+"/"+k;break;default:m=p[0]+"/tink-theme-"+o+"/"+p[2]+"/"+k}}else k=f[h][0],m=$(i[2]).attr("href").split("styles/")[0]+"styles/"+k,l=f[h][2];n=$(i[2]).attr("href").split("styles/")[0]+"styles/"+l,g($(i[0]),m),g($(i[2]),n)}d(e,function(){switch(a.theme.active=h,a.theme.active){case"stad":a.theme.text="Tink (Stad Antwerpen)",a.theme.html="Tink <span>(Stad Antwerpen)</span>";break;case"ocmw":a.theme.text="Tink (OCMW)",a.theme.html="Tink <span>(OCMW)</span>";break;case"politie":a.theme.text="Tink (Politie)",a.theme.html="Tink <span>(Politie)</span>";break;default:a.theme.text="Tink",a.theme.html="Tink"}})}),void(c.theme&&f.val(c.theme).change())):!1}}}]),angular.module("tinkApp").provider("tinkUploadService",["lodash",function(a){function b(a,b){return Math.floor(Math.random()*(b-a+1)+a)}var c={};return{$get:["$upload","$timeout","$q",function(d,e,f){return{upload:function(){for(var a=f.defer(),c=b(600,700),d=0,g=b(10,60),h=[],i=0;c>=i;i+=g)d=i,h.push(d);return e(function(){for(var b=0;b<=h.length;b++){var d=100*b;!function(b,d){e(function(){void 0!==h[b]?a.notify({loaded:h[b],total:c}):(a.notify({loaded:c,total:c}),a.resolve())},d)}(b,d)}},300),a.promise},remove:function(a){a.getData()instanceof window.File},addUrls:function(b,d){if(void 0===d||null===d||""===d)d="all",c[d]=b;else if(a.isArray(d))for(var e=0;e<d.length;e++)c[d[e]]=b;else"string"==typeof d&&(c[d]=b)}}}]}}]);