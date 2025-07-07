type Episode = {
  id: number;
  name: string;
  episode: string;
};

type EpisodesSectionProps = {
  episodes: Episode[];
  emptyMessage?: string;
};

export const EpisodesSection = ({ episodes, emptyMessage = "Sin episodios" }: EpisodesSectionProps) => (
  <div className="flex-1 overflow-y-auto">
    {episodes.length === 0 ? (
      <p className="text-center text-gray-400">{emptyMessage}</p>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            className="border rounded p-2 text-sm bg-gray-800 text-white shadow"
          >
            <p className="font-semibold">{ep.episode}</p>
            <p>{ep.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
