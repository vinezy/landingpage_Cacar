"use strict";

class App{
  constructor(){
    this.musicApp = [
      {
        "MusicId": 1,
        "Mneym": "Selena Gomez",
        "Mdesc": "  ",
        "mPic": "img/selena.jpg",
      
      },
      {
        "MusicId": 2,
        "Mneym": "One Direction",
        "Mdesc": "",
        "mPic": "img/oned.jpg",
       
      },
      {
        "MusicId": 3,
        "Mneym": "Charlie Puth",
        "Mdesc": " ",
         
        "mPic": "img/charlie.jpg",
      },

       {
        "MusicId": 4,
        "Mneym": "Blink182",
        "Mdesc": " ",
        "mPic": "img/b182.jpg",
      },
       {
        "MusicId": 5,
        "Mneym": "Linkin Park",
        "Mdesc": "",
        "mPic": "img/linkin.jpg",
      },
    
    ];


  
  }



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createDesign(){
    let MusicId = document.getElementById('MusicnAme');
    let Mneym = document.getElementById('mUsic');
    let Mdesc = document.getElementById('mUSICdesc');
    let mPic = document.getElementById('musicPic');
  

    let musicApp = {      
      "MusicId": MusicId.value,
      "Mneym": Mneym.value,
      "Mdesc": Mdesc.value,
      "mPic": mPic.value,
    
     
    };


    this.musicApp.push(musicApp);

    
    MusicId.value = Mneym.value = Mdesc.value = mPic.value = ''; 
  } 

  


}

class Component extends App{
  constructor(){
    
    super();
  }

  MusicDesign(){
    let html = `
     
<nav>
    <div class="nav-wrapper blue-grey darken-4">
      <a href="#" onclick="component.MusicList()" class="brand-logo"> My Musix </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <li><a href="#" onclick="component.Home()">Home</a></li>
    <li><a href="#" onclick="component.MusicList()">Music Library</a></li>  
  <li><a href="#" onclick="component.CreateMustic()">Create Music Library</a></li>
  <li><a href="#" onclick="component.lyricsPage()">My Lyrics</a></li>
        

       
      </ul>

     
    </div>
    </nav>


</div>
 
  <div class="slider">
    <ul class="slides">
      <li>

        <img src=" https://media.giphy.com/media/pKAlGCAnOEJdC/giphy.gif"> 
        <div class="caption center-align">
        </div>
      </li>
      <li>
        <img src="https://66.media.tumblr.com/7167c2c1fe6b0e9b5d68833d114deeae/tumblr_n1vdhegXpq1rd76vjo1_500.gif"> 
        <div class="caption left-align">
        </div>
      </li>
      <li>
        <img src="https://media.giphy.com/media/jt7bAtEijhurm/giphy.gif"> 
        <div class="caption right-align">
        </div>
      </li>
      <li>
        <img src="https://media.giphy.com/media/uShMbqBZSWJBC/giphy.gif"> 
        <div class="caption center-align">
        </div>
      </li>
    </ul>
  </div>
  </div>
        
 
      
          

         <div id="Home"></div>
        <div id="RecentActivity"></div>
        <div id="ViewMusic"></div>
        <div id="MusicList"></div>
        <div id="CreateMustic"></div>
        <div id="lyricsPage "></div>
        
  
                  <footer class="page-footer  blue accent-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Music App</h5>
                <p class="grey-text text-lighten-4">Alright Reserved</p>
              </div>
          
                
             
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
           
            </div>
          </div>
        </footer>

    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.RecentActivity();    
  }

  RecentActivity(){
    
    let html = `

   <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="https://akosimacoy.files.wordpress.com/2015/04/make-your-own-kind-of-music.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/Music.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="http://pre05.deviantart.net/7df4/th/pre/f/2012/207/6/0/music_is_life_by_kelseysparrow67-d58ph0q.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/My.jpg"></a>
  </div>
             <div class="row">
    `;

    let r = this.musicApp;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 4)break;
      html+= `
   <div class="col s8 m6">
          <div class="card large hoverable">
            <div class="card-image">
              <img src="${r[i].mPic}">
              <span class="card-title">${r[i].Mneym}</span>
            </div>
            <div class="card-content">
              <p>${r[i].Mdesc}</p>
              
            </div>
            <div class="card-action">
              <a href="#" onclick="component.ViewMusic(${r[i].MusicId})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("RecentActivity"));
  }

