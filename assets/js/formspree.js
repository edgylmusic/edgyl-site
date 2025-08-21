import { FORMSPREE_ID } from './config.js';
const form=document.getElementById('contactForm'); const msg=document.getElementById('formMsg');
if(form){form.addEventListener('submit',async(e)=>{e.preventDefault();
 if(!FORMSPREE_ID||FORMSPREE_ID==='YOUR_FORMSPREE_ID'){msg.textContent='Set your Formspree ID in assets/js/config.js';return;}
 msg.textContent='Sending...';
 const res=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
 msg.textContent = res.ok ? 'Thanks! I will get back to you soon.' : 'Something went wrong. Try again later.';
 if(res.ok) form.reset();
});}