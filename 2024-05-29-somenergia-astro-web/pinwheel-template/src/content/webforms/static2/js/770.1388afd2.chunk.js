"use strict";(self.webpackChunkwebforms_ui=self.webpackChunkwebforms_ui||[]).push([[770],{9601:function(e,n,t){t(2791);var r=t(2130),a=t(8788),i=t(4265),o=t(8302),s=t(184);n.Z=function(e){var n=e.severity,t=e.title,c=e.description,l=e.children,d=e.variant;return(0,s.jsx)(i.Z,{mt:.75,mb:1.5,children:(0,s.jsxs)(r.Z,{severity:n,children:[(0,s.jsx)(a.Z,{children:t}),c&&(0,s.jsx)(o.Z,{variant:d||"body1",dangerouslySetInnerHTML:{__html:c}}),l]})})}},8952:function(e,n,t){var r=t(9439),a=t(2791),i=t(8596),o=t(8182),s=t(6782),c=t(1288),l=t(8912),d=t(4266),u=t(8302),p=t(184),h=(0,i.Z)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{marginTop:e.spacing(3)},title:{fontSize:"1rem",marginTop:e.spacing(2)},chooserItem:{cursor:"pointer",minHeight:"100px",height:"100%",paddingTop:e.spacing(2),paddingBottom:e.spacing(2),paddingRight:e.spacing(3),paddingLeft:e.spacing(3),border:"1px solid rgba(0, 0, 0, 0.12)",margin:"0 0 8px 0","&:hover":{border:"1px solid rgba(0, 0, 0, 0.87)",backgroundColor:"rgba(0, 0, 0, 0.03)"},display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"top"},chooserItemCondensed:{minHeight:"40px",paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},chooserItemSelected:{margin:"0 0 8px 0",border:"1px solid #96b633",backgroundColor:"rgba(150, 182, 51, 0.08)","&:hover":{border:"1px solid #96b633",backgroundColor:"rgba(150, 182, 51, 0.08)"}},chooserItemDisabled:{cursor:"not-allowed",color:"rgba(0, 0, 0, 0.54)","&:hover":{border:"1px solid rgba(0, 0, 0, 0.12)",backgroundColor:"inherit"}},chooserItemTitle:{display:"flex",alignItems:"center"},chooserItemDesc:{marginTop:e.spacing(1),paddingLeft:e.spacing(1)}}})),m=function(e){var n=h(),t=e.question,i=e.options,m=e.onChange,v=e.value,_=e.disabled,x=e.name,g=e.condensed,f=void 0!==g&&g,T=e.canBeEmpty,Z=void 0===T||T,O=(0,a.useState)(v),N=(0,r.Z)(O,2),j=N[0],E=N[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{variant:"h6",className:n.title,dangerouslySetInnerHTML:{__html:t}}),(0,p.jsx)(d.Z,{className:n.margin,defaultValue:"",name:x,"data-cy":x,children:(0,p.jsx)(c.Z,{container:!0,spacing:3,children:i.map((function(e,t){return(0,p.jsxs)(c.Z,{item:!0,xs:12,sm:6,children:[(0,p.jsxs)("label",{"data-value":e.value,id:e.id||e.value,onClick:function(n){return!_&&function(e,n){"A"!==e.target.tagName&&(e.preventDefault(),Z&&j===n?(E(void 0),m({option:void 0})):(E(n),m({option:n})))}(n,e.value)},className:(0,o.Z)(n.chooserItem,f&&n.chooserItemCondensed,j===e.value&&n.chooserItemSelected,_&&n.chooserItemDisabled),children:[(0,p.jsxs)("div",{className:n.chooserItemTitle,children:[(0,p.jsx)(l.Z,{disabled:_,value:e.value,color:"primary",checked:j===e.value}),(0,p.jsx)(u.Z,{children:e.label})]}),e.description&&(0,p.jsx)(s.Z,{className:n.chooserItemDesc,dangerouslySetInnerHTML:{__html:e.description}})]}),e.helper]},t)}))})})]})};m.defaultProps={onChange:function(e){return console.log("change",e.value)}},n.Z=m},6697:function(e,n,t){t(2791);var r=t(9526),a=t(184);n.Z=function(e){return(0,a.jsx)(r.Z,{elevation:3,style:{margin:"1rem 0"},children:(0,a.jsxs)("pre",{style:{background:"#fff",fontSize:"1rem",padding:"1.5rem"},children:[(0,a.jsx)("strong",{children:"props"})," ="," ",JSON.stringify(e,null,2)]})})}},7505:function(e,n,t){t(2791);var r=t(3168),a=t(9626),i=t(4279),o=t(184);n.Z=function(e){var n=(0,r.$)().t,t=e.values,s=e.handleBlur,c=e.errors,l=e.touched,d=e.numInputs,u=void 0===d?2:d,p=e.setFieldValue,h=e.namePrefix,m=void 0!==h&&h;return Array.from(Array(u).keys()).map((function(e){var r=0===e?"power":"power".concat(e+1),d="".concat(m?m+".":"").concat(r),h=null!==t&&void 0!==t&&t.has_service?n("QUINA_POTENCIA_TENS_CONTRACTADA"):n("POTENCIA_A_CONTRACTAR_CONTRACTACIO");return(0,o.jsx)(a.Z,{required:!0,id:r,name:d,label:h,InputProps:{autoComplete:"off",endAdornment:(0,o.jsx)(i.Z,{position:"end",children:"kW"}),startAdornment:u>1&&(0,o.jsx)(i.Z,{position:"start",children:u<=2?n(0===e?"PEAK":"VALLEY"):"P".concat(e+1)})},onChange:function(e){return function(e,n,t){var r=t.moreThanOneDecimal,a=void 0!==r&&r,i=t.moreThan15Kw,o=void 0!==i&&i,s=(a?/^\d*([.,'])?\d{0,3}/g:/^\d*([.,'])?\d{0,1}/g).exec(e.target.value)[0].replace(",",".");s=s.replace("'","."),!o&&s>15&&(s=s.slice(0,-1)),n(e.target.name,s)}(e,p,{moreThanOneDecimal:(null===t||void 0===t?void 0:t.has_service)||(null===t||void 0===t?void 0:t.moreThan15Kw),moreThan15Kw:null===t||void 0===t?void 0:t.moreThan15Kw})},onBlur:s,value:null===t||void 0===t?void 0:t[r],error:(null===c||void 0===c?void 0:c[r])&&(null===l||void 0===l?void 0:l[r]),helperText:(null===l||void 0===l?void 0:l[r])&&(null===c||void 0===c?void 0:c[r])||t.has_service&&n("HELP_POPOVER_POWER"),fullWidth:!0,variant:"outlined",margin:"normal"},r)}))}},5815:function(e,n,t){var r=t(4165),a=t(5861),i=t(3433),o=t(9439),s=t(2791),c=t(3168),l=t(8596),d=t(7025),u=t(4279),p=t(5720),h=t(9626),m=t(2067),v=t(8096),_=t(1969),x=t(4212),g=t(159),f=t(320),T=t(1519),Z=t(7303),O=t(3777),N=t(9299),j=t(184),E=(0,l.Z)((function(e){return{input:{"& input":{color:"rgba(0, 0, 0, 0.54)"},"& path":{color:"rgba(0, 0, 0, 0.54)"}}}})),w=function(e){var n=e.name,t=e.callbackFn,l=e.fieldError,w=e.values,S=e.maxFiles,b=(0,c.$)().t,C=E(),R=(0,s.useState)((0,i.Z)(w)),P=(0,o.Z)(R,2),I=P[0],A=P[1],y=(0,s.useState)(Date.now()),L=(0,o.Z)(y,2),F=L[0],D=L[1],M=(0,s.useState)(!1),k=(0,o.Z)(M,2),W=k[0],H=k[1],B=(0,s.useState)(!1),U=(0,o.Z)(B,2),K=U[0],Y=U[1];(0,s.useEffect)((function(){t(I)}),[I]);var V=(0,s.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,N.cT)(n,t).then((function(e){var n;if("UPLOAD_OK"===(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.code)){var t;A([].concat((0,i.Z)(I),[null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.file_hash])),D(Date.now())}else{var r,a,o=null!==e&&void 0!==e&&null!==(r=e.data)&&void 0!==r&&r.code?null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.code:"MODIFY_POTTAR_UNEXPECTED";Y(o)}})).catch((function(e){var n,t,r=null!==e&&void 0!==e&&null!==(n=e.response)&&void 0!==n&&null!==(t=n.data)&&void 0!==t&&t.code?e.response.data.code:"MODIFY_POTTAR_UNEXPECTED";Y(r)})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[I]),X=(0,s.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),t=n.target.name,a=n.target.files[0],e.next=5,V(t,a);case 5:H(!1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[V]),q=(0,s.useCallback)((function(e,n){var t=I;t.splice(n,1),A((0,i.Z)(t))}),[I]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h.Z,{type:"file",label:"",className:C.input,required:!0,name:n,variant:"outlined",onChange:X,disabled:S<=I.length,fullWidth:!0,InputProps:{endAdornment:(0,j.jsx)(u.Z,{position:"end",children:W?(0,j.jsx)(p.Z,{size:24}):K?(0,j.jsx)(d.Z,{onClick:function(e){e.preventDefault(),Y(!1),D(Date.now())},children:(0,j.jsx)(T.Z,{})}):(0,j.jsx)(f.Z,{})})},error:(K||l)&&!0,helperText:b(K||(l||"INSTALL_TYPE_ATTACHMENTS_INFO"))},F),(0,j.jsx)(m.Z,{children:I.map((function(e,n){return(0,j.jsxs)(v.Z,{children:[(0,j.jsx)(_.Z,{children:(0,j.jsx)(Z.Z,{})}),(0,j.jsx)(g.Z,{children:e}),(0,j.jsx)(x.Z,{children:(0,j.jsx)(d.Z,{edge:"end","aria-label":"delete",onClick:function(e){return q(e,n)},children:(0,j.jsx)(O.Z,{})})})]},e)}))})]})};w.defaultProps={name:"uploads",values:[],maxFiles:1},n.Z=s.memo(w)},3770:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var r=t(4165),a=t(5861),i=t(1413),o=t(9439),s=t(2791),c=t(7689),l=t(3168),d=t(7325),u=t(8596),p=t(9299),h=t(1070),m=t(2130),v=t(8788),_=t(3032),x=t(4910),g=t(968),f=t(5119),T=t(464),Z=t(4265),O=t(6513),N=t(9526),j=t(8302),E=t(9329),w=t(184),S=(0,u.Z)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(1),display:"flex",justifyContent:"flex-end"},resetContainer:{padding:e.spacing(3)},stepLabel:{fontSize:"1.5rem",color:"red"},paperContainer:{marginTop:e.spacing(2),padding:e.spacing(2)},warningMessage:{"& p":{marginTop:0,marginBottom:"8px"},"& a":{color:e.palette.primary.dark}}}}));function b(e){var n=e.nextStep,t=(e.prevStep,(0,l.$)().t),r=S(),a=(0,s.useState)(!1),i=(0,o.Z)(a,2),c=i[0],d=i[1];return(0,w.jsx)(N.Z,{className:r.paperContainer,elevation:0,children:(0,w.jsx)(Z.Z,{mx:1,children:(0,w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c||(d(!0),n())},children:[(0,w.jsx)(j.Z,{variant:"body1",dangerouslySetInnerHTML:{__html:t("MODIFY_POTTAR_INTRO",{url:t("MODIFY_POTTAR_INTRO_URL"),costs_url:t("MODIFY_POTTAR_INTRO_COSTS_URL"),potinfo_url:t("MODIFY_POTTAR_INTRO_POTINFO_URL")})}}),(0,w.jsx)("div",{className:r.actionsContainer,children:n&&(0,w.jsx)(O.Z,{type:"submit",className:r.button,variant:"contained",color:"primary",endIcon:(0,w.jsx)(E.Z,{}),disabled:c,children:t("SEGUENT_PAS")})})]})})})}var C=t(6716),R=(0,u.Z)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(1),display:"flex",justifyContent:"space-between"},resetContainer:{padding:e.spacing(3)},stepLabel:{fontSize:"1.5rem",color:"red"},paperContainer:{marginTop:e.spacing(2),padding:e.spacing(2)}}}));function P(e){var n=e.nextStep,t=e.prevStep,r=(e.handleStepChanges,(0,l.$)().t),a=R();return(0,w.jsx)(N.Z,{className:a.paperContainer,elevation:0,children:(0,w.jsxs)(Z.Z,{mx:1,children:[(0,w.jsx)(j.Z,{variant:"body1",component:"div",dangerouslySetInnerHTML:{__html:r("MODIFY_POTTAR_INTRO",{url:r("MODIFY_POTTAR_INTRO_URL"),url_costs:r("MODIFY_POTTAR_INTRO_COSTS_URL"),potinfo_url:r("MODIFY_POTTAR_INTRO_POTINFO_URL")})}}),(0,w.jsxs)("div",{className:a.actionsContainer,children:[t&&(0,w.jsx)(O.Z,{className:a.button,startIcon:(0,w.jsx)(C.Z,{}),onClick:function(e){return function(e){e.preventDefault(),t()}(e)},children:r("PAS_ANTERIOR")}),n&&(0,w.jsx)(O.Z,{type:"submit",className:a.button,variant:"contained",color:"primary",endIcon:(0,w.jsx)(E.Z,{}),onClick:function(e){return function(e){e.preventDefault(),n()}(e)},children:r("SEGUENT_PAS")})]})]})})}var I=t(5173),A=t(2797),y=t(4364),L=t(7447),F=t(6782),D=t(4135),M=t(1288),k=t(1859),W=t(1778),H=t(9626),B=t(5815),U=t(7505),K=t(8952),Y=(0,u.Z)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(1),display:"flex",justifyContent:"space-between"},resetContainer:{padding:e.spacing(3)},paperContainer:{marginTop:e.spacing(2),padding:e.spacing(2)},paramTitle:{fontSize:"1.15rem"},switch:{marginLeft:e.spacing(2)},switchLabel:{marginLeft:0,width:"100%",display:"flex",justifyContent:"space-between","&:hover":{textDecoration:"underline"}}}})),V=function(e,n,t){"changePhases"===e.target.name&&t.changePhases?(n("phases","",!1),n("attachments",[],!1)):"changePower"===e.target.name&&t.changePower&&(n("power","",!1),n("power2","",!1),n("power3","",!1),n("power4","",!1),n("power5","",!1),n("power6","",!1),n("moreThan15Kw",!1),n("tariff","2.0TD",!1)),n(e.target.name,e.target.checked)},X=function(e){var n=e.nextStep,t=e.prevStep,r=e.handleStepChanges,a=e.params,o=Y(),s=(0,l.$)().t,c=(0,p.jS)(),d=A.Ry().shape({changePower:A.Xg(),changePhases:A.Xg(),phases:A.Z_().when("changePhases",{is:!0,then:A.Z_().required(s("NO_MONOPHASE_CHOICE"))}).test("noMoreThan15KwForMono",s("NO_MORE_THAN_15KW_FOR_MONO"),(function(){return!("mono"===this.parent.phases&&this.parent.moreThan15Kw)})),attachments:A.IX().when("changePhases",{is:!0,then:A.IX().min(1,s("NO_ATTACHMENTS"))}),moreThan15Kw:A.O7().test("noMoreThan15KwForMono",s("NO_MORE_THAN_15KW_FOR_MONO"),(function(){return!("mono"===this.parent.phases&&this.parent.moreThan15Kw)})),power:A.Rx().test("required",s("NO_POWER_CHOSEN_PX"),(function(){return!this.parent.changePower||this.parent.power})).test({name:"minPowerValue",test:function(){return(0,h.FT)(c,this.parent,"min_power",this.createError,s)}}).test({name:"maxPowerValue",test:function(){return(0,h.FT)(c,this.parent,"max_power",this.createError,s)}}),power2:A.Rx().test("required",s("NO_POWER_CHOSEN_PX"),(function(){var e;return!(this.parent.changePower&&(null===(e=c[this.parent.tariff])||void 0===e?void 0:e.num_power_periods)>=2)||this.parent.power2})).test("increasing",s("NO_POWER_INCREASING"),(function(){var e;return null===(e=c[this.parent.tariff])||void 0===e||!e.increasing||parseFloat(this.parent.power2)>=parseFloat(this.parent.power)})).test({name:"minPowerValue",test:function(){return(0,h.FT)(c,this.parent,"min_power",this.createError,s)}}).test({name:"maxPowerValue",test:function(){return(0,h.FT)(c,this.parent,"max_power",this.createError,s)}}),power3:A.Rx().test("required",s("NO_POWER_CHOSEN_PX"),(function(){var e;return!(this.parent.changePower&&(null===(e=c[this.parent.tariff])||void 0===e?void 0:e.num_power_periods)>=3)||this.parent.power3})).test("increasing",s("NO_POWER_INCREASING"),(function(){var e;return null===(e=c[this.parent.tariff])||void 0===e||!e.increasing||parseFloat(this.parent.power3)>=parseFloat(this.parent.power2)})).test({name:"minPowerValue",test:function(){return(0,h.FT)(c,this.parent,"min_power",this.createError,s)}}),power4:A.Rx().test("required",s("NO_POWER_CHOSEN_PX"),(function(){var e;return!(this.parent.changePower&&(null===(e=c[this.parent.tariff])||void 0===e?void 0:e.num_power_periods)>=4)||this.parent.power4})).test("increasing",s("NO_POWER_INCREASING"),(function(){var e;return null===(e=c[this.parent.tariff])||void 0===e||!e.increasing||parseFloat(this.parent.power4)>=parseFloat(this.parent.power3)})).test({name:"minPowerValue",test:function(){return(0,h.FT)(c,this.parent,"min_power",this.createError,s)}}),power5:A.Rx().test("required",s("NO_POWER_CHOSEN_PX"),(function(){var e;return!(this.parent.changePower&&(null===(e=c[this.parent.tariff])||void 0===e?void 0:e.num_power_periods)>=5)||this.parent.power5})).test("increasing",s("NO_POWER_INCREASING"),(function(){var e;return null===(e=c[this.parent.tariff])||void 0===e||!e.increasing||parseFloat(this.parent.power5)>=parseFloat(this.parent.power4)})).test({name:"minPowerValue",test:function(){return(0,h.FT)(c,this.parent,"min_power",this.createError,s)}}),power6:A.Rx().test("required",s("NO_POWER_CHOSEN_PX"),(function(){var e;return!(this.parent.changePower&&(null===(e=c[this.parent.tariff])||void 0===e?void 0:e.num_power_periods)>=6)||this.parent.power6})).test("increasing",s("NO_POWER_INCREASING"),(function(){var e;return null===(e=c[this.parent.tariff])||void 0===e||!e.increasing||parseFloat(this.parent.power6)>=parseFloat(this.parent.power5)})).test({name:"minPowerValue",test:function(){return(0,h.FT)(c,this.parent,"min_power",this.createError,s)}})});return(0,w.jsx)(N.Z,{className:o.paperContainer,elevation:0,children:(0,w.jsx)(I.J9,{initialValues:(0,i.Z)((0,i.Z)({},{changePhases:!1,phases:"",attachments:[],changePower:!1,power:"",power2:"",power3:"",power4:"",power5:"",power6:"",power_attachments:[],moreThan15Kw:!1,tariff:"2.0TD"}),a),validationSchema:d,onSubmit:function(e,t){var a=t.setSubmitting;a(!0);var o=(0,h.yS)(e);r({modify:(0,i.Z)((0,i.Z)({},e),{},{tariff:o})}),n(),a(!1)},children:function(e){var r,a=e.values,l=e.errors,d=e.touched,u=e.handleChange,p=e.handleBlur,_=e.handleSubmit,x=e.setFieldValue,g=e.isSubmitting;return(0,w.jsxs)("form",{onSubmit:_,noValidate:!0,children:[(0,w.jsx)(Z.Z,{mx:1,mb:0,children:(0,w.jsx)(D.Z,{className:o.switchLabel,label:(0,w.jsx)(j.Z,{variant:"h6",className:o.paramTitle,children:s("MODIFY_ANSWER_POWER")}),labelPlacement:"start",control:(0,w.jsx)(W.Z,{name:"changePower",className:o.switch,onChange:function(e){return V(e,x,a)},inputProps:{"aria-label":"primary checkbox"},color:"primary",checked:a.changePower})})}),a.changePower&&(0,w.jsxs)(Z.Z,{mx:1,mb:0,children:[(0,w.jsx)(K.Z,{name:"moreThan15Kw",condensed:!0,question:s("POTENCIA_A_CONTRACTAR_CONTRACTACIO"),onChange:function(e){return function(e,n){n("tariff",(0,h.yS)({moreThan15Kw:!e.moreThan15Kw}),!1),n("power","",!1),n("power2","",!1),n("power3","",!1),n("power4","",!1),n("power5","",!1),n("power6","",!1),n("moreThan15Kw",!e.moreThan15Kw)}(a,x)},value:a.moreThan15Kw,options:[{value:!1,label:s("MENOR_IGUAL_A_15KW_CONTRACTACIO")},{value:!0,label:s("MES_GRAN_DE_15KW_CONTRACTACIO")}]}),a.moreThan15Kw&&(0,w.jsx)(Z.Z,{mt:2,mb:2,children:(0,w.jsx)(j.Z,{variant:"body1",children:s("MORE_THAN_15KW_ADVICE")})}),(0,w.jsx)(Z.Z,{my:2,children:(0,w.jsx)(F.Z,{dangerouslySetInnerHTML:{__html:s("POWER_PERIODS_MORE_INFO",{tariff:null===a||void 0===a?void 0:a.tariff,periods_url:null!==a&&void 0!==a&&a.moreThan15Kw?s("POWER_PERIODS_30TD_MORE_INFO_URL"):s("POWER_PERIODS_20TD_MORE_INFO_URL"),indexed_url:null!==a&&void 0!==a&&a.moreThan15Kw?s("POWER_INDEXED_30TD_MORE_INFO_URL"):s("POWER_INDEXED_20TD_MORE_INFO_URL")})}})}),(0,w.jsx)(U.Z,(0,i.Z)({numInputs:null===(r=c[null===a||void 0===a?void 0:a.tariff])||void 0===r?void 0:r.num_power_periods},e)),!(null!==a&&void 0!==a&&a.moreThan15Kw)&&a.power&&a.power2&&a.power>a.power2&&(0,w.jsx)(Z.Z,{mt:1,children:(0,w.jsxs)(m.Z,{severity:"warning",children:[(0,w.jsx)(v.Z,{children:s("WARNING_POWER_VALLEY_SMALLER_THAN_PEAK_TITLE")}),s("WARNING_POWER_VALLEY_SMALLER_THAN_PEAK")]})}),(0,w.jsx)(Z.Z,{mt:3,mb:1,children:(0,w.jsx)(j.Z,{children:s("POWER_ATTACHMENTS")})}),(0,w.jsx)(Z.Z,{mt:1,mb:2,children:(0,w.jsx)(B.Z,{fieldError:l.power_attachments&&d.power_attachments&&l.power_attachments,callbackFn:function(e){x("power_attachments",e)},values:a.power_attachments,maxFiles:5})})]}),a.changePower&&a.power&&(0,w.jsx)(Z.Z,{mx:1,mb:3,children:(0,w.jsxs)(M.Z,{container:!0,spacing:4,children:[(0,w.jsx)(M.Z,{item:!0,children:s("LA_TEVA_TARIFA_ES")}),(0,w.jsxs)(M.Z,{item:!0,children:["\xa0",(0,w.jsx)(y.Z,{color:"primary",badgeContent:(0,h.yS)(a)})]})]})}),(0,w.jsx)(Z.Z,{mx:1,mt:1,mb:3,children:(0,w.jsx)(F.Z,{dangerouslySetInnerHTML:{__html:s("HELP_POTENCIA",{url:s("HELP_POTENCIA_URL")})}})}),(0,w.jsx)(Z.Z,{mx:1,mb:2,children:(0,w.jsx)(L.Z,{})}),(0,w.jsx)(Z.Z,{mx:1,mt:1,mb:0,children:(0,w.jsx)(D.Z,{className:o.switchLabel,label:(0,w.jsx)(j.Z,{variant:"h6",className:o.paramTitle,children:s("MODIFY_ANSWER_INSTAL_TYPE")}),labelPlacement:"start",control:(0,w.jsx)(W.Z,{name:"changePhases",className:o.switch,onChange:function(e){return V(e,x,a)},inputProps:{"aria-label":"primary checkbox"},color:"primary",checked:a.changePhases})})}),a.changePhases&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Z.Z,{mx:1,mt:1,mb:2,children:(0,w.jsxs)(H.Z,{select:!0,id:"phases",name:"phases",label:s("TIPUS_INSTALLACIO"),variant:"outlined",fullWidth:!0,onChange:u,onBlur:p,value:a.phases,error:l.phases&&d.phases,helperText:d.phases&&l.phases,children:[(0,w.jsx)(k.Z,{value:"mono",children:s("MONOFASICA_NORMAL")}),(0,w.jsx)(k.Z,{value:"tri",children:s("TRIFASICA")})]})}),(0,w.jsx)(Z.Z,{mt:3,mx:1,mb:1,children:(0,w.jsx)(j.Z,{children:s("INSTALL_TYPE_ATTACHMENTS")})}),(0,w.jsx)(Z.Z,{mx:1,mt:1,mb:2,children:(0,w.jsx)(B.Z,{fieldError:l.attachments&&d.attachments&&l.attachments,callbackFn:function(e){return x("attachments",e)},values:a.attachments,maxFiles:5})})]}),(0,w.jsx)(Z.Z,{mx:1,mt:1,mb:3,children:(0,w.jsx)(F.Z,{dangerouslySetInnerHTML:{__html:s("HELP_INSTALL_TYPE",{url:s("HELP_INSTALL_TYPE_URL")})}})}),(0,w.jsxs)("div",{className:o.actionsContainer,children:[t&&(0,w.jsx)(O.Z,{onClick:t,className:o.button,startIcon:(0,w.jsx)(C.Z,{}),children:s("PAS_ANTERIOR")}),n&&(0,w.jsx)(O.Z,{type:"submit",className:o.button,variant:"contained",color:"primary",endIcon:(0,w.jsx)(E.Z,{}),disabled:!a.changePhases&&!a.changePower||g,children:s("SEGUENT_PAS")})]})]})}})})},q=s.memo(X),G=(0,u.Z)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(1),display:"flex",justifyContent:"space-between"},resetContainer:{padding:e.spacing(3)},paperContainer:{marginTop:e.spacing(2),padding:e.spacing(2)}}}));function $(e){var n=e.nextStep,t=e.prevStep,r=e.handleStepChanges,a=e.params,o=G(),s=(0,l.$)().t,c=A.Ry().shape({contactName:A.Z_().required(s("NO_NAME")),contactSurname:A.Z_().required(s("NO_SURNAME")),phone:A.Z_().matches(/^\d{9}$/,s("NO_PHONE")).required(s("NO_PHONE"))});return(0,w.jsx)(N.Z,{className:o.paperContainer,elevation:0,children:(0,w.jsx)(I.J9,{initialValues:(0,i.Z)((0,i.Z)({},{contactName:"",contactSurname:"",phone:""}),a),validationSchema:c,onSubmit:function(e,t){t.setSubmitting;r({contact:e}),n()},children:function(e){var r=e.values,a=e.errors,i=e.touched,c=e.handleChange,l=e.handleBlur,d=e.handleSubmit;e.isSubmitting;return(0,w.jsxs)("form",{onSubmit:d,noValidate:!0,children:[(0,w.jsx)(Z.Z,{mx:1,mt:1,mb:1,children:(0,w.jsx)(j.Z,{dangerouslySetInnerHTML:{__html:s("HELP_CONTACT_INFO")}})}),(0,w.jsxs)(Z.Z,{mx:1,mb:2,children:[(0,w.jsx)(H.Z,{id:"contactName",name:"contactName",label:s("NAME"),error:a.contactName&&i.contactName,helperText:i.contactName&&a.contactName,onChange:c,onBlur:l,value:r.contactName,fullWidth:!0,variant:"outlined",margin:"normal",required:!0,autoFocus:!0}),(0,w.jsx)(H.Z,{id:"contactSurname",name:"contactSurname",label:s("SURNAME"),error:a.contactSurname&&i.contactSurname,helperText:i.contactSurname&&a.contactSurname,onChange:c,onBlur:l,value:r.contactSurname,fullWidth:!0,variant:"outlined",margin:"normal",required:!0}),(0,w.jsx)(H.Z,{id:"phone",name:"phone",type:"tel",label:s("PHONE"),error:a.phone&&i.phone,helperText:i.phone&&a.phone,onChange:c,onBlur:l,value:r.phone,fullWidth:!0,variant:"outlined",margin:"normal",required:!0})]}),(0,w.jsxs)("div",{className:o.actionsContainer,children:[t&&(0,w.jsx)(O.Z,{onClick:t,className:o.button,startIcon:(0,w.jsx)(C.Z,{}),children:s("PAS_ANTERIOR")}),n&&(0,w.jsx)(O.Z,{type:"submit",className:o.button,color:"primary",variant:"contained",endIcon:(0,w.jsx)(E.Z,{}),children:s("SEGUENT_PAS")})]})]})}})})}var z=t(3433),J=t(5720),Q=t(2439),ee=(0,u.Z)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(1),display:"flex",justifyContent:"space-between"},resetContainer:{padding:e.spacing(3)},paperContainer:{marginTop:e.spacing(2),padding:e.spacing(2)},resumeLabel:{textTransform:"uppercase"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},powerPeriod:{marginRight:e.spacing(1),color:"gray"}}}));function ne(e){var n,t,i,c,d,u,p,h,m,v,_,x,g,f,T,E=e.prevStep,S=(e.nextStep,e.handleStepChanges,e.postSubmit),b=e.params,R=ee(),P=(0,l.$)().t,I=(0,s.useState)(!1),A=(0,o.Z)(I,2),y=A[0],F=A[1],D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,S(b);case 3:F(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,w.jsxs)(N.Z,{className:R.paperContainer,elevation:0,children:[(0,w.jsx)(Z.Z,{mt:1,mx:1,mb:2,children:(0,w.jsx)(j.Z,{gutterBottom:!0,children:P("REVIEW_DATA_AND_CONFIRM")})}),(0,w.jsx)(Z.Z,{mx:1,mb:1,children:(0,w.jsx)(L.Z,{})}),(null===b||void 0===b?void 0:b.subsection)&&(0,w.jsxs)(Z.Z,{mt:2,mx:1,children:[(0,w.jsx)(j.Z,{className:R.resumeLabel,variant:"subtitle2",gutterBottom:!0,children:P("SUBSECTION_AUTO")}),(0,w.jsx)(M.Z,{container:!0,spacing:2,children:(0,w.jsx)(M.Z,{item:!0,children:(0,w.jsx)(j.Z,{"data-cy":"tariff",variant:"body1",gutterBottom:!0,children:b.subsection})})})]}),(null===(n=b.modify)||void 0===n?void 0:n.phases)&&(0,w.jsxs)(Z.Z,{mt:2,mx:1,children:[(0,w.jsx)(j.Z,{className:R.resumeLabel,variant:"subtitle2",gutterBottom:!0,children:P("INSTALL_TYPE")}),(0,w.jsx)(j.Z,{"data-cy":null===(t=b.modify)||void 0===t?void 0:t.phases,variant:"body1",gutterBottom:!0,children:"mono"===(null===(i=b.modify)||void 0===i?void 0:i.phases)?P("MONOFASICA_NORMAL"):P("TRIFASICA")})]}),(null===(c=b.modify)||void 0===c?void 0:c.power)&&(0,w.jsxs)(Z.Z,{mt:2,mx:1,children:[(0,w.jsx)(j.Z,{className:R.resumeLabel,variant:"subtitle2",gutterBottom:!0,children:P("POWER")}),(0,w.jsxs)(M.Z,{container:!0,spacing:4,children:[(0,w.jsx)(M.Z,{item:!0,children:(0,w.jsxs)(j.Z,{"data-cy":"power",variant:"body1",gutterBottom:!0,children:[(0,w.jsx)("span",{className:R.powerPeriod,children:null!==b&&void 0!==b&&null!==(d=b.modify)&&void 0!==d&&d.moreThan15Kw?"P1":P("PEAK")})," ",null===(u=b.modify)||void 0===u?void 0:u.power," kW"]})}),(0,w.jsx)(M.Z,{item:!0,children:(0,w.jsxs)(j.Z,{"data-cy":"power2",variant:"body1",gutterBottom:!0,children:[(0,w.jsx)("span",{className:R.powerPeriod,children:null!==b&&void 0!==b&&null!==(p=b.modify)&&void 0!==p&&p.moreThan15Kw?"P2":P("VALLEY")})," ",null===(h=b.modify)||void 0===h?void 0:h.power2," kW"]})}),(null===b||void 0===b||null===(m=b.modify)||void 0===m?void 0:m.moreThan15Kw)&&(0,w.jsx)(w.Fragment,{children:(0,z.Z)(Array(4).keys()).map((function(e){var n,t=e+3;return(0,w.jsx)(M.Z,{item:!0,children:(0,w.jsxs)(j.Z,{"data-cy":"power".concat(t),variant:"body1",gutterBottom:!0,children:[(0,w.jsx)("span",{className:R.powerPeriod,children:"P".concat(t)})," ",null===(n=b.modify)||void 0===n?void 0:n["power".concat(t)]," kW"]})})}))})]})]}),(null===(v=b.modify)||void 0===v?void 0:v.changePower)&&(0,w.jsxs)(Z.Z,{mt:2,mx:1,children:[(0,w.jsx)(j.Z,{className:R.resumeLabel,variant:"subtitle2",gutterBottom:!0,children:P("FARE")}),(0,w.jsx)(M.Z,{container:!0,spacing:4,children:(null===(_=b.modify)||void 0===_?void 0:_.tariff)&&(0,w.jsx)(M.Z,{item:!0,children:(0,w.jsx)(j.Z,{"data-cy":"tariff",variant:"body1",gutterBottom:!0,children:null===(x=b.modify)||void 0===x?void 0:x.tariff})})})]}),(0,w.jsxs)(Z.Z,{mt:2,mb:3,mx:1,children:[(0,w.jsx)(j.Z,{className:R.resumeLabel,variant:"subtitle2",gutterBottom:!0,children:P("CONTACT_PHONE")}),(0,w.jsxs)(j.Z,{"data-cy":"contact",variant:"body1",gutterBottom:!0,children:[null===(g=b.contact)||void 0===g?void 0:g.phone," (",null===(f=b.contact)||void 0===f?void 0:f.contactName," ",null===(T=b.contact)||void 0===T?void 0:T.contactSurname,")"]})]}),(0,w.jsx)(Z.Z,{mt:1,mx:1,mb:2,children:(0,w.jsx)(j.Z,{gutterBottom:!0,children:P("REVIEW_DATA_INFO")})}),(0,w.jsx)(Z.Z,{mx:1,mb:1,children:(0,w.jsx)(L.Z,{})}),(0,w.jsxs)("div",{className:R.actionsContainer,children:[E&&(0,w.jsx)(O.Z,{onClick:E,className:R.button,startIcon:(0,w.jsx)(C.Z,{}),children:P("PAS_ANTERIOR")}),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(O.Z,{type:"submit",onClick:D,className:R.button,color:"primary",variant:"contained",startIcon:y?(0,w.jsx)(J.Z,{size:24}):(0,w.jsx)(Q.Z,{}),disabled:y,children:P("ENVIAR")})})]})]})}var te=t(6697),re=t(9601),ae=(0,u.Z)((function(e){return{root:{width:"100%",backgroundColor:"#f2f2f2"},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(2)},responseContainer:{padding:e.spacing(1)},stepper:{backgroundColor:"#f2f2f2",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingBottom:e.spacing(1)},stepLabel:{fontSize:"1.15rem"}}})),ie={SHOW_INSPECTOR:"ctrl+shift+d"},oe=["MODIFY_POTTAR_INTRO_TITLE","MODIFY_POTTAR_SELECT_TITLE","MODIFY_POTTAR_CONTACT_TITLE","REVISIO_CONFIRMACIO_DADES"],se=["ACCEPT_OR_REFUSE_TITLE","DETAIL_D1_TITLE"];var ce=function(e){var n,t,u=(0,c.UO)(),Z=(0,c.TH)().state,O=null===Z||void 0===Z||null===(n=Z.d1CaseData)||void 0===n?void 0:n.m1,N=null===Z||void 0===Z?void 0:Z.d1CaseData,j=ae(),E=(0,l.$)(),S=E.t,C=E.i18n,R={SHOW_INSPECTOR:function(){L(!y)}};(0,s.useEffect)((function(){var e=u.language;C.changeLanguage(e)}),[u.language,C]);var I=(0,s.useState)(!1),A=(0,o.Z)(I,2),y=A[0],L=A[1],F=(0,s.useState)(0),D=(0,o.Z)(F,2),M=D[0],k=D[1],W=(0,s.useState)(2),H=(0,o.Z)(W,2),B=H[0],U=H[1],K=(0,s.useState)({token:null===e||void 0===e?void 0:e.token}),Y=(0,o.Z)(K,2),V=Y[0],X=Y[1],G=(0,s.useCallback)((function(e){X((0,i.Z)((0,i.Z)({},V),e))}),[V]),z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.token,a=(0,h.XX)(n),e.next=4,(0,p.f7)(a,t).then((function(e){G({response:e}),ee()})).catch((function(e){var n,t,r={error:null!==e&&void 0!==e&&null!==(n=e.response)&&void 0!==n&&null!==(t=n.data)&&void 0!==t&&t.error?e.response.data.error:{code:"MODIFY_POTTAR_UNEXPECTED"}};G(r),ee()}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),J=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,h.JU)(n),e.next=3,(0,p.kk)(t,null===n||void 0===n?void 0:n.case_id,null===n||void 0===n?void 0:n.token).then((function(e){G({response:e.data}),ee()})).catch((function(e){var n,t,r={error:null!==e&&void 0!==e&&null!==(n=e.response)&&void 0!==n&&null!==(t=n.data)&&void 0!==t&&t.error?e.response.data.error:{code:"MODIFY_POTTAR_UNEXPECTED"}};G(r),ee()}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(e){switch(e){case 0:return O?(0,w.jsx)(P,{nextStep:function(){return ee(1)},prevStep:function(){return ce()},handleStepChanges:G}):(0,w.jsx)(b,{nextStep:function(){return ee(1)},handleStepChanges:G});case 1:return(0,w.jsx)(q,{nextStep:function(){return ee(2)},prevStep:function(){return ce()},handleStepChanges:G,params:null===V||void 0===V?void 0:V.modify});case 2:return(0,w.jsx)($,{nextStep:function(){return ee(3)},prevStep:function(){return ce()},handleStepChanges:G,params:null===V||void 0===V?void 0:V.contact});default:return(0,w.jsx)(ne,{nextStep:function(){return ee()},prevStep:ce,handleStepChanges:G,postSubmit:O?J:z,params:O?(0,i.Z)((0,i.Z)({},V),N):V})}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];k(e||M+1)},ce=function(){k((function(e){return e-1})),O&&0===M&&U((function(e){return e-1}))};return(0,w.jsx)(d.GlobalHotKeys,{handlers:R,keyMap:ie,children:(0,w.jsxs)("div",{className:j.root,children:[(0,w.jsx)(re.Z,{severity:"warning",variant:"body2",title:S("MODIFY_POTTAR_AUTON_ENTERPRISE_INTRO_TITLE"),description:S("MODIFY_POTTAR_BANER",{baner_boe_url:S("MODIFY_POTTAR_BANER_BOE_URL"),baner_document_url:S("MODIFY_POTTAR_BANER_DOCUMENT_URL"),baner_help_url:S("MODIFY_POTTAR_BANER_HELP_URL")})}),O&&(0,w.jsx)(x.Z,{className:j.stepper,activeStep:B,orientation:"vertical",children:se.map((function(e,n){return(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(f.Z,{children:(0,w.jsx)("span",{className:j.stepLabel,children:S(e)})}),(0,w.jsx)(T.Z,{children:(0,w.jsx)(c.Fg,{to:{pathname:"/".concat(u.language,"/d1-detail")},state:{d1CaseData:N}})})]},e)}))}),(0,w.jsx)(x.Z,{className:j.stepper,activeStep:M,orientation:"vertical",children:oe.map((function(e,n){return(0,w.jsxs)(g.Z,{children:[(0,w.jsx)(f.Z,{error:n===oe.length-1&&void 0!==(null===V||void 0===V?void 0:V.error),children:(0,w.jsx)("span",{className:j.stepLabel,children:S(e)})}),(0,w.jsx)(T.Z,{children:Q(n)})]},e)}))}),(null===V||void 0===V?void 0:V.error)&&(0,w.jsx)(_.Z,{in:void 0!==(null===V||void 0===V?void 0:V.error),children:(0,w.jsx)("div",{className:j.responseContainer,children:(0,w.jsxs)(m.Z,{severity:"error",children:[(0,w.jsx)(v.Z,{children:S("ERROR_POST_MODIFY")}),S(null===V||void 0===V||null===(t=V.error)||void 0===t?void 0:t.code)]})})}),(null===V||void 0===V?void 0:V.response)&&(0,w.jsx)(_.Z,{in:void 0!==(null===V||void 0===V?void 0:V.response),children:(0,w.jsx)("div",{className:j.responseContainer,children:(0,w.jsxs)(m.Z,{severity:"success",children:[(0,w.jsx)(v.Z,{children:S("MODIFY_POTTAR_SUCCESS_TITTLE")}),S("MODIFY_POTTAR_SUCCESS_MESSAGE")]})})}),y&&(0,w.jsx)(te.Z,(0,i.Z)({},V))]})})}}}]);
//# sourceMappingURL=770.1388afd2.chunk.js.map