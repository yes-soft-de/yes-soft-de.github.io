(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HR9E:function(e,t,n){"use strict";n.r(t),n.d(t,"RegionsModule",(function(){return ye}));var i=n("tyNb"),o=n("ofXK"),c=n("3Pt+"),r=n("LC35"),a=n("kt0X");const s=Object(a.n)("[Region/API] Load Regions"),l=Object(a.n)("[Region/API] Load Regions Success",Object(a.s)()),d=Object(a.n)("[Region/API] Load Regions Failure",Object(a.s)()),g=Object(a.n)("[Region/API] Load Region",Object(a.s)()),u=Object(a.n)("[Region/API] Load Region Success",Object(a.s)()),p=Object(a.n)("[Region/API] Load Region Failure",Object(a.s)()),b=Object(a.n)("[Region/API] Delete Region",Object(a.s)()),m=Object(a.n)("[Region/API] Delete Region Success"),h=Object(a.n)("[Region/API] Delete Region Failure",Object(a.s)()),f=Object(a.n)("[Region/API] Add Region",Object(a.s)()),O=Object(a.n)("[Region/API] Add Region Success"),C=Object(a.n)("[Region/API] Add Region Failure",Object(a.s)()),v=Object(a.n)("[Region/API] Upsert Region",Object(a.s)()),R=Object(a.n)("[Region/API] Add Regions",Object(a.s)()),w=Object(a.n)("[Region/API] Update Region",Object(a.s)()),P=Object(a.n)("[Region/API] Update Region Success",Object(a.s)()),j=Object(a.n)("[Region/API] Update Region Failure",Object(a.s)()),y=Object(a.n)("[Region/API] Update Regions",Object(a.s)()),I=Object(a.n)("[Region/API] Delete Regions",Object(a.s)()),M=Object(a.n)("[Region/API] Upsert Regions",Object(a.s)()),Z=Object(a.n)("[Region/API] Clear Regions");var x=n("fXoL"),S=n("5eHb"),_=n("Kj3r"),F=n("/uUt"),J=n("eIep"),L=n("EWl0"),k=n("tk/3"),D=n("lf8/");let A=(()=>{class e{constructor(e,t){this.httpClient=e,this.tokenService=t}getAllRegions(){return this.httpClient.get(L.a.regionsAPI)}getRegion(e){return this.httpClient.get(`${L.a.regionAPI}/${e}`)}createRegion(e){return this.httpClient.post(L.a.regionAPI,JSON.stringify(e))}updateRegion(e){return this.httpClient.put(L.a.updateRegionAPI,JSON.stringify(e))}deleteRegion(e){return this.httpClient.delete(`${L.a.regionAPI}/${e}`)}getGoogleMapToken(){return this.httpClient.get(L.a.googleMapTokenAPI)}getPlaceDetailsByPlaceID(e,t){return this.httpClient.get(L.a.googleMapPlaceDetailsAPI+`json?place_id=${e}&key=${t}`)}search(e,t){return this.httpClient.get(L.a.googleMapSearchAPI+`json?input=${e}&types=geocode&key=${t}`)}searchLocationAutoComplete(e,t){return e.pipe(Object(_.a)(500),Object(F.a)(),Object(J.a)(e=>e?this.search(e,t):[]))}uploadImage(e){const t=new FormData;return t.append("image",e),this.httpClient.post(L.a.generalUploadAPI,t)}}return e.\u0275fac=function(t){return new(t||e)(x.ec(k.b),x.ec(D.a))},e.\u0275prov=x.Rb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var B=n("sYmb");const V=["search"];function U(e,t){if(1&e){const e=x.bc();x.ac(0,"li",32),x.ic("click",(function(){x.wc(e);const n=t.$implicit;return x.lc(3).getLocationInfo(n)})),x.Cc(1),x.Zb()}if(2&e){const e=t.$implicit;x.Jb(1),x.Dc(null==e?null:e.description)}}function q(e,t){if(1&e&&(x.ac(0,"ul",30),x.Bc(1,U,2,1,"li",31),x.Zb()),2&e){const e=x.lc(2);x.Jb(1),x.pc("ngForOf",e.googleLocationsNameList)}}function N(e,t){1&e&&(x.ac(0,"div",33),x.Wb(1,"div"),x.Wb(2,"div"),x.Wb(3,"div"),x.Wb(4,"div"),x.Zb())}function $(e,t){if(1&e&&(x.ac(0,"div",27),x.Bc(1,q,2,1,"ul",28),x.Bc(2,N,5,0,"div",29),x.Zb()),2&e){const e=x.lc();x.Jb(1),x.pc("ngIf",e.googleLocationsNameList),x.Jb(1),x.pc("ngIf",!e.googleLocationsNameList)}}function T(e,t){1&e&&(x.ac(0,"span",34),x.Cc(1),x.mc(2,"translate"),x.Zb()),2&e&&(x.Jb(1),x.Dc(x.nc(2,1,"name-field-required")))}function W(e,t){1&e&&(x.ac(0,"span",34),x.Cc(1),x.mc(2,"translate"),x.Zb()),2&e&&(x.Jb(1),x.Dc(x.nc(2,1,"descriptioon-field-required")))}const E=function(e){return{"is-invalid":e}};let G=(()=>{class e{constructor(e,t,n,i,o,c,r,a,s){this.store=e,this.toaster=t,this.regionService=n,this.translate=i,this.router=o,this.eltRef=c,this.dc=r,this.render=a,this.document=s,this.title="AGM project",this.isSubmited=!1,this.uploadButtonValue="upload",this.coverUploadButtonValue="upload",this.imageName="select-image",this.fileSelected=!1,this.fileUploaded=!1,this.imagePathReady=!1,this.imageUploaded=!1,this.submitButtonValue="Waiting Uploading Image",this.showSearchResult=!1}ngOnInit(){this.router.events.subscribe(e=>{e instanceof i.c&&"/regions/add"==e.urlAfterRedirects&&this.checkCurrentLang()}),this.addRegionForm=new c.d({name:new c.b(""),description:new c.b(""),location:new c.b(""),placeId:new c.b("",c.o.required),path:new c.b("")}),this.checkLangChange(),this.getGoogleMapToken()}test(){const e=setInterval(()=>{const t=this.document.getElementById("app_root").getAttribute("placeid");t&&this.googlePlaceID!=t&&(this.showSearchResult=!1,this.googlePlaceID=t,console.log("from compoentns placeId : ",t),clearInterval(e))},100)}getGoogleMapToken(){this.regionService.getGoogleMapToken().subscribe(e=>this.googleMapToken=e.Data)}searchLocation(e){this.showSearchResult=!0}getLocationInfo(e){var t,n;const i=this.addRegionForm.get("description").value;e&&(this.showSearchResult=!1,this.addRegionForm=new c.d({name:new c.b(null==e?void 0:e.description),description:new c.b(i),location:new c.b(null===(n=null===(t=null==e?void 0:e.structured_formatting)||void 0===t?void 0:t.main_text_matched_substrings)||void 0===n?void 0:n.length),placeId:new c.b(null==e?void 0:e.place_id),path:new c.b("")}))}updateName(e){const t=e.files[0];this.uploadButtonValue="Upload",this.imageName=t.name,this.fileSelected=!0}processFile(e){this.fileSelected=!1,this.imageUploaded=!0,this.uploadButtonValue="Uploading...",console.log("Processing File");const t=e.files[0],n=new FileReader;n.addEventListener("load",e=>{this.selectedFile=new r.a(e.target.result,t),this.regionService.uploadImage(this.selectedFile.file).subscribe(e=>{console.log(e),this.imageUrl=e,this.uploadButtonValue="uploaded",this.imagePathReady=!0,this.imageUploaded=!1,this.submitButtonValue="new-region"},e=>{this.uploadButtonValue="upload",this.fileSelected=!0,this.imageUploaded=!1,this.toaster.error("Network Error, Please Try After a Few Seconds"),console.log(e)})}),n.readAsDataURL(t)}checkCurrentLang(){let e=0;const t=setInterval(()=>{e++,"ar"==this.translate.currentLang?(this.render.removeClass(this.document.querySelector(".input-group-custom"),"input-group"),this.render.addClass(this.document.querySelector(".input-group-custom"),"input-group-ar")):(this.render.addClass(this.document.querySelector(".input-group-custom"),"input-group"),this.render.removeClass(this.document.querySelector(".input-group-custom"),"input-group-ar")),2==e&&clearInterval(t)},200)}checkLangChange(){this.translate.onLangChange.subscribe(e=>{"ar"==(null==e?void 0:e.lang)?(this.render.removeClass(this.document.querySelector(".input-group-custom"),"input-group"),this.render.addClass(this.document.querySelector(".input-group-custom"),"input-group-ar")):(this.render.addClass(this.document.querySelector(".input-group-custom"),"input-group"),this.render.removeClass(this.document.querySelector(".input-group-custom"),"input-group-ar"))})}onSubmit(){if(!this.addRegionForm.valid)return this.toaster.error("Error : Form Not Valid"),this.isSubmited=!1,!1;const e=this.addRegionForm.getRawValue();e.path=this.imageUrl,console.log(e),this.store.dispatch(f({region:e}))}ngOnDestroy(){localStorage.removeItem("place_id")}}return e.\u0275fac=function(t){return new(t||e)(x.Vb(a.h),x.Vb(S.b),x.Vb(A),x.Vb(B.d),x.Vb(i.d),x.Vb(x.o),x.Vb(x.i),x.Vb(x.K),x.Vb(o.e))},e.\u0275cmp=x.Pb({type:e,selectors:[["app-add-region"]],viewQuery:function(e,t){var n;1&e&&x.Ic(V,!0),2&e&&x.tc(n=x.jc())&&(t.searchElementRef=n.first)},decls:49,vars:42,consts:[[1,"container-fluid"],[1,"content-header"],[1,"text-center","my-5"],[1,"card","card-info"],[1,"card-header","bg-sidebar-item-button","text-white"],[1,"card-title","mb-0"],[3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","inputNameSuccess",1,"col-form-label"],["type","text","id","pac-input","name","name","formControlName","name","autocomplete","off",1,"form-control","controls",3,"ngClass","placeholder","change","keydown"],["class","location-search-result px-3 py-2",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],["for","exampleInputdescription1"],["name","description","formControlName","description","id","exampleInputdescription1",1,"form-control",3,"ngClass","placeholder"],["for","exampleInputupload"],[1,"input-group","input-group-custom"],[1,"custom-file"],["type","file","accept","image/*","id","file-input",1,"custom-file-input",3,"change"],["imageInput",""],["for","file-input",1,"custom-file-label"],[1,"input-group-append"],["type","button",1,"btn","btn-success",3,"disabled","click"],[1,"card-footer"],["type","submit",1,"btn","bg-sidebar-item-button","text-white",3,"disabled"],[1,"container"],["id","map"],[1,"location-search-result","px-3","py-2"],["class","list-unstyled mb-0",4,"ngIf"],["class","lds-ring",4,"ngIf"],[1,"list-unstyled","mb-0"],["class","pb-1",3,"click",4,"ngFor","ngForOf"],[1,"pb-1",3,"click"],[1,"lds-ring"],[1,"invalid-feedback"]],template:function(e,t){if(1&e){const e=x.bc();x.ac(0,"div",0),x.ac(1,"div",1),x.ac(2,"h1",2),x.Cc(3),x.mc(4,"translate"),x.Zb(),x.Zb(),x.ac(5,"div",3),x.ac(6,"div",4),x.ac(7,"h3",5),x.Cc(8),x.mc(9,"translate"),x.Zb(),x.Zb(),x.ac(10,"form",6),x.ic("ngSubmit",(function(){return t.onSubmit()})),x.ac(11,"div",7),x.ac(12,"div",8),x.ac(13,"label",9),x.Cc(14),x.mc(15,"translate"),x.Zb(),x.ac(16,"input",10),x.ic("change",(function(){return t.test()}))("keydown",(function(e){return t.searchLocation(e)})),x.mc(17,"translate"),x.Zb(),x.Bc(18,$,3,2,"div",11),x.Bc(19,T,3,3,"span",12),x.Zb(),x.ac(20,"div",8),x.ac(21,"label",13),x.Cc(22),x.mc(23,"translate"),x.Zb(),x.ac(24,"textarea",14),x.mc(25,"translate"),x.Cc(26,"                    "),x.Zb(),x.Bc(27,W,3,3,"span",12),x.Zb(),x.ac(28,"div",8),x.ac(29,"label",15),x.Cc(30),x.mc(31,"translate"),x.Zb(),x.ac(32,"div",16),x.ac(33,"div",17),x.ac(34,"input",18,19),x.ic("change",(function(){x.wc(e);const n=x.uc(35);return t.updateName(n)})),x.Zb(),x.ac(36,"label",20),x.Cc(37),x.mc(38,"translate"),x.Zb(),x.Zb(),x.ac(39,"div",21),x.ac(40,"button",22),x.ic("click",(function(){x.wc(e);const n=x.uc(35);return t.processFile(n)})),x.Cc(41),x.mc(42,"translate"),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.ac(43,"div",23),x.ac(44,"button",24),x.Cc(45),x.mc(46,"translate"),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.ac(47,"div",25),x.Wb(48,"div",26),x.Zb()}2&e&&(x.Jb(3),x.Dc(x.nc(4,18,"create-region-page")),x.Jb(5),x.Dc(x.nc(9,20,"new-region")),x.Jb(2),x.pc("formGroup",t.addRegionForm),x.Jb(4),x.Dc(x.nc(15,22,"name")),x.Jb(2),x.qc("placeholder",x.nc(17,24,"name-type-placeholder")),x.pc("ngClass",x.sc(38,E,t.addRegionForm.get("name").errors&&(t.addRegionForm.get("name").touched||t.addRegionForm.get("name").dirty))),x.Jb(2),x.pc("ngIf",t.showSearchResult),x.Jb(1),x.pc("ngIf",null==t.addRegionForm.get("name").errors?null:t.addRegionForm.get("name").errors.required),x.Jb(3),x.Dc(x.nc(23,26,"description")),x.Jb(2),x.qc("placeholder",x.nc(25,28,"description-type-placeholder")),x.pc("ngClass",x.sc(40,E,t.addRegionForm.get("description").errors&&(t.addRegionForm.get("description").touched||t.addRegionForm.get("description").dirty))),x.Jb(3),x.pc("ngIf",null==t.addRegionForm.get("description").errors?null:t.addRegionForm.get("description").errors.required),x.Jb(3),x.Dc(x.nc(31,30,"upload")),x.Jb(7),x.Dc(x.nc(38,32,t.imageName)),x.Jb(3),x.pc("disabled",!t.fileSelected),x.Jb(1),x.Ec(" ",x.nc(42,34,t.uploadButtonValue)," "),x.Jb(3),x.pc("disabled",t.addRegionForm.invalid||t.imageUploaded),x.Jb(1),x.Dc(x.nc(46,36,"create")))},directives:[c.q,c.h,c.e,c.a,c.g,c.c,o.l,o.n,o.m],pipes:[B.c],styles:['.location-search-result[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:all .5s ease;background:rgba(54,72,94,.92);color:#fff;border-radius:5px;padding-left:10px}.location-search-result[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]{display:block;position:inherit;width:64px;height:64px;margin-left:auto;margin-right:auto}.card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover{background:rgba(54,72,94,.8)}.input-group-ar[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]{width:100%;min-width:14rem;max-width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:.25rem 0 0 .25rem}#map[_ngcontent-%COMP%], body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{margin:0;padding:0}#description[_ngcontent-%COMP%]{font-family:Roboto;font-size:15px;font-weight:300}#infowindow-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}#infowindow-content[_ngcontent-%COMP%]{display:none}#map[_ngcontent-%COMP%]   #infowindow-content[_ngcontent-%COMP%]{display:inline}.pac-card[_ngcontent-%COMP%]{margin:10px 10px 0 0;border-radius:2px 0 0 2px;box-sizing:border-box;-moz-box-sizing:border-box;outline:none;box-shadow:0 2px 6px rgba(0,0,0,.3);background-color:#fff;font-family:Roboto}#pac-container[_ngcontent-%COMP%]{padding-bottom:12px;margin-right:12px}.pac-controls[_ngcontent-%COMP%]{display:inline-block;padding:5px 11px}.pac-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Roboto;font-size:13px;font-weight:300}#pac-input[_ngcontent-%COMP%]:focus{border-color:#4d90fe}#title[_ngcontent-%COMP%]{color:#fff;background-color:#4d90fe;font-size:25px;font-weight:500;padding:6px 12px}#target[_ngcontent-%COMP%]{width:345px}']}),e})();var z=n("R0sL");const K=Object(z.a)(),X=K.getInitialState({Data:void 0,regionDetails:void 0,error:void 0}),H=Object(a.p)(X,Object(a.r)(l,(e,t)=>K.setAll(t.Data,e)),Object(a.r)(u,(e,t)=>Object.assign(Object.assign({},e),{regionDetails:t.region})),Object(a.r)(R,(e,t)=>K.addMany(t.regions,e)),Object(a.r)(b,(e,t)=>K.removeOne(t.id,e)),Object(a.r)(f,(e,t)=>K.addOne(t.region,e)),Object(a.r)(v,(e,t)=>K.upsertOne(t.region,e)),Object(a.r)(R,(e,t)=>K.addMany(t.regions,e)),Object(a.r)(M,(e,t)=>K.upsertMany(t.regions,e)),Object(a.r)(P,(e,t)=>K.updateOne(t.region,e)),Object(a.r)(y,(e,t)=>K.updateMany(t.regions,e)),Object(a.r)(I,(e,t)=>K.removeMany(t.ids,e)),Object(a.r)(Z,e=>K.removeAll(e))),{selectAll:Y}=K.getSelectors(),Q=Object(a.o)("regions"),ee=Object(a.q)(Q,Y),te=Object(a.q)(Q,e=>e.regionDetails);var ne=n("oOf3");function ie(e,t){if(1&e){const e=x.bc();x.ac(0,"tr"),x.ac(1,"td"),x.Wb(2,"img",11),x.Zb(),x.ac(3,"td"),x.Cc(4),x.Zb(),x.ac(5,"td",12),x.Cc(6),x.Zb(),x.ac(7,"td"),x.Cc(8),x.Zb(),x.ac(9,"td"),x.Cc(10),x.Zb(),x.ac(11,"td"),x.ac(12,"a",13),x.Cc(13),x.mc(14,"translate"),x.Zb(),x.ac(15,"a",14),x.ic("click",(function(){x.wc(e);const n=t.$implicit;return x.lc(2).delete(null==n?null:n.id)})),x.Cc(16),x.mc(17,"translate"),x.Zb(),x.Zb(),x.Zb()}if(2&e){const e=t.$implicit,n=x.lc(2);x.Jb(2),x.qc("src",null==e||null==e.path[0]?null:e.path[0].path,x.yc),x.rc("alt","",e.name," Image"),x.Jb(2),x.Dc(e.name?e.name:"-"),x.Jb(2),x.Dc(e.description?e.description:"-"),x.Jb(2),x.Dc(e.commentNumber?e.commentNumber:"-"),x.Jb(2),x.Dc(e.ratingAverage?e.ratingAverage:"-"),x.Jb(2),x.rc("routerLink","/regions/",null==e?null:e.id,""),x.Jb(1),x.Ec(" ",x.nc(14,12,"update")," "),x.Jb(2),x.Mb("btn btn-danger confirm btn-sm mr-1 mb-1 ",n.isDeleted?"disabled":"",""),x.Jb(1),x.Ec(" ",x.nc(17,14,"delete")," ")}}function oe(e,t){if(1&e){const e=x.bc();x.ac(0,"div"),x.ac(1,"h1",1),x.Cc(2),x.mc(3,"translate"),x.Zb(),x.ac(4,"div",2),x.ac(5,"div",3),x.ac(6,"div",4),x.ac(7,"input",5),x.ic("ngModelChange",(function(t){return x.wc(e),x.lc().name=t}))("keyup",(function(){return x.wc(e),x.lc().applyFilter()})),x.mc(8,"translate"),x.mc(9,"translate"),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.ac(10,"div",6),x.ac(11,"table",7),x.ac(12,"tr",8),x.ac(13,"td"),x.Cc(14),x.mc(15,"translate"),x.Zb(),x.ac(16,"td"),x.Cc(17),x.mc(18,"translate"),x.Zb(),x.ac(19,"td"),x.Cc(20),x.mc(21,"translate"),x.Zb(),x.ac(22,"td"),x.Cc(23),x.mc(24,"translate"),x.Zb(),x.ac(25,"td"),x.Cc(26),x.mc(27,"translate"),x.Zb(),x.ac(28,"td"),x.Cc(29),x.mc(30,"translate"),x.Zb(),x.Zb(),x.Bc(31,ie,18,16,"tr",9),x.mc(32,"paginate"),x.Zb(),x.ac(33,"pagination-controls",10),x.ic("pageChange",(function(t){return x.wc(e),x.lc().pageChanged(t)})),x.mc(34,"translate"),x.mc(35,"translate"),x.mc(36,"translate"),x.Zb(),x.Zb(),x.Zb()}if(2&e){const e=x.lc();x.Jb(2),x.Dc(x.nc(3,14,"manage-regions-page")),x.Jb(5),x.qc("placeholder",x.nc(8,16,"region-search-input")),x.qc("title",x.nc(9,18,"region-search-input")),x.pc("ngModel",e.name),x.Jb(7),x.Dc(x.nc(15,20,"image")),x.Jb(3),x.Dc(x.nc(18,22,"name")),x.Jb(3),x.Dc(x.nc(21,24,"description")),x.Jb(3),x.Dc(x.nc(24,26,"comment-number")),x.Jb(3),x.Dc(x.nc(27,28,"rating-average")),x.Jb(3),x.Dc(x.nc(30,30,"control")),x.Jb(2),x.pc("ngForOf",x.oc(32,32,e.regionsList,e.config)),x.Jb(2),x.qc("previousLabel",x.nc(34,35,"prev")),x.qc("nextLabel",x.nc(35,37,"next")),x.qc("screenReaderCurrentLabel",x.nc(36,39,"you-are-on-page"))}}function ce(e,t){1&e&&(x.ac(0,"div"),x.ac(1,"div",15),x.Wb(2,"div"),x.Wb(3,"div"),x.Wb(4,"div"),x.Wb(5,"div"),x.Zb(),x.Zb())}let re=(()=>{class e{constructor(e){this.store=e,this.regionsList=[]}ngOnInit(){this.store.dispatch(s()),this.getAllRegions()}getAllRegions(){this.regionsSubscription=this.store.select(ee).subscribe(e=>{console.log(e),this.regions=e,this.regionsList=e}),this.config={itemsPerPage:5,currentPage:1,totalItems:this.regionsList.length}}pageChanged(e){this.config.currentPage=e}delete(e){if(!confirm("Are You Sure You Want To Delete This Region"))return!1;this.isDeleted=!0,this.store.dispatch(b({id:e})),setTimeout(()=>{this.isDeleted=!1},1e3)}applyFilter(){this.name?(this.regionsList=[],this.regionsList=this.regions.filter(e=>{if(e.name){const t=e.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());if(t)return t}})):this.regionsList=[...this.regions]}ngOnDestroy(){this.regionsSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(x.Vb(a.h))},e.\u0275cmp=x.Pb({type:e,selectors:[["app-all-regions"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"text-center","details-title","my-4"],[1,"row"],[1,"col-10","col-sm-8","col-md-6","col-xl-4"],[1,"form-group","mb-4"],["id","exampleFormControlInput2","type","text",1,"form-control","form-control-underlined","border-primary","search-input",3,"ngModel","placeholder","title","ngModelChange","keyup"],[1,"table-responsive","text-center"],[1,"table","table-bordered","main-table"],[1,"bg-dark","text-white"],[4,"ngFor","ngForOf"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],[1,"img-thumbnail","img-custom",3,"src","alt"],[1,"td-custom"],[1,"btn","btn-success","btn-sm","mr-1","mb-1",3,"routerLink"],[3,"click"],[1,"lds-ring"]],template:function(e,t){1&e&&(x.Bc(0,oe,37,41,"div",0),x.Bc(1,ce,6,0,"div",0)),2&e&&(x.pc("ngIf",0!=t.regions.length),x.Jb(1),x.pc("ngIf",0==t.regions.length))},directives:[o.n,c.a,c.g,c.j,o.m,ne.c,i.f],pipes:[B.c,ne.b],styles:["agm-map[_ngcontent-%COMP%]{height:300px}"]}),e})();var ae=n("LRne");function se(e,t){if(1&e){const e=x.bc();x.ac(0,"li",30),x.ic("click",(function(){x.wc(e);const n=t.$implicit;return x.lc(3).getLocationInfo(n)})),x.Cc(1),x.Zb()}if(2&e){const e=t.$implicit;x.Jb(1),x.Dc(null==e?null:e.description)}}function le(e,t){if(1&e&&(x.ac(0,"ul",28),x.Bc(1,se,2,1,"li",29),x.Zb()),2&e){const e=x.lc(2);x.Jb(1),x.pc("ngForOf",e.googleLocationsNameList)}}function de(e,t){1&e&&(x.ac(0,"div",31),x.Wb(1,"div"),x.Wb(2,"div"),x.Wb(3,"div"),x.Wb(4,"div"),x.Zb())}function ge(e,t){if(1&e&&(x.ac(0,"div",25),x.Bc(1,le,2,1,"ul",26),x.Bc(2,de,5,0,"div",27),x.Zb()),2&e){const e=x.lc();x.Jb(1),x.pc("ngIf",e.googleLocationsNameList),x.Jb(1),x.pc("ngIf",!e.googleLocationsNameList)}}function ue(e,t){1&e&&(x.ac(0,"span",32),x.Cc(1),x.mc(2,"translate"),x.Zb()),2&e&&(x.Jb(1),x.Dc(x.nc(2,1,"name-field-required")))}function pe(e,t){1&e&&(x.ac(0,"span",32),x.Cc(1),x.mc(2,"translate"),x.Zb()),2&e&&(x.Jb(1),x.Dc(x.nc(2,1,"descriptioon-field-required")))}function be(e,t){1&e&&(x.ac(0,"span",32),x.Cc(1,"description Must Be Greater Than 3"),x.Zb())}const me=function(e){return{"is-invalid":e}},he=[{path:"",component:re},{path:"add",component:G},{path:":id",component:(()=>{class e{constructor(e,t,n,i,o,c,r){this.store=e,this.regionService=t,this.toaster=n,this.translate=i,this.render=o,this.document=c,this.activatedRoute=r,this.isSubmited=!1,this.uploadButtonValue="upload",this.coverUploadButtonValue="upload",this.imageName="select-image",this.fileSelected=!1,this.fileUploaded=!1,this.imagePathReady=!1,this.imageUploaded=!1,this.submitButtonValue="Waiting Uploading Image",this.showSearchResult=!1}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const t=e.get("id");this.store.dispatch(g({id:+t}))}),this.editRegionForm=new c.d({name:new c.b(""),description:new c.b(""),location:new c.b(""),path:new c.b(""),placeId:new c.b("",c.o.required)}),this.checkLangChange(),this.getRegion(),this.getGoogleMapToken()}getGoogleMapToken(){this.regionService.getGoogleMapToken().subscribe(e=>this.googleMapToken=e.Data)}getRegion(){this.store.select(te).subscribe(e=>{e&&(this.regionData=e,console.log("data detail: ",e),this.fillForms(e))})}fillForms(e){this.editRegionForm=new c.d({id:new c.b(e.id),name:new c.b(e.name),description:new c.b(e.description),location:new c.b(e.location),path:new c.b(e.path),placeId:new c.b(e.placeId)})}searchLocation(e){this.showSearchResult=!0;const t=Object(ae.a)(e.target.value.trim());this.regionService.searchLocationAutoComplete(t,this.googleMapToken).subscribe(e=>{e&&(this.googleLocationsNameList=e.predictions,console.log("search data : ",this.googleLocationsNameList))})}getLocationInfo(e){var t;const n=this.regionData.id,i=this.editRegionForm.get("description").value;e&&(this.showSearchResult=!1,this.editRegionForm=new c.d({id:new c.b(n),name:new c.b(null==e?void 0:e.description),description:new c.b(i),location:new c.b(null===(t=null==e?void 0:e.structured_formatting)||void 0===t?void 0:t.main_text_matched_substrings.length),placeId:new c.b(null==e?void 0:e.place_id),path:new c.b("")}))}checkLangChange(){this.translate.onLangChange.subscribe(e=>{console.log("lang change to : ",e),"ar"==e.lang?(console.log("lang : ",e.lang),this.render.removeClass(this.document.querySelector(".input-group-custom"),"input-group"),this.render.addClass(this.document.querySelector(".input-group-custom"),"input-group-ar")):(this.render.addClass(this.document.querySelector(".input-group-custom"),"input-group"),this.render.removeClass(this.document.querySelector(".input-group-custom"),"input-group-ar"))})}updateName(e){const t=e.files[0];this.uploadButtonValue="Upload",this.imageName=t.name,this.fileSelected=!0}processFile(e){this.fileSelected=!1,this.uploadButtonValue="Uploading...",this.imageUploaded=!0,console.log("Processing File");const t=e.files[0],n=new FileReader;n.addEventListener("load",e=>{this.selectedFile=new r.a(e.target.result,t),this.regionService.uploadImage(this.selectedFile.file).subscribe(e=>{console.log(e),this.imageUrl=e,this.uploadButtonValue="uploaded",this.imagePathReady=!0,this.imageUploaded=!1,this.submitButtonValue="update"},e=>{this.uploadButtonValue="upload",this.fileSelected=!0,this.imageUploaded=!1,this.toaster.error("Network Error, Please Try After a Few Seconds"),console.log(e)})}),n.readAsDataURL(t)}onSubmit(){if(!this.editRegionForm.valid)return this.toaster.error("Error : Form Not Valid"),this.isSubmited=!1,!1;const e=this.editRegionForm.getRawValue();e.path=this.imageUrl,e.path=this.imageUrl?this.imageUrl:this.regionData.regionImage[0].pathURL,console.log(e),this.store.dispatch(w({region:e}))}}return e.\u0275fac=function(t){return new(t||e)(x.Vb(a.h),x.Vb(A),x.Vb(S.b),x.Vb(B.d),x.Vb(x.K),x.Vb(o.e),x.Vb(i.a))},e.\u0275cmp=x.Pb({type:e,selectors:[["app-edit-region"]],decls:48,vars:43,consts:[[1,"container-fluid"],[1,"content-header"],[1,"text-center","my-5"],[1,"card","card-info"],[1,"card-header","bg-sidebar-item-button","text-white"],[1,"card-title","mb-0"],[3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","inputNameSuccess",1,"col-form-label"],["type","text","name","name","id","inputNameSuccess","formControlName","name",1,"form-control",3,"ngClass","placeholder","keydown"],["class","location-search-result px-3 py-2",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],["for","exampleInputdescription1"],["name","description","formControlName","description","id","exampleInputdescription1",1,"form-control",3,"ngClass","placeholder"],["for","exampleInputupload"],[1,"input-group","input-group-custom"],[1,"custom-file"],["type","file","accept","image/*","id","file-input",1,"custom-file-input",3,"change"],["imageInput",""],["for","file-input",1,"custom-file-label"],[1,"input-group-append"],["type","button",1,"btn","btn-success",3,"disabled","click"],[1,"card-footer"],["type","submit",1,"btn","bg-sidebar-item-button","text-white",3,"disabled"],[1,"location-search-result","px-3","py-2"],["class","list-unstyled mb-0",4,"ngIf"],["class","lds-ring",4,"ngIf"],[1,"list-unstyled","mb-0"],["class","pb-1",3,"click",4,"ngFor","ngForOf"],[1,"pb-1",3,"click"],[1,"lds-ring"],[1,"invalid-feedback"]],template:function(e,t){if(1&e){const e=x.bc();x.ac(0,"div",0),x.ac(1,"div",1),x.ac(2,"h1",2),x.Cc(3),x.mc(4,"translate"),x.Zb(),x.Zb(),x.ac(5,"div",3),x.ac(6,"div",4),x.ac(7,"h3",5),x.Cc(8),x.mc(9,"translate"),x.Zb(),x.Zb(),x.ac(10,"form",6),x.ic("ngSubmit",(function(){return t.onSubmit()})),x.ac(11,"div",7),x.ac(12,"div",8),x.ac(13,"label",9),x.Cc(14),x.mc(15,"translate"),x.Zb(),x.ac(16,"input",10),x.ic("keydown",(function(e){return t.searchLocation(e)})),x.mc(17,"translate"),x.Zb(),x.Bc(18,ge,3,2,"div",11),x.Bc(19,ue,3,3,"span",12),x.Zb(),x.ac(20,"div",8),x.ac(21,"label",13),x.Cc(22),x.mc(23,"translate"),x.Zb(),x.ac(24,"textarea",14),x.mc(25,"translate"),x.Cc(26,"                    "),x.Zb(),x.Bc(27,pe,3,3,"span",12),x.Bc(28,be,2,0,"span",12),x.Zb(),x.ac(29,"div",8),x.ac(30,"label",15),x.Cc(31),x.mc(32,"translate"),x.Zb(),x.ac(33,"div",16),x.ac(34,"div",17),x.ac(35,"input",18,19),x.ic("change",(function(){x.wc(e);const n=x.uc(36);return t.updateName(n)})),x.Zb(),x.ac(37,"label",20),x.Cc(38),x.mc(39,"translate"),x.Zb(),x.Zb(),x.ac(40,"div",21),x.ac(41,"button",22),x.ic("click",(function(){x.wc(e);const n=x.uc(36);return t.processFile(n)})),x.Cc(42),x.mc(43,"translate"),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.ac(44,"div",23),x.ac(45,"button",24),x.Cc(46),x.mc(47,"translate"),x.Zb(),x.Zb(),x.Zb(),x.Zb(),x.Zb()}2&e&&(x.Jb(3),x.Dc(x.nc(4,19,"update-region-page")),x.Jb(5),x.Dc(x.nc(9,21,"update-region")),x.Jb(2),x.pc("formGroup",t.editRegionForm),x.Jb(4),x.Dc(x.nc(15,23,"name")),x.Jb(2),x.qc("placeholder",x.nc(17,25,"name-type-placeholder")),x.pc("ngClass",x.sc(39,me,t.editRegionForm.get("name").errors&&(t.editRegionForm.get("name").touched||t.editRegionForm.get("name").dirty))),x.Jb(2),x.pc("ngIf",t.showSearchResult),x.Jb(1),x.pc("ngIf",null==t.editRegionForm.get("name").errors?null:t.editRegionForm.get("name").errors.required),x.Jb(3),x.Dc(x.nc(23,27,"description")),x.Jb(2),x.qc("placeholder",x.nc(25,29,"description-type-placeholder")),x.pc("ngClass",x.sc(41,me,t.editRegionForm.get("description").errors&&(t.editRegionForm.get("description").touched||t.editRegionForm.get("description").dirty))),x.Jb(3),x.pc("ngIf",null==t.editRegionForm.get("description").errors?null:t.editRegionForm.get("description").errors.required),x.Jb(1),x.pc("ngIf",null==t.editRegionForm.get("description").errors?null:t.editRegionForm.get("description").errors.minlength),x.Jb(3),x.Dc(x.nc(32,31,"upload")),x.Jb(7),x.Dc(x.nc(39,33,t.imageName)),x.Jb(3),x.pc("disabled",!t.fileSelected),x.Jb(1),x.Ec(" ",x.nc(43,35,t.uploadButtonValue)," "),x.Jb(3),x.pc("disabled",t.editRegionForm.invalid||t.imageUploaded),x.Jb(1),x.Dc(x.nc(47,37,"update")))},directives:[c.q,c.h,c.e,c.a,c.g,c.c,o.l,o.n,o.m],pipes:[B.c],styles:['.location-search-result[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:all .5s ease;background:rgba(54,72,94,.92);color:#fff;border-radius:5px;padding-left:10px}.location-search-result[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]{display:block;position:inherit;width:64px;height:64px;margin-left:auto;margin-right:auto}.card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover{background:rgba(54,72,94,.8)}.input-group-ar[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]{width:100%;min-width:14rem;max-width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:.25rem 0 0 .25rem}']}),e})()}];let fe=(()=>{class e{}return e.\u0275mod=x.Tb({type:e}),e.\u0275inj=x.Sb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(he)],i.g]}),e})();var Oe=n("9jGm"),Ce=n("5+tZ"),ve=n("lJxs"),Re=n("JIr8"),we=n("XqQ8");let Pe=(()=>{class e{constructor(e,t,n,i,o,c){this.actions$=e,this.store=t,this.toaster=n,this.router=i,this.activatedRoute=o,this.regionService=c,this.loadRegions$=Object(Oe.c)(()=>this.actions$.pipe(Object(Oe.d)(s),Object(Ce.a)(()=>this.regionService.getAllRegions().pipe(Object(ve.a)(e=>l(e)),Object(Re.a)(e=>(console.log("error effect: ",e),e.error.error?this.toaster.error(e.error.error):e.error.msg&&this.toaster.error(e.error.msg),Object(ae.a)(d(e)))))))),this.loadRegion$=Object(Oe.c)(()=>this.actions$.pipe(Object(Oe.d)(g),Object(Ce.a)(e=>this.regionService.getRegion(e.id).pipe(Object(ve.a)(e=>u({region:e.Data})),Object(Re.a)(e=>(console.log("error effect",e),Object(ae.a)(p({error:e})))))))),this.addRegion$=Object(Oe.c)(()=>this.actions$.pipe(Object(Oe.d)(f),Object(we.a)(e=>this.regionService.createRegion(e.region).pipe(Object(ve.a)(e=>(this.toaster.success(null==e?void 0:e.msg),O())),Object(Re.a)(e=>(console.log("error create effect",e),Object(ae.a)(C({error:e})))))))),this.updateRegion$=Object(Oe.c)(()=>this.actions$.pipe(Object(Oe.d)(w),Object(J.a)(e=>this.regionService.updateRegion(e.region).pipe(Object(ve.a)(t=>{this.toaster.success(t.msg);const n={id:e.region.id,changes:Object.assign({},e.region)};return P({region:n})}),Object(Re.a)(e=>Object(ae.a)(j({error:e}))))))),this.redirectAddUpdateRegion$=Object(Oe.c)(()=>this.actions$.pipe(Object(Oe.d)(O,P),Object(ve.a)(()=>{this.router.navigate(["regions"])})),{dispatch:!1}),this.deleteRegion$=Object(Oe.c)(()=>this.actions$.pipe(Object(Oe.d)(b),Object(we.a)(e=>this.regionService.deleteRegion(e.id).pipe(Object(ve.a)(e=>(console.log(e),this.toaster.success("Region Successfully Deleted"),m())),Object(Re.a)(e=>(console.log("effect delete error",e),Object(ae.a)(h({error:e}))))))))}}return e.\u0275fac=function(t){return new(t||e)(x.ec(Oe.a),x.ec(a.h),x.ec(S.b),x.ec(i.d),x.ec(i.a),x.ec(A))},e.\u0275prov=x.Rb({token:e,factory:e.\u0275fac}),e})();var je=n("vTDv");let ye=(()=>{class e{}return e.\u0275mod=x.Tb({type:e}),e.\u0275inj=x.Sb({factory:function(t){return new(t||e)},imports:[[je.a,fe,a.j.forFeature("regions",H),Oe.b.forFeature([Pe])]]}),e})()}}]);