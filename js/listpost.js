const API_URL = "http://localhost:8080/posts"
fetch(API_URL, {
   method: 'GET',
   headers: {
       "Content-Type": "application/json"       
   } 
}
   )
.then(response => {
    // convierte la respuesta a JSON
    console.log(response)
    if(!response.ok){
      throw new Error(`Algo salio mal, status: ${response.status}${response.statusText}${response.type}`)
   } else {
      return response.json()
  }
})
.then((response)=> {
   console.log("estos son los post: ",response)
   const {posts} = response.data
   console.log("este es el objeto de post: ",posts)

   const reversedPost = posts.reverse()
   console.log("este es el arreglo invertido: ", reversedPost)
   

   let template =""
   let contador = 0
   for(onePost in reversedPost){
         console.log(onePost)
         let {_id, author, avatarAuthor, content, createDate, minToRead, tags, tittle, urlCoverImage} = reversedPost[onePost]

         contador += 1
         console.log("contador", contador)
         console.log("date",createDate)
        

         if (contador === 1){

            template += `
            <!--Start card-->
            <div class="card card-body"> 
            <section class="container">
               <div class="row">
                  <div class="col-12 col-lg-12">
                     <div class="cover-container">
                     <a href="/post.html?id=${_id}"><img class="cover-container__image" src="${urlCoverImage}" alt=""></a>  
                     </div>
                     <div class="d-inline-flex">
                        <img src="${avatarAuthor}" alt="image user profile" height="50px"
                           style="border-radius: 360px; display: inline-flex;">
                        <div>
                           <h6 class="m-0 ms-2">${author}</h6>
                           <p class="m-0 ms-2">${createDate}</p>
                        </div>
                     </div>
                     <div class="ps-5 ms-2">
                        <h3> <a class="card__tittle" href="post.html?id=${_id}" target="_blank">${tittle}</a></h3>
                        <div>
                           <a class="card__green-bg" href="">${tags}</a>
                          
                           <div>
                              <div class="d-flex justify-content-between">
                                 <div>
                                 <button class="card__nobg-button"><img src="/images/main/heart-icon.svg" alt=""> 21 reactions</button>
                                 <button class="card__nobg-button"><img src="/images/main/coments icon.svg" alt=""> 74 comments</button>
                              </div>
                              <div>
                                 <button class="card__nobg-button card__read-button"> ${minToRead} min read</button>
                                 <a type="button" href="update.html?id=${_id}" class="card__save-button text-center me-0" >Edit</a>
                              </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div> 
            <!--end card-->
            `    
         } else{

            template += `
            <!--Start card-->
            <div class="card card-body"> 
            <section class="container">
               <div class="row">
                  <div class="col-12 col-lg-12">
                     <div class="d-inline-flex">
                        <img src="${avatarAuthor}" alt="image user profile" height="50px"
                           style="border-radius: 360px; display: inline-flex;">
                        <div>
                           <h6 class="m-0 ms-2">${author}</h6>
                           <p class="m-0 ms-2">${createDate}</p>
                        </div>
                     </div>
                     <div class="ps-5 ms-2">
                        <h3> <a class="card__tittle" href="post.html?id=${_id}" target="_blank">${tittle}</a></h3>
                        <div>
                           <a class="card__green-bg" href="">${tags}</a>
                           
                           <div>
                              <div class="d-flex justify-content-between">
                                 <div>
                                 <button class="card__nobg-button"><img src="/images/main/heart-icon.svg" alt=""> 21 reactions</button>
                                 <button class="card__nobg-button"><img src="/images/main/coments icon.svg" alt=""> 74 comments</button>
                               </div>
                               <div>
                                 <button class="card__nobg-button card__read-button"> ${minToRead} min read</button>
                                 <a type="button" href="update.html?id=${_id}" class="card__save-button text-center me-0">Edit</a>
                               </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div> 
            <!--end card-->
            ` 

         }

      document.getElementById("relevant").innerHTML = template

    }
    
})
.catch (err =>{
    console.log(err)
})
