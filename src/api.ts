/**
 * api.ts
 *
 * API client for No Spoilers!
 */

import axios from 'axios';

const BASE_URL = "https://no-spoilers.ngrok.io/api/v1"

interface Room {
  title: string;
  type: string;
  length: number;
  progress: number;
  code: string;
  friends: Member[];
}

interface Member {
  name: string;
  progress: number;
}

export class API {
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

  async getRooms(): Promise<Room[] | undefined> {
    return Promise.resolve([{
      title: 'Room1',
      length: 100,
      type: 'book',
      code: 'a76e4',
      progress: 50,
      friends: [{
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
      type: 'book',
      code: 'b35hi',
      progress: 50,
      friends: [{
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
      type: 'show',
      progress: 3,
      friends: [{
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
