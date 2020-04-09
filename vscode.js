alert("hello");



function frebat1(button) {

    let name = prompt("как тебя зовут ?");

    alert(`Ну привет ${name} ! `);


}






function frebat2(button) {



    let age = prompt(`сколько тебе лет ${name} ?`);



    if (age > 13) {
        alert(` ухты какие мы большие, тебе уже  ${age} ! `)
    }
    else {
        alert(`тебе всего ${age}. Не волнуйя, ещё подростёшь`);
    }


    if (age > 60) {
        alert(`я смотрю вам  ${age}, а вы до сих-пор на пенсию не собираетесь `);
    }


}
















function frebat3(button) {

    var primerV = prompt("решишь пример ?");
    var otvet = ["да", "ок", "хорошо", "давай"];
    var otvetFalse = ["нет", "не могу", "не",];


    for (var u = 0; u < otvet.length; u++) {



        if (primerV == otvet[u]) {

            var slopre = prompt("какой сложности хотите пример? легко средне или сложно");

            if (slopre == "легко") {
                var pLegko = prompt("14+23=?");

                if (pLegko == 37) {
                    alert("молодец ответ 37!");
                } else {
                    alert(`это не ${pLegko}. не волнуйся все ошибаються, даже мой создатель`)
                }

            }

        }


        if (slopre == "средне") {

            var pSredne = prompt("87+45=?");
            if (pLegko == 132) {
                alert("молодец ответ 132!");
            } else {
                alert(`это вовсе не ${pSredne}. Давай заново!`)
            }



        }




        if (slopre == "сложно") {

            var pSlono = prompt("487+1288=?");
            if (pSlono == 1775) {
                alert("Да ты просто ходячий калькулятор! Ответ действительно 1775! Даже как-то подозрительно...");
            } else {
                alert(`это вовсе не ${pSlono}. Кто-то алгебру прогуливал`);



            }



        }





    }











    for (var yut = 0; yut < otvetFalse.length; yut++) {


        if (primerV == otvetFalse[yut]) {
            alert("luser");

        }

    }

}














function frebat4(button) {



    var varofAnim = ["крыса", "крокодил", "змея", "паук", "ящерица", "лев", "тигр", "скорпион", "муравьи"];
    var varofOnim = ["собака", "кошка", "щенок", "кот", "хомяк", "кролик", "тигр", "котёнок", "попугай", "черепаха", "черепашка", "рыбка",];


    let animal = prompt("у тебя есть питомец ?  да или нет ?");

    if (animal == "да") {
        var anim = prompt("и кто же это ?")


    }

    if (animal == "нет") {
        var animas = prompt("жаль. а кто твой любимый питомец ?")



        for (var auty2 = 0; auty2 < varofOnim.length; auty2++) {





            //variant-2 true
            if (animas == varofOnim[auty2]) {
                alert(`${animas}. класно! обожаю их!!! `);
            }

        }






        for (var auty1 = 0; auty1 < varofAnim.length; auty1++) {

            //variant-1 false
            if (animas == varofAnim[auty1]) {
                alert(`${animas} oго! вот это жуть !!!`);
            }

        }












    }



    for (var auty1 = 0; auty1 < varofAnim.length; auty1++) {

        //variant-1 false
        if (anim == varofAnim[auty1]) {
            alert('!!! серьёзно? да ты просто бестрашный !!! Жууууть !!!');
        }

    }







    for (var auty2 = 0; auty2 < varofOnim.length; auty2++) {





        //variant-2 true
        if (anim == varofOnim[auty2]) {
            alert("круто !");
        }

    }



}







function frebat5(button) {


    var podarok = prompt("что подарили тебе на день рождения ?");
    alert(`${podarok} это отлиный подарок !`);



}


















