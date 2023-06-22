import { Post } from "../types";

export const getPosts = async (): Promise<Post[]> => {
  // TODO: create file for URL and etc
  // const response = await fetch("https://dev.codeleap.co.uk/careers/", {
  //   method: "GET",
  // });
  // const result = await response.json();

  // return result.results;

  return [
    {
        "id": 64394,
        "username": "user01",
        "created_datetime": "2023-06-21T20:55:37.597219Z",
        "title": "Hello world!",
        "content": "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipiSSSSSSSSSSSS. /n \n        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
    },
    {
        "id": 64393,
        "username": "XXXX",
        "created_datetime": "2023-06-21T20:46:48.830000Z",
        "title": "XXXX",
        "content": "XXXX"
    },
    {
        "id": 64386,
        "username": "Ajax",
        "created_datetime": "2023-06-21T19:25:40.726609Z",
        "title": "sss",
        "content": "ssssss"
    },
    {
        "id": 64384,
        "username": "Vermaas",
        "created_datetime": "2023-06-21T16:06:41.855369Z",
        "title": "Teste",
        "content": "Faça uma postagem para conferir os recursos de edição e deleção de posts."
    },
    {
        "id": 64371,
        "username": "Pedro Pascal",
        "created_datetime": "2023-06-21T14:09:21.824261Z",
        "title": "Final Test",
        "content": "Essa vaga é minha"
    },
    {
        "id": 64367,
        "username": "Anderson",
        "created_datetime": "2023-06-21T12:56:58.151617Z",
        "title": "fakeAnderson",
        "content": "fakeAnderson Content"
    },
    {
        "id": 64347,
        "username": "testing",
        "created_datetime": "2023-06-21T01:48:06.986792Z",
        "title": "hmmmm",
        "content": "hello world"
    },
    {
        "id": 64346,
        "username": "test",
        "created_datetime": "2023-06-21T01:44:19.978426Z",
        "title": "hmmm",
        "content": "aaa"
    },
    {
        "id": 64321,
        "username": "cleiton",
        "created_datetime": "2023-06-20T04:04:48.837363Z",
        "title": "C'estgenre",
        "content": "L'humain est une creature faible. Il s'aggripe a la vie même quand il n'y a plus d'espoir"
    },
    {
        "id": 64301,
        "username": "AndyKallian",
        "created_datetime": "2023-06-19T22:28:23.575936Z",
        "title": "Assim esta o meu deploy no github.",
        "content": "https://andykallian.github.io/codeleap-engineering-test/"
    }
]
};

export const createPost = async (postData)  => {
  try {
    const response = await fetch("https://dev.codeleap.co.uk/careers/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    console.log('New post created:', data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
