(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/2RN":function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",(function(){return X}));var c=e("vTDv"),a=e("tyNb"),o=e("klsY"),s=e("kt0X");const i=Object(s.n)("[Dashboard/API] Load Dashboards"),r=Object(s.n)("[Dashboard/API] Load Dashboards Success",Object(s.s)()),b=Object(s.n)("[Dashboard/API] Load Dashboards Failure",Object(s.s)());var l=e("R0sL");const d=Object(l.a)(),g=d.getInitialState({Data:void 0,error:void 0}),u=Object(s.p)(g,Object(s.r)(r,(t,n)=>Object.assign(Object.assign({},t),{Data:n.Data}))),m=(d.getSelectors(),Object(s.o)("dashboards")),f=Object(s.q)(m,t=>t.Data);Object(s.q)(m,t=>t.error);var h=e("fXoL"),p=e("EWl0"),v=e("tk/3");let C=(()=>{class t{constructor(t){this.httpClient=t}getStatistics(){return this.httpClient.get(p.a.dashboardStatisticAPI)}getAllGuides(){return this.httpClient.get(p.a.guidesAPI)}getAllEvents(){return this.httpClient.get(p.a.eventsAPI)}}return t.\u0275fac=function(n){return new(n||t)(h.ec(v.b))},t.\u0275prov=h.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=e("ofXK"),O=e("SXPc"),P=e("sYmb");function Z(t,n){if(1&t&&(h.Yb(0),h.ac(1,"div",44),h.Cc(2),h.ac(3,"a",45),h.Cc(4),h.mc(5,"translate"),h.Zb(),h.Zb(),h.Xb()),2&t){const t=h.lc().$implicit;h.Jb(2),h.Ec(" ",null==t?null:t.name.slice(0,20)," "),h.Jb(1),h.rc("routerLink","/guides/",null==t?null:t.id,""),h.Jb(1),h.Dc(h.nc(5,3,"view"))}}function M(t,n){if(1&t&&(h.Yb(0),h.Bc(1,Z,6,5,"ng-container",1),h.Xb()),2&t){const t=n.index,e=h.lc(3);h.Jb(1),h.pc("ngIf",t<e.latestGuidesNumber)}}function x(t,n){if(1&t&&(h.ac(0,"div",28),h.Bc(1,M,2,1,"ng-container",43),h.Zb()),2&t){const t=h.lc(2);h.Jb(1),h.pc("ngForOf",t.allGuides)}}function w(t,n){1&t&&(h.ac(0,"div",28),h.ac(1,"div",44),h.Cc(2),h.mc(3,"translate"),h.Zb(),h.Zb()),2&t&&(h.Jb(2),h.Ec(" ",h.nc(3,1,"guides-not-found")," "))}function J(t,n){if(1&t&&(h.Yb(0),h.ac(1,"div",44),h.Cc(2),h.ac(3,"a",45),h.Cc(4),h.mc(5,"translate"),h.Zb(),h.Zb(),h.Xb()),2&t){const t=h.lc().$implicit;h.Jb(2),h.Ec(" ",null==t?null:t.name.slice(0,20)," "),h.Jb(1),h.rc("routerLink","/events/edit/",null==t?null:t.id,""),h.Jb(1),h.Dc(h.nc(5,3,"update"))}}function D(t,n){if(1&t&&(h.Yb(0),h.Bc(1,J,6,5,"ng-container",1),h.Xb()),2&t){const t=n.index,e=h.lc(3);h.Jb(1),h.pc("ngIf",t<e.latestEventsNumber)}}function k(t,n){if(1&t&&(h.ac(0,"div",28),h.Bc(1,D,2,1,"ng-container",43),h.Zb()),2&t){const t=h.lc(2);h.Jb(1),h.pc("ngForOf",t.allEvents)}}function I(t,n){1&t&&(h.ac(0,"div",28),h.ac(1,"div",44),h.Cc(2),h.mc(3,"translate"),h.Zb(),h.Zb()),2&t&&(h.Jb(2),h.Ec(" ",h.nc(3,1,"events-not-found")," "))}function j(t,n){if(1&t&&(h.ac(0,"div",2),h.ac(1,"div",3),h.ac(2,"div",4),h.ac(3,"h1",5),h.Cc(4),h.mc(5,"translate"),h.Zb(),h.ac(6,"div",6),h.ac(7,"div",7),h.ac(8,"div",8),h.Wb(9,"i",9),h.ac(10,"div"),h.ac(11,"h6"),h.Cc(12),h.mc(13,"translate"),h.Zb(),h.ac(14,"span"),h.ac(15,"a",10),h.Cc(16),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(17,"div",7),h.ac(18,"div",11),h.Wb(19,"i",12),h.ac(20,"div"),h.ac(21,"h6"),h.Cc(22),h.mc(23,"translate"),h.Zb(),h.ac(24,"span"),h.ac(25,"a",13),h.Cc(26),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(27,"div",7),h.ac(28,"div",14),h.Wb(29,"i",15),h.ac(30,"div"),h.ac(31,"h6"),h.Cc(32),h.mc(33,"translate"),h.Zb(),h.ac(34,"span"),h.ac(35,"a",16),h.Cc(36),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(37,"div",17),h.ac(38,"div",18),h.Wb(39,"i",19),h.ac(40,"div"),h.ac(41,"h6"),h.Cc(42),h.mc(43,"translate"),h.Zb(),h.ac(44,"span"),h.ac(45,"a",20),h.Cc(46),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(47,"div",17),h.ac(48,"div",21),h.Wb(49,"i",22),h.ac(50,"div"),h.ac(51,"h6"),h.Cc(52),h.mc(53,"translate"),h.Zb(),h.ac(54,"span"),h.ac(55,"a",23),h.Cc(56),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(57,"div",24),h.ac(58,"div",6),h.ac(59,"div",25),h.ac(60,"div",26),h.ac(61,"div",27),h.ac(62,"div",28),h.ac(63,"div",29),h.ac(64,"span",30),h.Cc(65),h.mc(66,"translate"),h.Zb(),h.Zb(),h.Zb(),h.ac(67,"div",31),h.ac(68,"div",6),h.ac(69,"div",32),h.mc(70,"translate"),h.Wb(71,"i",33),h.ac(72,"span"),h.Cc(73),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(74,"div",25),h.ac(75,"div",34),h.ac(76,"div",27),h.ac(77,"div",28),h.ac(78,"div",29),h.ac(79,"span",30),h.Cc(80),h.mc(81,"translate"),h.Zb(),h.Zb(),h.Zb(),h.ac(82,"div",35),h.ac(83,"div",6),h.ac(84,"div",36),h.mc(85,"translate"),h.Wb(86,"i",37),h.ac(87,"span"),h.Cc(88),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(89,"div",38),h.ac(90,"div",39),h.ac(91,"div",40),h.ac(92,"div",41),h.Cc(93),h.mc(94,"translate"),h.mc(95,"translate"),h.Zb(),h.Bc(96,x,2,1,"div",42),h.Bc(97,w,4,3,"div",42),h.Zb(),h.Zb(),h.Zb(),h.ac(98,"div",38),h.ac(99,"div",39),h.ac(100,"div",40),h.ac(101,"div",41),h.Cc(102),h.mc(103,"translate"),h.mc(104,"translate"),h.Zb(),h.Bc(105,k,2,1,"div",42),h.Bc(106,I,4,3,"div",42),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb()),2&t){const t=n.ngIf,e=h.lc();h.Jb(4),h.Dc(h.nc(5,27,"dashboard-page")),h.Jb(8),h.Dc(h.nc(13,29,"total-regions")),h.Jb(4),h.Dc(null==t?null:t.regions),h.Jb(6),h.Dc(h.nc(23,31,"total-events")),h.Jb(4),h.Dc(null==t?null:t.events),h.Jb(6),h.Dc(h.nc(33,33,"total-completed-orders")),h.Jb(4),h.Dc(null==t?null:t.completedOrders),h.Jb(6),h.Dc(h.nc(43,35,"total-guides")),h.Jb(4),h.Dc(null==t||null==t.users?null:t.users.guides),h.Jb(6),h.Dc(h.nc(53,37,"total-tourists")),h.Jb(4),h.Dc(null==t||null==t.users?null:t.users.tourists),h.Jb(9),h.Dc(h.nc(66,39,"rating-number")),h.Jb(4),h.qc("title",h.nc(70,41,"rating")),h.Jb(4),h.Dc(null==t?null:t.ratings),h.Jb(7),h.Dc(h.nc(81,43,"comments-number")),h.Jb(4),h.qc("title",h.nc(85,45,"comments-number")),h.Jb(4),h.Dc(null==t?null:t.comments),h.Jb(5),h.Gc(" ",h.nc(94,47,"latest")," ",e.latestGuidesNumber," ",h.nc(95,49,"guides")," "),h.Jb(3),h.pc("ngIf",0!=(null==e.allGuides?null:e.allGuides.length)),h.Jb(1),h.pc("ngIf",0==(null==e.allGuides?null:e.allGuides.length)),h.Jb(5),h.Gc(" ",h.nc(103,51,"latest")," ",e.latestEventsNumber," ",h.nc(104,53,"events")," "),h.Jb(3),h.pc("ngIf",0!=(null==e.allEvents?null:e.allEvents.length)),h.Jb(1),h.pc("ngIf",0==(null==e.allEvents?null:e.allEvents.length))}}function y(t,n){1&t&&(h.ac(0,"div"),h.ac(1,"div",46),h.Wb(2,"div"),h.Wb(3,"div"),h.Wb(4,"div"),h.Wb(5,"div"),h.Zb(),h.Zb())}const E=[{path:"",component:(()=>{class t{constructor(t,n){this.store=t,this.dashboardService=n,this.latestGuidesNumber=5,this.latestEventsNumber=5}ngOnInit(){this.store.dispatch(i()),this.getStatistics(),this.getAllGuides(),this.getAllEvents()}getStatistics(){this.statistics$=this.store.select(f)}getAllGuides(){this.dashboardService.getAllGuides().subscribe(t=>{console.log(t.Data),this.allGuides=t.Data.reverse()})}getAllEvents(){this.dashboardService.getAllEvents().subscribe(t=>this.allEvents=t.Data.reverse())}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(h.Vb(s.h),h.Vb(C))},t.\u0275cmp=h.Pb({type:t,selectors:[["app-dashboard"]],features:[h.Ib([o.a])],decls:5,vars:6,consts:[["class","w-100 mb-4",4,"ngIf"],[4,"ngIf"],[1,"w-100","mb-4"],[1,"container"],[1,"home-stat"],[1,"my-4","text-center"],[1,"row"],[1,"col-md-6","col-lg-4"],[1,"stat","mb-3","st_categories"],[1,"fa","fa-institution","fa-fw","fa-5x"],["routerLink","/regions"],[1,"stat","mb-3","st_animes"],[1,"fa","fa-calendar-check-o","fa-fw","fa-5x"],["routerLink","/events"],[1,"stat","mb-3","st_episode_coming_soon"],[1,"fa","fa-tags","fa-fw","fa-5x"],["routerLink","/orders/accepted"],[1,"col-md-6","col-lg-4","mx-auto"],[1,"stat","mb-3","st_clients"],[1,"fa","fa-user-circle","fa-fw","fa-5x"],["routerLink","/guides"],[1,"stat","mb-3","st_pending"],[1,"fa","fa-users","fa-fw","fa-5x"],["routerLink",""],[1,"latest","mt-5"],[1,"col-12","col-md-6","mb-3"],[1,"card","bg-gradient-x-dark-blue","text-white","border-0"],[1,"card-content"],[1,"card-body"],[1,"weather-details","text-center"],[1,"block","white","darken-1"],[1,"card-footer","bg-gradient-x-dark-blue","border-0"],[1,"col-6","text-center","display-table-cell","white","mx-auto",3,"title"],[1,"fa","fa-star","fa-fw","mx-1"],[1,"card","bg-gradient-x-info","text-white","border-0"],[1,"card-footer","bg-gradient-x-info","border-0"],[1,"col-4","text-center","display-table-cell","white","mx-auto",3,"title"],[1,"fa","fa-comments","fa-fw","mx-1"],[1,"col-12","col-md-6"],[1,"late","mb-3"],[1,"card"],[1,"card-header"],["class","card-body",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"late_info"],[1,"btn","btn-success","btn-sm","py-0","float-right",3,"routerLink"],[1,"lds-ring"]],template:function(t,n){1&t&&(h.Bc(0,j,107,55,"div",0),h.mc(1,"async"),h.Bc(2,y,6,0,"div",1),h.mc(3,"async"),h.Wb(4,"app-footer")),2&t&&(h.pc("ngIf",h.nc(1,2,n.statistics$)),h.Jb(2),h.pc("ngIf",!h.nc(3,4,n.statistics$)))},directives:[_.n,O.a,a.f,_.m],pipes:[_.b,P.c],styles:['@media (min-width:768px) and (max-width:991px){.home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}}@media (min-width:576px) and (max-width:767px){.home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width:575px){.home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem}}@media (min-width:768px) and (max-width:1199px){.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:4em;transform:translateY(25%)}}.home-stat[_ngcontent-%COMP%]   .st_member[_ngcontent-%COMP%]{background:#3498db}.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%]{background:#c0392b}.home-stat[_ngcontent-%COMP%]   .st_comment[_ngcontent-%COMP%]{background:#8e44ad}.home-stat[_ngcontent-%COMP%]   .st_interactions[_ngcontent-%COMP%]{background:#218c74}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]{background:#5f9ea0;padding:15px;margin-bottom:5px;text-align:center;border-radius:10px;color:#fff;border:1px solid #ccc;position:relative;overflow:hidden;transition:all .5s ease-in-out}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:50px;font-weight:600}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover{-o-box-shadow:3px 3px 10px #888;box-shadow:3px 3px 10px #888}.home-stat[_ngcontent-%COMP%]   .st_categories[_ngcontent-%COMP%]{background:#3498db}.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%]{background:#008385}.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%]{background:#d35400}.home-stat[_ngcontent-%COMP%]   .st_animes[_ngcontent-%COMP%]{background:#8e44ad}.home-stat[_ngcontent-%COMP%]   .st_episode_coming_soon[_ngcontent-%COMP%]{background:#218c74}.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%]{background:#40407a}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{float:right}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;left:10px;top:18px}.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{position:relative}.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#999;cursor:pointer}.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:7px}.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd){background:#eee}.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type{border-bottom:none}.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]{position:relative;overflow:hidden}.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;float:left;padding:6px 10px;color:#329de5;font-size:16px;width:140px}.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{float:right;width:calc(100% - 140px);background:#eee;padding:10px;position:relative}.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before{content:"";position:absolute;width:0;height:0;top:10px;left:-20px;border:10px solid transparent;border-right-color:#eee}']}),t})()},{path:"dashboard",redirectTo:"",pathMatch:"full"}];let S=(()=>{class t{}return t.\u0275mod=h.Tb({type:t}),t.\u0275inj=h.Sb({factory:function(n){return new(n||t)},imports:[[a.g.forChild(E)],a.g]}),t})();var G=e("9jGm"),A=e("eIep"),L=e("lJxs"),W=e("JIr8"),B=e("LRne");let N=(()=>{class t{constructor(t,n){this.actions$=t,this.dashboardService=n,this.loadDashboardStatistics$=Object(G.c)(()=>this.actions$.pipe(Object(G.d)(i),Object(A.a)(()=>this.dashboardService.getStatistics().pipe(Object(L.a)(t=>r({Data:t.Data})),Object(W.a)(t=>Object(B.a)(b({error:t})))))))}}return t.\u0275fac=function(n){return new(n||t)(h.ec(G.a),h.ec(C))},t.\u0275prov=h.Rb({token:t,factory:t.\u0275fac}),t})(),X=(()=>{class t{}return t.\u0275mod=h.Tb({type:t}),t.\u0275inj=h.Sb({factory:function(n){return new(n||t)},imports:[[c.a,S,s.j.forFeature("dashboards",u),G.b.forFeature([N])]]}),t})()}}]);