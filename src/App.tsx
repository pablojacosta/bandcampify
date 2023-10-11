/* eslint-disable @typescript-eslint/no-explicit-any */
import ArtistInput from "@components/ArtistInput";
import SearchArtistButton from "@components/SearchArtistButton";
import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import FoundArtists from "@components/FoundArtists";
import { IArtist } from "interfaces/artist";

const App = () => {
  const [filteredArtist, setFilteredArtist] = useState("");
  const [foundArtists, setFoundArtists] = useState<IArtist[]>([]);
  // const [showPlayer, setShowPlayer] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const [selectedAlbumArtist, setSelectedAlbumArtist] = useState("");
  // const [selectedAlbumId, setSelectedAlbumId] = useState<number>();
  // const [selectedAlbumUrl, setSelectedAlbumUrl] = useState("");
  // const [selectedAlbumName, setSelectedAlbumName] = useState("");
  // const [selectedTrackId, setSelectedTrackId] = useState("");
  const [artistError, setArtistError] = useState(false);

  // const [showTracks, setShowTracks] = useState(false);
  // const [albumNameToShowTracks, setalbumNameToShowTracks] = useState("");
  // const [plusToggle, setPlusToggle] = useState(false);

  const handleArtistFilterChange = (event: any) => {
    setFilteredArtist(event.target.value);
  };

  const getArtistDataOptions: AxiosRequestConfig<any> = {
    method: "GET",
    url: "http://localhost:3001/artist",
    params: { artist: filteredArtist },
  };

  const getArtistData = () => {
    axios
      .request(getArtistDataOptions)
      .then((response): any => {
        if (typeof response.data === "string") {
          setArtistError(true);
          console.log("Error: ", artistError);
        }
        setFoundArtists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      getArtistData();
    }
  };

  return (
    <div>
      <div>
        <div>Bandcampify</div>
      </div>

      <div>
        <div>
          <div>
            <ArtistInput
              handleArtistFilterChange={handleArtistFilterChange}
              filteredArtist={filteredArtist}
              onKeyDown={onKeyDown}
            />
            <SearchArtistButton getArtistData={getArtistData} />
          </div>
          <FoundArtists foundArtists={foundArtists} />
        </div>
      </div>
    </div>
  );
};

export default App;
