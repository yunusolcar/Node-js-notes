const blogPosts = [{ //Blog postlar oluşturuldu
     post: 'Post 1: ',
     author: 'Jack',
     topic: 'Animals->'
}, {
     post: 'Post 2: ',
     author: 'Fatih',
     topic: 'Universe->'
}, {
     post: 'Post 3: ',
     author: 'Amie',
     topic: 'Flowers->'
}];

const listBlogs = () => { //Blog postlar listelendi
     blogPosts.map((posts) => {
          console.log(posts.post, posts.topic, posts.author);
     });
};
const statusPost = true;
const addPost = (newPost) => { //Bloga yeni post eklendi
     const promise1 = new Promise((resolve, reject) => {
          blogPosts.push(newPost);
          if (statusPost) {
               resolve(blogPosts);
          } else {
               reject('Bir hata olustu!');
          }
     });
     return promise1;
};

async function showPosts() { //Blog postlar gösterilmeden önce yeni post eklendi
     try {
          await addPost({ //await burada işlemi bekletti ve yeni post eklenmeden önce sonuçları ekrana yazdırmadı
               post: 'Post 4: ',
               author: 'Châo',
               topic: 'Musics'
          });
          listBlogs();
     } catch (error) {
          console.log(error);
     }
};

showPosts(); //Sonuç ekrana yazdırıldı

/* Sonuç
Post 1:  Animals-> Jack
Post 2:  Universe-> Fatih   
Post 3:  Flowers-> Amie     
Post 4:  Musics Châo        
*/