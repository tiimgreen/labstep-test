import { entities, thread } from '../api'
import { getTimelinesForUser } from '../Navigation'
import {
  getVerifiedComments,
  sumTimesShared,
  addFullNameToComments
} from '../Experiment'

function double(number) {
  return number * 2
}

describe('double', () => {
  it('returns the double value of a number', () => {
    expect(double(8)).toBe(16)
  })

  /* TO-DO: Write some tests for your code */
})

describe('getTimelinesForUser', () => {
  it('should return the correct timelines', () => {
    const timelines = entities.timelines

    const filteredTimelines = getTimelinesForUser(timelines, 35)

    expect(filteredTimelines).toHaveLength(1)
    expect(filteredTimelines[0].id).toBe(1)
  })

  it('should return nothing when user has no timelines', () => {
    const timelines = entities.timelines

    const filteredTimelines = getTimelinesForUser(timelines, 999)

    expect(filteredTimelines).toHaveLength(0)
  })
})

describe('addFullNameToComments', () => {
  it('should add the correct full name', () => {
    const comments = thread.comments

    const commentsWithFullName = addFullNameToComments(comments)

    for (let comment of commentsWithFullName) {
      expect(comment.author.fullName).toBe(`${comment.author.first} ${comment.author.second}`)
    }
  })

  it('should work with only one name present', () => {
    const comments = [
      {
        author: {
          first: 'Peter',
          second: ''
        }
      }
    ]

    const commentsWithFullName = addFullNameToComments(comments)

    expect(commentsWithFullName[0].author.fullName).toBe(`${comments[0].author.first} `)
  })
})

describe('getVerifiedComments', () => {
  it('should return the verified comments', () => {
    const comments = thread.comments

    const verifiedComments = getVerifiedComments(comments)
    const commentIDs = verifiedComments.map(c => c.id)

    expect(verifiedComments).toHaveLength(2)
    expect(commentIDs).toEqual([2, 3])
  })

  it('should return an empty array for no verified comments', () => {
    const comments = []

    const verifiedComments = getVerifiedComments(comments)

    expect(verifiedComments).toEqual([])
  })
})

describe('sumTimesShared', () => {
  it('should return the correct timeShared count for unverified comments', () => {
    const comments = thread.comments

    const timesShared = sumTimesShared(comments)

    expect(timesShared).toBe(98)
  })

  it('should return the correct timeShared count for verified comments', () => {
    const comments = getVerifiedComments(thread.comments)

    const timesShared = sumTimesShared(comments)

    expect(timesShared).toBe(33)
  })

  it('should return 0 for no comments', () => {
    const comments = []

    const timesShared = sumTimesShared(comments)

    expect(timesShared).toBe(0)
  })
})