  ViewMusic(MusicId){
    let r = this.MusicSearchName(MusicId);

    let html = `
      <h5 class="center-align">${r.Mneym}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
            <div class="card-image">
              <img src="${r.mPic}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.Mdesc}</p>
                
              </div>
            <div class="card-action small">               
                <span onclick="component.DeleteMusic(${r.MusicId})" class="new badge small red" data-badge-caption="">Delete Music</span>
               <span onclick="component.MusicList()" class="new badge small" data-badge-caption="">Back to MusicList</span>
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("ViewMusic"));
    $('#ViewMusic').show();
    $('#RecentActivity').hide();
    $('#MusicList').hide();
    $('#CreateMustic').hide();
     $('#lyricsPage').hide();
      $('#Home').hide();
  }

  MusicList(){
    let html = `

 

      <br/>
        <nav>
          <div class="nav-wrapper white">
          <form>
            <div class="input-field">       
              <input onkeyup="component.MusicInventory(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="MusicInventory">
    `;
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s6 m6">
          <div class="card large hoverable">
            <div class="card-image">
              <img src="${r[i].mPic}">
              <span class="card-title">${r[i].Mneym}</span>
            </div>
            <div class="card-content">
              <p>${r[i].Mdesc}</p>
               
            </div>
            <div class="card-action">
              <a href="#" onclick="component.ViewMusic(${r[i].MusicId})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("MusicList"));
    $('#MusicList').show();
    $('#ViewMusic').hide();
    $('#RecentActivity').hide();
    $('#CreateMustic').hide();    
        $('#lyricsPage').hide();    
         $('#Home').hide();
  }

  MusicInventory(Mneym){
    let html = ``;
    let r = this.MusicSearch(Mneym);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].mPic}">
              <span class="card-title">${r[i].Mneym}</span>
            </div>
            <div class="card-content">
              <p>${r[i].Mdesc}</p>
               
            </div>
            <div class="card-action">
              <a href="#" onclick="component.ViewMusic(${r[i].MusicId})">More</a>
            </div>
          </div>
        </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("MusicInventory"));
    $('#MusicList').show();
    $('#ViewMusic').hide();
    $('#RecentActivity').hide();  
    $('#CreateMustic').hide();
        $('#lyricsPage').hide();    
        $('#Home').hide();    
  }

  CreateMustic(){
    let html = `

   




    

         
        
      

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("CreateMustic"));
    $('#CreateMustic').show();
    $('#MusicList').hide();
    $('#ViewMusic').hide();
    $('#RecentActivity').hide();  
    $('#lyricsPage').hide(); 
    $('#Home').hide();    
  }

  lyricsPage(){
    let html =`
       



`;
  
    this.reRender(`
      ${html}
      `,document.getElementById("CreateMustic"));
    $('#CreateMustic').show();
    $('#MusicList').hide();
    $('#ViewMusic').hide();
    $('#RecentActivity').hide(); 
    $('#aboutMe').hide();  
        $('#Home').hide();  

  

}

DeleteMusic(key){
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      if(r[i].MusicId == key){
        this.musicApp.splice(i,1);
        break;
      }
    }   
    this.MusicList();
  }

  MusicSearchName(MusicId){
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      if(MusicId==r[i].MusicId){
        return r[i];
      }
    }
  } 

  MusicSearch(Mneym){
    let objects = [];
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].Mneym.toUpperCase().indexOf(Mneym.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }


Home(){
  let html=`


  `;
   this.reRender(`
      ${html}
      `,document.getElementById("CreateMustic"));
    $('#CreateMustic').hide();
    $('#MusicList').hide();
    $('#ViewMusic').hide();
    $('#RecentActivity').show(); 
     $('#Home').hide();  
    $('#lyricsPage').hide();  
   

}


} 
let component = new Component();
component.MusicDesign();
