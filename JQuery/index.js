// $('h1').css('color', 'red')
// $('h1').css('font-size', '3rem')
// $('h1').css('font-style', 'italic')
// $('h1').css({"color":"blue",'font-size':'4rem', 'font-style':'italic'}) #json file


// document.querySelector('h1').classList.add('style1')
// document.querySelector('h1').classList.remove('style1')
// $('h1').addClass('style1')
// $('h1').addClass('style2')
// $('h1').addClass('style1 style2')
// $('h1').removeClass('style1')

// document.querySelector('button').addEventListener('click', function(){
//     document.querySelector('h1').innerHTML = "you have clicked the button"
// })
// $('button').mouseover(function(){})
// $('button').mouseout(function(){})
// $('button').click(function(){
//     $('h1').text('you have clicked the button')
//     $('h1').toggleClass('style1')
// })

// var totalButton = document.querySelectorAll('.myButton').length;
// for(i=0; i<totalButton; i++){
//     document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
//         var text = this.innerHTML;
//         document.querySelector('h1').innerHTML=text + "is clicked";
//     });
// } 
// $('.myButton').click(function(){
//     var text = this.innerHTML;
//     $('h1').text(text + 'is clicked');
// })
// $('.myButton').on('click',function(){
//     var text = this.innerHTML;
//     $('h1').text(text + 'is clicked');
// })

// // lecture 5
// $('#loginButton').click(function(){
//     var password1 = $('#pass1').val();
//     var password2 = $('#pass2').val();

// // lecture 6
//     if(password1!='' && password2!=''){
//         if(password1 == password2){
//             alert('successfully login');
//         }else{
//             alert('password mismatch')
//         }
//     }else{
//         alert('please enter password');
//     }
// })

// // lecture 7 animation
// $('#btn').click(function(){
//     // $("#div1").hide();
//     // $("#div1").show(2000);
//     // $('#div1').hide(2000).show(2000);
//     // $('#div1').toggle(2000);

//     // $('#div1').fadeOut(2000);
//     // $('#div1').fadeIn(2000);
//     // $('#div1').fadeOut(2000).fadeIn(2000);
//     // $("#div1").fadeToggle(2000);
//     // $("#div1").fadeTo(2000, .7); //opacity level

//     // $("#div1").slideUp(2000)
//     // $("#div1").slideDown(2000)
//     // $('#div1').slideUp(2000).slideDown(2000);
//     // $("#div1").slideToggle(2000)

//     //lecture 8
//     // $("#div1").animate({opacity:'0.5', height:'400px', width:"900px"}, 2000);
//     $("#div1").animate({
//         opacity:'.7',
//         width:"900px",
//         height:'400px',
//         // margin:'30px'
//         marginLeft: '30px' //margin-left doesnt work in json file, its marginLeft
//     },3000);

// })



 








