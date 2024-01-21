$(document).ready(function(){
    function generateCard(){   
        var randomNumber = Math.floor(Math.random() * 88) + 1;
            $.get('https://akabab.github.io/starwars-api/api/id/' +randomNumber+'.json', function(data){
                var characterName = data['name']
                var characterImage = data['image']
                var characterSpecies = data['species']
                var characterHomeworld = data['homeworld']
                var characterId = data['id']
                var characterAffiliation = data['affiliations'][0]
                var characterMasters = data['masters']
                var characterApprentices = data['apprentices']

                document.getElementById('name').innerHTML = characterName;
                document.getElementById('photo').src = characterImage;
                document.getElementsByClassName('beige')[0].innerHTML = characterHomeworld;
                document.getElementsByClassName('under_name')[0].innerHTML = characterSpecies;
                document.getElementsByClassName('num')[0].innerHTML = characterId;
                document.getElementsByClassName('position')[0].innerHTML = characterAffiliation;
                document.getElementById('masters').innerHTML = characterMasters;
                document.getElementById('apprentices').innerHTML = characterApprentices;

            })
    }
        generateCard();
    $('#generate_card_btn').on('click', function(){
        generateCard();
    })
})