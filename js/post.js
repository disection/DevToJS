let idPost = window.location.search.substring(4)

const API_URL = `http://localhost:8080/posts/${idPost}`

fetch(API_URL, {
  method: 'GET',
  headers: {
      "Content-Type": "application/json"       
  } 
})
.then((response) => {
  
    if(!response.ok){
        throw new Error (`Algo salió mal ${response.status}`)
    }else{
        return response.json()
    }
})
.then((dataPost) => {
    console.log(dataPost)    
    let {author, avatarAuthor, content, createDate, minToRead, tags, tittle, urlCoverImage} = dataPost.data.post
    console.log("tagas:",tags)    
    let template = 
    `
    <!-- Card container user detailed user post start -->
    <div class="card card-body d-flex-column">
      
      <section class="container">
        <div class="row">
          <div class="col-12 col-lg-12">
            <div class="card__profile-container d-flex-column m-3">
<!-- cover image link -->
                <div class="cover-container">
                    <img class="cover-container__image" src="${urlCoverImage}" alt="">
                 </div>
                <div class="card__username-container d-flex">
<!-- User image profile -->
                    <img
                    src="${avatarAuthor}
                    
                    "
                    alt="image user profile"
                    height="50px"
                    style="border-radius: 360px"
                  />
                  <div class="card__username-container">
                    <h6 class="card__profile-name m-0"> ${author}
<!-- Post author -->
                    </h6>
                    <p class="card__date m-0"> ${createDate}
<!-- Card date -->
                    </p>
                  </div>
                </div>

              <h3 class="card__tittle card__post-tittle"> ${tittle}
<!-- cart title content -->
              </h3>
              <button class="card__tags m-2">${tags}</button>
              <p class="card__post-body">${content}
<!-- Card body content -->
              </p>

              <div class="card__footer py-3 border-0">
                <div class="w-100">
                  <div class="d-flex flex-start w-100">
<!-- profile user image -->
                    <img class="rounded-circle shadow-1-strong me-3"
                      src="${avatarAuthor}" alt="avatar" width="40"
                      height="40" />
                    <div class="form-outline w-100">
                      <textarea class="form-control" id="textAreaExample" rows="4"
                        style="background: #fff;">Add to the discussion</textarea>
                    
                        <div class="form-outline__upload-template-button">
                            <div class="form-outline__upload-template-button d-inline-flex">
                              <button
                                type="button"
                                class="btn btn-primary btn-sm card__btn-aux"
                              >
                                <img
                                  src="../images/discuss-view/upload-picture.svg"
                                  alt=""
                                />
                                
                                Upload image
                              </button>
                              <button
                                type="button"
                                class="btn btn-outline-primary btn-sm card__btn-aux"
                              >
                                <img
                                  src="../images/discuss-view/response-template.svg"
                                  alt=""
                                />
                                Templates
                              </button>
                            </div>
                            <img
                              src="../images/discuss-view/markdown-guide-icon.svg"
                              alt=""
                              type="button"
                              class="btn btn-secondary dropdown-toggle bg-light border-0"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                          </div>    
                    
                    </div>
                  </div>

                </div>
                <div class="d-flex mt-2 pt-1 ms-5 ps-2">
                  <a href="/update.html?id${idPost}" type="button" class="btn btn-primary btn-sm card__btn-submit">
                    Update
                  </a>
                  <a
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    href="/index.html"
                  >
                    Return to posts
                  </a>
                </div>
                <div
                  class="card__footer-conduct d-flex justify-content-center"
                >
                  <a href="">Code of Conduct </a><span>·</span
                  ><a href=""> Report abuse</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- detailed card end -->
    
    `

document.getElementById('main__container').innerHTML = template
})
