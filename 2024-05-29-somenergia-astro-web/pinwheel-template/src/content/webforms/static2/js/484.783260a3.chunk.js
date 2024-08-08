"use strict";(self.webpackChunkwebforms_ui=self.webpackChunkwebforms_ui||[]).push([[484],{8952:function(e,i,n){var o=n(9439),l=n(2791),a=n(8596),d=n(8182),t=n(6782),r=n(1288),s=n(8912),u=n(4266),c=n(8302),v=n(184),m=(0,a.Z)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{marginTop:e.spacing(3)},title:{fontSize:"1rem",marginTop:e.spacing(2)},chooserItem:{cursor:"pointer",minHeight:"100px",height:"100%",paddingTop:e.spacing(2),paddingBottom:e.spacing(2),paddingRight:e.spacing(3),paddingLeft:e.spacing(3),border:"1px solid rgba(0, 0, 0, 0.12)",margin:"0 0 8px 0","&:hover":{border:"1px solid rgba(0, 0, 0, 0.87)",backgroundColor:"rgba(0, 0, 0, 0.03)"},display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"top"},chooserItemCondensed:{minHeight:"40px",paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},chooserItemSelected:{margin:"0 0 8px 0",border:"1px solid #96b633",backgroundColor:"rgba(150, 182, 51, 0.08)","&:hover":{border:"1px solid #96b633",backgroundColor:"rgba(150, 182, 51, 0.08)"}},chooserItemDisabled:{cursor:"not-allowed",color:"rgba(0, 0, 0, 0.54)","&:hover":{border:"1px solid rgba(0, 0, 0, 0.12)",backgroundColor:"inherit"}},chooserItemTitle:{display:"flex",alignItems:"center"},chooserItemDesc:{marginTop:e.spacing(1),paddingLeft:e.spacing(1)}}})),p=function(e){var i=m(),n=e.question,a=e.options,p=e.onChange,h=e.value,x=e.disabled,g=e.name,f=e.condensed,_=void 0!==f&&f,Z=e.canBeEmpty,j=void 0===Z||Z,E=(0,l.useState)(h),T=(0,o.Z)(E,2),y=T[0],C=T[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{variant:"h6",className:i.title,dangerouslySetInnerHTML:{__html:n}}),(0,v.jsx)(u.Z,{className:i.margin,defaultValue:"",name:g,"data-cy":g,children:(0,v.jsx)(r.Z,{container:!0,spacing:3,children:a.map((function(e,n){return(0,v.jsxs)(r.Z,{item:!0,xs:12,sm:6,children:[(0,v.jsxs)("label",{"data-value":e.value,id:e.id||e.value,onClick:function(i){return!x&&function(e,i){"A"!==e.target.tagName&&(e.preventDefault(),j&&y===i?(C(void 0),p({option:void 0})):(C(i),p({option:i})))}(i,e.value)},className:(0,d.Z)(i.chooserItem,_&&i.chooserItemCondensed,y===e.value&&i.chooserItemSelected,x&&i.chooserItemDisabled),children:[(0,v.jsxs)("div",{className:i.chooserItemTitle,children:[(0,v.jsx)(s.Z,{disabled:x,value:e.value,color:"primary",checked:y===e.value}),(0,v.jsx)(c.Z,{children:e.label})]}),e.description&&(0,v.jsx)(t.Z,{className:i.chooserItemDesc,dangerouslySetInnerHTML:{__html:e.description}})]}),e.helper]},n)}))})})]})};p.defaultProps={onChange:function(e){return console.log("change",e.value)}},i.Z=p},7398:function(e,i,n){var o=n(9439),l=n(2791),a=n(3168),d=n(5720),t=n(1288),r=n(9626),s=n(1859),u=n(4279),c=n(9299),v=n(184);i.Z=function(e){var i=(0,a.$)().t,n=e.stateName,m=e.stateId,p=e.stateInitial,h=e.cityName,x=e.cityId,g=e.cityInitial,f=e.stateError,_=e.stateHelperText,Z=e.cityError,j=e.cityHelperText,E=e.onChange,T=e.onBlur,y=(0,l.useState)(p),C=(0,o.Z)(y,2),I=C[0],A=C[1],b=(0,l.useState)([]),R=(0,o.Z)(b,2),L=R[0],N=R[1],O=(0,l.useState)(!1),P=(0,o.Z)(O,2),D=P[0],S=P[1],H=(0,l.useState)(g),B=(0,o.Z)(H,2),M=B[0],W=B[1],k=(0,l.useState)([]),F=(0,o.Z)(k,2),U=F[0],Y=F[1],q=(0,l.useState)([]),w=(0,o.Z)(q,2),V=w[0],G=w[1],z=(0,l.useState)(!1),X=(0,o.Z)(z,2),K=X[0],$=X[1];(0,l.useEffect)((function(){A(p),W(g)}),[p,g]),(0,l.useEffect)((function(){S(!0),(0,c.HQ)().then((function(e){var i,n={};(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.provincies)&&e.data.provincies.forEach((function(e){var i=e.id,o=e.name;n[i]=o})),N(n),S(!1)})).catch((function(e){console.error(e),S(!1)}))}),[]),(0,l.useEffect)((function(){I&&""!==(null===I||void 0===I?void 0:I.id)&&($(!0),(0,c.qZ)(I.id).then((function(e){var i,n,o={};(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.municipis)&&e.data.municipis.forEach((function(e){var i=e.id,n=e.name;o[i]=n})),Y(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.municipis),G(o),$(!1)})).catch((function(e){console.error(e),$(!1)})))}),[I]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.Z,{item:!0,xs:12,sm:6,children:(0,v.jsxs)(r.Z,{select:!0,id:m,name:n,label:i("STATE"),variant:"outlined",onChange:function(e){e.preventDefault();var i={id:e.target.value,name:L[e.target.value]};A(i),W({id:""}),E({state:i,city:{id:""}})},onBlur:T,required:!0,fullWidth:!0,disabled:!Object.keys(L).length,value:null===I||void 0===I?void 0:I.id,error:!!f,helperText:_,InputProps:{endAdornment:(0,v.jsx)(u.Z,{position:"end",children:D&&(0,v.jsx)(d.Z,{size:24})})},children:[(0,v.jsx)(s.Z,{value:"",children:i("STATE")},"0"),Object.keys(L).map((function(e){return(0,v.jsx)(s.Z,{value:e,children:L[e]},e)}))]})}),(0,v.jsx)(t.Z,{item:!0,xs:12,sm:6,children:(0,v.jsxs)(r.Z,{select:!0,id:x,name:h,label:i("CITY"),variant:"outlined",onChange:function(e){e.preventDefault();var i={id:e.target.value,name:V[e.target.value]};W(i),E({state:I,city:i})},onBlur:T,required:!0,fullWidth:!0,disabled:!Object.keys(U).length,value:null===M||void 0===M?void 0:M.id,error:!!Z,helperText:j,InputProps:{endAdornment:(0,v.jsx)(u.Z,{position:"end",children:K&&(0,v.jsx)(d.Z,{size:24})})},children:[(0,v.jsx)(s.Z,{value:"",children:i("CITY")},"0"),U.map((function(e){var i=e.id,n=e.name;return(0,v.jsx)(s.Z,{value:i,children:n},i)}))]})})]})}},7369:function(e,i,n){var o=n(9439),l=n(2791),a=n(4279),d=n(9626),t=n(5720),r=n(9650),s=n(9299),u=n(1070),c=n(184);i.Z=function(e){var i=e.name,n=e.id,v=e.label,m=e.variant,p=e.value,h=void 0===p?"":p,x=e.onChange,g=e.onBlur,f=e.error,_=e.helperText,Z=e.autoFocus,j=void 0!==Z&&Z,E=(0,l.useState)(!1),T=(0,o.Z)(E,2),y=T[0],C=T[1],I=(0,l.useState)(!1),A=(0,o.Z)(I,2),b=A[0],R=A[1],L=(0,l.useState)(!1),N=(0,o.Z)(L,2),O=N[0],P=N[1],D=(0,l.useState)(h),S=(0,o.Z)(D,2),H=S[0],B=S[1];(0,l.useEffect)((function(){R(!1),x({vat:H,isPhisical:O,valid:!1}),H.length>8&&(C(!0),(0,s.a5)(H).then((function(e){var i,n,o,l=!0===(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.valid);R(l);var a=(0,u.hV)(H);P(a),C(!1),x({vat:H,isPhisical:a,isMember:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.is_member,valid:l,exists:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.exists})})).catch((function(e){var i,n,o,l,a,d;console.error(e.response);var t=!(null===e||void 0===e||null===(i=e.response)||void 0===i||null===(n=i.data)||void 0===n||null===(o=n.data)||void 0===o||!o.valid)&&(null===e||void 0===e||null===(l=e.response)||void 0===l||null===(a=l.data)||void 0===a||null===(d=a.data)||void 0===d?void 0:d.valid);R(t),C(!1),x({vat:H,isPhisical:O,valid:b})})))}),[H]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{id:n,name:i,label:v,variant:m,fullWidth:!0,required:!0,autoFocus:j,value:h,onChange:function(e){var i=e.target.value.match(/[0-9A-Za-z]{0,12}/);i=i[0].toUpperCase(),B(i)},onBlur:function(e){g(e)},error:!y&&f,helperText:!y&&_,InputProps:{endAdornment:(0,c.jsxs)(a.Z,{position:"end",children:[y&&(0,c.jsx)(t.Z,{size:24}),!y&&b&&(0,c.jsx)(r.Z,{color:f?"error":"primary"})]})}})})}},7188:function(e,i,n){n.r(i);var o=n(2791),l=n(3168),a=n(7689),d=n(8596),t=n(272),r=n(4265),s=n(8302),u=n(14),c=n(293),v=n(4884),m=n(184),p=(0,d.Z)((function(e){return{container:{paddingTop:0,display:"flex",flexDirection:"column",alignItems:"center"},message:{marginTop:e.spacing(2),fontWeight:"400",fontSize:"1rem",lineHeight:"1.75",textAlign:"center",color:"#6f6262","& a":{color:"#fe6444 !important"}},logo:{width:"220px",margin:e.spacing(2)},title:{textAlign:"center",fontSize:"1.15rem"},error:{width:e.spacing(6),height:e.spacing(6),color:"#fe6444",backgroundColor:"transparent",border:"2px solid #fe6444",marginBottom:e.spacing(3)}}}));i.default=function(e){var i,n,d,h,x,g,f,_,Z=(0,a.UO)().language,j=(0,l.$)(),E=j.t,T=j.i18n,y=p(),C=e.error,I=void 0!==C&&C,A=e.description,b=void 0===A?"NEWMEMBER_KO_DESCRIPTION":A,R=e.showHeader,L=void 0===R||R;return(0,o.useEffect)((function(){T.changeLanguage(Z)}),[Z,T]),(0,m.jsxs)(m.Fragment,{children:[L&&(0,m.jsx)(c.Z,{title:E("FAILURE_TITLE")}),(0,m.jsxs)("div",{className:y.container,children:[(0,m.jsx)(t.Z,{className:y.error,children:(0,m.jsx)(u.Z,{fontSize:"large"})}),(0,m.jsx)(s.Z,{className:y.title,variant:"h6",children:E("FAILURE_TEXT")}),(0,m.jsx)(s.Z,{className:y.message,variant:"body1",dangerouslySetInnerHTML:{__html:void 0===(null===I||void 0===I?void 0:I.code)?E(b,{url:E("CONTACT_HELP_URL")}):"INVALID_FIELD"===(null===I||void 0===I?void 0:I.code)&&null!==I&&void 0!==I&&null!==(i=I.data)&&void 0!==i&&null!==(n=i[0])&&void 0!==n&&n.field?T.exists(null===I||void 0===I||null===(d=I.data)||void 0===d||null===(h=d[0])||void 0===h?void 0:h.field.toUpperCase())?E(null===I||void 0===I||null===(x=I.data)||void 0===x||null===(g=x[0])||void 0===g?void 0:g.field.toUpperCase()):E("INVALID_FIELD",{field_name:null===I||void 0===I||null===(f=I.data)||void 0===f||null===(_=f[0])||void 0===_?void 0:_.field}):"INVOICE_ERROR"===(null===I||void 0===I?void 0:I.code)?null===I||void 0===I?void 0:I.error:E("UNEXPECTED_POSTERROR",{error_message:null!==I&&void 0!==I&&I.code?E(null===I||void 0===I?void 0:I.code):null===I||void 0===I?void 0:I.error})}}),(0,m.jsx)(r.Z,{mt:3,mb:1,children:(0,m.jsx)("img",{className:y.logo,alt:"Cuca KO de Som Energia",src:v.Z})})]})]})}},4307:function(e,i,n){var o=n(4165),l=n(5861),a=n(9439),d=n(2791),t=n(3168),r=n(8596),s=n(4265),u=n(5247),c=n(9861),v=n(4135),m=n(6782),p=n(1288),h=n(4279),x=n(8997),g=n(1859),f=n(9626),_=n(1118),Z=n(6199),j=n(3671),E=n(293),T=n(7398),y=n(442),C=n(7369),I=n(1070),A=n(9299),b=n(8302),R=n(184),L=(0,r.Z)((function(e){return{icon:{"& path":{color:"rgba(0, 0, 0, 0.54)"}},noteText:{marginTop:e.spacing(2)},title:{display:"flex",flexDirection:"column",marginBottom:"25px"}}}));i.Z=function(e){var i,n,r,N,O,P,D,S,H,B,M,W,k,F,U,Y,q,w,V,G,z,X,K,$,Q,J,ee,ie,ne,oe,le,ae,de,te,re,se,ue,ce,ve,me,pe,he,xe,ge,fe,_e,Ze,je,Ee,Te,ye,Ce,Ie,Ae,be,Re,Le,Ne,Oe,Pe,De,Se,He,Be,Me,We,ke,Fe,Ue,Ye,qe,we,Ve,Ge,ze,Xe,Ke,$e,Qe,Je,ei,ii,ni,oi,li,ai,di,ti,ri,si,ui,ci,vi,mi,pi,hi,xi,gi,fi,_i,Zi,ji,Ei,Ti=(0,t.$)().t,yi=L(),Ci=e.values,Ii=e.setFieldValue,Ai=e.validateForm,bi=e.handleChange,Ri=e.handleBlur,Li=e.errors,Ni=e.touched,Oi=e.skipPrivacyPolicy,Pi=void 0!==Oi&&Oi,Di=e.title,Si=void 0!==Di&&Di,Hi=e.entity,Bi=void 0===Hi?"holder":Hi,Mi=(0,d.useState)(!1),Wi=(0,a.Z)(Mi,2),ki=Wi[0],Fi=Wi[1],Ui=function(e){var i=e.target.value;i=(i=i.match(/[0-9]{0,14}/))[0],Ii(e.target.name,i)};return(0,d.useEffect)((function(){var e,i,n,a,d,t=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(i){var n,l,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,A.Kr)(i);case 2:(n=e.sent).length>0&&(Ii("".concat(Bi,".state"),null===(l=n[0][0])||void 0===l?void 0:l.provincia),Ii("".concat(Bi,".city"),null===(a=n[0][0])||void 0===a?void 0:a.municipi));case 4:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),r=null===(e=Ci[Bi])||void 0===e?void 0:e.postal_code;(null===r||void 0===r?void 0:r.length)>4&&(null===(i=Ci[Bi])||void 0===i||null===(n=i.city)||void 0===n||!n.id||""===(null===(a=Ci[Bi])||void 0===a||null===(d=a.city)||void 0===d?void 0:d.id))&&t(r)}),[null===(i=Ci[Bi])||void 0===i?void 0:i.postal_code]),(0,R.jsxs)(R.Fragment,{children:[Si?(0,R.jsxs)("div",{className:yi.title,children:[(0,R.jsx)(b.Z,{component:"h1",variant:"h3",children:Si}),(0,R.jsx)(b.Z,{component:"h3",variant:"h6",children:Ti("MEMBER_PERSONAL_DATA")})]}):(0,R.jsx)(E.Z,{title:Ti("holder"===Bi?"HOLDER_PERSONAL_DATA":"MEMBER_PERSONAL_DATA")}),(0,R.jsx)(s.Z,{className:"step-body",children:(0,R.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,R.jsx)(p.Z,{item:!0,xs:12,sm:4,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_name"),name:"".concat(Bi,".name"),label:null!==(n=Ci[Bi])&&void 0!==n&&n.isphisical?Ti("HOLDER_NAME"):Ti("BUSINESS_NAME"),variant:"outlined",fullWidth:!0,autoFocus:!0,required:!0,value:null===(r=Ci[Bi])||void 0===r?void 0:r.name,onChange:bi,onBlur:Ri,error:(null===(N=Li[Bi])||void 0===N?void 0:N.name)&&(null===(O=Ni[Bi])||void 0===O?void 0:O.name),helperText:(null===(P=Ni[Bi])||void 0===P?void 0:P.name)&&(null===(D=Li[Bi])||void 0===D?void 0:D.name)})}),Ci[Bi].isphisical?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p.Z,{item:!0,xs:12,sm:4,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_surname1"),name:"".concat(Bi,".surname1"),label:Ti("HOLDER_SURNAME1"),variant:"outlined",fullWidth:!0,required:!0,value:null===(S=Ci[Bi])||void 0===S?void 0:S.surname1,onChange:bi,onBlur:Ri,error:(null===(H=Li[Bi])||void 0===H?void 0:H.surname1)&&(null===(B=Ni[Bi])||void 0===B?void 0:B.surname1),helperText:(null===(M=Ni[Bi])||void 0===M?void 0:M.surname1)&&(null===(W=Li[Bi])||void 0===W?void 0:W.surname1)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:4,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_surname2"),name:"".concat(Bi,".surname2"),label:Ti("HOLDER_SURNAME2"),variant:"outlined",fullWidth:!0,value:null===(k=Ci[Bi])||void 0===k?void 0:k.surname2,onChange:bi,onBlur:Ri,error:(null===(F=Li[Bi])||void 0===F?void 0:F.surname2)&&(null===(U=Ni[Bi])||void 0===U?void 0:U.surname2),helperText:(null===(Y=Ni[Bi])||void 0===Y?void 0:Y.surname2)&&(null===(q=Li[Bi])||void 0===q?void 0:q.surname2)})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(p.Z,{item:!0,xs:12,sm:4,children:(0,R.jsx)(f.Z,{id:"proxyname",name:"".concat(Bi,".proxyname"),label:Ti("PROXY_NAME"),required:!0,value:null===(w=Ci[Bi])||void 0===w?void 0:w.proxyname,variant:"outlined",fullWidth:!0,onChange:bi,onBlur:Ri,error:(null===(V=Li[Bi])||void 0===V?void 0:V.proxyname)&&(null===(G=Ni[Bi])||void 0===G?void 0:G.proxyname),helperText:(null===(z=Ni[Bi])||void 0===z?void 0:z.proxyname)&&(null===(X=Li[Bi])||void 0===X?void 0:X.proxyname)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:4,children:(0,R.jsx)(C.Z,{id:"proxynif",name:"".concat(Bi,".proxynif"),label:Ti("PROXY_NIF"),variant:"outlined",fullWidth:!0,required:!0,value:null===(K=Ci[Bi])||void 0===K?void 0:K.proxynif,onChange:function(e){var i=e.vat,n=e.isPhisical,o=e.valid;Ii("".concat(Bi,".proxynif"),i),Ii("".concat(Bi,".proxynif_valid"),o),Ii("".concat(Bi,".proxynif_phisical"),n),Ai()},onBlur:Ri,error:((null===($=Li[Bi])||void 0===$?void 0:$.proxynif)||(null===(Q=Li[Bi])||void 0===Q?void 0:Q.proxynif_phisical))&&(null===(J=Ni[Bi])||void 0===J?void 0:J.proxynif)||(null===(ee=Ni[Bi])||void 0===ee?void 0:ee.proxynif)&&!1===(null===(ie=Ci[Bi])||void 0===ie?void 0:ie.proxynif_valid),helperText:(null===(ne=Ni[Bi])||void 0===ne?void 0:ne.proxynif)&&(null===(oe=Li[Bi])||void 0===oe?void 0:oe.proxynif)||(null===(le=Ni[Bi])||void 0===le?void 0:le.proxynif)&&(null===(ae=Li[Bi])||void 0===ae?void 0:ae.proxynif_valid)||(null===(de=Ni[Bi])||void 0===de?void 0:de.proxynif)&&(null===(te=Li[Bi])||void 0===te?void 0:te.proxynif_phisical)})})]}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:6,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_address"),name:"".concat(Bi,".address"),label:Ti("HOLDER_ADDRESS"),className:yi.icon,required:!0,variant:"outlined",InputProps:{startAdornment:(0,R.jsx)(h.Z,{position:"start",children:(0,R.jsx)(_.Z,{})})},fullWidth:!0,value:null===(re=Ci[Bi])||void 0===re?void 0:re.address,onChange:bi,onBlur:Ri,error:(null===(se=Li[Bi])||void 0===se?void 0:se.address)&&(null===(ue=Ni[Bi])||void 0===ue?void 0:ue.address),helperText:(null===(ce=Ni[Bi])||void 0===ce?void 0:ce.address)&&(null===(ve=Li[Bi])||void 0===ve?void 0:ve.address)})}),(0,R.jsx)(p.Z,{item:!0,xs:4,sm:2,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_number"),name:"".concat(Bi,".number"),label:Ti("NUMBER"),required:!0,variant:"outlined",fullWidth:!0,value:null===(me=Ci[Bi])||void 0===me?void 0:me.number,onChange:bi,onBlur:Ri,error:(null===(pe=Li[Bi])||void 0===pe?void 0:pe.number)&&(null===(he=Ni[Bi])||void 0===he?void 0:he.number),helperText:(null===(xe=Ni[Bi])||void 0===xe?void 0:xe.number)&&(null===(ge=Li[Bi])||void 0===ge?void 0:ge.number)})}),(0,R.jsx)(p.Z,{item:!0,xs:4,sm:2,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"floor"),name:"".concat(Bi,".floor"),label:Ti("FLOOR"),variant:"outlined",fullWidth:!0,value:Ci[Bi].floor,onChange:bi,onBlur:Ri,error:(null===(fe=Li[Bi])||void 0===fe?void 0:fe.floor)&&(null===(_e=Ni[Bi])||void 0===_e?void 0:_e.floor),helperText:(null===(Ze=Ni[Bi])||void 0===Ze?void 0:Ze.floor)&&(null===(je=Li[Bi])||void 0===je?void 0:je.floor)})}),(0,R.jsx)(p.Z,{item:!0,xs:4,sm:2,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"door"),name:"".concat(Bi,".door"),label:Ti("DOOR"),variant:"outlined",fullWidth:!0,value:null===(Ee=Ci[Bi])||void 0===Ee?void 0:Ee.door,onChange:bi,onBlur:Ri,error:(null===(Te=Li[Bi])||void 0===Te?void 0:Te.door)&&(null===(ye=Ni[Bi])||void 0===ye?void 0:ye.door),helperText:(null===(Ce=Ni[Bi])||void 0===Ce?void 0:Ce.door)&&(null===(Ie=Li[Bi])||void 0===Ie?void 0:Ie.door)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:3,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_postalcode"),name:"".concat(Bi,".postal_code"),label:Ti("HOLDER_POSTALCODE"),variant:"outlined",required:!0,fullWidth:!0,value:null===(Ae=Ci[Bi])||void 0===Ae?void 0:Ae.postal_code,onChange:bi,onBlur:Ri,error:(null===(be=Li[Bi])||void 0===be?void 0:be.postal_code)&&(null===(Re=Ni[Bi])||void 0===Re?void 0:Re.postal_code),helperText:(null===(Le=Ni[Bi])||void 0===Le?void 0:Le.postal_code)&&(null===(Ne=Li[Bi])||void 0===Ne?void 0:Ne.postal_code)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:9,children:(0,R.jsx)(p.Z,{container:!0,spacing:3,children:(0,R.jsx)(T.Z,{stateId:"".concat(Bi,"_state"),stateName:"".concat(Bi,".state"),stateInitial:null===(Oe=Ci[Bi])||void 0===Oe?void 0:Oe.state,stateError:(null===Li||void 0===Li||null===(Pe=Li[Bi])||void 0===Pe?void 0:Pe.state)&&(null===Ni||void 0===Ni||null===(De=Ni[Bi])||void 0===De?void 0:De.state),stateHelperText:(null===Ni||void 0===Ni||null===(Se=Ni[Bi])||void 0===Se||null===(He=Se.state)||void 0===He?void 0:He.id)&&(null===Li||void 0===Li||null===(Be=Li[Bi])||void 0===Be||null===(Me=Be.state)||void 0===Me?void 0:Me.id),cityId:"".concat(Bi,"_city"),cityName:"".concat(Bi,".city"),cityInitial:null===Ci||void 0===Ci||null===(We=Ci[Bi])||void 0===We?void 0:We.city,cityError:(null===Li||void 0===Li||null===(ke=Li[Bi])||void 0===ke?void 0:ke.city)&&(null===Ni||void 0===Ni||null===(Fe=Ni[Bi])||void 0===Fe?void 0:Fe.city),cityHelperText:(null===Ni||void 0===Ni||null===(Ue=Ni[Bi])||void 0===Ue||null===(Ye=Ue.city)||void 0===Ye?void 0:Ye.id)&&(null===Li||void 0===Li||null===(qe=Li[Bi])||void 0===qe||null===(we=qe.city)||void 0===we?void 0:we.id),onChange:function(e){var i=e.state,n=e.city;Ii("".concat(Bi,".state"),i,!1),Ii("".concat(Bi,".city"),n)}})})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:6,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_email"),name:"".concat(Bi,".email"),className:yi.icon,label:Ti("HOLDER_EMAIL"),variant:"outlined",InputProps:{startAdornment:(0,R.jsx)(h.Z,{position:"start",children:(0,R.jsx)(Z.Z,{})})},required:!0,fullWidth:!0,value:null===(Ve=Ci[Bi])||void 0===Ve?void 0:Ve.email,onChange:bi,onBlur:Ri,error:(null===(Ge=Li[Bi])||void 0===Ge?void 0:Ge.email)&&(null===(ze=Ni[Bi])||void 0===ze?void 0:ze.email),helperText:(null===(Xe=Ni[Bi])||void 0===Xe?void 0:Xe.email)&&(null===(Ke=Li[Bi])||void 0===Ke?void 0:Ke.email)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:6,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_email2"),name:"".concat(Bi,".email2"),className:yi.icon,label:Ti("HOLDER_EMAIL_2"),variant:"outlined",InputProps:{startAdornment:(0,R.jsx)(h.Z,{position:"start",children:(0,R.jsx)(Z.Z,{})})},required:!0,fullWidth:!0,value:null===($e=Ci[Bi])||void 0===$e?void 0:$e.email2,onChange:bi,onBlur:Ri,error:(null===(Qe=Li[Bi])||void 0===Qe?void 0:Qe.email2)&&(null===(Je=Ni[Bi])||void 0===Je?void 0:Je.email2),helperText:(null===(ei=Ni[Bi])||void 0===ei?void 0:ei.email2)&&(null===(ii=Li[Bi])||void 0===ii?void 0:ii.email2)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:6,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_phone"),name:"".concat(Bi,".phone1"),className:yi.icon,label:Ti("HOLDER_PHONE"),variant:"outlined",InputProps:{startAdornment:(0,R.jsx)(h.Z,{position:"start",children:(0,R.jsx)(j.Z,{})})},required:!0,fullWidth:!0,value:null===(ni=Ci[Bi])||void 0===ni?void 0:ni.phone1,onChange:Ui,onBlur:Ri,error:(null===(oi=Li[Bi])||void 0===oi?void 0:oi.phone1)&&(null===(li=Ni[Bi])||void 0===li?void 0:li.phone1),helperText:(null===(ai=Ni[Bi])||void 0===ai?void 0:ai.phone1)&&(null===(di=Li[Bi])||void 0===di?void 0:di.phone1)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:6,children:(0,R.jsx)(f.Z,{id:"".concat(Bi,"_phone2"),name:"".concat(Bi,".phone2"),className:yi.icon,label:Ti("HOLDER_PHONE_2"),variant:"outlined",InputProps:{startAdornment:(0,R.jsx)(h.Z,{position:"start",children:(0,R.jsx)(j.Z,{})})},fullWidth:!0,value:null===(ti=Ci[Bi])||void 0===ti?void 0:ti.phone2,onChange:Ui,onBlur:Ri,error:(null===(ri=Li[Bi])||void 0===ri?void 0:ri.phone2)&&(null===(si=Ni[Bi])||void 0===si?void 0:si.phone2),helperText:(null===(ui=Ni[Bi])||void 0===ui?void 0:ui.phone2)&&(null===(ci=Li[Bi])||void 0===ci?void 0:ci.phone2)})}),(0,R.jsx)(p.Z,{item:!0,xs:12,sm:12,children:(0,R.jsx)(f.Z,{select:!0,required:!0,fullWidth:!0,className:yi.icon,id:"".concat(Bi,"_lang"),name:"".concat(Bi,".language"),label:Ti("LANGUAGE"),value:null===(vi=Ci[Bi])||void 0===vi?void 0:vi.language,onChange:bi,onBlur:Ri,error:(null===(mi=Li[Bi])||void 0===mi?void 0:mi.language)&&(null===(pi=Ni[Bi])||void 0===pi?void 0:pi.language),helperText:null!==(hi=Ni[Bi])&&void 0!==hi&&hi.language&&null!==(xi=Li[Bi])&&void 0!==xi&&xi.language?null===(gi=Li[Bi])||void 0===gi?void 0:gi.language:Ti("HOLDER_LANGUAGE_HELP"),InputProps:{startAdornment:(0,R.jsx)(h.Z,{position:"start",children:(0,R.jsx)(x.Z,{})})},variant:"outlined",children:Object.keys(I.Mj).map((function(e){return(0,R.jsx)(g.Z,{value:e,children:I.Mj[e]},e)}))})}),!0===Pi?null:(0,R.jsxs)(p.Z,{item:!0,mt:1,mb:0,children:[(0,R.jsx)(m.Z,{dangerouslySetInnerHTML:{__html:void 0===(null===Ci||void 0===Ci||null===(fi=Ci.contract)||void 0===fi?void 0:fi.has_service)?"holder"===Bi?Ti("PRIVACY_POLICY_HOLDERCHANGE",{url:Ti("DATA_PROTECTION_HOLDERCHANGE_URL")}):Ti("PRIVACY_POLICY_NEWMEMBER",{url:Ti("DATA_PROTECTION_NEWMEMBER_URL")}):Ti("PRIVACY_POLICY_CONTRACT",{url:Ti("DATA_PROTECTION_CONTRACT_URL")})}}),void 0===(null===Ci||void 0===Ci||null===(_i=Ci.contract)||void 0===_i?void 0:_i.has_service)?(0,R.jsx)(m.Z,{className:yi.noteText,dangerouslySetInnerHTML:{__html:Ti("PRIVACY_POLICY_HOLDERCHANGE_NOTE")}}):(0,R.jsx)(R.Fragment,{})]}),(0,R.jsxs)(p.Z,{item:!0,xs:12,children:[Pi?null:(0,R.jsx)(c.Z,{row:!0,children:(0,R.jsx)(v.Z,{control:(0,R.jsx)(u.Z,{id:"privacy_policy_accepted",color:"primary",name:"privacy_policy_accepted",onClick:function(e){e.preventDefault();var i=null===Ci||void 0===Ci?void 0:Ci.privacy_policy_accepted;Ii("privacy_policy_accepted",!i)},checked:null===Ci||void 0===Ci?void 0:Ci.privacy_policy_accepted}),label:(0,R.jsx)("label",{dangerouslySetInnerHTML:{__html:Ti("ACCEPT_PRIVACY_POLICY",{url:void 0===(null===Ci||void 0===Ci||null===(Zi=Ci.contract)||void 0===Zi?void 0:Zi.has_service)?Ti("holder"===Bi?"DATA_PROTECTION_HOLDERCHANGE_URL":"DATA_PROTECTION_NEWMEMBER_URL"):Ti("DATA_PROTECTION_CONTRACT_URL")})}}),labelPlacement:"end"})}),!(null!==(ji=Ci[Bi])&&void 0!==ji&&ji.isphisical)&&(null===(Ei=Ci[Bi])||void 0===Ei?void 0:Ei.vatvalid)&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(c.Z,{row:!0,children:(0,R.jsx)(v.Z,{control:(0,R.jsx)(u.Z,{id:"legal_person_accepted",color:"primary",name:"legal_person_accepted",onClick:function(e){e.preventDefault(),Fi(!0)},checked:null===Ci||void 0===Ci?void 0:Ci.legal_person_accepted}),label:Ti("LEGAL_PERSON_TITLE_LABEL")})}),(0,R.jsx)(y.Z,{title:Ti("LEGAL_PERSON_TITLE"),open:ki,onAccept:function(){Fi(!1),Ii("legal_person_accepted",!0)},onClose:function(){Fi(!1),Ii("legal_person_accepted",!1)},maxWidth:"sm",children:(0,R.jsx)("span",{dangerouslySetInnerHTML:{__html:Ti("holder"===Bi?"PRIVACY_POLICY_LEGAL_PERSON":"PRIVACY_POLICY_LEGAL_PERSON_NEW_MEMBER")}})})]})]})]})})]})}}}]);
//# sourceMappingURL=484.783260a3.chunk.js.map