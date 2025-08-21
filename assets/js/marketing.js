import { META_PIXEL_ID } from './marketing_config.js';
if(META_PIXEL_ID){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',META_PIXEL_ID);fbq('track','PageView');
document.addEventListener('click',e=>{const a=e.target.closest('a.btn');if(a){fbq('trackCustom','ClickButton',{label:a.textContent.trim(),href:a.href});}});
window.addEventListener('load',()=>{const i=new Image();i.height=1;i.width=1;i.style.display='none';i.src=`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;document.body.appendChild(i);});}