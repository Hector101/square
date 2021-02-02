
import { useState, useEffect } from 'react'

import { getFriendsList, Friend } from 'src/utils/getFriendsList'

export default function useFriendsList() {
  const [friendsList, setFriendsList] = useState<Friend[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true)

      try {
        const response = await getFriendsList()
        setFriendsList(response)
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })()

  }, [])
  return { friendsList, error, loading }
}
