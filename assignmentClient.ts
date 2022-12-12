export type Assignment = {
  id: string;
  title: string;
  userId: string;
}

export async function getAllAssignments() : Promise<Assignment[]> {
  const assignments = [
    { id: '10', title: 'Title A', userId: '1' , tag: 'X,Y' },
    { id: '3', title: 'Title B', userId: '2', tag: 'X,Y,Z'},
    { id: '17', title: 'Title C', userId: '3', tag: 'Y'},
    { id: '8', title: 'Title D', userId: '1', tag: 'X' },
    { id: '2', title: 'Title E', userId: '2', tag: 'X,Y' },
    { id: '33', title: 'Title F', userId: '3', tag: 'Z' },
  ];

  return new Promise(res => setTimeout(() => {
    res(assignments);
  }, 1000));
}

export type User = {
  id: string;
  name: string;
}

export type Friendship = {
  toId: string;
  fromId: string;
}

const friendshipDatabase:Friendship[] = [
  { toId: '1', fromId: '2' },
  { toId: '1', fromId: '3' },
  { toId: '2', fromId: '1' },
  { toId: '2', fromId: '3' },
  { toId: '3', fromId: '1' },
]

const userDataBase:User[] = [
  { id: '1', name: 'User Z' },
  { id: '2', name: 'User X' },
  { id: '3', name: 'User Y' },
]

export async function getFriendship(id: string) : Promise<Friendship[]|undefined> {
  return new Promise(res => setTimeout(() => {
    const friendships = friendshipDatabase.filter(friendship => friendship.toId === id);
    res(friendships);
  }, 1000));
};

export async function getUserById(id: string) : Promise<User|undefined> {
  return new Promise(res => setTimeout(() => {
    const user = userDataBase.find(user => user.id === id);
    res(user);
  }, 1000));
};


export const expectedResult = [
  { id: '2', title: 'Title E', user: { id: '2', name: 'User X', friends: ['User Z', 'User Y'] } },
  { id: '3', title: 'Title B', user: { id: '2', name: 'User X', friends: ['User Z', 'User Y'] } },
  { id: '17', title: 'Title C', user: { id: '3', name: 'User Y', friends: ['User X'] } },
  { id: '33', title: 'Title F', user: { id: '3', name: 'User Y', friends: ['User X'] } },
  { id: '8', title: 'Title D', user: { id: '1', name: 'User Z', friends: ['User X', 'User Y'] } },
  { id: '10', title: 'Title A', user: { id: '1', name: 'User Z', friends: ['User X', 'User Y'] } },  
];

export const expectedResultObject = {
    X: [
      { id: '2', title: 'Title E', userId: '2', tag: 'X,Y' },
      { id: '3', title: 'Title B', userId: '2', tag: 'X,Y,Z'},
      { id: '8', title: 'Title D', userId: '1', tag: 'X'},
      { id: '10', title: 'Title A', userId: '1' , tag: 'X,Y' },
      
      ],
    Y: [
      { id: '2', title: 'Title E', userId: '2', tag: 'X,Y' },
      { id: '3', title: 'Title B', userId: '2', tag: 'X,Y,Z'},
      { id: '10', title: 'Title A', userId: '1' , tag: 'X,Y' },
      { id: '17', title: 'Title C', userId: '3', tag: 'Y'},
    ],
    Z: [ 
      { id: '3', title: 'Title B', userId: '2', tag: 'X,Y,Z'},
      { id: '33', title: 'Title F', userId: '3', tag: 'Z' }
    ]
};
