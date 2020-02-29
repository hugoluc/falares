
var options = {

    videos  : [      
        {
            videoUrl : "videos/0/video.mp4",
            title : "A língua e as variações geográficas",
            subtitles : [
                { 
                    type : "libras",
                    url : 'libras.webm' ,
                    title : "Libras",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/es.vtt' ,
                    title : "Ingles",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/de.vtt' ,
                    title : "Espanhol",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/en.vtt' ,
                    title : 'Portugês',
                    default : true
                }
            ]
        },
        {
            videoUrl : "videos/0/video.mp4",
            title : "A língua e as variações geográficas",
            subtitles : [
                { 
                    type : "libras",
                    url : 'libras.webm' ,
                    title : "Libras",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/es.vtt' ,
                    title : "Ingles",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/de.vtt' ,
                    title : "Espanhol",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/en.vtt' ,
                    title : 'Portugês',
                    default : true
                }
            ]
        },        
        {
            videoUrl : "videos/0/video.mp4",
            title : "A língua e as variações geográficas",
            subtitles : [
                { 
                    type : "libras",
                    url : 'libras.webm' ,
                    title : "Libras",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/es.vtt' ,
                    title : "Ingles",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/de.vtt' ,
                    title : "Espanhol",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/en.vtt' ,
                    title : 'Portugês',
                    default : true
                }
            ]
        },        
        {
            videoUrl : "videos/0/video.mp4",
            title : "A língua e as variações geográficas",
            subtitles : [
                { 
                    type : "libras",
                    url : 'libras.webm' ,
                    title : "Libras",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/es.vtt' ,
                    title : "Ingles",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/de.vtt' ,
                    title : "Espanhol",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/en.vtt' ,
                    title : 'Portugês',
                    default : true
                }
            ]
        },        
        {
            videoUrl : "videos/0/video.mp4",
            title : "A língua e as variações geográficas",
            subtitles : [
                { 
                    type : "libras",
                    url : 'libras.webm' ,
                    title : "Libras",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/es.vtt' ,
                    title : "Ingles",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/de.vtt' ,
                    title : "Espanhol",
                    default : false
                },
                { 
                    type : "text",
                    url : 'videos/' + index + '/subs/en.vtt' ,
                    title : 'Portugês',
                    default : true
                }
            ]
        }
    
    ]

}


function falares(_data){

    this.data = _data
    this.videos = []
    this.videosContaners = []
    this.indicators = []
    
    this.createDOMElements()

}

//===============================================================
//===============================================================

falares.prototype.createDOMElements = function(){

    this.videoContainer = document.createElement('div')
    this.videoContainer.className = "videosContainer"
    document.body.appendChild(this.videoContainer)

    //---------------
    // preview menu
    //---------------
    this.menuContainer = document.createElement('div')
    this.menuContainer.className = "menuContainer"
    document.body.appendChild(this.menuContainer)

    this.previewList = document.createElement('div')
    this.previewList.className = "previewList"
    this.menuContainer.appendChild(this.previewList)

    this.colapseContainer = document.createElement('div')
    this.colapseContainer.className = "colapseContainer"
    this.menuContainer.appendChild(this.colapseContainer)
    

    //Overlay
    for (let i = 0; i < this.data.videos.length; i++) {
    
        //Create Videos
        var videosContaner = document.createElement('div')
        videosContaner.className = "video-" + i 
        this.videoContainer.appendChild(videosContaner)
        this.videosContaners.push(videosContaner)
        
        //overlay
        this.overlay = document.createElement('div')
        this.overlay.className = "overlay"
        videosContaner.appendChild(this.overlay)

        //-----------------------------------------
        //-----------------------------------------
        //-----------------------------------------

        var scrollPadding = 50
        var container = document.createElement('div')
        container.className = "previewComtanier"
        container.id = i
        if(i == 0 ) container.style.marginTop = scrollPadding + "px"
        if(i == this.data.videos.length -1 ) container.style.marginBottom = scrollPadding + "px"
        this.previewList.appendChild(container)
        container.addEventListener("touchstart", ()=>{
            console.log(i);            
        })

        var indicator = document.createElement('div')
        indicator.className = "indicator"
        this.indicators.push(indicator)
        container.appendChild(indicator)

        this.createVideos(i,videosContaner,container)


        
    }


    //fullScreen_btn

    // 
    // IndicatorsBg

    // SelectedIndicator

    // VideopreviewList
    // VideoPreviews
        //Titles
        //Images

    //colapseContainer
    //ColapseIcon


}


falares.prototype.createVideos = function(_i, _videosContaner, _imageContainer){
        
    var player = new simplePlayer(
        this.data.videos[_i].videoUrl,
        this.data.videos[_i].subtitles,
        this.data.videos[_i].title,    
        _videosContaner
    );

    player.id = _i
    this.videos.push(player)

    player.onloaded = () => { this.getVideoImage(player,_imageContainer,1) }
    
}


falares.prototype.getVideoImage = function(_player,_imageContainer,scale){

    scale = scale || 1;

    const canvas = document.createElement("canvas");
    canvas.width = _player.video.clientWidth * scale;
    canvas.height = _player.video.clientHeight * scale;
    var context = canvas.getContext('2d')
    
    var getPixels = (__player) => {
        
        context.drawImage(_player.video, 0, 0, canvas.width, canvas.height);
        var pixels = context.getImageData(0,0,100,100).data

        if(pixels[0]==0 && pixels[0]==0){
            setTimeout(() => { getPixels()} , 1000)
        }else{
            const image = new Image()
            image.src = canvas.toDataURL()
            image.className = "imagePreview"
            image.id = _player.id
            _imageContainer.appendChild(image)
        }

    }
    
    getPixels(_player)

}

//===============================================================
//===============================================================

falares.prototype.openMenu = function(){

    // Change icon directios
    // Transform VideoPreviewContainer
    // Transform IndicatorContainer

}

falares.prototype.closeMenu = function(){

    // change z-index of video to positive

    //close submenu if open
    //close menu if open

    // Change icon directios
    // Transform VideoPreviewContainer
    // Transform IndicatorContainer

}

falares.prototype.enterFullScreen = function(){

    this.closeMenu()
    //Hide overlay

}

falares.prototype.exitFullScreen = function(){


    this.openMenu()
    //show overlay


}

falares.prototype.changeVideo = function(){

    //set position of scroll
    //animate indicator
    //Change video
        // last = display none
        // current= display true
        //play video

}

falares.prototype.changeVideo = function(){

    //set position of scroll
    //animate indicator
    //Change video
        // last = display none
        // current= display true

}


//===============================================================
//===============================================================


for ( var i = 0; i < 1; i++){

    var v = new falares(options)

}

