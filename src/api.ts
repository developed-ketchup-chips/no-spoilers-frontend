/**
 * api.ts
 *
 * API client for No Spoilers!
 */

import axios from 'axios';
import { log } from 'console';

const BASE_URL = "https://dear-cardinal-lasting.ngrok-free.app"
// const BASE_URL = "http://127.0.0.1:5000"

export enum RoomType {
  Book = 'book',
  Show = 'show',
}

export interface Room {
  name: string;
  type: string;
  length: number;
  progress: number;
  code: string;
  members: Array<Member[]>;
}

export interface UpdateRoom {
  name: string | undefined;
  type: RoomType | undefined;
  length: number | undefined;
  progress: number | undefined;
}

export interface Member {
  name: string;
  progress: number;
}

export interface InviteMember {
  name: string;
  email: number;
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
  listRooms(): Promise<Room[] | undefined>;

  // create room
  createRoom(name: string, type: string, length: number): Promise<undefined>;

  // update room
  updateRoom(code: string, room: UpdateRoom): Promise<undefined>;

  // invite members
  inviteMembers(code: string, members: InviteMember[]): Promise<undefined>;
}

export class RealAPI {
  // axios instance
  instance: any;

  constructor(token: string) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: { 'Authorization': `Bearer ${token}`, 'token': token }
    });
  }

  async listRooms(): Promise<Room[] | undefined> {
    try {
      const response = await this.instance.get('/rooms');
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async createRoom(name: string, type: string, length: number): Promise<undefined> {


    const response = await axios.post('https://dear-cardinal-lasting.ngrok-free.app/rooms', {
      name: name,
      type: type,
      length: length,
    });
    return Promise<undefined>;
  }
}

// StubAPI stands in so we can develop the UI without a backend
export class StubAPI {
  constructor(token: string) { console.log(`Initializing API for ${token}`) }

  async getRoom(code: string): Promise<Room | undefined> {
    return Promise.resolve({
      name: 'Harry Potter and the Philosopher\'s Stone',
      length: 11,
      type: RoomType.Book,
      code: code,
      progress: 2,
      members: [{
        name: 'friend1',
        progress: 3,

      }, {
        name: 'friend3',
        progress: 1,

      }, {
        name: 'friend2',
        progress: 4,

      }]
    });
  }

  async createRoom(name: string, type: string, length: number): Promise<undefined> {
    console.log(`Creating room ${name} ${type} ${length}`);

    return Promise.resolve(undefined);
  }

  async updateRoom(code: string, room: UpdateRoom): Promise<undefined> {
    console.log(`Updating room ${code}: ${room.progress}`);

    return Promise.resolve(undefined);
  }

  async inviteMembers(code: string, members: InviteMember[]): Promise<undefined> {
    for (const member of members) {
      console.log(`Inviting ${member.name} ${member.email} to room ${code}.`);
    }

    return Promise.resolve(undefined);
  }

  async listRooms(): Promise<Room[] | undefined> {
    return Promise.resolve([{
      name: 'Harry Potter and the Philosopher\'s Stone',

      length: 11,
      type: 'book',
      code: 'a76e4',
      progress: 6,
      members: [{
        name: 'friend1',
        progress: 5,

      }, {
        name: 'friend3',
        progress: 2,

      }, {
        name: 'friend2',
        progress: 3,

      }]
    },
    {
      name: 'Data Structures the Fun Way', length: 100,
      type: 'book',
      code: 'b35hi',
      progress: 10,
      members: [{
        name: 'friend1',
        progress: 3,

      }, {
        name: 'friend3',
        progress: 4,

      }, {
        name: 'friend2',
        progress: 10,

      }]
    },
    {
      name: 'Promised Neverland',
      code: 'c89g10',
      length: 11,
      type: 'show',
      progress: 3,
      members: [{
        name: 'friend1',
        progress: 1,

      }, {
        name: 'friend3',
        progress: 3,

      }, {
        name: 'friend2',
        progress: 11,
      }]
    }
    ]);
  }
}
