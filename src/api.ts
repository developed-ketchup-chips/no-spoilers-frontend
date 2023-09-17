/**
 * api.ts
 *
 * API client for No Spoilers!
 */

import axios from 'axios';

// const BASE_URL = "https://no-spoilers.ngrok.io/api/v1"
const BASE_URL = "http://127.0.0.1:5000"

enum RoomType {
  Book = 'book',
  Show = 'show'
}

export interface Room {
  title: string;
  type: RoomType;
  length: number;
  progress: number;
  code: string;
  members: Array<Member[]>;
}

export interface UpdateRoom {
  title: string | undefined;
  type: RoomType | undefined;
  length: number | undefined;
  progress: number | undefined;
}

export interface Member {
  name: string;
  progress: number;
}

// authenticate with the backend (doesn't require a token)
/* NOTE: if we were using a real magic token security model (ala Medium.com),
this would work differently. There would be a link to follow in email and a
verification step to get the JWT (also called access token) based on a magic token
in the link. We’d need additional login/signup with an email address in the request,
and authenticate would send a magic token instead. */
export async function authenticate(email: string): Promise<void> {
  try {
    const response = await axios.post('/authenticate', {
      email: email
    }, {
      baseURL: BASE_URL
    })

    if (response.status == 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
    } else {
      console.error(`error authenticating ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export function createAPI(): API {
  // const token = localStorage.getItem('token');
  const token = 'token';
  if (token) {
    return new StubAPI(token);
  } else {
    throw new Error('No token found');
  }
}

interface API {
  // get room data for a single room, using the room code
  getRoom(code: string): Promise<Room | undefined>;

  // get all rooms for the current user
  getRooms(): Promise<Room[] | undefined>;

  // create room
  createRoom(title: string, type: RoomType, length: number): Promise<undefined>;

  // update room
  updateRoom(code: string, room: UpdateRoom): Promise<undefined>;
}

export class RealAPI {
  // axios instance
  instance: any;

  constructor(token: string) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  async getRooms(): Promise<Room[] | undefined> {
    try {
      const response = await axios.get('/rooms');
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

// StubAPI stands in so we can develop the UI without a backend
export class StubAPI {
  constructor(token: string) { console.log(`Initializing API for ${token}`) }

  async getRoom(code: string): Promise<Room | undefined> {
    return Promise.resolve({
      title: 'Room1',
      length: 100,
      type: RoomType.Book,
      code: code,
      progress: 50,
      members: [{
        name: 'friend1',
        progress: 10,

      }, {
        name: 'friend3',
        progress: 10,

      }, {
        name: 'friend2',
        progress: 20,

      }]
    });
  }

  async createRoom(title: string, type: RoomType, length: number): Promise<undefined> {
    console.log(`Creating room ${title} ${type} ${length}`);

    return Promise.resolve(undefined);
  }

  async updateRoom(code: string, room: UpdateRoom): Promise<undefined> {
    console.log(`Updating room ${code}: ${room.progress}`);

    return Promise.resolve(undefined);
  }

  async getRooms(): Promise<Room[] | undefined> {
    return Promise.resolve([{
      title: 'Room1',
      length: 100,
      type: RoomType.Book,
      code: 'a76e4',
      progress: 50,
      members: [{
        name: 'friend1',
        progress: 10,

      }, {
        name: 'friend3',
        progress: 10,

      }, {
        name: 'friend2',
        progress: 20,

      }]
    },
    {
      title: 'Room1', length: 100,
      type: RoomType.Book,
      code: 'b35hi',
      progress: 50,
      members: [{
        name: 'friend1',
        progress: 10,

      }, {
        name: 'friend3',
        progress: 10,

      }, {
        name: 'friend2',
        progress: 20,

      }]
    },
    {
      title: 'Room1',
      code: 'c89g10',
      length: 32,
      type: RoomType.Show,
      progress: 3,
      members: [{
        name: 'friend1',
        progress: 1,

      }, {
        name: 'friend3',
        progress: 3,

      }, {
        name: 'friend2',
        progress: 14,
      }]
    }
    ]);
  }
}
