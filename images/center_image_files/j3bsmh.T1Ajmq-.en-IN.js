(this.$WP=this.$WP||[]).push(["j3bsmh",(e,s)=>{var n,a,t,o,i,r,l,c,d,u,p,g,m,h,_,b,f,v,M,w,y,C,k,T,I,S,N,E,O,x,q,G,L,R,j="GOOGLE_ONETAP",z=({enhancedGoogleOneTapGate:e})=>o(()=>e?{pid:40670,flow:j,deferShowOverlay:!0}:{pid:40185,flow:j,deferShowOverlay:!0},[e]),D=()=>{var e=i(()=>M.remove("g_state"),[]);return r(()=>e,[e]),e},P=({logImpression:e})=>{var{fetching:s,bucket:n}=y({experiment:"google_one_tap_disable_auto_login_1714679068",logImpression:e});return{fetching:s,isDisableAutoLoginExperiment:s?null:"test"===n}},B=({onNotDisplayed:e,onUserSkipped:s,onCredentialReady:n,onAutoCancelled:a,onGeneralSkipDismiss:t,isFedcmEligible:d,containerId:u,flow:p,pid:g})=>{var m=l(null),[h,M]=c(!1),y=_(),C=E(),k=w({skipImpression:!1}),{fetching:T,isDisableAutoLoginExperiment:I}=P({logImpression:!0}),S=i((e,s)=>{y({module:"google_onetap",action:e,context:`${s}|${p}|isFedCM: ${d}`,value:g})},[p,g,y,d]),N=i(e=>{e&&(S("credentials_success",e.select_by),n(e.credential),M(!1))},[n,S]),O=i((s,n)=>{!k&&(S("display_event",n||"success"),f(s),M(s),s||e())},[e,S,k]),x=i(e=>{S("skipped_event",e),M(!1),"user_cancel"===e||"unknown_reason"===e?s():"auto_cancel"===e?a():t&&t("skipped",e)},[s,a,t,S]),q=i(e=>{S("dismiss_event",e),M(!1),t&&"credential_returned"!==e&&t("dismissed",e)},[S,t]),G=i(e=>{switch(C(),e.getMomentType()){case"display":O(e.isDisplayed(),e.getNotDisplayedReason());break;case"skipped":x(d?"unknown_reason":e.getSkippedReason());break;case"dismissed":q(e.getDismissedReason())}},[C,O,x,d,q]),L=i(e=>{null!==m.current||T||(m.current=e,S("requested","na"),e.initialize({client_id:"1070328450902.apps.googleusercontent.com",callback:N,cancel_on_tap_outside:!1,prompt_parent_id:u,auto_select:!I&&!v(),use_fedcm_for_prompt:d}),e.prompt(G))},[S,N,u,d,T,I,G]);return r(()=>{S("script_requested","na"),b("https://accounts.google.com/gsi/client","MEMX").then(()=>{var e=()=>L(window.google.accounts.id);window.google?.accounts?.id?.initialize?e():window.onGoogleLibraryLoad=e})},[L,S]),r(()=>()=>{m.current&&m.current.cancel()},[]),o(()=>({shown:h}),[h])},F=e=>e+61+49,$=()=>({top:F(0),bottom:0}),A=()=>document.getElementById("credential_picker_iframe"),Z={oneTapMessageContainer:"ZkqhQ Gi B1 Z BB Cj Za",oneTapMessageMobileContainer:"SuwMt D Gi l",oneTapMessageInnerContainer:"QnnKe z",oneTapIcon:"MPoqM Cj",headline:"LcmJt Cj Hn o q f u",rtl:"wVHIl",subhead:"ZnAJV Cj o q"},H=({bottom:e})=>{var s=m(),{userAgentCategory:t}=u();return o(()=>"MOBILE"===t,[t])?n("div",{className:C(Z.oneTapMessageMobileContainer,Z.oneTapMessageContainer),style:{bottom:`${e||0}px`},children:n("div",{className:Z.oneTapMessageInnerContainer,children:a("h3",{className:Z.headline,children:[n("span",{className:Z.oneTapIcon,children:n(k,{})}),n(g,{id:"onetap_message_unlock",messages:"Unlock the best of Tripadvisor"})," "]})})}):n("div",{className:C(Z.oneTapMessageContainer,{[Z.rtl]:s}),children:a("div",{className:Z.oneTapMessageInnerContainer,children:[a("h3",{className:Z.headline,children:[n("span",{className:Z.oneTapIcon,children:n(k,{})}),n(g,{id:"onetap_message_unlock",messages:"Unlock the best of Tripadvisor"})," "]}),a("p",{className:Z.subhead,children:[n(g,{id:"onetap_message_subhead_to_get_the_most",messages:"Sign in to get the most out of Tripadvisor"})," "]})]})})},V=({shown:e,isContextualMessagingEnabled:s,onShow:a})=>{var{bottom:t}=x(),[o,i]=c(!1),[l,d]=c(0);return r(()=>{if(!e)return()=>{};var n=A();if(n){if(n.style.bottom=`${t}px`,n.style.zIndex="10105",!s)return()=>{};var a,o=new MutationObserver(e=>{var s=e?.[0]?.target;if(s instanceof HTMLElement){clearTimeout(a);var n=parseInt(s?.style?.height||"0",10),t=isNaN(n)?0:n-9;a=setTimeout(()=>{d(t),i(t>0)},400)}});return o.observe(n,{attributes:!0}),()=>{o.disconnect(),clearTimeout(a)}}return()=>{}},[t,e,s]),r(()=>{e&&a&&a()},[e,a]),e&&o?n(q,{bottom:l+t}):null},Q=({shown:e,containerId:s,isContextualMessagingEnabled:t,onShow:o})=>{var{top:i}=x(),[d,u]=c(!1),p=l(null);return r(()=>{if(e&&p&&p.current){var s=p.current.children[0];s&&(s.style.zIndex="10107",s.children&&0!==s.children.length&&(s.children[0].onload=()=>{u(t)}))}},[e,t]),r(()=>{e&&o&&o()},[e,o]),a("div",{className:C("mxEhR D y G- Za f e u",{LEMGe:!e}),style:{top:i},children:[d&&n(q,{}),n("div",{id:s,className:"hRNvt M0",ref:p})]})},J="tripGoogleOnetapContainer",U=({trackWouldOpenExplicitPreferences:e,openExplicitPreferences:s,explicitPreferencesEnabled:a,servletName:t,enhancedGoogleOneTapGate:o,onDismiss:l,onShow:c,onSuccessfulLogin:g,onAutoCancelled:m,triggerNext:_,suppressContextualMessage:b,onIFrameShown:f,isFullScreen:v,fullScreenHeader:M})=>{var{login:w}=d(),{login:y}=d(),C=N({enhancedGoogleOneTapGate:o}),k=h(),{fetching:E,isTermsPageExperiment:x}=T(),{fetching:q,isNoCloseModal:j}=I(),z=!E&&!!x,D=!q&&!!j,{browser:P}=u(),B="CHROME"===P.family&&P.majorVersion>=108,F=i(n=>{w({extraQueryParams:{google_id_token:n,isFedCM:B},isFullScreen:!!v,closeX:!z,disableCloseOptions:D,fullScreenHeader:M,onSwitchFlow:e=>{y(e)},onSuccess:n=>{g&&n&&n.userId&&g(!!n.hasCreatedMember,n.userId),n&&!0===n.hasCreatedMember&&(e&&e(),a&&s&&s())},onClose:()=>{S.has(k)||window.location.reload()},...C})},[a,M,B,v,w,C,g,s,y,e,z,D,k]),{shown:$}=O({onNotDisplayed:()=>{_(),l(!0)},onUserSkipped:()=>l(!0),onAutoCancelled:()=>{m&&m()},onGeneralSkipDismiss:()=>l(!1),onCredentialReady:F,isFedcmEligible:B,containerId:J,pid:C.pid,flow:C.flow});r(()=>{if($){var e=A();e&&f&&f(e)}},[$,f]);var Z=p(),H=!b&&(null==t||!R.has(t));return"MOBILE"===Z&&A()?n(G,{shown:$,onShow:c,isContextualMessagingEnabled:H}):n(L,{shown:$,onShow:c,containerId:J,isContextualMessagingEnabled:H})};return[()=>{N=z,E=D,O=B,x=$,q=H,G=V,L=Q,R=t(()=>new Set(["CheapFlightsSearchResults","CheapFlightsSearchDeals","MobileCheapFlightsSearchResults"])),e("default",U)},[e=>(n=e.jsx,a=e.jsxs),e=>t=e.readOnly,e=>(o=e.useMemo,i=e.useCallback,r=e.useEffect,l=e.useRef,c=e.useState),e=>d=e.default,e=>u=e.useUserAgent,e=>p=e.useViewportCategory,e=>(g=e.default,m=e.useRtl,h=e.useLocale),e=>_=e.useGARecorder,e=>b=e.importScript,e=>(f=e.setOneTapEligibility,v=e.userSignedOut),e=>M=e.default,e=>w=e.usePopupSupressionTest,e=>y=e.useExperimentBucket,e=>C=e.default,e=>k=e.default,e=>(T=e.useGoogleOneTapTermsPage,I=e.useShowGoogleOneTapTermsPageNoCloseModal),e=>S=e.emailOptInLocales]]},["21h32l","5vmpsm","o4yt4q","rdycz1","nnprhg","ys6v1o","7thqz4","32pwc7","q7wvkq","cyrz7y","5gpqhx","ab7lwb","v3e972","fkji80","ympq4z","nicnt2","71uqev"]]);