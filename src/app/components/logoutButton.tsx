'use client'

import { logout } from '../login/actions'

export default function LogoutButton() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      logout();
    }}>
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logg ut
      </button>
    </form>
  )
}