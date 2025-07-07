
import { EpisodeAPIResponse, Episode } from '@/types/episode'

const BASE_URL = 'https://rickandmortyapi.com/api'

export async function fetchEpisodes(page: number = 1): Promise<EpisodeAPIResponse> {
  const res = await fetch(`${BASE_URL}/episode?page=${page}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch episodes: ${res.statusText}`)
  }

  return res.json()
}

export async function fetchEpisodesById(ids: number[] | number): Promise<Episode | Episode[]> {
  const idParam = Array.isArray(ids) ? ids.join(',') : ids
  const res = await fetch(`${BASE_URL}/episode/${idParam}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch episode(s): ${res.statusText}`)
  }

  return res.json()
}
