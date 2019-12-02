var host='https://api.edamam.com'
var id='4629df7d'
var key='a04da6cfd96bad9e15d82c5ce59d012a'
var q;
function srch()
{
	q=document.getElementById('query').value
	var url='https://api.edamam.com/search?app_id='+id+'&app_key='+key+'&q='+q+''
	var xhr=XMLHttpRequest()
	xhr.open(GET,url)
	xhr.onreadystatechange=test
	function test()
	{
		if(this.status==200&&this.readyState==4)
		{
			var res_data=JSON.parse(this.responseText)
			console.log(res_data)
		}
}	}