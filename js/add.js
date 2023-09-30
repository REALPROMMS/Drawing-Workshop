<script>

	$(document).ready(function(){

		let url =document.location.href;

	$.each($(".heading__menu menu__link"),function(){

  	  if (this.href==url){$(this).addClass('active');};

  	 });

});
	8
</script>
