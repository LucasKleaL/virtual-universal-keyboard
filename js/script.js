$(document).ready(function(){

    var stringVisor = ""

    //variaveis relacionadas aos botões que modificam os caracteres
    var caps = "off"
    var shift = "off"
    var alt = "off"
    var ctrl = "off"

    //variaveis relacionadas a lingua que o teclado irá operar
    var english = "on"
    var russian = "off"
    var arabic = "off"
    var portuguese = "off"
    var chinese = "off"


    //funções de cada botão

    $("#buttonBackSpace").click(function(){ //botão para apagar (Back Space)

        var str = stringVisor.split('') //divide a cada caractere a string formada no visor (textarea). A variável str recebe uma lista em cada posição é um caractere

        var tamanho = stringVisor.length; //uma variavel recebe o tamanho da string no visor
        console.log(tamanho)
        str.splice(tamanho-1, 1) //o metodo splice remove a última posição da string
        str = str.join('') //após o ultimo valor da string ser removido, o método join junta a string com os caracteres novamente, formando uma só palavra
        console.log(str)
        stringVisor = str //a string do visor recebe o valor da str
        $("#textVisor").val(stringVisor)

    });

    $("#buttonSpace").click(function(){ //botão para dar espaço

        stringVisor += " "
        $("#textVisor").val(stringVisor)
    });

    if(english === "on"){

        $("#button01").click(function(){

            stringVisor += '‘'
            $("#textVisor").val(stringVisor);
        });
    
        $("#button02").click(function(){

            stringVisor += '1'
            $("#textVisor").val(stringVisor);
        });

        $("#button03").click(function(){

            stringVisor += '2'
            $("#textVisor").val(stringVisor);
        })

        $("#button04").click(function(){

            stringVisor += '3'
            $("#textVisor").val(stringVisor);
        });

        $("#button05").click(function(){

            stringVisor += '4'
            $("#textVisor").val(stringVisor);
        });

        $("#button06").click(function(){

            stringVisor += '5'
            $("#textVisor").val(stringVisor);
        });

        $("#button07").click(function(){

            stringVisor += '6'
            $("#textVisor").val(stringVisor);
        });

        $("#button08").click(function(){

            stringVisor += '7'
            $("#textVisor").val(stringVisor);
        });

        $("#button09").click(function(){

            stringVisor += '8'
            $("#textVisor").val(stringVisor);
        });

        $("#button10").click(function(){

            stringVisor += '9'
            $("#textVisor").val(stringVisor);
        });

        $("#button11").click(function(){

            stringVisor += '0'
            $("#textVisor").val(stringVisor);
        });

        $("#button12").click(function(){

            stringVisor += '-'
            $("#textVisor").val(stringVisor);
        });

        $("#button13").click(function(){

            stringVisor += '='
            $("#textVisor").val(stringVisor);
        });

        $("#button14").click(function(){

            stringVisor += 'q'
            $("#textVisor").val(stringVisor);
        });

        $("#button15").click(function(){

            stringVisor += 'w'
            $("#textVisor").val(stringVisor);
        });

        $("#button16").click(function(){

            stringVisor += 'e'
            $("#textVisor").val(stringVisor);
        });


        $("#button17").click(function(){

            stringVisor += 'r'
            $("#textVisor").val(stringVisor);
        });


        $("#button18").click(function(){

            stringVisor += 't'
            $("#textVisor").val(stringVisor);
        });

        $("#button19").click(function(){

            stringVisor += 'y'
            $("#textVisor").val(stringVisor);
        });

        $("#button20").click(function(){

            stringVisor += 'u'
            $("#textVisor").val(stringVisor);
        });

        $("#button21").click(function(){

            stringVisor += 'i'
            $("#textVisor").val(stringVisor);
        });

        $("#button22").click(function(){

            stringVisor += 'o'
            $("#textVisor").val(stringVisor);
        });

        $("#button23").click(function(){

            stringVisor += 'p'
            $("#textVisor").val(stringVisor);
        });

        $("#button24").click(function(){

            stringVisor += '['
            $("#textVisor").val(stringVisor);
        });

        $("#button25").click(function(){

            stringVisor += ']'
            $("#textVisor").val(stringVisor);
        });

        $("#button26").click(function(){

            stringVisor += "|"
            $("#textVisor").val(stringVisor);
        });

        $("#button27").click(function(){

            stringVisor += 'a'
            $("#textVisor").val(stringVisor);
        });

        $("#button28").click(function(){

            stringVisor += 's'
            $("#textVisor").val(stringVisor);
        });

        $("#button29").click(function(){

            stringVisor += 'd'
            $("#textVisor").val(stringVisor);
        });

        $("#button30").click(function(){

            stringVisor += 'f'
            $("#textVisor").val(stringVisor);
        });

        $("#button31").click(function(){

            stringVisor += 'g'
            $("#textVisor").val(stringVisor);
        });

        $("#button32").click(function(){

            stringVisor += 'h'
            $("#textVisor").val(stringVisor);
        });

        $("#button33").click(function(){

            stringVisor += 'j'
            $("#textVisor").val(stringVisor);
        });

        $("#button34").click(function(){

            stringVisor += 'k'
            $("#textVisor").val(stringVisor);
        });

        $("#button35").click(function(){

            stringVisor += 'l'
            $("#textVisor").val(stringVisor);
        });

        $("#button36").click(function(){

            stringVisor += ';'
            $("#textVisor").val(stringVisor);
        });

        $("#button37").click(function(){

            stringVisor += "''"
            $("#textVisor").val(stringVisor);
        });

        $("#button38").click(function(){

            stringVisor += 'z'
            $("#textVisor").val(stringVisor);
        });

        $("#button39").click(function(){

            stringVisor += 'x'
            $("#textVisor").val(stringVisor);
        });

        $("#button40").click(function(){

            stringVisor += 'c'
            $("#textVisor").val(stringVisor);
        });

        $("#button41").click(function(){

            stringVisor += 'v'
            $("#textVisor").val(stringVisor);
        });

        $("#button42").click(function(){

            stringVisor += 'b'
            $("#textVisor").val(stringVisor);
        });

        $("#button43").click(function(){

            stringVisor += 'n'
            $("#textVisor").val(stringVisor);
        });

        $("#button44").click(function(){

            stringVisor += 'm'
            $("#textVisor").val(stringVisor);
        });

        $("#button45").click(function(){

            stringVisor += ','
            $("#textVisor").val(stringVisor);
        });

        $("#button46").click(function(){

            stringVisor += '.'
            $("#textVisor").val(stringVisor);
        });

        $("#button47").click(function(){

            stringVisor += '/'
            $("#textVisor").val(stringVisor);
        });





    }




    
    
});