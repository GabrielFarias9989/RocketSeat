<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="botao">Criar Quadrado</button>
    <div id="squareArea"></div>
    <script>
        var btn = document.getElementById('botao');
        var squareA = document.getElementById('squareArea'); 
        
        btn.onclick = function(){
            var square = document.createElement('div');
            square.style.width = '100px';
            square.style.height = '100px';
            square.style.backgroundColor = '#f00';
            square.style.margin = '5px';
            square.style.display = 'inline-block';
            squareA.appendChild(square);
        }
    </script>
</body>
</html>
