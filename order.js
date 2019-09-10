let lastId
$(document).ready(function(){
  $("#packNumber").change(function(){
    const packNumber=this.value
    let element=$("#element")
    let form="Choisir au moin un pack";


    for (let i=0;i<packNumber;i++){
      form+="<div id='element"+i+"'>"+element.html()+'</div>';
    }
    $("#packForm").html(form)
  })
  $("body").on('change','.packType',function(){
    let elementToAddToid = $(this).parent().attr('id')
    let element = $("#"+elementToAddToid).html()
    console.log(this)
    $("#"+elementToAddToid).html(element +"<h1>choisir </h1>")
  })
})
