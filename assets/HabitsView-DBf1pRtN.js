import{d as se,r as _,u as ie,_ as oe,o as $,c as I,a as R,t as J,w as N,p as O,m as We,V as Ke,g as j,b as re,e as Xe,f as Se,I as Ye,n as fe,h as U,i as Ve,j as Y,k as i,l as $e,q as ge,s as Ge,v as ae,x as F,y as Qe,z as Ze,A as te,B as et,C as tt,D as at,E as ne,F as g,G as me,H as nt,J as lt,K as _e,L as it,M as Q,N as Ie,O as we,P as ye,Q as Pe,R as xe,S as G,T as he,U as st,W as ot,X as Be,Y as le,Z as rt,$ as ut,a0 as Ee,a1 as dt,a2 as ct,a3 as Fe,a4 as be,a5 as ft,a6 as De,a7 as vt,a8 as mt,a9 as gt,aa as yt,ab as ht,ac as q,ad as bt,ae as pt,af as Vt,ag as de,ah as kt,ai as Ct,aj as St,ak as Ae,al as ke,am as $t,an as _t,ao as It,ap as wt,aq as Pt,ar as xt,as as Bt,at as Et,au as Ft,av as Dt,aw as ce,ax as At,ay as ve}from"./index-DR1ezEdf.js";const Rt=se({name:"HabitEntry",props:{entry:{type:Object,required:!1},habit:{type:Object,required:!0},date:{type:String,required:!0}},setup(e){var r;let t=!1,n=_(((r=e.entry)==null?void 0:r.value)||0);const o=async()=>{var s;t=!0;const u=ie(),v=`https://api.fordsdevelopment.co.uk/daily_discipline/habit_entries/${(s=e.entry)==null?void 0:s.id}`;return await fetch(v,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.accessToken}`},body:JSON.stringify({value:n.value})})},a=async()=>{t=!0;const u=ie();return await fetch("https://api.fordsdevelopment.co.uk/daily_discipline/habit_entries",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.accessToken}`},body:JSON.stringify({habit_id:e.habit.id,date:e.date,value:n.value})})},l=async()=>{t=!0,n.value=n.value===0?1:0;const u=e.entry?await o():await a();if(u.ok){t=!1;const v=await u.json();n.value=v.value}else{t=!1;const v=await u.json();console.error(v)}};return{entry:e.entry,toggleEntry:l,loading:t,value:n}}}),Tt={key:0},Mt={key:1},Ot={key:0,class:"mdi mdi-check"},Lt={key:1,class:"mdi mdi-close"};function Ht(e,t,n,o,a,l){return e.loading?($(),I("div",Tt,"Loading...")):($(),I("div",Mt,[R("button",{onClick:t[0]||(t[0]=(...r)=>e.toggleEntry&&e.toggleEntry(...r))},[e.value===1?($(),I("span",Ot)):($(),I("span",Lt))])]))}const Re=oe(Rt,[["render",Ht]]),Nt=se({name:"Habit",props:{habit:{type:Object,required:!0}},components:{HabitEntry:Re},setup(e){return{habit:e.habit}}}),jt={class:"habit-wrapper"};function Ut(e,t,n,o,a,l){return $(),I("div",jt,[R("h2",null,J(e.habit.name),1),R("p",null,J(e.habit.description),1),R("p",null,J(e.habit.date),1)])}const zt=oe(Nt,[["render",Ut]]),qt=se({name:"RecordForm",props:{record:{type:Object,default:()=>({})},endpoint:{type:String,required:!0},method:{type:String,default:"POST"}},setup(e){const t=_(!1),n=_({...e.record}),o=_(null),a=ie();return N(()=>e.record,u=>{n.value={...u}},{deep:!0,immediate:!0}),{dialog:t,localRecord:n,openDialog:()=>{t.value=!0},saveRecord:async()=>{console.error(JSON.stringify(n.value)),o.value=null;const u=await fetch(e.endpoint,{method:e.method,headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.accessToken}`},body:JSON.stringify(n.value)});console.log(JSON.stringify(n.value)),u.ok?(console.log(JSON.stringify(n.value)),window.location.reload()):(console.log(JSON.stringify(n.value)),o.value=await u.json())},errorMessage:o}}}),Jt=O({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...We({origin:"center center",scrollStrategy:"block",transition:{component:Ke},zIndex:2400})},"VDialog"),Wt=j()({name:"VDialog",props:Jt(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{emit:n,slots:o}=t;const a=re(e,"modelValue"),{scopeId:l}=Xe(),r=_();function u(s){var m,V;const c=s.relatedTarget,h=s.target;if(c!==h&&((m=r.value)!=null&&m.contentEl)&&((V=r.value)!=null&&V.globalTop)&&![document,r.value.contentEl].includes(h)&&!r.value.contentEl.contains(h)){const y=Ge(r.value.contentEl);if(!y.length)return;const P=y[0],k=y[y.length-1];c===P?k.focus():P.focus()}}Se(()=>{document.removeEventListener("focusin",u)}),Ye&&N(()=>a.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0});function v(){var s;n("afterEnter"),(s=r.value)!=null&&s.contentEl&&!r.value.contentEl.contains(document.activeElement)&&r.value.contentEl.focus({preventScroll:!0})}function d(){n("afterLeave")}return N(a,async s=>{var c;s||(await fe(),(c=r.value.activatorEl)==null||c.focus({preventScroll:!0}))}),U(()=>{const s=Ve.filterProps(e),c=Y({"aria-haspopup":"dialog"},e.activatorProps),h=Y({tabindex:-1},e.contentProps);return i(Ve,Y({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":m=>a.value=m,"aria-modal":"true",activatorProps:c,contentProps:h,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:v,onAfterLeave:d},l),{activator:o.activator,default:function(){for(var m=arguments.length,V=new Array(m),y=0;y<m;y++)V[y]=arguments[y];return i($e,{root:"VDialog"},{default:()=>{var P;return[(P=o.default)==null?void 0:P.call(o,...V)]}})}})}),ge({},r)}}),Kt={key:0,class:"error text-center"};function Xt(e,t,n,o,a,l){return $(),I("div",null,[ae(e.$slots,"trigger",{openDialog:e.openDialog},()=>[i(ne,{color:"primary",onClick:e.openDialog},{default:F(()=>t[2]||(t[2]=[te("Add Record")])),_:1},8,["onClick"])]),i(Wt,{modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=r=>e.dialog=r),"max-width":"500"},{default:F(()=>[i(Qe,null,{default:F(()=>[i(Ze,null,{default:F(()=>[ae(e.$slots,"title",{},()=>[t[3]||(t[3]=te("Add/Edit Record"))])]),_:3}),i(et,null,{default:F(()=>[ae(e.$slots,"form",{record:e.localRecord},()=>[t[4]||(t[4]=te("No form provided"))])]),_:3}),e.errorMessage?($(),I("p",Kt,J(e.errorMessage),1)):tt("",!0),i(at,null,{default:F(()=>[ae(e.$slots,"actions",{},()=>[i(ne,{color:"secondary",onClick:t[0]||(t[0]=r=>e.dialog=!1)},{default:F(()=>t[5]||(t[5]=[te("Cancel")])),_:1}),i(ne,{color:"primary",onClick:e.saveRecord},{default:F(()=>t[6]||(t[6]=[te("Save")])),_:1},8,["onClick"])])]),_:3})]),_:3})]),_:3},8,["modelValue"])])}const Yt=oe(qt,[["render",Xt]]),Gt=se({name:"HabitForm",props:{brand:{type:Object,required:!1,default:()=>({name:"",image:""})}},components:{RecordForm:Yt},setup(e){ie();const t=_([]),n=g(()=>!!e.brand.id),o=g(()=>n.value?`https://api.fordsdevelopment.co.uk/daily_discipline//habits/${e.brand.id}`:"https://api.fordsdevelopment.co.uk/daily_discipline//habits"),a=g(()=>n.value?"PUT":"POST");return{isEditMode:n,endpoint:o,method:a,handleSave:async r=>{console.log(`${n.value?"Updated":"Created"} record:`,r),window.location.reload()},value:t}}}),Te=Symbol.for("vuetify:form"),Qt=O({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Zt(e){const t=re(e,"modelValue"),n=g(()=>e.disabled),o=g(()=>e.readonly),a=me(!1),l=_([]),r=_([]);async function u(){const s=[];let c=!0;r.value=[],a.value=!0;for(const h of l.value){const m=await h.validate();if(m.length>0&&(c=!1,s.push({id:h.id,errorMessages:m})),!c&&e.fastFail)break}return r.value=s,a.value=!1,{valid:c,errors:r.value}}function v(){l.value.forEach(s=>s.reset())}function d(){l.value.forEach(s=>s.resetValidation())}return N(l,()=>{let s=0,c=0;const h=[];for(const m of l.value)m.isValid===!1?(c++,h.push({id:m.id,errorMessages:m.errorMessages})):m.isValid===!0&&s++;r.value=h,t.value=c>0?!1:s===l.value.length?!0:null},{deep:!0,flush:"post"}),nt(Te,{register:s=>{let{id:c,vm:h,validate:m,reset:V,resetValidation:y}=s;l.value.some(P=>P.id===c),l.value.push({id:c,validate:m,reset:V,resetValidation:y,vm:lt(h),isValid:null,errorMessages:[]})},unregister:s=>{l.value=l.value.filter(c=>c.id!==s)},update:(s,c,h)=>{const m=l.value.find(V=>V.id===s);m&&(m.isValid=c,m.errorMessages=h)},isDisabled:n,isReadonly:o,isValidating:a,isValid:t,items:l,validateOn:_e(e,"validateOn")}),{errors:r,isDisabled:n,isReadonly:o,isValidating:a,isValid:t,items:l,validate:u,reset:v,resetValidation:d}}function ea(e){const t=it(Te,null);return{...t,isReadonly:g(()=>!!((e==null?void 0:e.readonly)??(t==null?void 0:t.isReadonly.value))),isDisabled:g(()=>!!((e==null?void 0:e.disabled)??(t==null?void 0:t.isDisabled.value)))}}const ta=O({...Q(),...Qt()},"VForm"),aa=j()({name:"VForm",props:ta(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:o}=t;const a=Zt(e),l=_();function r(v){v.preventDefault(),a.reset()}function u(v){const d=v,s=a.validate();d.then=s.then.bind(s),d.catch=s.catch.bind(s),d.finally=s.finally.bind(s),o("submit",d),d.defaultPrevented||s.then(c=>{var m;let{valid:h}=c;h&&((m=l.value)==null||m.submit())}),d.preventDefault()}return U(()=>{var v;return i("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:r,onSubmit:u},[(v=n.default)==null?void 0:v.call(n,a)])}),ge(a,l)}}),na=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...Ie({transition:{component:we}})},"VCounter"),la=j()({name:"VCounter",functional:!0,props:na(),setup(e,t){let{slots:n}=t;const o=g(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return U(()=>i(xe,{transition:e.transition},{default:()=>[ye(i("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[n.default?n.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[Pe,e.active]])]})),{}}}),ia=O({text:String,onClick:G(),...Q(),...he()},"VLabel"),sa=j()({name:"VLabel",props:ia(),setup(e,t){let{slots:n}=t;return U(()=>{var o;return i("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(o=n.default)==null?void 0:o.call(n)])}),{}}}),oa=O({floating:Boolean,...Q()},"VFieldLabel"),ue=j()({name:"VFieldLabel",props:oa(),setup(e,t){let{slots:n}=t;return U(()=>i(sa,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}});function Me(e){const{t}=st();function n(o){let{name:a}=o;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],r=e[`onClick:${a}`],u=r&&l?t(`$vuetify.input.${l}`,e.label??""):void 0;return i(ot,{icon:e[`${a}Icon`],"aria-label":u,onClick:r},null)}return{InputIcon:n}}const Oe=O({focused:Boolean,"onUpdate:focused":G()},"focus");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Be();const n=re(e,"focused"),o=g(()=>({[`${t}--focused`]:n.value}));function a(){n.value=!0}function l(){n.value=!1}return{focusClasses:o,isFocused:n,focus:a,blur:l}}const ra=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],He=O({appendInnerIcon:le,bgColor:String,clearable:Boolean,clearIcon:{type:le,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:le,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ra.includes(e)},"onClick:clear":G(),"onClick:appendInner":G(),"onClick:prependInner":G(),...Q(),...rt(),...ut(),...he()},"VField"),Ne=j()({name:"VField",inheritAttrs:!1,props:{id:String,...Oe(),...He()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:o,slots:a}=t;const{themeClasses:l}=Ee(e),{loaderClasses:r}=dt(e),{focusClasses:u,isFocused:v,focus:d,blur:s}=Le(e),{InputIcon:c}=Me(e),{roundedClasses:h}=ct(e),{rtlClasses:m}=Fe(),V=g(()=>e.dirty||e.active),y=g(()=>!e.singleLine&&!!(e.label||a.label)),P=be(),k=g(()=>e.id||`input-${P}`),B=g(()=>`${k.value}-messages`),f=_(),p=_(),E=_(),b=g(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:C,backgroundColorStyles:x}=ft(_e(e,"bgColor")),{textColorClasses:D,textColorStyles:z}=De(g(()=>e.error||e.disabled?void 0:V.value&&v.value?e.color:e.baseColor));N(V,S=>{if(y.value){const w=f.value.$el,A=p.value.$el;requestAnimationFrame(()=>{const T=vt(w),M=A.getBoundingClientRect(),ee=M.x-T.x,W=M.y-T.y-(T.height/2-M.height/2),K=M.width/.75,X=Math.abs(K-T.width)>1?{maxWidth:mt(K)}:void 0,Ue=getComputedStyle(w),pe=getComputedStyle(A),ze=parseFloat(Ue.transitionDuration)*1e3||150,qe=parseFloat(pe.getPropertyValue("--v-field-label-scale")),Je=pe.getPropertyValue("color");w.style.visibility="visible",A.style.visibility="hidden",gt(w,{transform:`translate(${ee}px, ${W}px) scale(${qe})`,color:Je,...X},{duration:ze,easing:Vt,direction:S?"normal":"reverse"}).finished.then(()=>{w.style.removeProperty("visibility"),A.style.removeProperty("visibility")})})}},{flush:"post"});const H=g(()=>({isActive:V,isFocused:v,controlRef:E,blur:s,focus:d}));function Z(S){S.target!==document.activeElement&&S.preventDefault()}function L(S){var w;S.key!=="Enter"&&S.key!==" "||(S.preventDefault(),S.stopPropagation(),(w=e["onClick:clear"])==null||w.call(e,new MouseEvent("click")))}return U(()=>{var ee,W,K;const S=e.variant==="outlined",w=!!(a["prepend-inner"]||e.prependInnerIcon),A=!!(e.clearable||a.clear),T=!!(a["append-inner"]||e.appendInnerIcon||A),M=()=>a.label?a.label({...H.value,label:e.label,props:{for:k.value}}):e.label;return i("div",Y({class:["v-field",{"v-field--active":V.value,"v-field--appended":T,"v-field--center-affix":e.centerAffix??!b.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":w,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!M(),[`v-field--variant-${e.variant}`]:!0},l.value,C.value,u.value,r.value,h.value,m.value,e.class],style:[x.value,e.style],onClick:Z},n),[i("div",{class:"v-field__overlay"},null),i(yt,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),w&&i("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&i(c,{key:"prepend-icon",name:"prependInner"},null),(ee=a["prepend-inner"])==null?void 0:ee.call(a,H.value)]),i("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&y.value&&i(ue,{key:"floating-label",ref:p,class:[D.value],floating:!0,for:k.value,style:z.value},{default:()=>[M()]}),y.value&&i(ue,{key:"label",ref:f,for:k.value},{default:()=>[M()]}),(W=a.default)==null?void 0:W.call(a,{...H.value,props:{id:k.value,class:"v-field__input","aria-describedby":B.value},focus:d,blur:s})]),A&&i(ht,{key:"clear"},{default:()=>[ye(i("div",{class:"v-field__clearable",onMousedown:X=>{X.preventDefault(),X.stopPropagation()}},[i($e,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...H.value,props:{onKeydown:L,onFocus:d,onBlur:s,onClick:e["onClick:clear"]}}):i(c,{name:"clear",onKeydown:L,onFocus:d,onBlur:s},null)]})]),[[Pe,e.dirty]])]}),T&&i("div",{key:"append",class:"v-field__append-inner"},[(K=a["append-inner"])==null?void 0:K.call(a,H.value),e.appendInnerIcon&&i(c,{key:"append-icon",name:"appendInner"},null)]),i("div",{class:["v-field__outline",D.value],style:z.value},[S&&i(q,null,[i("div",{class:"v-field__outline__start"},null),y.value&&i("div",{class:"v-field__outline__notch"},[i(ue,{ref:p,floating:!0,for:k.value},{default:()=>[M()]})]),i("div",{class:"v-field__outline__end"},null)]),b.value&&y.value&&i(ue,{ref:p,floating:!0,for:k.value},{default:()=>[M()]})])])}),{controlRef:E}}});function ua(e){const t=Object.keys(Ne.props).filter(n=>!bt(n)&&n!=="class"&&n!=="style");return pt(e,t)}const da=O({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Q(),...Ie({transition:{component:we,leaveAbsolute:!0,group:!0}})},"VMessages"),ca=j()({name:"VMessages",props:da(),setup(e,t){let{slots:n}=t;const o=g(()=>de(e.messages)),{textColorClasses:a,textColorStyles:l}=De(g(()=>e.color));return U(()=>i(xe,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&o.value.map((r,u)=>i("div",{class:"v-messages__message",key:`${u}-${o.value}`},[n.message?n.message({message:r}):r]))]})),{}}}),fa=O({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Oe()},"validation");function va(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Be(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:be();const o=re(e,"modelValue"),a=g(()=>e.validationValue===void 0?o.value:e.validationValue),l=ea(e),r=_([]),u=me(!0),v=g(()=>!!(de(o.value===""?null:o.value).length||de(a.value===""?null:a.value).length)),d=g(()=>{var f;return(f=e.errorMessages)!=null&&f.length?de(e.errorMessages).concat(r.value).slice(0,Math.max(0,+e.maxErrors)):r.value}),s=g(()=>{var E;let f=(e.validateOn??((E=l.validateOn)==null?void 0:E.value))||"input";f==="lazy"&&(f="input lazy"),f==="eager"&&(f="input eager");const p=new Set((f==null?void 0:f.split(" "))??[]);return{input:p.has("input"),blur:p.has("blur")||p.has("input")||p.has("invalid-input"),invalidInput:p.has("invalid-input"),lazy:p.has("lazy"),eager:p.has("eager")}}),c=g(()=>{var f;return e.error||(f=e.errorMessages)!=null&&f.length?!1:e.rules.length?u.value?r.value.length||s.value.lazy?null:!0:!r.value.length:!0}),h=me(!1),m=g(()=>({[`${t}--error`]:c.value===!1,[`${t}--dirty`]:v.value,[`${t}--disabled`]:l.isDisabled.value,[`${t}--readonly`]:l.isReadonly.value})),V=kt("validation"),y=g(()=>e.name??Ct(n));St(()=>{var f;(f=l.register)==null||f.call(l,{id:y.value,vm:V,validate:B,reset:P,resetValidation:k})}),Se(()=>{var f;(f=l.unregister)==null||f.call(l,y.value)}),Ae(async()=>{var f;s.value.lazy||await B(!s.value.eager),(f=l.update)==null||f.call(l,y.value,c.value,d.value)}),ke(()=>s.value.input||s.value.invalidInput&&c.value===!1,()=>{N(a,()=>{if(a.value!=null)B();else if(e.focused){const f=N(()=>e.focused,p=>{p||B(),f()})}})}),ke(()=>s.value.blur,()=>{N(()=>e.focused,f=>{f||B()})}),N([c,d],()=>{var f;(f=l.update)==null||f.call(l,y.value,c.value,d.value)});async function P(){o.value=null,await fe(),await k()}async function k(){u.value=!0,s.value.lazy?r.value=[]:await B(!s.value.eager)}async function B(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const p=[];h.value=!0;for(const E of e.rules){if(p.length>=+(e.maxErrors??1))break;const C=await(typeof E=="function"?E:()=>E)(a.value);if(C!==!0){if(C!==!1&&typeof C!="string"){console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);continue}p.push(C||"")}}return r.value=p,h.value=!1,u.value=f,r.value}return{errorMessages:d,isDirty:v,isDisabled:l.isDisabled,isReadonly:l.isReadonly,isPristine:u,isValid:c,isValidating:h,reset:P,resetValidation:k,validate:B,validationClasses:m}}const je=O({id:String,appendIcon:le,centerAffix:{type:Boolean,default:!0},prependIcon:le,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":G(),"onClick:append":G(),...Q(),...$t(),..._t(It(),["maxWidth","minWidth","width"]),...he(),...fa()},"VInput"),Ce=j()({name:"VInput",props:{...je()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:o,emit:a}=t;const{densityClasses:l}=wt(e),{dimensionStyles:r}=Pt(e),{themeClasses:u}=Ee(e),{rtlClasses:v}=Fe(),{InputIcon:d}=Me(e),s=be(),c=g(()=>e.id||`input-${s}`),h=g(()=>`${c.value}-messages`),{errorMessages:m,isDirty:V,isDisabled:y,isReadonly:P,isPristine:k,isValid:B,isValidating:f,reset:p,resetValidation:E,validate:b,validationClasses:C}=va(e,"v-input",c),x=g(()=>({id:c,messagesId:h,isDirty:V,isDisabled:y,isReadonly:P,isPristine:k,isValid:B,isValidating:f,reset:p,resetValidation:E,validate:b})),D=g(()=>{var z;return(z=e.errorMessages)!=null&&z.length||!k.value&&m.value.length?m.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return U(()=>{var S,w,A,T;const z=!!(o.prepend||e.prependIcon),H=!!(o.append||e.appendIcon),Z=D.value.length>0,L=!e.hideDetails||e.hideDetails==="auto"&&(Z||!!o.details);return i("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},l.value,u.value,v.value,C.value,e.class],style:[r.value,e.style]},[z&&i("div",{key:"prepend",class:"v-input__prepend"},[(S=o.prepend)==null?void 0:S.call(o,x.value),e.prependIcon&&i(d,{key:"prepend-icon",name:"prepend"},null)]),o.default&&i("div",{class:"v-input__control"},[(w=o.default)==null?void 0:w.call(o,x.value)]),H&&i("div",{key:"append",class:"v-input__append"},[e.appendIcon&&i(d,{key:"append-icon",name:"append"},null),(A=o.append)==null?void 0:A.call(o,x.value)]),L&&i("div",{class:"v-input__details"},[i(ca,{id:h.value,active:Z,messages:D.value},{message:o.message}),(T=o.details)==null?void 0:T.call(o,x.value)])])}),{reset:p,resetValidation:E,validate:b,isValid:B,errorMessages:m}}}),ma=["color","file","time","date","datetime-local","week","month"],ga=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...je(),...He()},"VTextField"),ya=j()({name:"VTextField",directives:{Intersect:xt},inheritAttrs:!1,props:ga(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:o,slots:a}=t;const l=re(e,"modelValue"),{isFocused:r,focus:u,blur:v}=Le(e),d=g(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),s=g(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),c=g(()=>["plain","underlined"].includes(e.variant));function h(b,C){var x,D;!e.autofocus||!b||(D=(x=C[0].target)==null?void 0:x.focus)==null||D.call(x)}const m=_(),V=_(),y=_(),P=g(()=>ma.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function k(){var b;y.value!==document.activeElement&&((b=y.value)==null||b.focus()),r.value||u()}function B(b){o("mousedown:control",b),b.target!==y.value&&(k(),b.preventDefault())}function f(b){k(),o("click:control",b)}function p(b){b.stopPropagation(),k(),fe(()=>{l.value=null,Dt(e["onClick:clear"],b)})}function E(b){var x;const C=b.target;if(l.value=C.value,(x=e.modelModifiers)!=null&&x.trim&&["text","search","password","tel","url"].includes(e.type)){const D=[C.selectionStart,C.selectionEnd];fe(()=>{C.selectionStart=D[0],C.selectionEnd=D[1]})}}return U(()=>{const b=!!(a.counter||e.counter!==!1&&e.counter!=null),C=!!(b||a.details),[x,D]=Bt(n),{modelValue:z,...H}=Ce.filterProps(e),Z=ua(e);return i(Ce,Y({ref:m,modelValue:l.value,"onUpdate:modelValue":L=>l.value=L,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":c.value},e.class],style:e.style},x,H,{centerAffix:!c.value,focused:r.value}),{...a,default:L=>{let{id:S,isDisabled:w,isDirty:A,isReadonly:T,isValid:M}=L;return i(Ne,Y({ref:V,onMousedown:B,onClick:f,"onClick:clear":p,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},Z,{id:S.value,active:P.value||A.value,dirty:A.value||e.dirty,disabled:w.value,focused:r.value,error:M.value===!1}),{...a,default:ee=>{let{props:{class:W,...K}}=ee;const X=ye(i("input",Y({ref:y,value:l.value,onInput:E,autofocus:e.autofocus,readonly:T.value,disabled:w.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:k,onBlur:v},K,D),null),[[Et("intersect"),{handler:h},null,{once:!0}]]);return i(q,null,[e.prefix&&i("span",{class:"v-text-field__prefix"},[i("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?i("div",{class:W,"data-no-activator":""},[a.default(),X]):Ft(X,{class:W}),e.suffix&&i("span",{class:"v-text-field__suffix"},[i("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:C?L=>{var S;return i(q,null,[(S=a.details)==null?void 0:S.call(a,L),b&&i(q,null,[i("span",null,null),i(la,{active:e.persistentCounter||r.value,value:d.value,max:s.value,disabled:e.disabled},a.counter)])])}:void 0})}),ge({},m,V,y)}});function ha(e,t,n,o,a,l){const r=ce("RecordForm");return $(),At(r,{record:e.brand,endpoint:e.endpoint,method:e.method,onSave:e.handleSave},{trigger:F(({openDialog:u})=>[ae(e.$slots,"trigger",{openDialog:u},()=>[i(ne,{color:"primary"},{default:F(()=>[te(J(e.isEditMode?"Edit Habit":"Add Habit"),1)]),_:1})])]),title:F(()=>[R("span",null,J(e.isEditMode?"Edit Habit":"Add New Habit"),1)]),form:F(({record:u})=>[i(aa,null,{default:F(()=>[i(ya,{modelValue:u.name,"onUpdate:modelValue":v=>u.name=v,label:"Name",required:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:3},8,["record","endpoint","method","onSave"])}const ba=oe(Gt,[["render",ha]]),pa=se({name:"HabitsView",components:{Habit:zt,HabitForm:ba,HabitEntry:Re},setup(){const e=_([]),t=_(!0),n=_(null);function o(){const u=[],v=new Date;for(let d=0;d<7;d++){const s=new Date;s.setDate(v.getDate()-d);const c=s.toISOString().split("T")[0];u.push(c)}return u}const a=o(),l=async()=>{const u=ie(),d=await fetch("https://api.fordsdevelopment.co.uk/daily_discipline/habits",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.accessToken}`}});if(d.ok){t.value=!1;const s=await d.json();e.value=s}else{t.value=!1;const s=await d.json();n.value=s.error,n.value==="Access token has expired or is invalid."&&(u.$reset(),u.clearState(),localStorage.clear(),sessionStorage.clear())}},r=(u,v)=>u.habit_entries.find(d=>d.date===v);return Ae(()=>{l()}),{habits:e,loading:t,errorMessage:n,lastSevenDays:a,getHabitEntiryForDate:r}}}),Va={class:"page-wrapper"},ka={key:0},Ca={key:1},Sa={key:2},$a={key:3};function _a(e,t,n,o,a,l){const r=ce("Habit"),u=ce("HabitEntry"),v=ce("HabitForm");return $(),I(q,null,[R("div",Va,[t[1]||(t[1]=R("h1",null,"This is the habits page",-1)),e.loading?($(),I("div",ka,"Loading...")):e.errorMessage?($(),I("div",Ca,J(e.errorMessage),1)):e.habits.length===0?($(),I("div",Sa,"No habits found")):($(),I("div",$a,[R("table",null,[R("thead",null,[R("tr",null,[t[0]||(t[0]=R("th",null,"Name",-1)),($(!0),I(q,null,ve(e.lastSevenDays,d=>($(),I("th",null,J(d),1))),256))])]),R("tbody",null,[($(!0),I(q,null,ve(e.habits,d=>($(),I("tr",{key:d.id},[R("td",null,[i(r,{habit:d},null,8,["habit"])]),($(!0),I(q,null,ve(e.lastSevenDays,s=>($(),I("td",null,[i(u,{entry:e.getHabitEntiryForDate(d,s),habit:d,date:s},null,8,["entry","habit","date"])]))),256))]))),128))])])]))]),i(v,null,{trigger:F(({openDialog:d})=>[i(ne,{density:"comfortable",variant:"tonal",text:"New Habit",onClick:d},null,8,["onClick"])]),_:1})],64)}const wa=oe(pa,[["render",_a]]);export{wa as default};