const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const randomColor = colorRandom()
    document.body.style.background = colors[randomColor]
    document.getElementById("your-color").innerHTML = colors[randomColor]
})

function colorRandom(){
    return Math.floor(Math.random() * colors.length)
}

