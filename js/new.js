
    const API_URL = "http://localhost:8080/posts"

    let bntPost = document.getElementById('publishPost')
    
    bntPost.addEventListener ('click', async (event) => {
    event.preventDefault()
    title = document.getElementById('form-content__title').value
    content = document.getElementById('form-content__content').value
    tags = document.getElementById('form-content__tags').value 
    urlCoverImage = document.getElementById('form-content__url').value 
    author = document.getElementById('form-content__author').value 
    minToRead = document.getElementById('form-content__min').value 
    avatarAuthor = document.getElementById('form-content__avatarAuthor').value  
    
    if(
        title === '' ||
        content === '' ||
        tags === '' ||
        urlCoverImage === '' ||
        author === '' ||        
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
                minToRead: minToRead,
                avatarAuthor: avatarAuthor    
            }
            
            console.log("new post: ", newPost)
    
    
    const response = await fetch ( API_URL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
            
        } 

    } )
    console.log("await ", await response.json())
    .then((response)=> {
        console.log("linea 50: ",response.json())
        return response.json()

    })
    
    .catch( (err) => {
        console.log(err)
       errConection = document.querySelector('.form-content__alert')
       errConection.classList.remove('d-none')

    })

        
}

})
