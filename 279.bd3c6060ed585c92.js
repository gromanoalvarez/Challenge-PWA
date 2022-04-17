"use strict";(self.webpackChunkchallenge=self.webpackChunkchallenge||[]).push([[279],{3279:(L,g,r)=>{r.r(g),r.d(g,{DashboardModule:()=>j});var l=r(6696),c=r(3075),t=r(5e3),y=r(520);let h=(()=>{class o{constructor(e){this.http=e,this.urlAPI="https://jsonplaceholder.typicode.com/",this.endpoint=this.urlAPI+"posts/"}getPost(){return this.http.get(this.endpoint)}createPost(e){return this.http.post(this.endpoint,e)}getComments(e){return this.http.get(this.endpoint+e+"/comments")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(y.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var D=r(7261),f=r(9224),b=r(3954),Z=r(7322),x=r(7531),u=r(7423);let U=(()=>{class o{constructor(e,a,i,d){this.fb=e,this._postsService=a,this.router=i,this._snackBar=d,this.form=this.fb.group({title:["",c.kI.required],body:["",c.kI.required]})}createNewArticle(){const a={userId:this.generateRandomId(),id:0,title:this.form.value.title,body:this.form.value.body};this._postsService.createPost(a).subscribe(i=>{console.log(i),this._snackBar.open("Publicaci\xf3n exitosa nro.: "+i.id,"Cerrar"),this.router.navigate(["/dashboard/home"])})}generateRandomId(){return this.numberRandom=Math.floor(999*Math.random())+1,this.numberRandom}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(h),t.Y36(l.F0),t.Y36(D.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create"]],decls:21,vars:2,consts:[[1,"card","mat-elevation-z9"],[3,"formGroup","ngSubmit"],["cols","2","rowHeight","3em","gutterSize","0.5em"],["colspan","2"],["matInput","","autocomplete","off","formControlName","title"],["colspan","2","rowspan","3"],["matInput","","autocomplete","off","rows","10","formControlName","body"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,a){1&e&&(t._UZ(0,"br"),t.TgZ(1,"mat-card",0),t._uU(2," Crear Art\xedculo"),t.qZA(),t._UZ(3,"br"),t._UZ(4,"br"),t.TgZ(5,"form",1),t.NdJ("ngSubmit",function(){return a.createNewArticle()}),t.TgZ(6,"mat-grid-list",2),t.TgZ(7,"mat-grid-tile",3),t.TgZ(8,"mat-form-field"),t.TgZ(9,"mat-label"),t._uU(10,"Title"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.qZA(),t.TgZ(12,"mat-grid-tile",5),t.TgZ(13,"mat-form-field"),t.TgZ(14,"mat-label"),t._uU(15,"Body"),t.qZA(),t._UZ(16,"textarea",6),t.qZA(),t.qZA(),t.TgZ(17,"mat-grid-tile",3),t.TgZ(18,"button",7),t._uU(19,"Publicar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(20,"br")),2&e&&(t.xp6(5),t.Q6J("formGroup",a.form),t.xp6(13),t.Q6J("disabled",a.form.invalid))},directives:[f.a8,c._Y,c.JL,c.sg,b.Il,b.DX,Z.KE,Z.hX,x.Nt,c.Fj,c.JJ,c.u,u.lW],styles:["form[_ngcontent-%COMP%]{padding-bottom:15em;width:90%;margin:auto}mat-grid-tile[_ngcontent-%COMP%]{background-color:#48d1cc;border-radius:5px;color:teal;font-size:1.5rem;font-weight:500;font-family:Georgia,Times New Roman,Times,serif}mat-form-field[_ngcontent-%COMP%]{width:80%;margin:auto;color:#483d8b;font-size:1.5rem;font-weight:500;font-family:Georgia,Times New Roman,Times,serif}img[_ngcontent-%COMP%]{width:280px;height:auto}button[_ngcontent-%COMP%]{width:100%;height:100%;font-size:2rem;font-weight:900;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}button[_ngcontent-%COMP%]:hover{background-color:#483d8b}"]}),o})();var S=r(4594),C=r(5245),v=r(7238);let P=(()=>{class o{constructor(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-navbar"]],decls:12,vars:0,consts:[["id","navbar"],["color","primary"],["mat-flat-button","","color","primary","routerLink",""],["matTooltip","Volver"],[1,"example-spacer"],["mat-flat-button","","color","primary","routerLink","/dashboard/home",2,"margin-right","1em"],["mat-flat-button","","color","accent","routerLink","/dashboard/create-post"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-toolbar",1),t.TgZ(2,"button",2),t.TgZ(3,"mat-icon",3),t._uU(4,"first_page"),t.qZA(),t.TgZ(5,"span"),t._uU(6," Challenge Angular "),t.qZA(),t.qZA(),t._UZ(7,"span",4),t.TgZ(8,"button",5),t._uU(9,"Ver Art\xedculos"),t.qZA(),t.TgZ(10,"button",6),t._uU(11,"Crear Art\xedculo"),t.qZA(),t.qZA(),t.qZA())},directives:[S.Ye,u.lW,l.rH,C.Hw,v.gM],styles:["#navbar[_ngcontent-%COMP%]{max-width:100%!important}mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#6495ed}mat-icon[_ngcontent-%COMP%]{color:#40e0d0!important}"]}),o})();var M=r(4662);let w=(()=>{class o{constructor(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:3,vars:0,template:function(e,a){1&e&&(t._UZ(0,"app-navbar"),t._UZ(1,"router-outlet"),t._UZ(2,"app-footer"))},directives:[P,l.lC,M.c],styles:[""]}),o})();var T=r(3892),p=r(4847),s=r(4999),m=r(8966),O=r(9808);function I(o,n){if(1&o&&(t.TgZ(0,"ul"),t.TgZ(1,"li"),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA(),t._UZ(8,"hr"),t.qZA(),t.qZA()),2&o){const e=n.$implicit,a=n.index;t.xp6(3),t.AsE(" ",a+1," _ ",e.name," "),t.xp6(2),t.hij(" ",e.body," "),t.xp6(2),t.hij(" ",e.email," ")}}let _=(()=>{class o{constructor(e,a){this.dialogRef=e,this.data=a}onNoClick(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dialog-overview-example-dialog"]],decls:8,vars:1,consts:[["mat","","dialog-title",""],["mat-dialog-content",""],[4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h1",0),t._uU(2,"Comentarios: "),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,I,9,4,"ul",2),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return a.onNoClick()}),t._uU(7,"Volver"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngForOf",a.data.comments))},directives:[m.xY,O.sg,m.H8,u.lW],styles:["button[_ngcontent-%COMP%]{background-color:#483d8b;color:#fff;border-radius:5px;border:none;width:100%}button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#48d1cc}"]}),o})();var N=r(5664),Y=r(7544);function q(o,n){1&o&&(t.TgZ(0,"th",13),t._uU(1,"T\xedtulo"),t.qZA())}function R(o,n){if(1&o&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Oqu(e.title)}}function z(o,n){1&o&&(t.TgZ(0,"th",15),t._uU(1,"Contenido"),t.qZA())}function E(o,n){if(1&o&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Oqu(e.body)}}function F(o,n){1&o&&t._UZ(0,"th",16)}function J(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"td",14),t.TgZ(1,"button",17),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().openDialog(d.id)}),t.TgZ(2,"mat-icon",18),t._uU(3,"comments"),t.qZA(),t.qZA(),t.qZA()}}function B(o,n){1&o&&t._UZ(0,"tr",19)}function H(o,n){1&o&&t._UZ(0,"tr",20)}const Q=function(){return[5,10,25]};let A=(()=>{class o{constructor(e,a,i){this._postsServices=e,this._liveAnnouncer=a,this.dialog=i,this.comments=[],this.displayedColumns=["title","body","comments"]}ngOnInit(){this.getAllPosts()}activateTable(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}announceSortChange(e){this._liveAnnouncer.announce(e.direction?`Sorted ${e.direction}ending`:"Sorting cleared")}getAllPosts(){this._postsServices.getPost().subscribe(e=>{this.listPosts=e,this.dataSource=new s.by(this.listPosts),this.activateTable()})}openDialog(e){this._postsServices.getComments(e).subscribe(a=>{this.dialog.open(_,{width:"75%",data:{comments:a}})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(N.Kd),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-inicio"]],viewQuery:function(e,a){if(1&e&&(t.Gf(T.NW,5),t.Gf(p.YE,5)),2&e){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first),t.iGM(i=t.CRH())&&(a.sort=i.first)}},decls:18,vars:6,consts:[[1,"card","mat-elevation-z9"],["id","table",1,"mat-elevation-z5"],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","title"],["class","title","mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by title",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","body"],["class","body","mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by content",4,"matHeaderCellDef"],["matColumnDef","comments"],["class","comments","mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of Posts",3,"pageSize","pageSizeOptions"],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by title",1,"title"],["mat-cell",""],["mat-header-cell","","mat-sort-header","","sortActionDescription","Sort by content",1,"body"],["mat-header-cell","",1,"comments"],["matTooltip","Ver comentarios",3,"click"],["matBadge","...","matBadgeColor","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t._UZ(0,"br"),t.TgZ(1,"mat-card",0),t._uU(2," Principales Art\xedculos"),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"div",1),t.TgZ(5,"table",2),t.NdJ("matSortChange",function(d){return a.announceSortChange(d)}),t.ynx(6,3),t.YNc(7,q,2,0,"th",4),t.YNc(8,R,2,1,"td",5),t.BQk(),t.ynx(9,6),t.YNc(10,z,2,0,"th",7),t.YNc(11,E,2,1,"td",5),t.BQk(),t.ynx(12,8),t.YNc(13,F,1,0,"th",9),t.YNc(14,J,4,0,"td",5),t.BQk(),t.YNc(15,B,1,0,"tr",10),t.YNc(16,H,1,0,"tr",11),t.qZA(),t._UZ(17,"mat-paginator",12),t.qZA()),2&e&&(t.xp6(5),t.Q6J("dataSource",a.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSize",10)("pageSizeOptions",t.DdM(5,Q)))},directives:[f.a8,s.BZ,p.YE,s.w1,s.fO,s.ge,p.nU,s.Dz,s.ev,v.gM,C.Hw,Y.k,s.as,s.XQ,s.nj,s.Gk,T.NW],styles:["#table[_ngcontent-%COMP%]{width:90%;margin:auto}.mat-colim-userId[_ngcontent-%COMP%], .mat-colim-id[_ngcontent-%COMP%]{width:.5em}.mat-column-title[_ngcontent-%COMP%]{width:20%;padding-left:16px;font-size:20px}.mat-column-body[_ngcontent-%COMP%]{width:70%}button[_ngcontent-%COMP%]{background-color:#483d8b;color:#fff;border-radius:5px;border:none}button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#48d1cc}"]}),o})();const G=[{path:"",component:w,children:[{path:"",component:A},{path:"home",component:A},{path:"create-post",component:U}]}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(G)],l.Bz]}),o})();var X=r(4065);let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[k,X.m]]}),o})()}}]);