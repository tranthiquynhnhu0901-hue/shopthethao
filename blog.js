function renderBlogs(){let list=[...blogs];const q=(document.getElementById('bq').value||'').toLowerCase();const cat=document.getElementById('bcat').value;if(q)list=list.filter(b=>(b.title+' '+b.excerpt).toLowerCase().includes(q));if(cat!=='all')list=list.filter(b=>b.category===cat);document.getElementById('blogGrid').innerHTML=list.map(blogCard).join('')}
renderBlogs();
