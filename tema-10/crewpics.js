let crewPics = {

    data: {
        crewPhotos: []
    },

    init: function(){
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function(response){
                crewPics.data.crewPhotos = response.data;
                crewPics.imageDownload();
            })
            .catch(function(error){
                console.log(error);
            })
    },

    imageDownload: function() {

        let bigImageDiv = document.querySelector('.crewPics');

        for(let i = 0; i < crewPics.data.crewPhotos.length; i++){
                
            let eachImageDiv = document.createElement('div');
            eachImageDiv.setAttribute('id', 'imageDiv');
                
            let image = document.createElement('img');
            let memberImage = crewPics.data.crewPhotos[i].image;
            let divName = document.createElement('div');
            divName.innerHTML = crewPics.data.crewPhotos[i].name;

            image.setAttribute('src', memberImage);
            image.setAttribute('alt', divName);
            image.setAttribute('id', memberImage);
            image.style.breakAfter="always";
           
            image.style.height = '250px';
            image.style.width = '250px';
            image.style.objectFit = 'scale-down';

            divName.style.alignItems = 'center';
            divName.style.color = 'white';
            divName.style.alignItems = 'center';

            bigImageDiv.appendChild(eachImageDiv);
            eachImageDiv.appendChild(image);
            eachImageDiv.appendChild(divName);
        }
    }
}

crewPics.init();