//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] 


const api="AIzaSyA50yA_s69GmsgqRb9GQSbjQXzD23R8kOk";

//searchVideos()

const  searchVideos =async()=>{
     try{
       const q= document.getElementById("query").value;

       const res= await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${api}`
       );
       const data=await res.json(); 
       append(data.items);
      
        }catch(err){
         console.log(err);
     }
};


// <iframe width="560" height="315" src="https://www.youtube.com/embed/6FURuLYrR_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> //
const append=(videos)=>{
 let show_videos=document.getElementById("show_videos");
     show_videos.innerText=null;
 videos.forEach(({id:{videoId},snippet:{title}})=>{
     let div = document.createElement("div");

     let iframe = document.createElement("iframe");

     iframe.src=`https://www.youtube.com/embed/${videoId}`;

     iframe.width="100%";
     iframe.height="100%";
     iframe.allow="fullscreen";

     let name = document.createElement("h5");
     name.innerText=title;

     div.append(iframe,name);

     let data={
         title,
         videoId
     }

     div.onclick=()=>{
        showvideo(data);
     };

     show_videos.append(div);
 });
};

const showvideo=(x)=>{
    window.location.href="video.html";
    localStorage.setItem("video",JSON.stringify(x));
}