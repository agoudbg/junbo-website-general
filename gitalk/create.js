function creategitalk(id,secret,rep,div){
	
	document.write('<link rel="stylesheet" type="text/css" href="https://cdn.junbo.wang/gitalk/gitalk.css"><script src="https://cdn.junbo.wang/gitalk/gitalk.min.js"></script>')
	
	
	gitalk = new Gitalk({
	  clientID: id,
	  clientSecret: secret,
	  repo: rep,
	  owner: 'agoudbg',
	  admin: ['agoudbg'],
	  id: location.pathname,//getUrlArgStr(),      // Ensure uniqueness and length less than 50
	  distractionFreeMode: true  // Facebook-like distraction free mode
	})

	gitalk.render(document.getElementById(div));

	
}