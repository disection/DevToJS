

let bntPost = document.getElementById('publishPost')
bntPost.addEventListener ('click', async (e) => {
    e.preventDefault()
    title = document.getElementById('form-content__title').value
    content = document.getElementById('form-content__content').value
    tags = document.getElementById('form-content__tags').value 
    urlCoverImage = document.getElementById('form-content__url').value 
    author = document.getElementById('form-content__author').value 
    minToRead = document.getElementById('form-content__min').value 
    avatarAuthor = document.getElementById('form-content__avatarAuthor').value  
    
    // let today = new Date();
    // let createdDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()   
    
    if(
        title === '' ||
        content === '' ||
        tags === '' ||
        urlCoverImage === '' ||
        author === '' ||
        //createdDate === '' ||
        minToRead === ''||
        avatarAuthor === ''
        ) {
            alert('Please fill all fields are required ')
        }else{ 
            let newPost = {
                tittle: title,
                content: content,
                tags: tags,
                urlCoverImage: urlCoverImage,
                author: author,
                //createdDate: createdDate,
                minToRead: minToRead,
                avatarAuthor: avatarAuthor    
            }
            
            console.log("new post: ", newPost)
    
    const API_URL = "http://localhost:8080/posts"
    const response = await fetch ( API_URL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; "
            
        } 

    } )
    console.log("await ", await response.json())
    // .then((response)=> {
    //     console.log("linia 50: ",response.json())
    //     return response.json()

    // })
    
    // .catch( (err) => {
    //     console.log(err)
    //    errConection = document.querySelector('.form-content__alert')
    //    errConection.classList.remove('d-none')

    // })

        
}

})
