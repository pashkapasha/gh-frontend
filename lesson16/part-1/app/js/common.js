$(document).ready(function(){
    $(".change").click(function(){
        $("p").addClass("text-change")

    })
    $(".reset").click(function(){
        $("p").removeClass("text-change")
    })

    $(".next-prev").click(function(){
        $('p').toggleClass(" text-change-3"),
        function(){
            $('p').toggleClass("text-change-2");
        }
        }

    );
    $("#elem").click(function(){
        alert(elem.getAttribute('About') );
    })
    $("#elem2").click(function(){
        elem.setAttribute('Test', 'This is an attribute that was created with JS'); // (2) атрибут Test установлен
        alert( elem.getAttribute('Test') );
    })

    $('.alert-button').click(function(){
        alert('THE BIG BROTHER WATCHING YOU!')
    })

    $('.button-trig').bind('click', function(){
        alert('Trigger click is on the kick')
    });
    $('.button-trig').trigger('click');

    $(".alert-button").clone()
        .addClass("clone-button")
        .text("It's clone of Allert button")
        .appendTo(".container");
    $(".clone-button").click(function()
        {
            alert('HE IS STEEL WATCHINNG YOU! BEWARE!!');
        }
    )
    $('.closest-style').closest( "button" );
    $(".all-button").click(function(){
        $( "button" ).each(function( index ) {
            console.log( index + ": " + $( this ).text() );
        });

    });
    $(".find-button").click(function(){
        $("ul").find("p").css('color','blue')

    });

    $(".hiden-button").click(function(){
        $(".fade-out").hide();
    });
    $(".unhiden-button").click(function(){
        $(".fade-out").show();
    });

    $(".fade-button").click(function(){
        $('.fade-out').fadeOut('slow', function() {
        });
    });


    $(".fade-button-in").click(function(){
        $('.fade-out').fadeIn('slow', function() {
        });
    });

    $(".data-button").click(function(){
        $("button").data({"height":"45px","width": 'auto', 'Nearlest button up': 'Press to FadeIn hidden text', 'Nearlest button down': 'Cloned button'
        });
    });

    $( "input[type='text']" ).change(function() {
    });
    $( "#choose" ).change(function() {

        alert( "You choose BLACK, GREY or GREEN" );

    });
    $( ".html" ).change(function() {

        alert( "You choose HTML" );

    });
    $( ".php" ).change(function() {

        alert( "You choose PHP" );

    });
    $( ".js" ).change(function() {

        alert( "You choose JS" );

    });
    $( ".age6" ).change(function() {

        alert( "Hi little, give me 5!" );

    });
    $( ".age18" ).change(function() {

        alert( "What are you doing here??? Go and learn more!!" );

    });
    $( ".age40" ).change(function() {

        alert( "THE BIG BROTHER WATCHING YOU! WELL COME!!!!" );

    });

    i = 0;
    $("input").keypress(function(){
        $("span").text(i += 1);
    });

    $("input").keydown(function(){
        $("input").css("background-color", "yellow");
    });
    $("input").keyup(function(){
        $("input").css("color", "pink");
    });

















});



