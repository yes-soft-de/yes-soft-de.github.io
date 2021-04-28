function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wU8r:function(e,t,n){"use strict";n.r(t),n.d(t,"GuidesModule",(function(){return Ie}));var c=n("vTDv"),a=n("tyNb"),i=n("kt0X"),r=n("R0sL"),u=Object(i.n)("[Guide/API] Load Guides"),l=Object(i.n)("[Guide/API] Load Guides Success",Object(i.s)()),s=Object(i.n)("[Guide/API] Load Guides Failure",Object(i.s)()),o=Object(i.n)("[Guide/API] Load Guide",Object(i.s)()),d=Object(i.n)("[Guide/API] Load Guide Success",Object(i.s)()),b=Object(i.n)("[Guide/API] Load Guide Failure",Object(i.s)()),g=Object(i.n)("[Guide/API] Update Guide",Object(i.s)()),p=Object(i.n)("[Guide/API] Update Guide Success"),f=Object(i.n)("[Guide/API] Update Guide Failure",Object(i.s)()),m=Object(i.n)("[Guide/API] Add Guide",Object(i.s)()),v=Object(i.n)("[Guide/API] Upsert Guide",Object(i.s)()),h=Object(i.n)("[Guide/API] Add Guides",Object(i.s)()),y=Object(i.n)("[Guide/API] Upsert Guides",Object(i.s)()),O=Object(i.n)("[Guide/API] Update Guides",Object(i.s)()),C=Object(i.n)("[Guide/API] Delete Guide",Object(i.s)()),Z=Object(i.n)("[Guide/API] Delete Guides",Object(i.s)()),j=Object(i.n)("[Guide/API] Clear Guides"),J=Object(r.a)(),I=J.getInitialState({Data:void 0,guide:void 0,error:void 0}),G=Object(i.p)(I,Object(i.r)(l,(function(e,t){return J.setAll(t.Data,e)})),Object(i.r)(s,(function(e,t){return Object.assign(Object.assign({},e),{error:t.error})})),Object(i.r)(d,(function(e,t){return Object.assign(Object.assign({},e),{guide:t.guide})})),Object(i.r)(b,(function(e,t){return Object.assign(Object.assign({},e),{error:t.error})})),Object(i.r)(m,(function(e,t){return J.addOne(t.guide,e)})),Object(i.r)(v,(function(e,t){return J.upsertOne(t.guide,e)})),Object(i.r)(h,(function(e,t){return J.addMany(t.guides,e)})),Object(i.r)(y,(function(e,t){return J.upsertMany(t.guides,e)})),Object(i.r)(O,(function(e,t){return J.updateMany(t.guides,e)})),Object(i.r)(C,(function(e,t){return J.removeOne(t.id,e)})),Object(i.r)(Z,(function(e,t){return J.removeMany(t.ids,e)})),Object(i.r)(j,(function(e){return J.removeAll(e)}))),D=J.getSelectors().selectAll,L=Object(i.o)("guides"),w=Object(i.q)(L,D),x=Object(i.q)(L,(function(e){return e.guide})),P=n("fXoL"),k=n("ofXK"),A=n("3Pt+"),F=n("oOf3"),_=n("sYmb");function S(e,t){if(1&e&&(P.ac(0,"span"),P.Cc(1),P.Zb()),2&e){var n=t.$implicit;P.Lb(null!=n&&n.name?"m-1 px-1 d-block rounded border border-primary":null),P.Jb(1),P.Dc(null!=n&&n.name?null==n?null:n.name:null)}}function B(e,t){if(1&e&&(P.ac(0,"span",15),P.Cc(1),P.Zb()),2&e){var n=t.$implicit;P.Jb(1),P.Dc(n)}}function M(e,t){if(1&e&&(P.ac(0,"tr"),P.ac(1,"td"),P.Wb(2,"img",11),P.Zb(),P.ac(3,"td"),P.Cc(4),P.Zb(),P.ac(5,"td"),P.Cc(6),P.Bc(7,S,2,4,"span",12),P.Zb(),P.ac(8,"td"),P.Cc(9),P.Bc(10,B,2,1,"span",13),P.Zb(),P.ac(11,"td"),P.Cc(12),P.Zb(),P.ac(13,"td"),P.Cc(14),P.mc(15,"translate"),P.Zb(),P.ac(16,"td"),P.ac(17,"a",14),P.Cc(18),P.mc(19,"translate"),P.Zb(),P.Zb(),P.Zb()),2&e){var n=t.$implicit;P.Jb(2),P.qc("src",null==n?null:n.image,P.yc),P.rc("alt","",null==n?null:n.name," Image"),P.Jb(2),P.Dc(n.name?null==n?null:n.name:"-"),P.Jb(2),P.Ec(" ",0==(null==n?null:n.regions.length)?"-":null," "),P.Jb(1),P.pc("ngForOf",null==n?null:n.regions),P.Jb(2),P.Ec(" ",0==(null==n?null:n.language.length)?"-":null," "),P.Jb(1),P.pc("ngForOf",null==n?null:n.language),P.Jb(2),P.Dc(null!=n&&n.rating?null==n?null:n.rating:"-"),P.Jb(2),P.Dc(null!=n&&n.status?P.nc(15,11,null==n?null:n.status):"-"),P.Jb(3),P.rc("routerLink","/guides/",null==n?null:n.id,""),P.Jb(1),P.Ec(" ",P.nc(19,13,"view")," ")}}function W(e,t){if(1&e){var n=P.bc();P.ac(0,"div"),P.ac(1,"h1",1),P.Cc(2),P.mc(3,"translate"),P.Zb(),P.ac(4,"div",2),P.ac(5,"div",3),P.ac(6,"div",4),P.ac(7,"input",5),P.ic("ngModelChange",(function(e){return P.wc(n),P.lc().name=e}))("keyup",(function(){return P.wc(n),P.lc().applyFilter()})),P.mc(8,"translate"),P.mc(9,"translate"),P.Zb(),P.Zb(),P.Zb(),P.Zb(),P.ac(10,"div",6),P.ac(11,"table",7),P.ac(12,"tr",8),P.ac(13,"td"),P.Cc(14),P.mc(15,"translate"),P.Zb(),P.ac(16,"td"),P.Cc(17),P.mc(18,"translate"),P.Zb(),P.ac(19,"td"),P.Cc(20),P.mc(21,"translate"),P.Zb(),P.ac(22,"td"),P.Cc(23),P.mc(24,"translate"),P.Zb(),P.ac(25,"td"),P.Cc(26),P.mc(27,"translate"),P.Zb(),P.ac(28,"td"),P.Cc(29),P.mc(30,"translate"),P.Zb(),P.ac(31,"td"),P.Cc(32),P.mc(33,"translate"),P.Zb(),P.Zb(),P.Bc(34,M,20,15,"tr",9),P.mc(35,"paginate"),P.Zb(),P.ac(36,"pagination-controls",10),P.ic("pageChange",(function(e){return P.wc(n),P.lc().pageChanged(e)})),P.mc(37,"translate"),P.mc(38,"translate"),P.mc(39,"translate"),P.Zb(),P.Zb(),P.Zb()}if(2&e){var c=P.lc();P.Jb(2),P.Dc(P.nc(3,15,"manage-guides-page")),P.Jb(5),P.qc("placeholder",P.nc(8,17,"guides-search-input")),P.qc("title",P.nc(9,19,"guides-search-input")),P.pc("ngModel",c.name),P.Jb(7),P.Dc(P.nc(15,21,"image")),P.Jb(3),P.Dc(P.nc(18,23,"name")),P.Jb(3),P.Dc(P.nc(21,25,"region-name")),P.Jb(3),P.Dc(P.nc(24,27,"language")),P.Jb(3),P.Dc(P.nc(27,29,"rating")),P.Jb(3),P.Dc(P.nc(30,31,"status")),P.Jb(3),P.Dc(P.nc(33,33,"control")),P.Jb(2),P.pc("ngForOf",P.oc(35,35,c.guidesList,c.config)),P.Jb(2),P.qc("previousLabel",P.nc(37,38,"prev")),P.qc("nextLabel",P.nc(38,40,"next")),P.qc("screenReaderCurrentLabel",P.nc(39,42,"you-are-on-page"))}}function q(e,t){1&e&&(P.ac(0,"div"),P.ac(1,"div",16),P.Wb(2,"div"),P.Wb(3,"div"),P.Wb(4,"div"),P.Wb(5,"div"),P.Zb(),P.Zb())}var R,$=((R=function(){function e(t){_classCallCheck(this,e),this.store=t,this.guidesList=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.store.dispatch(u()),this.getAllGuides()}},{key:"getAllGuides",value:function(){var e=this;this.guidesSubscription=this.store.select(w).subscribe((function(t){t&&(e.guides=t,e.guidesList=t,e.config={itemsPerPage:5,currentPage:1,totalItems:e.guidesList.length})}))}},{key:"pageChanged",value:function(e){this.config.currentPage=e}},{key:"applyFilter",value:function(){var e=this;this.name?(this.guidesList=[],this.guidesList=this.guides.filter((function(t){if(t.name){var n=t.name.toLocaleLowerCase().match(e.name.toLocaleLowerCase());if(n)return n}if(t.status){var c=t.status.toLocaleLowerCase().match(e.name.toLocaleLowerCase());if(c)return c}}))):this.guidesList=_toConsumableArray(this.guides)}},{key:"ngOnDestroy",value:function(){this.guidesSubscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||R)(P.Vb(i.h))},R.\u0275cmp=P.Pb({type:R,selectors:[["app-all-guides"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"text-center","details-title","my-4"],[1,"row"],[1,"col-10","col-sm-8","col-md-6","col-xl-4"],[1,"form-group","mb-4"],["id","exampleFormControlInput2","type","text",1,"form-control","form-control-underlined","border-primary","search-input",3,"ngModel","placeholder","title","ngModelChange","keyup"],[1,"table-responsive","text-center"],[1,"table","table-bordered","main-table"],[1,"bg-dark","text-white"],[4,"ngFor","ngForOf"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],[1,"img-thumbnail","img-custom",3,"src","alt"],[3,"class",4,"ngFor","ngForOf"],["class","m-1 px-1 rounded bg-grey-blue text-white",4,"ngFor","ngForOf"],[1,"btn","bg-light-blue","text-white","btn-sm","mr-1","mb-1",3,"routerLink"],[1,"m-1","px-1","rounded","bg-grey-blue","text-white"],[1,"lds-ring"]],template:function(e,t){1&e&&(P.Bc(0,W,40,44,"div",0),P.Bc(1,q,6,0,"div",0)),2&e&&(P.pc("ngIf",0!=t.guides.length),P.Jb(1),P.pc("ngIf",0==t.guides.length))},directives:[k.n,A.a,A.g,A.j,k.m,F.c,a.f],pipes:[_.c,F.b],styles:[""]}),R),T=n("5eHb");function E(e,t){1&e&&(P.ac(0,"span",18),P.Cc(1),P.mc(2,"translate"),P.Zb()),2&e&&(P.Jb(1),P.Dc(P.nc(2,1,"status-field-required")))}function U(e,t){if(1&e){var n=P.bc();P.ac(0,"div",2),P.ac(1,"div",3),P.ac(2,"h1",4),P.Cc(3),P.mc(4,"translate"),P.Zb(),P.Zb(),P.ac(5,"div",5),P.Wb(6,"div",6),P.ac(7,"form",7),P.ic("ngSubmit",(function(){return P.wc(n),P.lc().onSubmit()})),P.ac(8,"div",8),P.ac(9,"div",9),P.ac(10,"label",10),P.Cc(11),P.mc(12,"translate"),P.Zb(),P.ac(13,"select",11),P.ac(14,"option",12),P.Cc(15),P.mc(16,"translate"),P.Zb(),P.ac(17,"option",13),P.Cc(18),P.mc(19,"translate"),P.Zb(),P.ac(20,"option",14),P.Cc(21),P.mc(22,"translate"),P.Zb(),P.Zb(),P.Bc(23,E,3,3,"span",15),P.Zb(),P.Zb(),P.ac(24,"div",16),P.ac(25,"button",17),P.Cc(26),P.mc(27,"translate"),P.Zb(),P.Zb(),P.Zb(),P.Zb(),P.Zb()}if(2&e){var c=P.lc();P.Jb(3),P.Dc(P.nc(4,11,"approve-guide-page")),P.Jb(4),P.pc("formGroup",c.updateGuideFrom),P.Jb(4),P.Dc(P.nc(12,13,"status")),P.Jb(4),P.Dc(P.nc(16,15,"select-status-placeholder")),P.Jb(2),P.pc("selected","approved"==c.guide.status),P.Jb(1),P.Dc(P.nc(19,17,"approved")),P.Jb(2),P.pc("selected","not-approved"==c.guide.status),P.Jb(1),P.Dc(P.nc(22,19,"not-approved")),P.Jb(2),P.pc("ngIf",null==c.updateGuideFrom.get("status").errors?null:c.updateGuideFrom.get("status").errors.required),P.Jb(2),P.pc("disabled",c.updateGuideFrom.invalid),P.Jb(1),P.Dc(P.nc(27,21,"update"))}}function V(e,t){1&e&&(P.ac(0,"div"),P.ac(1,"div",19),P.Wb(2,"div"),P.Wb(3,"div"),P.Wb(4,"div"),P.Wb(5,"div"),P.Zb(),P.Zb())}var H,X=((H=function(){function e(t,n,c){_classCallCheck(this,e),this.store=t,this.activatedRoute=n,this.toaster=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){e.guideId=t.get("id"),e.store.dispatch(o({id:e.guideId}))})),this.updateGuideFrom=new A.d({id:new A.b(""),status:new A.b("",A.o.required)}),this.getGuideById()}},{key:"getGuideById",value:function(){var e=this;this.store.select(x).subscribe((function(t){t&&(e.guide=t,e.fillGuideForm(t))}))}},{key:"fillGuideForm",value:function(e){this.updateGuideFrom=new A.d({id:new A.b(e.id),status:new A.b(e.status,A.o.required)})}},{key:"onSubmit",value:function(){if(this.updateGuideFrom.valid){var e=this.updateGuideFrom.getRawValue();e.id=this.guideId,console.log(e),this.store.dispatch(g({id:e.id,status:e.status}))}else this.toaster.error("Form Not Valid !")}}]),e}()).\u0275fac=function(e){return new(e||H)(P.Vb(i.h),P.Vb(a.a),P.Vb(T.b))},H.\u0275cmp=P.Pb({type:H,selectors:[["app-update-guide"]],decls:2,vars:2,consts:[["class","container-fluid",4,"ngIf"],[4,"ngIf"],[1,"container-fluid"],[1,"content-header"],[1,"text-center","mt-5","mb-3"],[1,"card","card-info","mb-5"],[1,"card-header","bg-light-blue","text-white","p-3"],[3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","inputStatusSuccess",1,"col-form-label"],["name","status","formControlName","status",1,"form-control"],["value",""],["value","approved",3,"selected"],["value","not-approved",3,"selected"],["class","invalid-feedback",4,"ngIf"],[1,"card-footer"],["type","submit",1,"btn","bg-light-blue","text-white",3,"disabled"],[1,"invalid-feedback"],[1,"lds-ring"]],template:function(e,t){1&e&&(P.Bc(0,U,28,23,"div",0),P.Bc(1,V,6,0,"div",1)),2&e&&(P.pc("ngIf",null!=t.guide),P.Jb(1),P.pc("ngIf",null==t.guide))},directives:[k.n,A.q,A.h,A.e,A.n,A.g,A.c,A.k,A.p],pipes:[_.c],styles:[""]}),H);function z(e,t){if(1&e&&(P.ac(0,"div",20),P.ac(1,"span",21),P.Cc(2),P.mc(3,"translate"),P.Zb(),P.Zb()),2&e){var n=P.lc(2);P.Jb(2),P.Dc(P.nc(3,1,null==n.guide?null:n.guide.status))}}function N(e,t){if(1&e&&(P.ac(0,"span",24),P.Cc(1),P.Zb()),2&e){var n=t.$implicit;P.Jb(1),P.Dc(n)}}function K(e,t){if(1&e&&(P.ac(0,"li",22),P.ac(1,"p"),P.Cc(2),P.mc(3,"translate"),P.Bc(4,N,2,1,"span",23),P.Zb(),P.Zb()),2&e){var n=P.lc(2);P.Jb(2),P.Ec("",P.nc(3,2,"language")," : "),P.Jb(2),P.pc("ngForOf",null==n.guide?null:n.guide.language)}}function Q(e,t){if(1&e&&(P.ac(0,"span",26),P.Cc(1),P.Zb()),2&e){var n=t.$implicit;P.Jb(1),P.Dc(n)}}function Y(e,t){if(1&e&&(P.ac(0,"li",22),P.ac(1,"p"),P.Cc(2),P.mc(3,"translate"),P.Bc(4,Q,2,1,"span",25),P.Zb(),P.Zb()),2&e){var n=P.lc(2);P.Jb(2),P.Ec("",P.nc(3,2,"city")," : "),P.Jb(2),P.pc("ngForOf",null==n.guide?null:n.guide.cities)}}function ee(e,t){if(1&e&&(P.ac(0,"li",22),P.ac(1,"p"),P.Cc(2),P.mc(3,"translate"),P.ac(4,"span",27),P.Cc(5),P.Zb(),P.Zb(),P.Zb()),2&e){var n=P.lc(2);P.Jb(2),P.Ec("",P.nc(3,2,"rating")," : "),P.Jb(3),P.Dc(null==n.guide?null:n.guide.rating)}}function te(e,t){1&e&&(P.ac(0,"div",16),P.ac(1,"h3",28),P.Cc(2),P.mc(3,"translate"),P.Zb(),P.Zb()),2&e&&(P.Jb(2),P.Ec("",P.nc(3,1,"my-orders")," :"))}function ne(e,t){if(1&e&&(P.ac(0,"span",36),P.Cc(1),P.Zb()),2&e){var n=t.$implicit;P.Jb(1),P.Dc(n)}}function ce(e,t){if(1&e&&(P.ac(0,"tr"),P.ac(1,"td"),P.Cc(2),P.Zb(),P.ac(3,"td"),P.Cc(4),P.Zb(),P.ac(5,"td"),P.Cc(6),P.Zb(),P.ac(7,"td"),P.Cc(8),P.Bc(9,ne,2,1,"span",35),P.Zb(),P.ac(10,"td"),P.Cc(11),P.mc(12,"translate"),P.Zb(),P.ac(13,"td"),P.Cc(14),P.mc(15,"date"),P.Zb(),P.ac(16,"td"),P.Cc(17),P.mc(18,"date"),P.Zb(),P.ac(19,"td"),P.Cc(20),P.mc(21,"date"),P.Zb(),P.Zb()),2&e){var n=t.$implicit;P.Jb(2),P.Dc(n.city?null==n?null:n.city:"-"),P.Jb(2),P.Dc(n.cost?null==n?null:n.cost:"-"),P.Jb(2),P.Dc(n.language?null==n?null:n.language:"-"),P.Jb(2),P.Ec(" ",0==(null==n?null:n.services.length)?"-":null," "),P.Jb(1),P.pc("ngForOf",null==n?null:n.services),P.Jb(2),P.Dc(null!=n&&n.status?P.nc(12,9,null==n?null:n.status):"-"),P.Jb(3),P.Dc(null!=n&&n.arriveDate?P.oc(15,11,1e3*(null==n?null:n.arriveDate.timestamp),"yyyy-MM-dd"):"-"),P.Jb(3),P.Dc(null!=n&&n.date?P.oc(18,14,1e3*(null==n?null:n.date.timestamp),"yyyy-MM-dd"):"-"),P.Jb(3),P.Dc(null!=n&&n.leaveDate?P.oc(21,17,1e3*(null==n?null:n.leaveDate.timestamp),"yyyy-MM-dd"):"-")}}function ae(e,t){if(1&e){var n=P.bc();P.ac(0,"div",29),P.ac(1,"div",30),P.ac(2,"table",31),P.ac(3,"tr",32),P.ac(4,"td"),P.Cc(5),P.mc(6,"translate"),P.Zb(),P.ac(7,"td"),P.Cc(8),P.mc(9,"translate"),P.Zb(),P.ac(10,"td"),P.Cc(11),P.mc(12,"translate"),P.Zb(),P.ac(13,"td"),P.Cc(14),P.mc(15,"translate"),P.Zb(),P.ac(16,"td"),P.Cc(17),P.mc(18,"translate"),P.Zb(),P.ac(19,"td"),P.Cc(20),P.mc(21,"translate"),P.Zb(),P.ac(22,"td"),P.Cc(23),P.mc(24,"translate"),P.Zb(),P.ac(25,"td"),P.Cc(26),P.mc(27,"translate"),P.Zb(),P.Zb(),P.Bc(28,ce,22,20,"tr",33),P.mc(29,"paginate"),P.Zb(),P.ac(30,"pagination-controls",34),P.ic("pageChange",(function(e){return P.wc(n),P.lc(2).pageChanged(e)})),P.mc(31,"translate"),P.mc(32,"translate"),P.mc(33,"translate"),P.Zb(),P.Zb(),P.Zb()}if(2&e){var c=P.lc(2);P.Jb(5),P.Dc(P.nc(6,12,"city")),P.Jb(3),P.Dc(P.nc(9,14,"cost")),P.Jb(3),P.Dc(P.nc(12,16,"language")),P.Jb(3),P.Dc(P.nc(15,18,"services")),P.Jb(3),P.Dc(P.nc(18,20,"status")),P.Jb(3),P.Dc(P.nc(21,22,"arrive-date")),P.Jb(3),P.Dc(P.nc(24,24,"acceptance-date")),P.Jb(3),P.Dc(P.nc(27,26,"leave-date")),P.Jb(2),P.pc("ngForOf",P.oc(29,28,c.guideOrdersList,c.config)),P.Jb(2),P.qc("previousLabel",P.nc(31,31,"prev")),P.qc("nextLabel",P.nc(32,33,"next")),P.qc("screenReaderCurrentLabel",P.nc(33,35,"you-are-on-page"))}}function ie(e,t){if(1&e&&(P.ac(0,"div",2),P.ac(1,"div",3),P.ac(2,"h1",4),P.Cc(3),P.mc(4,"translate"),P.Zb(),P.ac(5,"div",5),P.ac(6,"div",6),P.ac(7,"div",7),P.Wb(8,"img",8),P.Zb(),P.Zb(),P.ac(9,"div",9),P.ac(10,"div",10),P.ac(11,"ul",11),P.ac(12,"li"),P.ac(13,"div",5),P.ac(14,"div",12),P.ac(15,"h4",13),P.Cc(16),P.Zb(),P.Zb(),P.Bc(17,z,4,3,"div",14),P.Zb(),P.Zb(),P.Bc(18,K,5,4,"li",15),P.Bc(19,Y,5,4,"li",15),P.Bc(20,ee,6,4,"li",15),P.Zb(),P.Zb(),P.Zb(),P.ac(21,"div",16),P.Wb(22,"hr",17),P.Zb(),P.Bc(23,te,4,3,"div",18),P.Bc(24,ae,34,37,"div",19),P.Zb(),P.Zb(),P.Zb()),2&e){var n=P.lc();P.Jb(3),P.Dc(P.nc(4,10,"guide-details-page")),P.Jb(5),P.qc("src",null==n.guide?null:n.guide.image,P.yc),P.rc("alt","",null==n.guide?null:n.guide.name," Image"),P.Jb(8),P.Dc(null==n.guide?null:n.guide.name),P.Jb(1),P.pc("ngIf",null==n.guide?null:n.guide.status),P.Jb(1),P.pc("ngIf",null==n.guide?null:n.guide.language),P.Jb(1),P.pc("ngIf",null==n.guide?null:n.guide.cities),P.Jb(1),P.pc("ngIf",null==n.guide?null:n.guide.rating),P.Jb(3),P.pc("ngIf",n.guideOrdersList.length>0),P.Jb(1),P.pc("ngIf",n.guideOrdersList.length>0)}}function re(e,t){1&e&&(P.ac(0,"div"),P.ac(1,"div",37),P.Wb(2,"div"),P.Wb(3,"div"),P.Wb(4,"div"),P.Wb(5,"div"),P.Zb(),P.Zb())}var ue,le,se,oe,de,be=[{path:"",component:$},{path:":id",component:(ue=function(){function e(t,n){_classCallCheck(this,e),this.store=t,this.activatedRoute=n,this.guideOrdersList=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){e.store.dispatch(o({id:t.get("id")}))})),this.getGuideDetails()}},{key:"getGuideDetails",value:function(){var e=this;this.store.select(x).subscribe((function(t){t&&(console.log("data: ",t),e.guide=t,e.guideOrdersList=null==t?void 0:t.myOrders,e.config={itemsPerPage:5,currentPage:1,totalItems:e.guideOrdersList.length})}))}},{key:"pageChanged",value:function(e){this.config.currentPage=e}}]),e}(),ue.\u0275fac=function(e){return new(e||ue)(P.Vb(i.h),P.Vb(a.a))},ue.\u0275cmp=P.Pb({type:ue,selectors:[["app-guide-details"]],decls:2,vars:2,consts:[["class","guide-details",4,"ngIf"],[4,"ngIf"],[1,"guide-details"],[1,"container"],[1,"my-3","details-title"],[1,"row"],[1,"col-12","col-sm-5","col-md-4","position-relative","mx-auto","text-center","mb-3"],[1,"image-details","mb-3"],[1,"img-fluid","img-thumbnail",3,"src","alt"],[1,"col-12","col-sm-6","mx-auto"],[1,"info-details"],[1,"list-unstyled"],[1,"col"],[1,"text-info"],["class","col align-self-center text-right",4,"ngIf"],["class","mb-2",4,"ngIf"],[1,"col-12"],[1,"w-50","mx-auto"],["class","col-12",4,"ngIf"],["class","col-12 mx-auto",4,"ngIf"],[1,"col","align-self-center","text-right"],[1,"status","border","border-secondary","rounded","py-1","px-2"],[1,"mb-2"],["class","m-1 px-1 rounded bg-grey-blue text-white",4,"ngFor","ngForOf"],[1,"m-1","px-1","rounded","bg-grey-blue","text-white"],["class","m-1 px-1 rounded border border-primary d-block",4,"ngFor","ngForOf"],[1,"m-1","px-1","rounded","border","border-primary","d-block"],[1,"text-secondary"],[1,""],[1,"col-12","mx-auto"],[1,"table-responsive","text-center"],[1,"table","table-bordered","main-table"],[1,"bg-dark","text-white"],[4,"ngFor","ngForOf"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],["class","m-1 px-1 rounded border border-primary",4,"ngFor","ngForOf"],[1,"m-1","px-1","rounded","border","border-primary"],[1,"lds-ring"]],template:function(e,t){1&e&&(P.Bc(0,ie,25,12,"div",0),P.Bc(1,re,6,0,"div",1)),2&e&&(P.pc("ngIf",t.guide),P.Jb(1),P.pc("ngIf",!t.guide))},directives:[k.n,k.m,F.c],pipes:[_.c,F.b,k.f],styles:[".guide-details[_ngcontent-%COMP%]   .image-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:600px}.guide-details[_ngcontent-%COMP%]   .info-details[_ngcontent-%COMP%]   .img-custom[_ngcontent-%COMP%]{width:100px}"]}),ue)},{path:"approve/:id",component:X}],ge=((le=function e(){_classCallCheck(this,e)}).\u0275mod=P.Tb({type:le}),le.\u0275inj=P.Sb({factory:function(e){return new(e||le)},imports:[[a.g.forChild(be)],a.g]}),le),pe=n("9jGm"),fe=n("5+tZ"),me=n("lJxs"),ve=n("JIr8"),he=n("XqQ8"),ye=n("vkgz"),Oe=n("LRne"),Ce=n("EWl0"),Ze=n("tk/3"),je=((de=function(){function e(t){_classCallCheck(this,e),this.httpClient=t}return _createClass(e,[{key:"getAllGuides",value:function(){return this.httpClient.get(Ce.a.guidesAPI)}},{key:"getGuideById",value:function(e){return this.httpClient.get("".concat(Ce.a.guideByIdAPI,"/").concat(e))}},{key:"updateGuideStatus",value:function(e,t){return this.httpClient.put(Ce.a.updateGuideAPI,{id:e,status:t})}}]),e}()).\u0275fac=function(e){return new(e||de)(P.ec(Ze.b))},de.\u0275prov=P.Rb({token:de,factory:de.\u0275fac,providedIn:"root"}),de),Je=((oe=function e(t,n,c,a,i){var r=this;_classCallCheck(this,e),this.actions$=t,this.guidesService=n,this.toaster=c,this.router=a,this.activatedRoute=i,this.loadGuides$=Object(pe.c)((function(){return r.actions$.pipe(Object(pe.d)(u),Object(fe.a)((function(){return r.guidesService.getAllGuides().pipe(Object(me.a)((function(e){return l({Data:e.Data})})),Object(ve.a)((function(e){return Object(Oe.a)(s({error:e}))})))})))})),this.loadGuide$=Object(pe.c)((function(){return r.actions$.pipe(Object(pe.d)(o),Object(fe.a)((function(e){return r.guidesService.getGuideById(e.id).pipe(Object(me.a)((function(e){return d({guide:e.Data})})),Object(ve.a)((function(e){return Object(Oe.a)(s({error:e}))})))})))})),this.approveGuide$=Object(pe.c)((function(){return r.actions$.pipe(Object(pe.d)(g),Object(he.a)((function(e){return r.guidesService.updateGuideStatus(e.id,e.status).pipe(Object(me.a)((function(e){return r.toaster.success(e.msg),p()})),Object(ve.a)((function(e){return console.log("error effect : ",e),Object(Oe.a)(f({error:e}))})))})))})),this.redirectAfterUpdateGuide$=Object(pe.c)((function(){return r.actions$.pipe(Object(pe.d)(p),Object(ye.a)((function(){return r.router.navigate(["guides"])})))}),{dispatch:!1})}).\u0275fac=function(e){return new(e||oe)(P.ec(pe.a),P.ec(je),P.ec(T.b),P.ec(a.d),P.ec(a.a))},oe.\u0275prov=P.Rb({token:oe,factory:oe.\u0275fac}),oe),Ie=((se=function e(){_classCallCheck(this,e)}).\u0275mod=P.Tb({type:se}),se.\u0275inj=P.Sb({factory:function(e){return new(e||se)},imports:[[c.a,ge,i.j.forFeature("guides",G),pe.b.forFeature([Je])]]}),se)}}]);