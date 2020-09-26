$(document).ready(function(){

    var stringVisor = ""

    //variaveis relacionadas aos botões que modificam os caracteres
    var caps = "off"
    var shift = "off"
    var alt = "off"
    var ctrl = "off"

    //variaveis de acentos
    var acentoTil = "off"
    var acentoGrave = "off"

    //variaveis relacionadas a lingua que o teclado irá operar
    var english = "on"
    var russian = "off"
    var arabic = "off"
    var portuguese = "off"
    var chinese = "off"


    //funções de cada botão

    $("#buttonBackSpace").click(function(){ //botão para apagar (Backspace)

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

    $("#buttonLeftShift").click(function(){ //botão shift esquerdo

        if (shift === "on"){ //verifica se o shift está ativo
            shift = "off" //se estiver, desativa
        }
        else if (shift === "off") //se estiver desativado, ativa
            shift = "on"

        if (shift === "on"){ //verificação para mudar a cor do botão, quando ativado
            $("#buttonRightShift").removeClass("button-keyboard-three-spaces")
            $("#buttonLeftShift").removeClass("button-keyboard-two-spaces")
            $("#buttonRightShift").addClass("button-right-shift-active")
            $("#buttonLeftShift").addClass("button-left-shift-active")
        }
        else if (shift === "off"){ //verificação para mudar a cor do botão, quando desativado
            $("#buttonRightShift").removeClass("button-right-shift-active")
            $("#buttonLeftShift").removeClass("button-left-shift-active")
            $("#buttonRightShift").addClass("button-keyboard-three-spaces")
            $("#buttonLeftShift").addClass("button-keyboard-two-spaces")
        }
    });

    $("#buttonRightShift").click(function(){ //botão shift direito

        if (shift === "on"){
            shift = "off"
        }
        else if (shift === "off"){
            shift = "on"
        }

        if (shift === "on"){
            $("#buttonRightShift").removeClass("button-keyboard-three-spaces")
            $("#buttonLeftShift").removeClass("button-keyboard-two-spaces")
            $("#buttonRightShift").addClass("button-right-shift-active")
            $("#buttonLeftShift").addClass("button-left-shift-active")
        }
        else if (shift === "off"){
            $("#buttonRightShift").removeClass("button-right-shift-active")
            $("#buttonLeftShift").removeClass("button-left-shift-active")
            $("#buttonRightShift").addClass("button-keyboard-three-spaces")
            $("#buttonLeftShift").addClass("button-keyboard-two-spaces")
        }
    });

    $("#buttonLeftAlt").click(function(){ //botão alt esquerdo

        alt = "on"

    });

    $("#buttonRightAlt").click(function(){ //botão alt direito

        alt = "on"

    });

    $("#buttonLeftCtrl").click(function(){ //botão ctrl esquerdo

        ctrl = "on"

    });

    $("#buttonRightCtrl").click(function(){ //botão ctrl direito

        ctrl = "on"

    });

    $("#buttonCaps").click(function(){ //botão caps look

        if (caps === "off"){
            caps = "on"
        }
        else if (caps === "on"){
            caps = "off"
        }

        if (caps === "on"){
            $("#buttonCaps").removeClass("button-keyboard-two-spaces")
            $("#buttonCaps").addClass("button-caps-active")
        }
        else if (caps === "off"){
            $("#buttonCaps").removeClass("button-caps-active")
            $("#buttonCaps").addClass("button-keyboard-two-spaces")
        }

    });

    if(english === "on"){ //verifica se o modo ingles está ativo

        $("#button01").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o acento ~
                stringVisor += '~'
                $("#textVisor").val(stringVisor);
            }
            else if(shift === "off"){ //verifica se o shift está desligado, se estiver muda para o acento `
                stringVisor += '`'
                $("#textVisor").val(stringVisor); 
            }
        
        });
    
        $("#button02").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo !
                stringVisor += '!'
                $("#textVisor").val(stringVisor);
            }
            else if (shift ==="off") {
                stringVisor += '1'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button03").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo @
                stringVisor += '@'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '2'
                $("#textVisor").val(stringVisor);
            }
        })

        $("#button04").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo #
                stringVisor += '#'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '3'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button05").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo $
                stringVisor += '$'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '4'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button06").click(function(){


            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo %
                stringVisor += '%'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '5'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button07").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo ^
                stringVisor += '^'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '6'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button08").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo &
                stringVisor += '&'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '7'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button09").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo &
                stringVisor += '*'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '8'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button10").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo *
                stringVisor += '('
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '9'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button11").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo (
                stringVisor += ')'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '0'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button12").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo )
                stringVisor += '_'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '-'
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button13").click(function(){

            if (shift === "on"){ //verifica se o shift está ativo, se estiver muda para o simbolo _
                stringVisor += '+'
                $("#textVisor").val(stringVisor);
            }
            else if (shift === "off"){

                stringVisor += '='
                $("#textVisor").val(stringVisor);
            }
        });

        $("#button14").click(function(){

            if (caps === "on"){
                stringVisor += 'Q'
            }
            else if (caps === "off"){
                stringVisor += 'q'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button15").click(function(){

            if (caps === "on"){
                stringVisor += 'W'
            }
            else if (caps === "off"){
                stringVisor += 'w'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button16").click(function(){

            if (caps === "on"){
                stringVisor += 'E'
            }
            else if (caps === "off"){
                stringVisor += 'e'
            }
            $("#textVisor").val(stringVisor);
        });


        $("#button17").click(function(){

            if (caps === "on"){
                stringVisor += 'R'
            }
            else if (caps === "off"){
                stringVisor += 'r'
            }
            $("#textVisor").val(stringVisor);
        });


        $("#button18").click(function(){

            if (caps === "on"){
                stringVisor += 'T'
            }
            else if (caps === "off"){
                stringVisor += 't'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button19").click(function(){

            if (caps === "on"){
                stringVisor += 'Y'
            }
            else if (caps === "off"){
                stringVisor += 'y'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button20").click(function(){

            if (caps === "on"){
                stringVisor += 'U'
            }
            else if (caps === "off"){
                stringVisor += 'u'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button21").click(function(){

            if (caps === "on"){
                stringVisor += 'I'
            }
            else if (caps === "off"){
                stringVisor += 'i'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button22").click(function(){

            if (caps === "on"){
                stringVisor += 'O'
            }
            else if (caps === "off"){
                stringVisor += 'o'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button23").click(function(){

            if (caps === "on"){
                stringVisor += 'P'
            }
            else if (caps === "off"){
                stringVisor += 'p'
            }
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

            if (caps === "on"){
                stringVisor += 'A'
            }
            else if (caps === "off"){
                stringVisor += 'a'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button28").click(function(){

            if (caps === "on"){
                stringVisor += 'S'
            }
            else if (caps === "off"){
                stringVisor += 's'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button29").click(function(){

            if (caps === "on"){
                stringVisor += 'D'
            }
            else if (caps === "off"){
                stringVisor += 'd'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button30").click(function(){

            if (caps === "on"){
                stringVisor += 'F'
            }
            else if (caps === "off"){
                stringVisor += 'f'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button31").click(function(){

            if (caps === "on"){
                stringVisor += 'G'
            }
            else if (caps === "off"){
                stringVisor += 'g'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button32").click(function(){

            if (caps === "on"){
                stringVisor += 'H'
            }
            else if (caps === "off"){
                stringVisor += 'h'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button33").click(function(){

            if (caps === "on"){
                stringVisor += 'J'
            }
            else if (caps === "off"){
                stringVisor += 'j'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button34").click(function(){

            if (caps === "on"){
                stringVisor += 'K'
            }
            else if (caps === "off"){
                stringVisor += 'k'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button35").click(function(){

            if (caps === "on"){
                stringVisor += 'L'
            }
            else if (caps === "off"){
                stringVisor += 'l'
            }
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

            if (caps === "on"){
                stringVisor += 'Z'
            }
            else if (caps === "off"){
                stringVisor += 'z'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button39").click(function(){

            if (caps === "on"){
                stringVisor += 'X'
            }
            else if (caps === "off"){
                stringVisor += 'x'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button40").click(function(){

            if (caps === "on"){
                stringVisor += 'C'
            }
            else if (caps === "off"){
                stringVisor += 'c'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button41").click(function(){

            if (caps === "on"){
                stringVisor += 'V'
            }
            else if (caps === "off"){
                stringVisor += 'v'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button42").click(function(){

            if (caps === "on"){
                stringVisor += 'V'
            }
            else if (caps === "off"){
                stringVisor += 'b'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button43").click(function(){

            if (caps === "on"){
                stringVisor += 'N'
            }
            else if (caps === "off"){
                stringVisor += 'n'
            }
            $("#textVisor").val(stringVisor);
        });

        $("#button44").click(function(){

            if (caps === "on"){
                stringVisor += 'M'
            }
            else if (caps === "off"){
                stringVisor += 'm'
            }
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