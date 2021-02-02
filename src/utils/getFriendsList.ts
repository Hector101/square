import friendList from 'src/modules/home/constants/friendList'

export type Friend = typeof friendList[number]

export async function getFriendsList(): Promise<Friend[]> {
  return new Promise<Friend[]>((resolve, reject) => {
    setTimeout(() => {
      if (friendList && friendList.length) {
        return resolve(friendList)
      }
      reject('Friends list not found')
    }, 1000)
  })
}
