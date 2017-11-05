export const thread = {
  id: 1,
  comments: [
    {
      id: 1,
      body: 'Comment 1',
      verified: false,
      timesShared: 20,
      author: {
        id: 12,
        first: 'Peter',
        second: 'Brown'
      }
    },
    {
      id: 2,
      body: 'Comment 2',
      verified: true,
      timesShared: 12,
      author: {
        id: 12,
        first: 'Peter',
        second: 'Brown'
      }
    },
    {
      id: 3,
      body: 'Comment 3',
      verified: true,
      timesShared: 21,
      author: {
        id: 15,
        first: 'John',
        second: 'Stones'
      }
    },
    {
      id: 4,
      body: 'Comment 4',
      verified: false,
      timesShared: 45,
      author: {
        id: 22,
        first: 'Mary',
        second: 'Poppins'
      }
    },
  ]
}

export const experiment = {
  id: 1,
  title: 'This is my first experiment',
  body: 'This is a description of my first experiment',
  thread
}

export const posts = [
  {
    id: 1,
    title: 'This is my first post',
    body: 'Completed SDS-PAGE and western blot to compare basal expression Actin and Histone H3 in total cell lysate extracted from HeLa, HEK 293, SH-SY5Y, Hep G2 and A549 cell lines.',
    posted: '03/10/17 at 10:36',
    author: {
      id: 1,
      first: 'Elon',
      second: 'Musk'
    }
  },
  {
    id: 2,
    title: 'This is my second post',
    body: 'Additional research suggests that Anti-Actin requires a greater exposure time. Will re-do the SDS-PAGE and Western blot transfer and store membrane overnight.',
    posted: '02/01/17 at 11:00',
    author: {
      id: 4,
      first: 'Jason',
      second: 'Jones'
    }
  },

]

export const user = {
  id: 35,
  first: 'Bob',
  second: 'Douglas'

}

export const entities = {
  timelines: [
    {
      id: 1,
      name: 'Personal Timeline',
      owner_id: 35,
    },
    {
      id: 2,
      name: 'Experimental Timeline',
      owner_id: 40,
    }
  ]
}