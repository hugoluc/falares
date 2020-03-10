
var options = {

    videos  : [      
        {
            videoUrl : "videos/0/video.mp4",
            title : "1111111111111111111111111",
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
            title : "2222222222222222222222222222222222222",
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
            title : "333333333333333333333333333333333333333333333333",
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
    this.overlays = []
    this.selectedVideoId = 0;
    this.moved = false
    this.menuOpened = true

    this.createDOMElements()
    this.changeVideo(0)
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
    document.body.appendChild(this.colapseContainer)
    
    this.colapseContainer.addEventListener("touchend", _event =>{

        if(this.menuOpened){
            this.closeMenu()
        }else{
            this.openMenu()
        }
        this.menuOpened = !this.menuOpened
    })

    for (let i = 0; i < this.data.videos.length; i++) {
    
        //Create Videos
        var videosContaner = document.createElement('div')
        videosContaner.className = "video-" + i 
        this.videoContainer.appendChild(videosContaner)
        this.videosContaners.push(videosContaner)
        
        //overlay
        var overlay = document.createElement('div')
        overlay.style.display = "none"
        overlay.style.zIndex = "1"
        overlay.className = "overlay"
        overlay.addEventListener('webkitTransitionEnd', (e) => {    
            this.toggleOverlayVisibility(e.target)
        })


        this.overlays.push(overlay)
        videosContaner.appendChild(overlay)

        var title = document.createElement('div')
        title.className = "overlayTitle"
        title.innerHTML = this.data.videos[i].title
        overlay.appendChild(title)

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
        container.addEventListener("touchend", _event =>{    
            if(i != this.selectedVideoId){
                this.changeVideo(i);
            }
            this.moved = false            
        })
        container.addEventListener("touchmove", ()=>{
            this.moved = true
        })
        

        var indicator = document.createElement('div')
        indicator.className = "indicatorBg"
        this.indicators.push(indicator)
        container.appendChild(indicator)

        var indicatorOff = document.createElement('div')
        indicatorOff.className = "indicator"
        indicator.appendChild(indicatorOff)

        //preview Title
        var previewTitle = document.createElement('div')
        previewTitle.className = "previewTitle"
        previewTitle.innerHTML = this.data.videos[i].title
        container.appendChild(previewTitle)

        this.createVideos(i,videosContaner,container)
             
    }



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
            
            if(_player.id != 0 ) _player.toggleVisibility()
            _player.onloaded = () =>{}

        }

    }
    
    getPixels(_player)

}

//===============================================================
//===============================================================

falares.prototype.openMenu = function(){

    this.videos[this.selectedVideoId].controls.closeControls()
    this.menuContainer.classList.toggle("displayNone") 

    this.overlays[this.selectedVideoId].classList.toggle("displayNone")    
    setTimeout(() => { 
        
        this.previewList.classList.remove("off")
        this.videoContainer.style.zIndex = 1
        this.overlays[this.selectedVideoId].classList.remove("off") 

    },1)


}

falares.prototype.closeMenu = function(){

    setTimeout(() => { 
        this.previewList.classList.add("off")  
        this.videoContainer.style.zIndex = 1
        this.overlays[this.selectedVideoId].classList.add("off")
    },1)

}


falares.prototype.toggleOverlayVisibility = function(_element){

    console.log("------------------");
    console.log(this.menuOpened);
    

    if(!this.menuOpened){
       _element.classList.toggle("displayNone")  
       this.menuContainer.classList.toggle("displayNone")  
    }

}

falares.prototype.enterFullScreen = function(){

    this.closeMenu()
    //Hide overlay

}

falares.prototype.exitFullScreen = function(){


    this.openMenu()
    //show overlay


}

falares.prototype.changeVideo = function(_index){

    if( this.moved) return

    console.log("index: " + _index, "selected: " + this.selectedVideoId);
    this.videos[this.selectedVideoId].controls.pause()
    this.videos[this.selectedVideoId].controls.closeControls()
    
    for (let i = 0; i < this.indicators.length; i++) {
        if( i != _index ){
            this.indicators[i].children[0].className = "indicator";
        }
    }
    
    if (_index > this.selectedVideoId){
        this.indicators[this.selectedVideoId].children[0].classList.add("bottom")
        this.indicators[_index].children[0].classList.remove("bottom")
    }else{
        this.indicators[this.selectedVideoId].children[0].classList.remove("bottom")
        this.indicators[_index].children[0].classList.add("bottom")
    }
    
    this.indicators[_index].children[0].classList.add("on")    
    
    this.videos[this.selectedVideoId].toggleVisibility()
    this.overlays[this.selectedVideoId].style.display = "none"
    
    this.videos[_index].toggleVisibility()
    this.overlays[_index].style.display = "block"
    this.selectedVideoId = _index


    
    //set position of scroll

}

//===============================================================
//===============================================================


for ( var i = 0; i < 1; i++){

    var v = new falares(options)

}

window.addEventListener("touchstart", (en) =>{
    console.log(en.target);
    
})