function main(){
    $("#add-btn").click(function(){
        var tarefa = $("#new-task.input").val()
        $('.filter-btn[data-filter="all"]').html(tarefa)
    })

}   