function addUserNameAndEmailToUser(posts){
    for(let post of posts){ 
        switch (post.userId){ 
            case 1:
                    post.userName="Leanne Graham";
                    post.email="Sincere@april.biz";
                    break;
                case 2:
                    post.userName="Ervin Howell";
                    post.email="Shanna@melissa.tv";
                break;
                case 3:
                    post.userName="Clementine Bauch";
                    post.email="Nathan@yesenia.net";
                    break;
                    case 4:
                        post.userName="Patricia Lebsack";
                        post.email="Julianne.OConner@kory.org";
                        break;
                    case 5:
                        post.userName="Chelsey Dietrich";
                        post.email="Lucio_Hettinger@annie.ca";
                        break;
                    case 6:
                        post.userName="Mrs. Dennis Schulist";
                        post.email="Karley_Dach@jasper.info";
                        break;
                    case 7:
                        post.userName="Kurtis Weissnat";
                        post.email="Telly.Hoeger@billy.biz";
                        break;
                    case 8:
                        post.userName="Nicholas Runolfsdottir V";
                        post.email="Sherwood@rosamond.me";
                        break;
                    case 9:
                        post.userName="Glenna Reichert";
                        post.email="Chaim_McDermott@dana.io";
                        break;
                    case 10:
                        post.userName="Clementina DuBuque";
                        post.email="Rey.Padberg@karina.biz";
                        break;
                } 
            }
}


function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{

        if(response.ok){
            response.json()
        }
    
    
    }
    )
    .then((json)=>{
            
            
            addUserNameAndEmailToUser(json);
            
            console.log(json);
            
    })
    
    
} 

function getPostsWithID(ID){

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ID}`)
    .then((request)=>{
        if(request.ok){
            return request.json();
        }
    })
    .then((json)=>{
            let textContent ="";
            let posts =json;
            let id_counter =0;
            for(post of posts){
                textContent+=`<div class="post_element" id="post${++id_counter}"><h1><u>${post.title}</u></h1><h3>${post.body}</h3></div>`
                
            }
            document.getElementById("posts-container").innerHTML = textContent;
    });


}