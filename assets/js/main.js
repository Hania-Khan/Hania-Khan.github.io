(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbImg'),closeBtn=document.getElementById('lbClose'),last=null;
  document.querySelectorAll('.shot').forEach(function(b){
    b.addEventListener('click',function(){var i=b.querySelector('img');img.src=i.src;img.alt=i.alt;last=b;lb.hidden=false;closeBtn.focus();});
  });
  function close(){lb.hidden=true;img.src='';if(last)last.focus();}
  closeBtn.addEventListener('click',close);
  lb.addEventListener('click',function(e){if(e.target===lb)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lb.hidden)close();});
  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-copy'),done=function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1600);};
      var sel=function(){var s=b.parentNode.querySelector('span'),r=document.createRange();r.selectNodeContents(s);var w=getSelection();w.removeAllRanges();w.addRange(r);b.textContent='Selected';};
      try{navigator.clipboard.writeText(t).then(done,sel);}catch(e){sel();}
    });
  });

  // theme toggle: remembers the visitor's choice
  var root=document.documentElement,btn=document.getElementById('themeBtn');
  function current(){var t=root.getAttribute('data-theme');if(t)return t;return matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  if(btn)btn.addEventListener('click',function(){var n=current()==='dark'?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n);}catch(e){}});
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
})();
